# Design System & Content Reference

## 🎨 COLOR PALETTE

```
Primary Colors:
- Black: #000000
- White: #FFFFFF
- Apple Blue (Accent): #0071E3

Gray Scale:
- Gray-50: #F9F9F9
- Gray-100: #F3F3F3
- Gray-200: #ECECEC
- Gray-300: #E5E5E5
- Gray-400: #D4D4D4
- Gray-500: #B3B3B3
- Gray-600: #8E8E93
- Gray-700: #72777C
- Gray-800: #424245
- Gray-900: #1D1D1F
```

## 📝 TYPOGRAPHY

```
Font Family: Inter (Google Fonts)
Font Weights: 100, 200, 300, 400, 500, 600, 700, 800, 900

Sizes:
- H1: 48px (mobile) / 64px (desktop) - font-bold
- H2: 36px (mobile) / 48px (desktop) - font-bold
- H3: 24px - font-semibold
- Body: 16px - font-light
- Small: 14px - font-light
- XSmall: 12px - font-light
- Label: 12px - font-medium
```

## 🎭 SPACING & LAYOUT

```
Container Max Width: 1200px
Container Padding: 24px

Section Spacing:
- Desktop: 96px (py-24)
- Mobile: 64px (py-16)

Gap Spacing:
- Component Gap: 8px / 16px
- Section Gap: 24px / 32px
- Column Gap: 48px / 64px
```

## ✨ ANIMATIONS

### Transition Durations:
```
Fast: 0.2s
Medium: 0.3s - 0.6s
Slow: 0.8s - 1s
Extra Slow: 2s+
```

### Easing Functions:
```
ease-out: smooth deceleration
ease-in-out: smooth both sides
linear: constant speed
```

### Animation Names:
```
- fade-in: opacity 0 → 1
- fade-up: opacity + translateY
- scale-in: scale 0.95 → 1
- slide-left: translateX
- pulse-glow: box shadow pulse
```

## 📐 RESPONSIVE BREAKPOINTS

```
Mobile: < 640px (md: in Tailwind is 768px)
Tablet: 640px - 1024px
Desktop: > 1024px
```

## 📄 CONTENT REFERENCE

### LANDING PAGE (/)

**Hero Section:**
```
Title: (Logo animato)
Subtitle: "come vorresti, con me"
CTA Button: "Inizia ora"
Background: video fullscreen (videohome.mp4)
Animation: Logo fade-in (0s) → shift left (1.5s)
```

### HOME PAGE (/home)

**1. HERO HOME**
```
Title: "COSTRUISCI IL TUO PROGRESSO"
Subtitle: "ALLENAMENTI ONLINE PERSONALIZZATI, MONITORATI E ADATTI AI TUOI OBIETTIVI"
Small Text: "IL VERO CAMBIAMENTO ARRIVA QUANDO ALLENAMENTO, COSTANZA E CONSAPEVOLEZZA LAVORANO INSIEME"
```

**2. METODO DI LAVORO**
```
Title: "IL METODO DI LAVORO"
Intro Text 1: "IL MIGLIORAMENTO NON È CASUALE. È IL RISULTATO DI UN PERCORSO STRUTTURATO, PERSONALIZZATO E MONITORATO NEL TEMPO."
Intro Text 2: "IL MIO LAVORO COME COACH ONLINE SI BASA SU METODO, ADATTAMENTO CONTINUO E OBIETTIVI CHIARI."

4 STEPS:
1. VALUTAZIONE INIZIALE
   "Analizziamo livello, obiettivi, disponibilità e contesto di allenamento per costruire un percorso realmente adatto a te."

2. PROGRAMMAZIONE PERSONALIZZATA
   "Creo un programma su misura, coerente con il tuo sport e impegni."

3. MONITORAGGIO E ADATTAMENTO
   "Feedback e progressioni costanti."

4. SUPPORTO COSTANTE
   "Contatto continuo con il coach."
```

**3. A CHI È ADATTO**

✔ PERFETTO PER CHI VUOLE:
- Migliorare forma fisica e performance
- Allenarsi con un coach online
- Programma personalizzato
- Continuità

❌ NON ADATTO A CHI:
- Vuole allenamenti casuali
- Cerca risultati immediati senza costanza

**4. PERCORSI / PACCHETTI**

Title: "SCEGLI IL TUO PERCORSO ONLINE"

BASE - PERCORSO START:
- Programma personalizzato
- Allenamenti settimanali
- Feedback mensile
- Videoteca esercizi
- No test fisici

PRO - PERCORSO PERFORMANCE:
- Tutto nel base
- Feedback settimanale
- Correzioni video
- Supporto chat
- Test ogni 3 mesi (extra)

ELITE - PERCORSO ATLETA (PREMIUM):
- Tutto nel pro
- Monitoraggio avanzato
- Call video
- Test inclusi ogni 3 mesi

**5. TEST FISICI**

Title: "COSA INCLUDONO I TEST FISICI"

- Flessibilità (mobilità)
- Analisi posturale
- Test di forza (salti, massimali)

**6. CHI SONO**

Title: "CIAO, SONO MATTIA"

Text:
"Laureato in scienze motorie, personal trainer, istruttore posturale e kinesio taping.

Esperto ELAV Sport Performance.

Aiuto persone e atleti a raggiungere obiettivi con programmi personalizzati e monitoraggio costante."

**7. COMPETENZE**

List (Tag Format):
- Personal trainer
- Preparazione atletica
- Ginnastica posturale
- Analisi posturale
- Programmi personalizzati
- Supporto online

**8. COMPETENZE AVANZATE**

List (Icon Format):
- Valutazione postura
- Analisi performance
- Test fisici
- Programmazione progressiva
- Supporto motivazionale

**9. PERCHÉ SCEGLIERMI**

List:
- Percorsi personalizzati
- Test regolari
- Supporto costante
- Approccio scientifico

**10. CTA FINALE**

Title: "CREDO CHE OGNI PERSONA POSSA MIGLIORARE..."
Buttons: "INIZIA ORA" | "SCOPRI DI PIÙ"
Background: Gradient nero/grigio
Decorator: "TRASFORMAZIONE"

---

## 🎬 MEDIA REQUIREMENTS

**Video (videohome.mp4):**
- Format: MP4 (H.264)
- Resolution: 1920x1080 (or 1280x720)
- Duration: 3-5 seconds (loops infinitely)
- Audio: Muted (required for autoplay)
- File Size: < 50MB recommended
- Aspect Ratio: 16:9

**Logo (logo.png):**
- Format: PNG or SVG
- Aspect Ratio: 1:1 (square)
- Size: 200x200px or larger
- Background: transparent or solid
- Color: Works with black & white

---

## 🔗 INTERNAL LINKS

```
/ (Landing)
↓
/home (click "Inizia ora")

/home Navbar Links:
- #metodo (scroll to Metodo Section)
- #percorsi (scroll to Percorsi Section)
- #chi-sono (scroll to Chi Sono Section)
- Contatti (future implementation)
```

---

## 🎯 COMPONENT PROPS REFERENCE

### LandingHero
```tsx
- No props (standalone)
- Uses: Framer Motion animations
- Video source: public/assets/videohome.mp4
- Logo source: public/assets/logo.png
```

### Navbar
```tsx
- No props (standalone)
- Sticky positioning
- Scroll detection (backdrop blur)
```

### Home Sections
```tsx
- No props (standalone)
- Use whileInView animations
- Stagger children animations
```

---

## 📊 PERFORMANCE TARGETS

- Lighthouse Score: 90+
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1
- Time to Interactive: < 3s
- Mobile: Fully Optimized
- Images: Next.js Image optimization

---

## 🔐 SEO SETUP

### Meta Tags (in app/layout.tsx):
```
Title: Mattia Verzeletti - Personal Trainer Online
Description: Allenamenti personalizzati online con coaching privato...
Theme Color: #ffffff
```

### Open Graph:
```
og:title
og:description
og:type: website
og:locale: it_IT
```

### Robots:
```
User-agent: *
Allow: /
Disallow: /private/
Disallow: /admin/
```

---

## 🚀 DEPLOYMENT CHECKLIST

- [ ] npm install
- [ ] Add videohome.mp4 to public/assets/
- [ ] Add logo.png to public/assets/
- [ ] npm run build (test build)
- [ ] npm run dev (test locally)
- [ ] Verify all pages load
- [ ] Test responsive (mobile, tablet, desktop)
- [ ] Check animations smooth
- [ ] Verify links work
- [ ] Deploy to Vercel
- [ ] Test live site
- [ ] Add custom domain (optional)
- [ ] Add analytics (optional)

---

## 📚 CUSTOMIZATION GUIDE

### To Change Landing Text:
Edit: `components/landing/LandingHero.tsx`
Find: `<h1>come vorresti</h1>`
Change: Update text as needed

### To Change Section Titles:
Edit: `components/home/*Section.tsx`
Find: `<h2>SECTION TITLE</h2>`
Change: Update text as needed

### To Change Colors:
Edit: `tailwind.config.js`
Find: `colors: { accent: '#0071E3' }`
Change: Update hex values

### To Add New Section:
1. Create: `components/home/NewSection.tsx`
2. Copy template from existing section
3. Edit content
4. Import in: `app/home/page.tsx`
5. Add to JSX after desired position

---

Generated: 2024
Last Updated: April 2, 2026
