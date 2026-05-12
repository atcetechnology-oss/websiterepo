"use client";

import { useEffect, useState } from "react";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  companyName: string;
  serviceInterest: string;
  serviceInterestOther: string;
  numberOfNodes: string;
  timelineUrgency: string;
  howDidYouHear: string;
  message: string;
  consent: boolean;
};

const SERVICE_OPTIONS = [
  "Cableado / red interna",
  "Cámaras de seguridad",
  "Control de acceso (huellas, tarjetas)",
  "Telefonía empresarial",
  "Todo lo anterior (proyecto integral)",
  "Otra cosa",
];

const NODES_OPTIONS = [
  "1 a 15 puntos / consultorio chico",
  "16 a 40 puntos / clínica mediana",
  "41 a 100 puntos / oficina grande",
  "Más de 100 puntos / corporativo",
  "No tengo idea",
];

const URGENCY_OPTIONS = [
  "Lo necesito esta semana",
  "El próximo mes",
  "En 1 a 3 meses",
  "Solo estoy investigando",
];

const SOURCE_OPTIONS = [
  "Google",
  "Instagram",
  "Facebook",
  "TikTok",
  "LinkedIn",
  "Recomendación de un cliente",
  "Recomendación de un proveedor",
  "Evento o feria",
  "Otro",
];

const initial: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  companyName: "",
  serviceInterest: "",
  serviceInterestOther: "",
  numberOfNodes: "",
  timelineUrgency: "",
  howDidYouHear: "",
  message: "",
  consent: false,
};

function readCookie(name: string): string {
  if (typeof document === "undefined") return "";
  const m = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return m ? decodeURIComponent(m[2]) : "";
}

function setCookie(name: string, value: string, days: number) {
  if (typeof document === "undefined") return;
  const d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${encodeURIComponent(value)};expires=${d.toUTCString()};path=/`;
}

function captureClickIds() {
  if (typeof window === "undefined") return;
  const p = new URLSearchParams(window.location.search);
  ["gclid", "fbclid", "ttclid"].forEach((k) => {
    const v = p.get(k);
    if (v) setCookie(k, v, 90);
  });
}

function deviceType(): "mobile" | "tablet" | "desktop" {
  if (typeof navigator === "undefined") return "desktop";
  const ua = navigator.userAgent;
  if (/tablet|ipad/i.test(ua)) return "tablet";
  if (/mobi|android|iphone/i.test(ua)) return "mobile";
  return "desktop";
}

function gaClientId(): string {
  const raw = readCookie("_ga");
  if (!raw) return "";
  const parts = raw.split(".");
  return parts.length >= 4 ? `${parts[2]}.${parts[3]}` : "";
}

function gaSessionId(): string {
  if (typeof document === "undefined") return "";
  const all = document.cookie.split("; ");
  const match = all.find((c) => c.startsWith("_ga_") && !c.startsWith("_ga="));
  if (!match) return "";
  const val = match.split("=")[1];
  const parts = val.split(".");
  return parts.length >= 3 ? parts[2] : "";
}

const WEBHOOK_URL = process.env.NEXT_PUBLIC_GHL_WEBHOOK_URL || "";

export default function LeadForm() {
  const [state, setState] = useState<FormState>(initial);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    captureClickIds();
  }, []);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setState((s) => ({ ...s, [key]: value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!state.consent) {
      setError("Necesitamos tu autorización para contactarte.");
      return;
    }
    setSubmitting(true);

    const params =
      typeof window !== "undefined"
        ? new URLSearchParams(window.location.search)
        : new URLSearchParams();

    const utm = {
      utm_source: params.get("utm_source") || "",
      utm_medium: params.get("utm_medium") || "",
      utm_campaign: params.get("utm_campaign") || "",
      utm_term: params.get("utm_term") || "",
      utm_content: params.get("utm_content") || "",
    };

    const payload = {
      firstName: state.firstName,
      lastName: state.lastName,
      email: state.email,
      phone: state.phone,
      companyName: state.companyName,
      serviceInterest:
        state.serviceInterest === "Otra cosa" ? "Otro" : state.serviceInterest,
      serviceInterestOther:
        state.serviceInterest === "Otra cosa" ? state.serviceInterestOther : "",
      numberOfNodes: state.numberOfNodes,
      timelineUrgency: state.timelineUrgency,
      howDidYouHear: state.howDidYouHear,
      message: state.message,
      gclid: readCookie("gclid") || params.get("gclid") || "",
      fbclid: readCookie("fbclid") || params.get("fbclid") || "",
      ttclid: readCookie("ttclid") || params.get("ttclid") || "",
      ...utm,
      landing_page: typeof window !== "undefined" ? window.location.href : "",
      referrer: typeof document !== "undefined" ? document.referrer : "",
      device: deviceType(),
      userAgent: typeof navigator !== "undefined" ? navigator.userAgent : "",
      ga_client_id: gaClientId(),
      ga_session_id: gaSessionId(),
      fbp: readCookie("_fbp"),
      fbc: readCookie("_fbc"),
      submitted_at: new Date().toISOString(),
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    };

    // dataLayer
    if (typeof window !== "undefined") {
      // @ts-expect-error dataLayer is appended by GTM
      window.dataLayer = window.dataLayer || [];
      // @ts-expect-error
      window.dataLayer.push({
        event: "lead_submit",
        service_interest: payload.serviceInterest,
        urgency: payload.timelineUrgency,
        nodes_range: payload.numberOfNodes,
        how_did_you_hear: payload.howDidYouHear,
        company_name: payload.companyName,
      });
    }

    try {
      if (WEBHOOK_URL) {
        await fetch(WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      } else {
        console.warn(
          "NEXT_PUBLIC_GHL_WEBHOOK_URL no está configurado. Payload:",
          payload,
        );
      }
      // @ts-expect-error
      window.dataLayer?.push({ event: "lead_submit_success" });
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setError(
        "Algo salió mal al enviar. Escríbenos por WhatsApp al 55 1155 9904.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="bg-[#F4F6F8] p-8">
        <h3 className="text-2xl font-bold text-[#0B2A4A]">Listo. Lo recibimos.</h3>
        <p className="mt-3 text-[#4d4d4d] leading-relaxed">
          Un ingeniero está revisando tu caso ahora mismo. Te contactamos en
          menos de 2 horas hábiles.
        </p>
        <p className="mt-3 text-[#4d4d4d] leading-relaxed">
          Si quieres adelantar el proceso, escríbenos por WhatsApp al{" "}
          <strong>55 1155 9904</strong> y di que ya llenaste el formulario.
        </p>
        <a
          href="https://wa.me/525511559904"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center h-12 px-6 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold transition"
        >
          Escribir por WhatsApp
        </a>
      </div>
    );
  }

  const labelCls = "block text-sm font-semibold text-[#0B2A4A] mb-2";
  const inputCls =
    "w-full px-4 h-11 bg-white border border-gray-300 focus:border-[#0B2A4A] focus:ring-2 focus:ring-[#00B4D8]/30 outline-none transition";

  return (
    <form onSubmit={onSubmit} className="grid sm:grid-cols-2 gap-5">
      <div>
        <label className={labelCls}>Nombre *</label>
        <input
          required
          value={state.firstName}
          onChange={(e) => update("firstName", e.target.value)}
          className={inputCls}
        />
      </div>
      <div>
        <label className={labelCls}>Apellido *</label>
        <input
          required
          value={state.lastName}
          onChange={(e) => update("lastName", e.target.value)}
          className={inputCls}
        />
      </div>
      <div>
        <label className={labelCls}>Correo *</label>
        <input
          type="email"
          required
          value={state.email}
          onChange={(e) => update("email", e.target.value)}
          className={inputCls}
        />
      </div>
      <div>
        <label className={labelCls}>WhatsApp *</label>
        <input
          type="tel"
          required
          value={state.phone}
          onChange={(e) => update("phone", e.target.value)}
          className={inputCls}
        />
      </div>
      <div className="sm:col-span-2">
        <label className={labelCls}>Nombre de tu negocio *</label>
        <input
          required
          value={state.companyName}
          onChange={(e) => update("companyName", e.target.value)}
          className={inputCls}
        />
      </div>

      <div className="sm:col-span-2">
        <label className={labelCls}>¿Qué necesitas resolver? *</label>
        {state.serviceInterest === "Otra cosa" ? (
          <div className="flex gap-2">
            <input
              required
              placeholder="Cuéntanos qué necesitas"
              value={state.serviceInterestOther}
              onChange={(e) => update("serviceInterestOther", e.target.value)}
              className={inputCls}
            />
            <button
              type="button"
              onClick={() => {
                update("serviceInterest", "");
                update("serviceInterestOther", "");
              }}
              className="px-3 h-11 text-sm text-[#0B2A4A] border border-gray-300 hover:border-[#0B2A4A]"
            >
              Cambiar
            </button>
          </div>
        ) : (
          <select
            required
            value={state.serviceInterest}
            onChange={(e) => update("serviceInterest", e.target.value)}
            className={inputCls}
          >
            <option value="">Selecciona una opción</option>
            {SERVICE_OPTIONS.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        )}
      </div>

      <div>
        <label className={labelCls}>¿Qué tan grande es tu espacio? *</label>
        <select
          required
          value={state.numberOfNodes}
          onChange={(e) => update("numberOfNodes", e.target.value)}
          className={inputCls}
        >
          <option value="">Selecciona una opción</option>
          {NODES_OPTIONS.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className={labelCls}>¿Para cuándo lo necesitas? *</label>
        <select
          required
          value={state.timelineUrgency}
          onChange={(e) => update("timelineUrgency", e.target.value)}
          className={inputCls}
        >
          <option value="">Selecciona una opción</option>
          {URGENCY_OPTIONS.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </div>

      <div className="sm:col-span-2">
        <label className={labelCls}>¿Cómo nos conociste?</label>
        <select
          value={state.howDidYouHear}
          onChange={(e) => update("howDidYouHear", e.target.value)}
          className={inputCls}
        >
          <option value="">Selecciona una opción</option>
          {SOURCE_OPTIONS.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </div>

      <div className="sm:col-span-2">
        <label className={labelCls}>
          Cuéntanos en una o dos líneas qué te trae aquí
        </label>
        <textarea
          rows={3}
          value={state.message}
          onChange={(e) => update("message", e.target.value)}
          className={inputCls + " h-auto py-3"}
        />
      </div>

      <div className="sm:col-span-2">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={state.consent}
            onChange={(e) => update("consent", e.target.checked)}
            className="mt-1 w-4 h-4"
          />
          <span className="text-sm text-[#4d4d4d]">
            Acepto que ATCE Technology me contacte por WhatsApp, correo o
            teléfono sobre mi solicitud.
          </span>
        </label>
      </div>

      {error && (
        <div className="sm:col-span-2 text-sm text-red-700 bg-red-50 border border-red-200 p-3">
          {error}
        </div>
      )}

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={submitting}
          className="w-full h-12 bg-[#0B2A4A] hover:bg-[#0A203C] disabled:opacity-60 text-white font-semibold transition"
        >
          {submitting ? "Enviando..." : "Mandar mi solicitud"}
        </button>
        <ul className="mt-4 text-xs text-[#6b6b6b] space-y-1">
          <li>— Te contestamos en menos de 2 horas hábiles.</li>
          <li>— No vendemos ni compartimos tus datos.</li>
          <li>— Si no encajamos contigo, te lo decimos en la primera llamada.</li>
        </ul>
      </div>
    </form>
  );
}
