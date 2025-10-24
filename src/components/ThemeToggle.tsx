'use client'

import { useTheme } from '@/contexts/ThemeContext'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button 
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label={`Cambiar a modo ${theme === 'dark' ? 'claro' : 'oscuro'}`}
    >
      {theme === 'dark' ? (
        <span className="text-yellow-400 text-xl">☀️</span>
      ) : (
        <span className="text-blue-400 text-xl">🌙</span>
      )}
    </button>
  )
}