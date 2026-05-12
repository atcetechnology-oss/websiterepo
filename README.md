# ATCE Technology — Sitio web

Sitio web de [ATCE Technology](https://atcetechnology.com) construido con Next.js 16 y Tailwind v4.

## Stack

- Next.js 16 (App Router, Turbopack)
- React 19
- Tailwind CSS v4
- TypeScript
- Despliegue: Vercel
- Lead capture: webhook a GoHighLevel (GHL)

## Desarrollo local

```bash
npm install
cp .env.example .env.local
# Editar .env.local y poner la URL del webhook de GHL
npm run dev
```

Abrir http://localhost:3000

## Estructura

- `app/` — App Router (`layout.tsx`, `page.tsx`, `globals.css`)
- `components/` — Componentes de la landing
- `public/clientes/` — Fotografías reales de proyectos ATCE
- `public/logo.png` — Logo principal
- `BRIEF.md` — Documento de marca, copy y especificación de UX

## Variables de entorno

| Variable | Descripción |
|---|---|
| `NEXT_PUBLIC_GHL_WEBHOOK_URL` | URL del webhook de GoHighLevel donde se postean los leads del formulario |

## Deploy en Vercel

1. Conecta este repo a Vercel desde [vercel.com/new](https://vercel.com/new).
2. Vercel detecta Next.js automáticamente.
3. En **Environment Variables**, agrega `NEXT_PUBLIC_GHL_WEBHOOK_URL`.
4. Conecta el dominio `atcetechnology.com`.

Cada push a `main` redeploya producción.
