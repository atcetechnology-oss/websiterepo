# Instrucciones para el agente de Elevator CRM (GoHighLevel)

> **Contexto:** El sitio web atcetechnology.com envía leads vía webhook al CRM. Después, cuando el lead avanza en el funnel (cita agendada, oportunidad creada, venta cerrada), el CRM debe enviar eventos de conversión de regreso a Google Tag Manager (GTM) para alimentar campañas de Google Ads y Meta Ads.
>
> **Objetivo de este documento:** describir paso a paso (1) qué necesita configurar el agente en GHL para **recibir** los leads, y (2) qué necesita configurar para **enviar** conversiones a GTM.

---

## Parte 1 — Entrada de leads (Inbound webhook)

### 1.1 Crear los Custom Fields en GHL

En `Settings → Custom Fields → Contact → Add Custom Field`, crear los siguientes campos exactamente con estos nombres internos (api keys). El tipo está indicado entre paréntesis.

| Display name | Internal name (API key) | Tipo | Para qué sirve |
|---|---|---|---|
| Company Name | `company_name` | Single line | Nombre del negocio del lead |
| Service Interest | `service_interest` | Dropdown / Single line | Qué necesita resolver (cableado, cámaras, etc.) |
| Service Interest Other | `service_interest_other` | Single line | Texto libre cuando el lead elige "Otra cosa" |
| Timeline Urgency | `timeline_urgency` | Dropdown / Single line | Para cuándo lo necesita |
| Lead Message | `lead_message` | Multi line | Texto libre del lead |
| Landing Page | `landing_page` | Single line | URL exacta donde llenó el formulario |
| Referrer | `referrer` | Single line | URL anterior (de dónde vino) |
| Device Type | `device_type` | Single line | mobile / tablet / desktop |
| User Agent | `user_agent` | Multi line | User agent del navegador |
| Timezone | `timezone` | Single line | Zona horaria del lead |
| Submitted At | `submitted_at` | Date | Timestamp ISO de envío |
| **Google Ads ID** | `gclid` | Single line | **CRÍTICO para Google Ads conversions** |
| **Facebook Click ID** | `fbclid` | Single line | Para Meta tracking |
| **TikTok Click ID** | `ttclid` | Single line | Para TikTok tracking |
| UTM Source | `utm_source` | Single line | Atribución de campaña |
| UTM Medium | `utm_medium` | Single line | Atribución de campaña |
| UTM Campaign | `utm_campaign` | Single line | Atribución de campaña |
| UTM Term | `utm_term` | Single line | Atribución de campaña |
| UTM Content | `utm_content` | Single line | Atribución de campaña |
| **GA Client ID** | `ga_client_id` | Single line | **CRÍTICO para GA4 Measurement Protocol** |
| GA Session ID | `ga_session_id` | Single line | Para correlacionar sesiones |
| **FBP Cookie** | `fbp` | Single line | **CRÍTICO para Meta Conversions API** |
| **FBC Cookie** | `fbc` | Single line | **CRÍTICO para Meta Conversions API** |

Los marcados como **CRÍTICOS** son los que permiten que las conversiones se atribuyan correctamente a las campañas de ads. Si alguno falta, esa fuente no podrá medir conversiones.

### 1.2 Crear el Workflow de entrada (Inbound Webhook)

En `Automation → Workflows → Create Workflow → Start from scratch`:

1. **Workflow Name:** `Website Lead Intake — atcetechnology.com`
2. **Trigger:** `Inbound Webhook`
   - Click "Add new trigger" → seleccionar "Inbound Webhook"
   - GHL generará una **URL de webhook**. Esta URL es lo que necesito que me pasen para configurar en Vercel.
   - Formato esperado: `https://services.leadconnectorhq.com/hooks/...`

3. **Sample Payload** (pegar este JSON en el campo "Sample Payload" para que GHL genere los mapeos automáticamente):

```json
{
  "fullName": "María González López",
  "firstName": "María",
  "lastName": "González López",
  "email": "maria@clinicaejemplo.com",
  "phone": "+525511223344",
  "companyName": "Clínica Dental Ejemplo",
  "serviceInterest": "Todo lo anterior (proyecto integral)",
  "serviceInterestOther": "",
  "timelineUrgency": "El próximo mes",
  "message": "Estamos abriendo una clínica nueva en Polanco, necesitamos cableado, cámaras y telefonía.",
  "gclid": "Cj0KCQjw...EALw_wcB",
  "fbclid": "IwAR2x...",
  "ttclid": "",
  "utm_source": "google",
  "utm_medium": "cpc",
  "utm_campaign": "atce-mexico-q4",
  "utm_term": "instalacion cableado red",
  "utm_content": "ad-variant-a",
  "landing_page": "https://atcetechnology.com/?gclid=Cj0KCQjw...",
  "referrer": "https://www.google.com/",
  "device": "desktop",
  "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)...",
  "ga_client_id": "1234567890.1234567890",
  "ga_session_id": "1234567890",
  "fbp": "fb.1.1234567890123.1234567890",
  "fbc": "fb.1.1234567890123.IwAR2x...",
  "submitted_at": "2026-05-12T15:30:00.000Z",
  "timezone": "America/Mexico_City"
}
```

4. **Action: Create/Update Contact**
   - Click "Add action" → "Create/Update Contact"
   - Mapeo de campos:

| Campo del webhook | Campo en GHL |
|---|---|
| `firstName` | First Name (standard) |
| `lastName` | Last Name (standard) |
| `email` | Email (standard) |
| `phone` | Phone (standard) |
| `companyName` | Custom field: `company_name` |
| `serviceInterest` | Custom field: `service_interest` |
| `serviceInterestOther` | Custom field: `service_interest_other` |
| `timelineUrgency` | Custom field: `timeline_urgency` |
| `message` | Custom field: `lead_message` |
| `gclid` | Custom field: `gclid` |
| `fbclid` | Custom field: `fbclid` |
| `ttclid` | Custom field: `ttclid` |
| `utm_source` | Custom field: `utm_source` |
| `utm_medium` | Custom field: `utm_medium` |
| `utm_campaign` | Custom field: `utm_campaign` |
| `utm_term` | Custom field: `utm_term` |
| `utm_content` | Custom field: `utm_content` |
| `landing_page` | Custom field: `landing_page` |
| `referrer` | Custom field: `referrer` |
| `device` | Custom field: `device_type` |
| `userAgent` | Custom field: `user_agent` |
| `ga_client_id` | Custom field: `ga_client_id` |
| `ga_session_id` | Custom field: `ga_session_id` |
| `fbp` | Custom field: `fbp` |
| `fbc` | Custom field: `fbc` |
| `submitted_at` | Custom field: `submitted_at` |
| `timezone` | Custom field: `timezone` |

5. **Action: Add Tag** — agregar tag `website-lead` y `source: {{contact.utm_source}}` para segmentación rápida.

6. **Action: Add to Pipeline** — agregar el contacto al pipeline correspondiente con stage inicial = "Nuevo lead".

7. **Save & Publish.**

### 1.3 Probar el webhook

Antes de pasarme la URL, hagan una prueba desde GHL:
- En el trigger "Inbound Webhook" → botón "Test Webhook"
- Enviar el sample payload de arriba
- Confirmar que se creó el contacto con todos los custom fields llenos

### 1.4 Pasarme la URL del webhook

Necesito la URL exacta del webhook (algo como `https://services.leadconnectorhq.com/hooks/ABC123...`).

Yo la configuro en Vercel como variable `GHL_WEBHOOK_URL` y el sitio empezará a enviar leads reales.

---

## Parte 2 — Salida de conversiones a GTM (Outbound webhooks)

> **Objetivo:** Cuando un lead avance en el funnel dentro de GHL, GHL debe disparar un webhook a un endpoint server-side que GTM convierte en eventos de conversión para Google Ads y Meta Ads.

### 2.1 Eventos a enviar a GTM

Tres momentos clave:

| Evento GHL | Nombre del evento (event_name) | Para qué se usa |
|---|---|---|
| Lead creado (form submitted) | `generate_lead` | Top of funnel — optimización inicial de campañas |
| Cita agendada o cualificado | `qualified_lead` | Mid funnel — para audiencias similares (lookalike) |
| Venta cerrada (oportunidad ganada) | `purchase` | Bottom of funnel — incluye `value` y `currency`, esencial para ROAS |

### 2.2 Crear los Workflows de salida

Para cada uno de los 3 eventos, crear un workflow separado:

#### Workflow A — `Outbound: generate_lead → GTM`
- **Trigger:** "Contact Created" con filtro `Tag contains 'website-lead'`
- **Action:** "Webhook" (outbound)
- **Method:** `POST`
- **URL:** `https://gtm.atcetechnology.com/lead-event` *(esta URL la generaremos en la Parte 3 — GTM Server)*
- **Headers:**
  ```
  Content-Type: application/json
  X-Auth-Key: [TOKEN_QUE_DEFINIREMOS]
  ```
- **Body (JSON):**
  ```json
  {
    "event_name": "generate_lead",
    "event_time": "{{contact.date_created}}",
    "event_id": "{{contact.id}}-lead",
    "value": 0,
    "currency": "MXN",
    "user_data": {
      "email": "{{contact.email}}",
      "phone": "{{contact.phone}}",
      "first_name": "{{contact.first_name}}",
      "last_name": "{{contact.last_name}}",
      "country": "MX"
    },
    "tracking": {
      "gclid": "{{contact.gclid}}",
      "fbclid": "{{contact.fbclid}}",
      "ttclid": "{{contact.ttclid}}",
      "ga_client_id": "{{contact.ga_client_id}}",
      "ga_session_id": "{{contact.ga_session_id}}",
      "fbp": "{{contact.fbp}}",
      "fbc": "{{contact.fbc}}",
      "utm_source": "{{contact.utm_source}}",
      "utm_medium": "{{contact.utm_medium}}",
      "utm_campaign": "{{contact.utm_campaign}}"
    },
    "page_data": {
      "landing_page": "{{contact.landing_page}}",
      "referrer": "{{contact.referrer}}",
      "user_agent": "{{contact.user_agent}}"
    }
  }
  ```

#### Workflow B — `Outbound: qualified_lead → GTM`
- **Trigger:** "Pipeline Stage Changed" → cuando entra al stage "Cualificado" o "Cita agendada"
- **Action:** Webhook con el mismo formato que arriba, **excepto:**
  - `event_name: "qualified_lead"`
  - `event_id: "{{contact.id}}-qualified-{{opportunity.id}}"`
  - `value`: si la oportunidad ya tiene un monto estimado, usar `{{opportunity.monetary_value}}`. Si no, dejar `0`.

#### Workflow C — `Outbound: purchase → GTM`
- **Trigger:** "Opportunity Status Changed" → cuando `status = "won"`
- **Action:** Webhook con el mismo formato, **excepto:**
  - `event_name: "purchase"`
  - `event_id: "{{contact.id}}-purchase-{{opportunity.id}}"`
  - `value: "{{opportunity.monetary_value}}"` (monto real del cierre)
  - `currency: "MXN"`

### 2.3 Por qué este formato

- **`event_name`** sigue convención GA4 / Meta para que GTM pueda mapearlos directo sin transformación.
- **`event_id`** es único por evento — permite deduplicación entre el pixel del browser y la conversión API server-side. Sin esto, Meta o Google contarían la misma conversión dos veces.
- **`user_data`** son los identificadores que GA4 y Meta hashean (SHA-256) automáticamente para hacer match con perfiles de usuario.
- **`tracking`** son los click IDs originales — sin ellos, las plataformas no pueden atribuir la conversión al click que la generó.
- **`fbp` + `fbc`** son específicos de Meta CAPI; sin ambos, Meta baja la calidad del match score.

### 2.4 Sobre Meta y privacidad

Para cumplir con la política de Meta CAPI:
- En el `user_data`, los campos `email`, `phone`, `first_name`, `last_name` se mandan en **texto plano** desde GHL.
- Es GTM (server-side) quien los **hashea con SHA-256** antes de mandarlos a Meta. Esto es estándar.
- Si GHL prefiere mandar ya hasheado, también funciona — solo hay que avisarme para configurar GTM en consecuencia.

---

## Parte 3 — GTM Server Container (a configurar después)

Una vez que la Parte 1 y 2 estén listas, configuramos el endpoint que recibe los webhooks de GHL y los reenvía como eventos a Google Ads, GA4 y Meta.

Opciones:
- **GTM Server Container** (recomendado): un contenedor server-side de Google Tag Manager hospedado en `gtm.atcetechnology.com`. Recibe el webhook, hashea identificadores, dispara eventos a GA4 + Google Ads + Meta CAPI. Costo: ~$120 USD/mes en Google Cloud Run.
- **Endpoint propio en Vercel** (más barato, más flexible): un Route Handler en `/api/conversions` que recibe el webhook y hace los reenvíos a las APIs de conversión directamente. Costo: incluido en el plan de Vercel.

Mi recomendación: empezamos con la opción Vercel para no agregar costos, y migramos a GTM Server si después quieren más visibilidad/debugging.

**Decisión pendiente:** ¿con qué opción avanzamos?

---

## Resumen de lo que necesito de regreso

Cuando el agente de Elevator CRM termine la configuración, necesito:

1. **URL del webhook inbound** (Parte 1.2) — para configurar en Vercel.
2. **Confirmación de que los 23 custom fields fueron creados** (Parte 1.1) con los nombres internos exactos.
3. **Confirmación de que el workflow A está activo** y se probó con el sample payload (Parte 1.3).
4. **Confirmación de decisión sobre GTM Server vs endpoint propio** (Parte 3).

Una vez tenga lo anterior, los Workflows B y C (outbound de qualified_lead y purchase) los podemos terminar de configurar juntos cuando ya esté funcionando el flujo end-to-end.
