# Hydrolux – Design System

## 1. Designübersicht

**Projektname:** Hydrolux  
**Typ:** Landing Page (Hydroponik / Grow-Systeme)  
**Stilrichtung:** Modern, Dark, Premium, Tech-Nature  
**Zielgruppe:** Indoor-Grower, Anfänger & Profis  

Die Website vermittelt eine hochwertige, technologisch fortschrittliche Atmosphäre. Das Design kombiniert dunkle, elegante Oberflächen mit leuchtenden Grün-Akzenten, die Wachstum, Natur und Effizienz symbolisieren. Der Look ist clean, minimalistisch und verleiht der Marke ein professionelles, vertrauenswürdiges Premium-Gefühl.

---

## 2. Farbpalette

| Rolle | Farbe | Hex-Code | Verwendung |
|-------|-------|----------|------------|
| **Hintergrund** | Tiefschwarz | `#0A0A0A` | Hauptseitenhintergrund |
| **Oberfläche** | Dunkelgrau | `#141414` | Karten, Header, Footer |
| **Primär** | Neon-Grün | `#39FF14` | Hauptakzente, Highlights, leuchtende Elemente |
| **Sekundär** | Waldgrün | `#008000` | Subtile Akzente, Hover-Zustände |
| **Text** | Weiß | `#FFFFFF` | Überschriften, Haupttext |
| **Text-muted** | Hellgrau | `#A0A0A0` | Sekundärer Text, Beschreibungen |
| **CTA** | Spring Green | `#00FF7F` | Buttons, Call-to-Action |
| **Akzent** | Blaugrün | `#00BFA5` | Wasser-Elemente, dekorative Details |

### Farbverwendungsregeln
- Dunkle Oberflächen (`#0A0A0A`, `#141414`) bilden die Basis für alle Layout-Elemente.
- Neon-Grün (`#39FF14`) wird sparsam eingesetzt für leuchtende Akzente, Hover-Effekte und wichtige Hervorhebungen.
- Hoher Kontrast zwischen weißem Text und dunklem Hintergrund für optimale Lesbarkeit.
- Farbverläufe (Gradients) dürfen nur subtil eingesetzt werden (z. B. von `#008000` zu `#39FF14`).

---

## 3. Typografie

### Schriftarten
| Rolle | Schriftart | Fallback |
|-------|-----------|----------|
| **Überschriften** | Inter | Arial, sans-serif |
| **Fließtext** | Inter | Arial, sans-serif |

### Schriftgrößen & Gewichte
| Element | Größe | Gewicht | Zeilenhöhe | Stil |
|---------|-------|---------|------------|------|
| **H1 (Hero)** | 48–64px | 700 (Bold) | 1.1 | Großbuchstaben, eng gesetzt |
| **H2** | 36–48px | 600 (Semi-Bold) | 1.2 | Großbuchstaben |
| **H3** | 24–28px | 600 (Semi-Bold) | 1.3 | Normal |
| **Body** | 16–18px | 400 (Regular) | 1.6 | Normal |
| **Caption** | 12–14px | 400 (Regular) | 1.4 | Großbuchstaben, Buchstabenabstand 0.1em |

---

## 4. Abstände & Layout

### Layout-Prinzipien
- **Container-Max-Breite:** 1200px, zentriert.
- **Seitenränder:** 24px (Mobile), 48px (Tablet), 80px (Desktop).
- **Sektions-Abstände:** 80–120px vertikaler Abstand zwischen Hauptsektionen.

### Abstandssystem (8px-Basis)
| Token | Wert |
|-------|------|
| `space-xs` | 8px |
| `space-sm` | 16px |
| `space-md` | 24px |
| `space-lg` | 32px |
| `space-xl` | 48px |
| `space-2xl` | 64px |
| `space-3xl` | 96px |

---

## 5. Komponenten

### Buttons
**Primärer Button (CTA)**
- Hintergrund: `#00FF7F`
- Text: `#0A0A0A`, 16px, Semi-Bold, Großbuchstaben
- Padding: 16px 32px
- Border-Radius: 8px
- Hover: Hintergrund auf `#39FF14` ändern, leichter Glow-Effekt (`box-shadow: 0 0 20px rgba(57, 255, 20, 0.3)`)

**Sekundärer Button**
- Hintergrund: transparent
- Border: 1px solid `#39FF14`
- Text: `#39FF14`
- Hover: Hintergrund `rgba(57, 255, 20, 0.1)`

### Karten (Cards)
- Hintergrund: `#141414`
- Border: 1px solid `rgba(255, 255, 255, 0.05)`
- Border-Radius: 16px
- Padding: 32px
- Hover: Subtile Hebung (`transform: translateY(-4px)`), Border leuchtet in `#39FF14`

### Navigation
- Hintergrund: `#0A0A0A` mit 80% Deckkraft, Backdrop-Filter: blur(12px)
- Links: Weiß, 14px, Großbuchstaben, Buchstabenabstand 0.05em
- Hover: Farbe wechselt zu `#39FF14`
- Aktiver Link: Unterstreichung in `#39FF14`

---

## 6. Animationen & Interaktionen

### Globale Einstellungen
- **Easing:** `cubic-bezier(0.25, 0.46, 0.45, 0.94)` (Ease-Out-Quad) für sanfte, natürliche Bewegungen.
- **Dauer:** Standard 400ms für UI-Interaktionen, 800–1200ms für Scroll-Reveals.

### Scroll-Triggered Reveals
- Elemente erscheinen beim Scrollen ins Viewport.
- **Initialzustand:** `opacity: 0`, `translateY(40px)`
- **Endzustand:** `opacity: 1`, `translateY(0)`
- **Dauer:** 800ms
- **Stagger:** 100ms Verzögerung zwischen aufeinanderfolgenden Elementen

### Button-Hover
- **Dauer:** 300ms
- **Effekt:** Hintergrundfarbe ändert sich, leichter grüner Glow (`box-shadow`)
- **Transform:** Keine Skalierung, nur Farb- und Schattenänderung

### Karten-Hover
- **Dauer:** 400ms
- **Effekt:** Karte hebt sich leicht (`translateY(-4px)`), Border leuchtet auf

### Hero-Animation (Seitenladen)
- **Titel:** Fade-In von unten, 600ms, Verzögerung 200ms
- **Untertitel:** Fade-In von unten, 600ms, Verzögerung 400ms
- **CTA:** Fade-In, 400ms, Verzögerung 600ms

---

## 7. Besondere Effekte

### Glow-Effekte
- Leuchtende Akzente (z. B. Buttons, Icons) erhalten einen subtilen Glow:
  - `box-shadow: 0 0 15px rgba(57, 255, 20, 0.4)`
- Bei Hover verstärkt sich der Glow leicht.

### Gradient-Text (optional)
- Für besondere Überschriften kann ein subtiler Gradient verwendet werden:
  - `background: linear-gradient(135deg, #39FF14, #00FF7F)`
  - `-webkit-background-clip: text`
  - `-webkit-text-fill-color: transparent`

### Dekorative Linien
- Trennlinien zwischen Sektionen:
  - 1px hoch, Farbverlauf von transparent über `#39FF14` zu transparent
  - `background: linear-gradient(90deg, transparent, #39FF14, transparent)`

---

## 8. Responsive Breakpoints

| Breakpoint | Breite | Anpassungen |
|------------|--------|-------------|
| **Mobile** | < 768px | Einspaltiges Layout, kleinere Schriftgrößen, reduzierte Abstände |
| **Tablet** | 768–1024px | Zweispaltige Layouts, mittlere Schriftgrößen |
| **Desktop** | > 1024px | Vollständiges Layout, maximale Container-Breite |

---

## 9. Bildsprache

- Dunkle, stimmungsvolle Produktfotografie mit leuchtenden Grün-Akzenten.
- Cleane Studio-Aufnahmen der Produkte auf dunklem Hintergrund.
- Abstrakte, technologisch anmutende Visualisierungen (z. B. Wasserfluss, Lichtspektren).
- Hoher Kontrast, scharfe Details, professionelle Beleuchtung.
