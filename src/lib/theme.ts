export const accentColors = {
  green: { 
    primary: [0, 168, 53], 
    strong: [0, 185, 69] 
  },
  brown: { 
    primary: [139, 94, 60], 
    strong: [160, 108, 70] 
  },
  blue: { 
    primary: [0, 145, 255], 
    strong: [51, 168, 255] 
  },
  violet: { 
    primary: [138, 43, 226], 
    strong: [155, 48, 255] 
  },
}

export function setAccent(color: keyof typeof accentColors) {
  const root = document.documentElement
  const palette = accentColors[color]
  if (!palette) return
  
  root.style.setProperty("--accent-primary", palette.primary.join(' '))
  root.style.setProperty("--accent-strong", palette.strong.join(' '))
}

// Inicializar con color verde por defecto
export function initializeTheme() {
  if (typeof window !== 'undefined') {
    setAccent('green')
  }
}