# Mattia Verzeletti - Personal Trainer Premium Website

Un sito web premium stile Apple per un personal trainer, costruito con **Next.js 14**, **Tailwind CSS** e **Framer Motion**.

## 🎯 Caratteristiche

- ✨ **Design Premium** - Stile minimalista e elegante ispirato a Apple
- 🎬 **Landing Page Animata** - Hero fullscreen con video background e animazioni fluide
- 📱 **Fully Responsive** - Perfetto su mobile, tablet e desktop
- ⚡ **Performance Ottimizzata** - Next.js 14 con App Router
- 🎨 **Tailwind CSS** - Design system moderno e consistente
- 🎭 **Framer Motion** - Animazioni smooth e professionali
- 🚀 **Vercel Ready** - Deploy diretto e facile
- 📍 **SEO Friendly** - Metadata e Open Graph configurati

## 📁 Struttura del Progetto

```
mattiaverzeletti/
├── app/
│   ├── layout.tsx           # Root layout con metadata
│   ├── page.tsx             # Landing page /
│   └── home/
│       └── page.tsx         # Home page /home
├── components/
│   ├── landing/
│   │   └── LandingHero.tsx   # Hero landing con video
│   ├── navigation/
│   │   ├── Navbar.tsx        # Navigation bar
│   │   └── Footer.tsx        # Footer
│   └── home/
│       ├── HeroHome.tsx      # Hero home page
│       ├── MetodoSection.tsx # 4-step method cards
│       ├── AdattoSection.tsx # Chi è adatto / Chi NON è adatto
│       ├── PercorsiSection.tsx # 3 pricing tiers (BASE, PRO, ELITE)
│       ├── TestFisiciSection.tsx # Test fisici included
│       ├── ChiSonoSection.tsx # About section
│       ├── CompetenzeSection.tsx # Skills tags
│       ├── CompetenzeAvanzateSection.tsx # Advanced skills
│       ├── PerchéScegliereSection.tsx # Why choose
│       └── CTAFinalSection.tsx # Final CTA
├── public/
│   └── assets/
│       ├── videohome.mp4    # Background video
│       └── logo.png         # Logo
├── globals.css              # Global styles + utilities
├── tailwind.config.js       # Tailwind configuration
├── postcss.config.js        # PostCSS setup
├── next.config.js           # Next.js configuration
├── tsconfig.json            # TypeScript config
├── package.json             # Dependencies
├── .env.local               # Environment variables
└── vercel.json              # Vercel deployment config
```

## 🚀 Getting Started

### Prerequisiti
- Node.js 18+ 
- npm o yarn

### Installazione

1. **Installa dipendenze**
```bash
npm install
```

2. **Aggiungi file media** (opzionale)
```
public/assets/
  ├── videohome.mp4  # Video background hero
  └── logo.png       # Logo hero landing
```

3. **Avvia il dev server**
```bash
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000) nel browser.

## 🛠️ Script Disponibili

- `npm run dev` - Avvia dev server (Next.js)
- `npm run build` - Build per production
- `npm start` - Avvia il server di production
- `npm run lint` - Esegui ESLint

## 🎨 Design & Animation

### Componenti Animati
- **Landing Hero** - Logo fade-in + scale, text delayed, button avec glow
- **Navbar** - Fade-in on load, blur effect on scroll
- **Sezioni Home** - Fade-up on scroll view
- **Cards** - Hover lift effect con ombre
- **CTA Buttons** - Scale hover + tap animations

### Colori & Tipografia
- **Font**: Inter (Google Fonts)
- **Colori Primari**: Nero (#000000), Bianco (#FFFFFF)
- **Accenti**: Azzurro Apple (#0071E3)
- **Grigi**: Palette da 50 a 900

## 📝 Pagine

### Landing (`/`)
- Hero fullscreen con video background
- Logo animato
- Bottone "Inizia ora" → `/home`
- Scroll indicator

### Home (`/home`)
1. **Hero Home** - Titoli e sottotitoli
2. **Metodo di Lavoro** - 4 step cards
3. **A Chi è Adatto** - Due colonne (✔ per / ❌ non adatto)
4. **Percorsi Online** - 3 tiers (BASE, PRO, ELITE)
5. **Test Fisici** - Cosa include
6. **Chi Sono** - About section
7. **Competenze** - Tag grid
8. **Competenze Avanzate** - Lista con icone
9. **Perché Scegliermi** - 4 punti chiave
10. **CTA Finale** - Sezione nera con bottoni

## 🚀 Deployment su Vercel

### Opzione 1: Git Push (Consigliato)
```bash
git add .
git commit -m "Mattia personal trainer website"
git push origin main
```
Connetti il repo a Vercel via dashboard.

### Opzione 2: Vercel CLI
```bash
npm i -g vercel
vercel
```

## 📱 Responsive Design

- **Mobile**: Stack verticale, font e spacing ottimizzati
- **Tablet**: Layout a 2 colonne dove appropriato
- **Desktop**: Layout pieno con max-width 1200px

## 🔧 Personalizzazione

### Modifica Testi
I testi sono inline nei componenti. Modifica direttamente i file `.tsx`.

### Cambia Colori
Modifica `tailwind.config.js` nella sezione `colors`.

### Cambia Font
Modifica in `globals.css` la dichiarazione di font.

### Aggiungi Sezioni
Duplica un componente home e personalizza content + animations.

## 📊 Performance

- ✅ Lighthouse 90+
- ✅ Core Web Vitals ottimizzati
- ✅ Image optimization automatica
- ✅ Font loading ottimizzato

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion 10
- **Icons**: Lucide React
- **Language**: TypeScript
- **Deployment**: Vercel

---

**Created with ❤️ - Premium personal trainer website template**

## ⚙️ Setup Instructions

### 1. **Move Assets to Correct Folder**

Your `logo.png` and `videohome.mp4` files are currently in the root directory. Move them to the `static/assets/` folder:

**On Windows (PowerShell or Command Prompt):**
```bash
move logo.png static\assets\
move videohome.mp4 static\assets\
```

**On Mac/Linux:**
```bash
mv logo.png static/assets/
mv videohome.mp4 static/assets/
```

### 2. **Create Virtual Environment (Recommended)**

```bash
# Windows
python -m venv venv
venv\Scripts\activate

# Mac/Linux
python3 -m venv venv
source venv/bin/activate
```

### 3. **Install Dependencies**

```bash
pip install -r requirements.txt
```

This will install:
- Flask 2.3.3
- Werkzeug
- Jinja2
- And other required packages

### 4. **Run the Flask Application**

```bash
python app.py
```

The application will start on `http://127.0.0.1:5000`

**Output:**
```
 * Debug mode: on
 * Running on http://127.0.0.1:5000
```

### 5. **Open in Browser**

- **Landing Page**: `http://127.0.0.1:5000/` or `http://localhost:5000/`
- **Home Page**: `http://127.0.0.1:5000/home` or `http://localhost:5000/home`

---

## 🚀 Features Implemented

### **Landing Page (`/`)**

✅ **Full-screen video hero** with semi-transparent dark overlay  
✅ **Animated logo sequence** using GSAP:
- Logo fades in with scale effect (0.8 → 1)
- At 1.5s: logo moves left, divider line appears
- Text and CTA button fade in smoothly

✅ **Call-to-Action button** with Apple-style design  
✅ **Smooth transition** to home page  
✅ **Responsive design** for mobile/tablet/desktop

### **Home Page (`/home`)**

✅ **Fixed navbar** with logo and navigation menu  
✅ **Mobile menu toggle** (hamburger menu on mobile)  
✅ **Smooth scroll behavior** with anchor links  
✅ **Multiple sections:**
- Hero section with title and description
- Bio section (about the fitness coach)
- Services section (4 service cards with hover effects)
- Testimonials section (client testimonials grid)
- CTA section (call-to-action)
- Footer (contact info, links)

✅ **Interactive features:**
- Card hover animations (scale, shadow)
- Scroll animations (fade-in when in view)
- Navbar shadow on scroll
- Active menu item highlight (on scroll)

✅ **Apple-inspired design:**
- Monochromatic color palette (black, white, grays)
- System font stack (-apple-system)
- Generous whitespace
- Subtle shadows
- Smooth transitions (0.3-0.6s)

✅ **Fully responsive design:**
- Mobile (<480px)
- Tablet (<768px)
- Desktop (≥1024px)

---

## 🎨 Design System

### **Colors**
- `--color-black`: #000000
- `--color-white`: #FFFFFF
- `--color-gray-100`: #F5F5F5 (light background)
- `--color-accent`: #0071E3 (Apple blue)

### **Typography**
- Font Family: System fonts (-apple-system, BlinkMacSystemFont, Segoe UI, etc.)
- Sizes: 14px to 56px
- Weights: 300, 400, 500, 600

### **Spacing**
- 8px rhythm system: 8, 16, 24, 32, 48, 64px

### **Animations**
- Duration: 0.2-0.6s
- Easing: ease-out, power2.out (GSAP)
- GPU-accelerated: transform, opacity

---

## 📱 JavaScript Libraries

### **GSAP (GreenSock Animation Platform)**
- **Version**: 3.12.2
- **Source**: CDN (https://cdnjs.cloudflare.com/ajax/libs/gsap/)
- **Used for**: Smooth animations on landing page and home page interactions
- **Features**: Timeline animations, ease functions, element transforms

### **Vanilla JavaScript**
- Mobile menu toggle
- Intersection Observer for scroll animations
- Smooth scroll anchor links
- Event listeners for hover effects

---

## 🔧 Customization Guide

### **Change Content**

**Landing Page Text:**
Edit `templates/landing.html`:
```html
<h1>Come vorresti</h1>
<p>Con me, trasforma il tuo corpo e la tua mente...</p>
```

**Home Page Sections:**
Edit `templates/home.html`:
- Update hero section title/subtitle
- Modify bio text
- Change service cards (icons, text)
- Update testimonials

### **Change Colors**

Edit `static/css/global.css` (`:root` section):
```css
--color-accent: #0071E3;  /* Change accent color */
--color-black: #000000;   /* Change black */
```

### **Add New Pages**

1. Create new HTML template in `templates/`
2. Add route in `app.py`:
   ```python
   @app.route('/about')
   def about():
       return render_template('about.html')
   ```
3. Create CSS file in `static/css/`
4. Add JavaScript in `static/js/` if needed

### **Add Images**

Place images in `static/assets/` and reference in templates:
```html
<img src="{{ url_for('static', filename='assets/image.png') }}" alt="Description">
```

---

## 🧪 Browser Compatibility

✅ Chrome/Edge (latest)  
✅ Firefox (latest)  
✅ Safari (latest)  
✅ iOS Safari  
✅ Chrome Android  

---

## 🚢 Deployment

### **Production Setup with Gunicorn**

```bash
# Install gunicorn
pip install gunicorn

# Run server
gunicorn app:app

# Run on specific port
gunicorn -w 4 -b 0.0.0.0:8000 app:app
```

### **Environment Variables**

Create `.env` file:
```
FLASK_ENV=production
FLASK_DEBUG=0
```

### **Recommended Hosting**
- Heroku
- PythonAnywhere
- AWS EC2
- DigitalOcean
- Railway

---

## 📝 File Descriptions

| File | Purpose |
|------|---------|
| `app.py` | Flask application with routes and configuration |
| `requirements.txt` | Python dependencies (pip install) |
| `landing.html` | Landing page template with video hero |
| `home.html` | Main homepage template with all sections |
| `global.css` | Global styles, typography, CSS variables |
| `landing.css` | Landing page specific styles |
| `home.css` | Home page responsive styles |
| `landing-animation.js` | GSAP animations for landing page |
| `home-interactions.js` | JavaScript interactions for home page |

---

## 🐛 Troubleshooting

### **Video not playing**
- Ensure `videohome.mp4` is in `static/assets/` folder
- Check video codec compatibility (MP4 H.264 recommended)
- Verify file size isn't too large (compress if needed)

### **Logo not showing**
- Check `logo.png` is in `static/assets/` folder
- Verify file is PNG or JPG format
- Check browser console for 404 errors

### **Animations not smooth**
- Clear browser cache (Ctrl+Shift+Delete)
- Check if GSAP CDN link is working
- Use Chrome DevTools to check for JavaScript errors

### **Mobile menu not working**
- Ensure `home-interactions.js` is loaded
- Check browser console for JavaScript errors
- Verify viewport meta tag is present in HTML

### **Flask not starting**
- Check Python version (3.7+ required)
- Verify dependencies installed: `pip list | grep Flask`
- Check for syntax errors: `python -m py_compile app.py`

---

## 📚 Resources

- **Flask Documentation**: https://flask.palletsprojects.com/
- **GSAP Documentation**: https://greensock.com/docs/
- **MDN Web Docs**: https://developer.mozilla.org/
- **CSS Variables**: https://developer.mozilla.org/en-US/docs/Web/CSS/--*

---

## 📞 Support

For issues or questions:
1. Check the browser console (F12 → Console)
2. Review Flask debug output in terminal
3. Verify all files are in correct directories
4. Clear cache and hard refresh (Ctrl+F5)

---

**Enjoy your professional fitness coach website!** 🏋️‍♂️✨
