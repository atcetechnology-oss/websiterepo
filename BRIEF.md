# ATCE Technology — Brief de sitio web

**Dominio:** atcetechnology.com
**Idioma:** español de México (`<html lang="es-MX">`)
**Deploy:** Vercel
**Reglas globales:**
- Cero emojis en cualquier parte del sitio.
- Conservar dominio, logo y datos de contacto actuales.
- Solo fotos reales de proyectos ATCE (ubicadas en `clientes/`).
- Hablarle al dueño/operador de un negocio, no a un técnico.

---

## A quién le hablamos (avatar)

Dueño u operadora de un negocio mediano en México: clínica dental, consultorio médico, despacho, oficina corporativa, tienda con varias sucursales, escuela.

- Factura entre $200 mil y $2 millones al mes.
- Tiene entre 5 y 30 personas trabajando.
- No es técnico. No quiere serlo.
- Ya pasó por uno o más de estos dolores:
  - "Se cayó el internet justo cuando teníamos al cliente enfrente."
  - "Pasó algo y las cámaras no estaban grabando."
  - "Llamé al de las cámaras y dijo que era del de la red. Llamé al de la red y dijo que era del de las cámaras."
  - "El recibo subió otra vez sin avisar."
  - "Cada vez que algo falla, yo termino arreglándolo."

El sitio tiene que hacer que esta persona lea las primeras 3 líneas y diga "esto es para mí".

---

## 1. Sistema visual

**Tono visual:** premium, técnico, confiable, sin adornos.

**Paleta:**
- Primario: azul profundo `#0B2A4A`
- Hero (un poco más oscuro): `#0A203C`
- Acento: cian tecnológico `#00B4D8`
- Neutros: blanco `#FFFFFF`, gris claro `#F4F6F8`, gris texto `#2B2F36`
- Éxito / garantía: verde `#0E9F6E`

**Tipografía:** Inter o Sora (sans-serif geométrica). Pesos 400, 600, 800.

**Imagen:** solo fotos reales de la carpeta `clientes/`. Si no hay foto para una sección, usar un bloque de color sólido con un dato grande encima. Prohibido stock genérico.

**Componentes:** bordes 12px, sombras suaves, mucho espacio en blanco. Botón primario: sólido azul profundo, texto blanco. Botón secundario: outline azul.

---

## 2. Header (sticky)

Logo a la izquierda (usar `ATCE_LOGO_SINFONDO.png`). Links a la derecha:

**Inicio · Cómo trabajamos · Lo que hacemos · Proyectos · Preguntas · Contacto**

Dos botones al final:
- Outline: **WhatsApp** → `https://wa.me/525511559904`
- Primario: **Cotización gratis** → ancla `#cotizacion`

Al hacer scroll, fondo blanco con sombra mínima.

---

## 3. Hero

Fondo `#0A203C` con líneas técnicas muy sutiles. A la derecha, foto: `clientes/rack-instalado-cableado-azul-techo.jpg` con una máscara oscura encima al 30%.

**Pretítulo (cian, pequeño, mayúsculas):**
PARA NEGOCIOS QUE NO PUEDEN DARSE EL LUJO DE QUE LA TECNOLOGÍA FALLE

**H1 (grande, blanco):**

> Tu negocio merece internet que no se cae, cámaras que sí graban y teléfonos que sí entran.
> Nosotros lo dejamos así. En 30 días o menos.

**Subhead (gris claro, dos líneas):**

> Un solo equipo se encarga de tu red, tus cámaras, tus accesos y tu telefonía. Te entregamos todo conectado, probado y por escrito. Si algo falla, lo arreglamos nosotros — gratis — por 24 meses.

**CTAs uno al lado del otro:**
- Primario (cian): **Cotización gratis en 48h** → ancla `#cotizacion`
- Secundario (outline blanco): **Hablar por WhatsApp** → `https://wa.me/525511559904`

**Chips de prueba abajo del hero (en fila):**
- +120 puntos de red instalados desde 2021
- 3 clínicas premium funcionando 24/7 con nuestra red
- 0 días que un cliente nuestro cerró por nuestra instalación
- Garantía de 24 meses por escrito

**Banda delgada justo debajo del hero (fondo cian, texto azul profundo):**

> Solo aceptamos 4 proyectos nuevos al mes para no descuidar a nadie. Quedan **[X] cupos** este mes.

*(El número [X] es texto editable manual.)*

---

## 4. Sección "¿Te suena familiar?" (problema)

Fondo blanco. Una columna centrada, máx. 720px.

**H2 (azul profundo, grande):**
> Si tu negocio depende de la tecnología, una de estas cosas te ha pasado en el último año.

Lista de 6 puntos. Cada uno es una historia corta de 1-2 líneas, en gris texto:

1. **Llegó un cliente importante y el internet estaba caído.** Quedaste mal y nadie te dio una explicación clara.
2. **Pasó algo serio y las cámaras no estaban grabando.** Te dieron mil excusas. Ninguna te devolvió la grabación.
3. **El de las cámaras dice que es de la red. El de la red dice que es del teléfono.** Y mientras, tú pierdes el día buscando culpables.
4. **Te cotizaron $80 mil. Terminaste pagando $130 mil.** "Es que salió esto extra…" Te tocó pagar el extra.
5. **Tu equipo aprendió a vivir con cosas rotas.** "Así trabaja", "ya nos acostumbramos". Eso no es trabajar. Eso es resignarse.
6. **Cada vez que algo falla, tú lo resuelves.** Tu negocio depende de ti hasta para reiniciar un módem.

**Cierre (bold, azul profundo, más grande):**

> Eso no es mala suerte. Es lo que pasa cuando tienes 3 o 4 proveedores diferentes haciendo trabajos sueltos.
> Ninguno es responsable de todo. Por eso nadie te resuelve nada.

---

## 5. Sección "Lo que cambia con nosotros" (solución / Big Domino)

Fondo `#0B2A4A`. Texto blanco. Foto secundaria a la derecha: `clientes/antes-despues-rack-cableado.jpg` (representa el cambio antes/después).

**H2 (blanco, grande):**

> Una sola empresa. Un solo contrato. Un solo número al que llamar.

**Párrafo:**

> ATCE diseña, instala y deja funcionando toda la tecnología de tu negocio: cableado, internet interno, cámaras, control de acceso, teléfonos y respaldo de energía.
>
> Tú firmas una vez. Nosotros respondemos por todo, por 24 meses, por escrito.
>
> Si algo se cae, llamas a un número. No buscas culpables. Lo arreglamos.

**CTA centrado (cian):** **Ver lo que incluye** → ancla a sección 7.

---

## 6. Sección "¿Por qué ATCE y no el de siempre?" (mecanismo)

Fondo blanco. Tres columnas, cada una con un ícono mínimo y dos líneas de texto.

**H2:**
> Tres diferencias que cambian todo.

**Columna 1 — Un solo responsable**
> No subcontratamos a nadie. Nuestro equipo hace todo. Si algo falla, no hay a quién culpar más que a nosotros — y a nosotros nos toca arreglarlo.

**Columna 2 — Precio cerrado, por escrito**
> Te cotizamos en 48 horas. El precio que firmas es el precio que pagas. Si sube por algo del alcance original, esa diferencia la pagamos nosotros.

**Columna 3 — Garantía de verdad**
> 24 meses. Si un punto de red falla, te lo reponemos en menos de 48 horas. Si no llegamos en 48 horas, ese punto es gratis de por vida.

---

## 7. Sección "Lo que recibes" (Grand Slam Offer / stack de valor)

Fondo gris claro `#F4F6F8`. Foto pequeña arriba: `clientes/rack-patchpanel-cat6-completo.jpg`.

**H2 (azul profundo, grande):**
> Esto es exactamente lo que entregamos en tu proyecto.

**Subhead:**
> Sin paquetes confusos. Sin "extras" después. Lo que ves aquí, es lo que firmas.

### Lo que está incluido

| Lo que recibes | Lo que cuesta normalmente |
|---|---|
| Diseño completo de tu red (planos, ubicación de cada punto, ruta de cableado) | $35,000 |
| Cableado profesional certificado (cada punto probado y etiquetado) | $1,200 por punto |
| Cámaras 4K conectadas a tu red, con grabación de mínimo 30 días | desde $85,000 |
| Control de acceso con huella o tarjeta para entradas y áreas restringidas | desde $45,000 |
| Tu propia central telefónica (extensiones, transferencias, contestadora) | desde $28,000 |
| Respaldo de energía para que un apagón no te tire la operación | desde $18,000 |

### Bonos sin costo extra (solo si firmas este mes)

Recuadro destacado, fondo verde claro:

- **Revisión de seguridad a los 90 días** — vamos personalmente a probar que todo siga funcionando. Valor: $12,000.
- **Soporte 24/7 los primeros 6 meses** — WhatsApp directo con un técnico, sin tickets ni espera. Valor: $24,000.
- **Manuales y planos de tu instalación** — para que cualquier técnico futuro entienda lo que tienes. Valor: $8,000.

### Cuánto te ahorras en realidad

Tabla final, fondo blanco, centrada:

| Concepto | Valor |
|---|---|
| Todo lo anterior, sumado al precio de mercado normal | **$303,000 MXN** |
| Tu inversión real con ATCE (proyecto promedio de 40 puntos) | **desde $185,000 MXN** |
| **Lo que te ahorras** | **$118,000 MXN** |

**Pie en cursiva, gris texto:**
> No es descuento ni promoción. Es lo que cuesta cuando un solo equipo hace todo en vez de cuatro proveedores cobrándote por separado.

---

## 8. Sección "Cómo trabajamos" (proceso)

Fondo blanco. 4 tarjetas horizontales numeradas grandes.

**H2:**
> De tu primera llamada al día que entregamos: 4 pasos. Nada más.

**Paso 1 — Vamos a verte (Día 1-2)**
> Sin compromiso. Vamos a tu negocio, medimos, tomamos fotos, anotamos qué necesitas.

**Paso 2 — Te entregamos la propuesta (Día 3-4)**
> Plano de cómo va a quedar. Precio cerrado. Fecha de entrega firmada. Si te late, firmamos. Si no, no pasa nada.

**Paso 3 — Instalamos sin parar tu operación (Día 5-30)**
> Trabajamos por etapas, en los horarios que te convengan. Nunca cerramos tu negocio.

**Paso 4 — Te entregamos todo probado (Día final)**
> Probamos cada punto frente a ti. Te enseñamos a usar lo que necesites. Te dejamos los planos y el contrato de garantía.

---

## 9. Sección "Cosas reales que hemos hecho" (proyectos)

Fondo gris claro.

**H2:**
> No vendemos promesas. Vendemos trabajos que llevan años funcionando.

### 3 tarjetas de proyectos (con foto real)

**Tarjeta 1 — Clínica dental premium en Roma Norte (2025)**
Foto: `clientes/rack-instalado-cableado-azul-techo.jpg`
- 42 puntos de red certificados
- 16 cámaras 4K con grabación local
- Central telefónica IP y sistema de audio
- 0 días que la clínica cerró durante la instalación

**Tarjeta 2 — Clínica dental premium en Polanco (2024)**
Foto: `clientes/camaras-hikvision-entrada-consultorio.jpg`
- 40 puntos de red separados por área (consultorios, recepción, lab)
- Cámaras con detección de movimiento
- Central Grandstream para 8 líneas
- Respaldo de energía en zonas críticas (rayos X, expedientes)

**Tarjeta 3 — Clínica dental en Polanco (2021-2023)**
Foto: `clientes/monitor-cctv-consultorio-radiografia.jpg`
- Red inalámbrica empresarial en toda la clínica
- Videovigilancia conectada a monitor en recepción
- Servidor central para expedientes y radiografías
- 4 años funcionando sin un solo incidente reportado

### Galería de evidencia (grid 2x3 debajo de las tarjetas)

| Foto | Leyenda |
|---|---|
| `rack-patchpanel-cat6-completo.jpg` | Cableado certificado y etiquetado, punto por punto. |
| `antes-despues-rack-cableado.jpg` | Antes y después del mismo rack. La izquierda es lo que tu actual proveedor llama "normal". |
| `ups-cdp-uprs2008-instalado.jpg` | Respaldo de energía para que un apagón no te tire la operación. |
| `regulador-powertron-rayos-x.jpg` | Protección eléctrica dedicada para tus equipos más caros. |
| `ups-steren-nobreak-instalado.jpg` | Respaldo modular según el equipo que necesitas mantener vivo. |
| `workstation-msi-pc-alliance.jpg` | Equipo administrativo y de diseño armado y configurado en sitio. |

### Testimonio destacado (placeholder editable)

Recuadro azul profundo, comilla grande:

> "Antes teníamos tres proveedores que se peleaban entre ellos. Hoy llamamos a un número y todo se resuelve. La red lleva meses sin un solo incidente."
> **— Dr. Carlos Ariza, Director Clínico, Drdiente**

---

## 10. Sección "Tres garantías por escrito" (risk reversal)

Fondo azul profundo. Tres tarjetas blancas grandes con ícono mínimo de escudo.

**H2 (blanco):**
> Esto está firmado en tu contrato. No es marketing. Es legal.

**Garantía 1 — Precio cerrado**
> Si nuestro precio sube un solo peso durante la obra por algo que estaba en el alcance original, esa diferencia la pagamos nosotros.

**Garantía 2 — Plazo de entrega**
> Si no entregamos en la fecha firmada, te descontamos 5% del proyecto por cada semana de retraso. Hasta 25% del total.

**Garantía 3 — Que funcione**
> Si un punto de red certificado falla en los primeros 24 meses, lo reemplazamos en menos de 48 horas. Si no llegamos en 48 horas, ese punto es gratis de por vida.

**Pie (cian, centrado):**
> Pregúntale a tu proveedor actual si te firma una sola de estas. Te ahorras el resto de la página.

---

## 11. Sección "Lo que la gente nos pregunta" (FAQ)

Fondo blanco. Acordeón cerrado por default. 8 preguntas.

1. **¿Cuánto cuesta esto?**
Depende del tamaño de tu negocio. Un consultorio chico cuesta desde $80 mil. Una clínica grande llega a $750 mil. Te damos el precio exacto en 48 horas, sin compromiso.

2. **¿Cuánto se tardan?**
Entre 3 y 6 semanas, dependiendo del tamaño. Te entregamos un calendario con fechas firmadas el día que aceptas la propuesta.

3. **¿Tengo que cerrar mi negocio durante la instalación?**
No. Trabajamos por bloques y en horarios que tú nos digas. Nuestras 3 clínicas activas no cerraron ni un día durante la obra.

4. **¿Qué pasa si mi negocio crece y necesito más?**
Diseñamos tu red con 30% de espacio libre desde el inicio. Crecer no requiere romper paredes ni gastar el doble.

5. **¿Quién me da soporte después de la instalación?**
Nosotros. Los primeros 6 meses tienes WhatsApp directo con un técnico, 24/7. Después, sigues con garantía completa por 24 meses.

6. **¿Trabajan fuera de CDMX?**
Sí. Todo México. Los viáticos se cotizan por separado, transparentes desde el inicio.

7. **No soy técnico. ¿Voy a entender lo que me proponen?**
Sí. Te entregamos la propuesta en español, sin palabras raras. Si no entiendes algo, lo explicamos hasta que lo entiendas. Si no entiendes, no firmas.

8. **No tengo nada todavía y no sé ni por dónde empezar. ¿Sirve igual?**
Eso es lo más fácil para nosotros. Te visitamos, vemos tu espacio, y te decimos qué necesitas y qué no. Sin venderte de más.

---

## 12. Sección CTA final + formulario

**ID:** `cotizacion`

Fondo blanco. Layout dos columnas en desktop (formulario izquierda 60%, contacto directo derecha 40%). En mobile, todo en una columna.

**H2 (azul profundo, grande):**
> Recibe tu cotización en 48 horas. Gratis. Sin que te vendamos nada que no necesitas.

**Subhead:**
> Un ingeniero — no un vendedor — revisa tu caso y te manda:
> - Plano preliminar de cómo quedaría tu instalación.
> - Lista clara de lo que incluye (y lo que no).
> - Precio cerrado por escrito.
> - Fecha de entrega que podemos firmar.

### Formulario

Campos visibles, todos con label arriba:

- **Nombre** — input texto, requerido (`firstName`)
- **Apellido** — input texto, requerido (`lastName`)
- **Correo** — input email, requerido (`email`)
- **WhatsApp** — input tel, requerido (`phone`)
- **Nombre de tu negocio** — input texto, requerido (`companyName`)
- **¿Qué necesitas resolver?** — dropdown requerido (`serviceInterest`):
  - Cableado / red interna
  - Cámaras de seguridad
  - Control de acceso (huellas, tarjetas)
  - Telefonía empresarial
  - Todo lo anterior (proyecto integral)
  - Otra cosa
  - **Comportamiento condicional:** si elige "Otra cosa", el dropdown se convierte **en el mismo lugar** en un input de texto libre. No agregar campo nuevo.
- **¿Qué tan grande es tu espacio?** — dropdown (`numberOfNodes`):
  - 1 a 15 puntos / consultorio chico
  - 16 a 40 puntos / clínica mediana
  - 41 a 100 puntos / oficina grande
  - Más de 100 puntos / corporativo
  - No tengo idea
- **¿Para cuándo lo necesitas?** — dropdown (`timelineUrgency`):
  - Lo necesito esta semana
  - El próximo mes
  - En 1 a 3 meses
  - Solo estoy investigando
- **¿Cómo nos conociste?** — dropdown opcional (`howDidYouHear`):
  - Google
  - Instagram
  - Facebook
  - TikTok
  - LinkedIn
  - Recomendación de un cliente
  - Recomendación de un proveedor
  - Evento o feria
  - Otro
- **Cuéntanos en una o dos líneas qué te trae aquí** — textarea opcional (`message`)

**Checkbox obligatorio:**
"Acepto que ATCE Technology me contacte por WhatsApp, correo o teléfono sobre mi solicitud."

**Botón submit (azul profundo, ancho completo del formulario):**
**Mandar mi solicitud**

**Tres reaseguros debajo del botón (gris texto, chiquitos):**
- Te contestamos en menos de 2 horas hábiles.
- No vendemos ni compartimos tus datos.
- Si no encajamos contigo, te lo decimos en la primera llamada.

### Columna lateral derecha (o bloque debajo en mobile)

Fondo gris claro, padding generoso.

**Microcopy arriba:**
> ¿Prefieres hablar directo? Estas tres opciones llegan al mismo equipo.

- **Botón grande verde (color WhatsApp `#25D366`):** "Escríbenos por WhatsApp" → `https://wa.me/525511559904`
- **Texto:** Llamar al **55 1155 9904** (lunes a viernes, 9:00 a 18:00)
- **Texto:** Escribir a **atcetechnology@gmail.com**

### Campos ocultos (captura JS automática al cargar y enviar)

- `gclid`, `fbclid`, `ttclid` (query string + cookie 90 días)
- `utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`
- `landing_page` (URL completa de entrada)
- `referrer` (`document.referrer`)
- `device` (mobile / desktop / tablet)
- `userAgent`
- `ga_client_id` (cookie `_ga`)
- `ga_session_id` (cookie `_ga_*`)
- `fbp`, `fbc` (cookies Meta)
- `submitted_at` (ISO timestamp)
- `timezone` (`Intl.DateTimeFormat().resolvedOptions().timeZone`)

---

## 13. Integración del formulario

Al enviar, ejecutar dos acciones en paralelo:

### Acción 1 — dataLayer para GTM

```js
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: 'lead_submit',
  service_interest: <valor de serviceInterest>,
  urgency: <valor de timelineUrgency>,
  nodes_range: <valor de numberOfNodes>,
  how_did_you_hear: <valor de howDidYouHear>,
  company_name: <valor de companyName>
});
```

### Acción 2 — POST JSON al webhook de GHL

- **URL del webhook:** *pendiente por definir*
- **Method:** `POST`
- **Content-Type:** `application/json`
- **Body:** todos los campos visibles + todos los ocultos en un solo objeto JSON plano.
- **Manejo de "Otra cosa":** si el usuario lo eligió, enviar `serviceInterest = "Otro"` y `serviceInterestOther = <texto libre>`.

### Pantalla de gracias

Reemplazar todo el formulario con este bloque (sin redirigir a otra URL):

**H2 (azul profundo):**
> Listo. Lo recibimos.

**Párrafo:**
> Un ingeniero está revisando tu caso ahora mismo. Te contactamos en menos de 2 horas hábiles.
>
> Si quieres adelantar el proceso, escríbenos por WhatsApp al **55 1155 9904** y di que ya llenaste el formulario.

**Botón:** "Escribir por WhatsApp ahora" → `https://wa.me/525511559904`

Disparar también:

```js
window.dataLayer.push({ event: 'lead_submit_success' });
```

---

## 14. Banda final (Big Domino antes del footer)

Ancho completo. Fondo azul profundo. Una sola línea grande centrada, en blanco.

> **Una sola empresa. Un solo contrato. Una sola llamada cuando algo se mueve.**
> Eso es todo lo que cambia. Y eso lo cambia todo.

Debajo, los dos CTA principales lado a lado:
`[ Cotización gratis en 48h ]   [ Hablar por WhatsApp ]`

---

## 15. Footer

Fondo blanco con línea superior gris claro. Tres columnas en desktop, una en mobile.

**Columna 1 — ATCE Technology**
Logo pequeño + texto: "Tecnología que sí sirve, para negocios que no pueden parar. CDMX y todo México."
RFC: ATE211110EU2.

**Columna 2 — Contacto**
- WhatsApp / Teléfono: **55 1155 9904**
- Correo: **atcetechnology@gmail.com**
- Instagram: **@atcetechnology**

**Columna 3 — Legal**
- Política de Privacidad
- Términos de Servicio

**Línea inferior:**
© 2026 ATCE Technology. Todos los derechos reservados.

---

## 16. SEO técnico

- `<title>`: ATCE Technology — Redes, cámaras y telefonía para negocios en México
- `<meta description>`: Diseñamos e instalamos toda la tecnología de tu negocio bajo un solo contrato. Cotización gratis en 48 horas. Garantía de 24 meses por escrito. CDMX y todo México.
- `<html lang="es-MX">`
- Open Graph: `og:title`, `og:description`, `og:image` (usar `clientes/rack-instalado-cableado-azul-techo.jpg` como imagen social).
- Schema.org `LocalBusiness` con nombre, teléfono, dirección, RFC y horarios.
- GTM en `<head>` y `noscript` en `<body>` (ID a pegar después).
- Sitemap XML y `robots.txt`.

---

## 17. Reglas estrictas de copy y diseño

- **Cero emojis** en cualquier parte del sitio.
- **Cero stock genérico.** Solo fotos de `clientes/`.
- **Sin palabras vacías.** Prohibido: "excelencia", "líderes", "innovador", "soluciones de calidad", "comprometidos con", "vanguardia". Sustituir por hechos con número o ejemplo.
- **Sin tecnicismos.** Si dices "Cat6A" o "VLAN", explícalo en paréntesis con palabras simples. Mejor todavía: no lo digas.
- **Toda promesa lleva número o plazo.** Si no se puede medir, no se escribe.
- **Voz activa, segunda persona ("tú").** Le hablas al dueño, no al "cliente potencial".
- **CTA principales de 3 palabras o menos.** Ejemplos: "Cotización gratis", "Hablar por WhatsApp", "Mandar solicitud".
- **El héroe no es ATCE.** El héroe es el dueño que deja de coordinar proveedores. ATCE es el guía que le quita el dolor.
- **Mobile-first.** El hero debe verse completo en pantalla de iPhone sin scroll.
- **Velocidad:** lazy-load de imágenes, fuentes con `font-display: swap`, imágenes en WebP cuando se pueda.

---

## 18. Inventario de fotos disponibles (carpeta `clientes/`)

Para que el desarrollador sepa qué tiene a la mano:

| Archivo | Descripción | Sugerencia de uso |
|---|---|---|
| `rack-instalado-cableado-azul-techo.jpg` | Rack profesional terminado con cableado azul ordenado en techo | **Hero principal**, tarjeta proyecto Roma Norte |
| `rack-patchpanel-cat6-completo.jpg` | Patch panel Cat6 con etiquetado y switch SFP | Sección "Lo que recibes" (cabecera) |
| `antes-despues-rack-cableado.jpg` | Antes (caos) y después (rack limpio) | Sección solución / galería evidencia |
| `camaras-hikvision-entrada-consultorio.jpg` | Cámaras Hikvision en entrada y exterior de consultorio | Tarjeta proyecto Polanco, sección cámaras |
| `monitor-cctv-consultorio-radiografia.jpg` | Monitor de CCTV + estación con radiografía dental | Tarjeta proyecto Dentology |
| `ups-cdp-uprs2008-instalado.jpg` | UPS CDP UPRS 2008 instalado, con etiqueta | Galería evidencia (energía) |
| `ups-cdp-rsmart-equipo-laboratorio.jpg` | UPS CDP R-Smart al lado de equipo de laboratorio dental | Galería evidencia (energía) |
| `ups-steren-nobreak-instalado.jpg` | UPS Steren No Break 2200 VA en operación, marcador en 124V | Galería evidencia (energía) |
| `regulador-powertron-rayos-x.jpg` | Regulador Powertron SVC-10000VA junto a equipo de rayos X | Galería evidencia (protección crítica) |
| `workstation-msi-pc-alliance.jpg` | Workstation MSI y PC torre Alliance configuradas en sitio | Galería evidencia (equipos) |
| `pc-interior-gpu-pny-rtx.jpg` | Interior de PC con GPU PNY GeForce RTX | Galería evidencia (equipos) |
| `dell-optiplex-mantenimiento.jpg` | Dell OptiPlex abierto, mantenimiento interno | Galería evidencia (servicio técnico) |
