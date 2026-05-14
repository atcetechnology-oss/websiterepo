"use client";

import { useEffect, useState } from "react";

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  serviceInterest: string;
  serviceInterestOther: string;
  timelineUrgency: string;
  message: string;
  consent: boolean;
};

const SERVICE_OPTIONS = [
  "Cableado estructurado (UTP / fibra óptica)",
  "Redes de voz y datos (cableadas / inalámbricas)",
  "Videovigilancia (cámaras IP)",
  "Telefonía IP",
  "Sistemas de respaldo de energía (UPS)",
  "Proyecto integral (todo lo anterior)",
  "No estoy seguro, quiero asesoría",
  "Otra cosa",
];

const URGENCY_OPTIONS = [
  "Lo necesito esta semana",
  "El próximo mes",
  "En 1 a 3 meses",
  "Solo estoy investigando",
];

const initial: FormState = {
  fullName: "",
  email: "",
  phone: "",
  companyName: "",
  serviceInterest: "",
  serviceInterestOther: "",
  timelineUrgency: "",
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

function splitName(full: string): { firstName: string; lastName: string } {
  const parts = full.trim().split(/\s+/);
  if (parts.length === 0) return { firstName: "", lastName: "" };
  if (parts.length === 1) return { firstName: parts[0], lastName: "" };
  return {
    firstName: parts[0],
    lastName: parts.slice(1).join(" "),
  };
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

  // simple progress indicator
  const totalRequired = 6; // fullName, email, phone, companyName, serviceInterest, timelineUrgency
  const filled =
    Number(!!state.fullName.trim()) +
    Number(!!state.email.trim()) +
    Number(!!state.phone.trim()) +
    Number(!!state.companyName.trim()) +
    Number(
      state.serviceInterest === "Otra cosa"
        ? !!state.serviceInterestOther.trim()
        : !!state.serviceInterest,
    ) +
    Number(!!state.timelineUrgency);
  const progress = Math.round((filled / totalRequired) * 100);

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

    const { firstName, lastName } = splitName(state.fullName);

    const payload = {
      fullName: state.fullName,
      firstName,
      lastName,
      email: state.email,
      phone: state.phone,
      companyName: state.companyName,
      serviceInterest:
        state.serviceInterest === "Otra cosa" ? "Otro" : state.serviceInterest,
      serviceInterestOther:
        state.serviceInterest === "Otra cosa" ? state.serviceInterestOther : "",
      timelineUrgency: state.timelineUrgency,
      message: state.message,
      // hidden / auto-captured
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

    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "lead_submit",
        service_interest: payload.serviceInterest,
        urgency: payload.timelineUrgency,
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
      window.dataLayer?.push({ event: "lead_submit_success" });
      setSubmitted(true);
      // scroll to top of form area for the success card
      if (typeof window !== "undefined") {
        const el = document.getElementById("cotizacion");
        el?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
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
    return <SuccessCard fullName={state.fullName} />;
  }

  const labelCls =
    "block text-xs sm:text-sm font-semibold text-[#0B2A4A] mb-1.5";
  const inputCls =
    "w-full px-4 h-12 bg-white text-[#0B2A4A] border border-gray-300 focus:border-[#00B4D8] focus:ring-2 focus:ring-[#00B4D8]/25 outline-none transition placeholder:text-gray-400";

  return (
    <div className="relative bg-white border border-gray-200 shadow-[0_20px_50px_-15px_rgba(11,42,74,0.25)] ring-1 ring-[#00B4D8]/0 hover:ring-[#00B4D8]/20 transition">
      {/* Top accent bar with shimmer */}
      <div className="absolute -top-px inset-x-0 h-1 bg-gradient-to-r from-[#00B4D8] via-[#0E9F6E] to-[#00B4D8] overflow-hidden">
        <div className="absolute inset-y-0 w-1/3 bg-white/30 blur-sm animate-[shimmer_2.4s_linear_infinite]" />
      </div>

      {/* Header strip */}
      <div className="bg-[#0B2A4A] px-5 sm:px-7 py-4 sm:py-5">
        <div className="flex items-center justify-between gap-3">
          <p className="text-white font-bold text-base sm:text-lg">
            Empieza tu cotización
          </p>
          <span className="text-[10px] sm:text-xs uppercase tracking-wider text-[#00B4D8] font-bold whitespace-nowrap">
            Gratis · 1 minuto
          </span>
        </div>
        <div className="mt-3 flex items-center gap-3">
          <div className="flex-1 h-1.5 bg-white/15 overflow-hidden">
            <div
              className="h-full bg-[#00B4D8] transition-all duration-300"
              style={{ width: `${Math.max(progress, 6)}%` }}
            />
          </div>
          <span className="text-[10px] sm:text-xs font-mono text-white/70 tabular-nums">
            {filled}/{totalRequired}
          </span>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 4px 0 0 #0B2A4A, 0 0 0 0 rgba(0,180,216,0.4); }
          50% { box-shadow: 0 4px 0 0 #0B2A4A, 0 0 0 8px rgba(0,180,216,0); }
        }
      `}</style>

      <form onSubmit={onSubmit} className="p-5 sm:p-7 grid sm:grid-cols-2 gap-4 sm:gap-5">
        <div className="sm:col-span-2">
          <label className={labelCls}>Tu nombre *</label>
          <input
            required
            placeholder="Ej. María González"
            value={state.fullName}
            onChange={(e) => update("fullName", e.target.value)}
            className={inputCls}
          />
        </div>

        <div>
          <label className={labelCls}>WhatsApp *</label>
          <input
            required
            type="tel"
            placeholder="55 1234 5678"
            value={state.phone}
            onChange={(e) => update("phone", e.target.value)}
            className={inputCls}
          />
        </div>
        <div>
          <label className={labelCls}>Correo *</label>
          <input
            required
            type="email"
            placeholder="tu@correo.com"
            value={state.email}
            onChange={(e) => update("email", e.target.value)}
            className={inputCls}
          />
        </div>

        <div className="sm:col-span-2">
          <label className={labelCls}>Nombre de tu negocio *</label>
          <input
            required
            placeholder="Ej. Constructora del Valle"
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
                onChange={(e) =>
                  update("serviceInterestOther", e.target.value)
                }
                className={inputCls}
                autoFocus
              />
              <button
                type="button"
                onClick={() => {
                  update("serviceInterest", "");
                  update("serviceInterestOther", "");
                }}
                className="px-3 h-12 text-xs sm:text-sm text-[#0B2A4A] border border-gray-300 hover:border-[#0B2A4A] transition"
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

        <div className="sm:col-span-2">
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
          <label className={labelCls}>
            Cuéntanos brevemente tu situación{" "}
            <span className="text-gray-400 font-normal">(opcional)</span>
          </label>
          <textarea
            rows={3}
            placeholder="Ej. Estamos abriendo una oficina nueva y necesitamos toda la red interna, cámaras y telefonía. Somos 12 personas y planeamos crecer."
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
              className="mt-1 w-4 h-4 accent-[#0B2A4A]"
            />
            <span className="text-xs sm:text-sm text-[#4d4d4d] leading-relaxed">
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

        <div className="sm:col-span-2 mt-1">
          <button
            type="submit"
            disabled={submitting}
            style={{ animation: submitting ? "none" : "pulse-glow 2.4s ease-in-out infinite" }}
            className="group relative w-full h-14 sm:h-[64px] bg-gradient-to-r from-[#00B4D8] via-[#00C4E8] to-[#00B4D8] bg-[length:200%_100%] hover:bg-[length:100%_100%] disabled:opacity-60 text-[#0A203C] font-extrabold text-base sm:text-lg tracking-tight transition-all duration-300 shadow-[0_4px_0_0_#0B2A4A] hover:shadow-[0_6px_0_0_#0B2A4A] hover:-translate-y-0.5 active:translate-y-0 active:shadow-[0_2px_0_0_#0B2A4A] overflow-hidden"
          >
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />
            <span className="relative z-10 inline-flex items-center justify-center gap-2">
              {submitting ? (
                <>
                  <svg
                    className="animate-spin w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  Enviando...
                </>
              ) : (
                <>
                  Recibir mi cotización gratis
                  <svg
                    className="w-5 h-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </>
              )}
            </span>
          </button>
          <ul className="mt-4 sm:mt-5 grid sm:grid-cols-3 gap-2 text-[11px] sm:text-xs text-[#6b6b6b]">
            <li className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-[#0E9F6E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Respuesta en 2 horas hábiles
            </li>
            <li className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-[#0E9F6E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Tus datos no se comparten
            </li>
            <li className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-[#0E9F6E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Sin presión de venta
            </li>
          </ul>
        </div>
      </form>
    </div>
  );
}

function SuccessCard({ fullName }: { fullName: string }) {
  const firstName = fullName.trim().split(/\s+/)[0] || "";
  return (
    <div className="relative bg-white border border-gray-200 shadow-[0_8px_30px_rgb(0,0,0,0.05)] overflow-hidden">
      {/* celebratory band */}
      <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#00B4D8] via-[#0E9F6E] to-[#00B4D8]" />

      <div className="p-6 sm:p-10 text-center">
        {/* Animated check */}
        <div className="mx-auto w-20 h-20 sm:w-24 sm:h-24 bg-[#0E9F6E] flex items-center justify-center rounded-full animate-[scale-in_0.4s_cubic-bezier(0.34,1.56,0.64,1)]">
          <svg
            className="w-10 h-10 sm:w-12 sm:h-12 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <p className="mt-6 text-xs sm:text-sm uppercase tracking-[0.18em] text-[#0E9F6E] font-bold">
          Solicitud recibida
        </p>
        <h3 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B2A4A] leading-tight">
          {firstName ? `Gracias, ${firstName}.` : "Gracias."}
          <br />
          <span className="text-[#00B4D8]">Tu caso ya está en manos del equipo correcto.</span>
        </h3>
        <p className="mt-4 text-sm sm:text-base text-[#4d4d4d] max-w-xl mx-auto leading-relaxed">
          Un ingeniero está revisando lo que nos contaste. Te contactamos por
          WhatsApp o correo en <strong className="text-[#0B2A4A]">menos de 2 horas hábiles</strong> con los siguientes pasos.
        </p>

        {/* Next steps */}
        <div className="mt-8 sm:mt-10 max-w-md mx-auto text-left bg-[#F4F6F8] p-5 sm:p-6">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0B2A4A]">
            Qué sigue
          </p>
          <ol className="mt-4 space-y-3">
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-7 h-7 bg-[#0B2A4A] text-white font-bold flex items-center justify-center text-xs">
                1
              </span>
              <span className="text-sm text-[#2B2F36] leading-snug pt-0.5">
                Te contactamos para agendar una visita técnica (30-45 min).
              </span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-7 h-7 bg-[#0B2A4A] text-white font-bold flex items-center justify-center text-xs">
                2
              </span>
              <span className="text-sm text-[#2B2F36] leading-snug pt-0.5">
                Te entregamos plano, alcance y precio cerrado en 48 horas.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-7 h-7 bg-[#0B2A4A] text-white font-bold flex items-center justify-center text-xs">
                3
              </span>
              <span className="text-sm text-[#2B2F36] leading-snug pt-0.5">
                Si te late, firmamos. Si no, te quedas con la propuesta.
              </span>
            </li>
          </ol>
        </div>

        {/* Direct contact */}
        <div className="mt-8">
          <p className="text-sm text-[#4d4d4d]">
            ¿Quieres adelantar el proceso?
          </p>
          <a
            href="https://wa.me/525511559904?text=Hola%2C%20acabo%20de%20enviar%20el%20formulario%20de%20cotizaci%C3%B3n"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center justify-center gap-2 h-12 px-6 bg-[#25D366] hover:brightness-110 text-white font-bold transition shadow-[0_4px_0_0_#1ebe5d] hover:shadow-[0_6px_0_0_#1ebe5d] hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Escribir por WhatsApp
          </a>
          <p className="mt-3 text-xs text-[#6b6b6b]">
            Menciona que ya enviaste el formulario para que sea más rápido.
          </p>
        </div>
      </div>

      <style>{`
        @keyframes scale-in {
          0% { transform: scale(0); opacity: 0; }
          50% { transform: scale(1.1); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
