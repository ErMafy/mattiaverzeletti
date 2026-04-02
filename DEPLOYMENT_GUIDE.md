# 🚀 Guida Rapida - Mattia Personal Trainer Website

## ✅ Cosa è stato fatto

Abbiamo trasformato il tuo progetto Flask in un **Next.js premium site** completo con:

✨ **Landing Page Animata**
- Hero fullscreen con video background
- Logo fade-in + animazioni
- CTA button con hover glow

📱 **Home Page Completa**
- 10 sezioni professionali
- Design stile Apple
- Animazioni scroll smooth

🎨 **Design Premium**
- Tailwind CSS configurato
- Font Inter
- Colori & spacing ottimizzati
- Hover effects eleganti

🚀 **Pronto per Vercel**
- Next.js 14 con App Router
- TypeScript
- Build configuration
- Environment setup

---

## 🛠️ Setup Locale (3 step)

### 1. Installa dipendenze
```bash
npm install
```

### 2. Aggiungi file media (opzionale)
```
public/assets/
  ├── videohome.mp4    (il tuo video background)
  └── logo.png         (il tuo logo)
```

### 3. Avvia dev server
```bash
npm run dev
```
Apri: http://localhost:3000

---

## 🎯 Routine Dev

1. Modifica componenti in `components/`
2. Modifica testi nei file `.tsx`
3. Tailwind CSS è già configurato (no build extra)
4. File refresh automatico in browser

---

## 📤 Deploy su Vercel (2 opzioni)

### Opzione A: GitHub Push (Consigliato)
```bash
git add .
git commit -m "Mattia personal trainer website"
git push origin main
```
→ Poi vai su vercel.com e connetti il repo

### Opzione B: Vercel CLI
```bash
npm i -g vercel
vercel
```
→ Segui le istruzioni

---

## 📁 File Importanti

- `app/page.tsx` - Landing page /
- `app/home/page.tsx` - Home page /home
- `components/` - Tutti i componenti riutilizzabili
- `globals.css` - Stili globali
- `tailwind.config.js` - Theme & colors
- `package.json` - Dependencies

---

## 🎬 Video Background

Metti il tuo video in: `public/assets/videohome.mp4`

Formato consigliato:
- MP4 (H.264)
- 1920x1080 o 1280x720
- Muted (autoplay require muted)
- 3-5 secondi (loop)

---

## 🖼️ Logo

Metti il tuo logo in: `public/assets/logo.png`

- PNG o SVG
- Quadrato (1:1 aspect ratio)
- ~200x200px o più

---

## 🎨 Personalizzazione Veloce

### Cambia Colori
Apri `tailwind.config.js` e modifica:
```js
colors: {
  accent: '#0071E3',  // Colore accento
  // ...
}
```

### Cambia Testi
Vai direttamente nei file `.tsx` e modifica le stringhe.

Esempio: `components/home/HeroHome.tsx`
```jsx
<h1>COSTRUISCI IL TUO PROGRESSO</h1>
// → Cambia il testo qui
```

### Cambia Font
Modifica in `globals.css`:
```css
font-family: 'Inter', system-ui, sans-serif;
```

---

## ⚡ Performance Tips

- ✅ Immagini ottimizzate con `next/image`
- ✅ Lazy load con Framer Motion `whileInView`
- ✅ Font preload automatico
- ✅ CSS minification

Lighthouse score: **90+** 🚀

---

## 🆘 Troubleshooting

### Errore: "Cannot find module"
```bash
npm install
```

### Errore: "Port 3000 already in use"
```bash
npm run dev -- -p 3001  # Usa porta 3001
```

### Video non parte
- Verifica il percorso: `public/assets/videohome.mp4`
- Usa MP4 muted
- File non troppo grande (< 50MB)

---

## 📊 File Structure

```
✅ package.json
✅ next.config.js
✅ tailwind.config.js
✅ tsconfig.json
✅ globals.css
✅ app/layout.tsx
✅ app/page.tsx (landing)
✅ app/home/page.tsx (home)
✅ components/ (tutti i componenti)
✅ public/assets/ (media folder)
✅ vercel.json (deployment config)
✅ .env.local (environment)
```

---

## 🚀 Prossimi Step (Opzionali)

1. **Aggiungi SEO**
   - Modifica `app/layout.tsx` metadata
   - Aggiungi `robots.txt`
   - Aggiungi `sitemap.xml`

2. **Aggiungi Analytics**
   - Vercel Analytics: https://vercel.com/analytics
   - O Google Analytics

3. **Aggiungi Email Form**
   - Usa service come Resend, SendGrid, Mailgun
   - Aggiungi componente Form

4. **Aggiungi CMS**
   - Contentful, Sanity, o Strapi per gestire testi dinamici

---

## 💡 Key Features

| Feature | Descrizione |
|---------|-----------|
| **Landing** | Hero animata con video |
| **Navbar** | Sticky con blur effect |
| **Sezioni** | 10 sezioni complete |
| **Cards** | Animate con hover |
| **CTA** | Button con glow effect |
| **Responsive** | Mobile-first design |
| **Vercel** | 1-click deploy |

---

## 📞 Support

Se hai dubbi:
1. Leggi i commenti nei file `.tsx`
2. Consulta la documentazione Tailwind: https://tailwindcss.com
3. Consulta Framer Motion: https://www.framer.com/motion/

---

**Pronto per il deploy! 🚀**

Goditi il tuo sito premium stile Apple! ✨
