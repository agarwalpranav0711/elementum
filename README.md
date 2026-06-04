# Elementum — Premium Creative Brand & Strategy Hub

Elementum is a premium, highly interactive React-based brand strategy, design system, and communications craft landing page. It is custom-tailored with fluid micro-interactions, responsive typography, and tactile visuals to establish an unforgettable digital identity.

---

## ✨ Premium Features & Interactions

### 🌓 Persistent Dark/Light Mode
- **Zero-Flash Transition**: Utilizes native CSS custom properties for instant, hardware-accelerated transitions between themes.
- **Sun/Moon Toggle Icon**: An animated SVG button that rotates `360deg` over a `0.3s` ease curve.
- **LocalStorage Sync**: Saves and retrieves user theme preference automatically upon page refreshes.

### 🧲 Magnetic "Subscribe Now" Button
- **Dynamic Pull**: Calculates distance between the cursor and the button center on desktop hover. Translates the button up to `12px` smoothly toward the cursor.
- **Elastic Return**: Snaps back with an organic elastic bounce curve (`cubic-bezier(0.175, 0.885, 0.32, 1.275)`) when the mouse exits the threshold.

### 🌌 Desktop Parallax Depth Layers
- Floating shapes (watermark, teardrops, squiggles, triangles, curves) drift at varying scroll speeds using an optimized `requestAnimationFrame` loop, creating an organic 3D sense of depth.

### 🔢 Hover Service Row Ghost Numbers
- Hovering over a service item reveals a giant background numeral (`01`, `02`, `03`) at a subtle `0.05` opacity that adapts colors to match the active theme (black in light mode, white in dark mode).

### ✍️ Hand-Drawn Underline & Shimmers
- **Thinkers Line**: An animated yellow hand-drawn wavy underline draws itself from left to right on page load using SVG stroke-dashoffset animations.
- **Status Shimmer**: The word "status" continuously shimmers with an inline gradient linear motion.

### 🔝 Smart Scroll Progress & Return
- **Progress Bar**: A top-anchored indicator showing reading progress.
- **Scroll to Top**: A fixed circular return button that fades in past the Hero section, scaling and shifting green on hover.

---

## 🛠️ Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/agarwalpranav0711/elementum.git
   cd elementum
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm start
   ```
   *The site will be live at `http://localhost:3000/`.*

4. **Build production bundle:**
   ```bash
   npm run build
   ```

---

## 📁 Project Structure

```
├── public/                 # Static assets & index.html
├── src/
│   ├── components/         # Modular UI Components
│   │   ├── Footer.js / .css
│   │   ├── HelpProgress.js / .css
│   │   ├── Hero.js / .css
│   │   ├── Navbar.js / .css
│   │   ├── Newsletter.js / .css
│   │   ├── Services.js / .css
│   │   ├── Testimonials.js / .css
│   │   └── Tomorrow.js / .css
│   ├── App.js              # Central layout & Scroll Managers
│   ├── App.css             # Root variables & Tactile Overlay
│   └── index.js            # React Mount point
```

---

## 📱 Responsiveness

Fully audited and pixel-perfect across the following viewport targets:
- **Desktop (1920px, 1440px, 1280px)**
- **Tablet (1024px, 768px)**
- **Mobile (375px)**
