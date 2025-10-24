'use client'

import { useTheme } from '@/contexts/ThemeContext'
import { useEffect, useState } from 'react'

export default function DebugSimple() {
  const { theme, toggleTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    console.log('🧪 DebugSimple montado, tema:', theme)
  }, [theme])

  if (!mounted) {
    return <div className="p-8">Cargando...</div>
  }

  return (
    <div className="min-h-screen p-8" style={{
      background: theme === 'dark' ? '#0a0a0a' : '#f9fafb',
      color: theme === 'dark' ? '#ffffff' : '#222222',
      transition: 'all 0.3s ease'
    }}>
      {/* Debug Info Fixed */}
      <div className="fixed top-4 left-4 z-50 p-4 rounded-lg text-white font-bold" style={{
        background: theme === 'dark' ? '#000000' : '#ff4444'
      }}>
        <div>🧪 DEBUG SIMPLE</div>
        <div>Tema: <strong>{theme}</strong></div>
        <div>Clase HTML: <strong>{document.documentElement.className}</strong></div>
      </div>

      <div className="max-w-4xl mx-auto mt-16">
        <h1 className="text-4xl font-bold mb-8">🧪 Debug del Tema</h1>
        
        {/* Test 1: Colores Directos */}
        <div className="p-6 rounded-xl mb-6" style={{
          background: theme === 'dark' ? '#111111' : '#ffffff',
          border: `1px solid ${theme === 'dark' ? '#2E3B32' : '#E0E7E2'}`,
          color: theme === 'dark' ? '#ffffff' : '#222222'
        }}>
          <h2 className="text-2xl font-bold mb-4">Test 1 - Colores Directos</h2>
          <p>Este card usa estilos inline con JavaScript</p>
          <p>Debería cambiar entre fondo negro/texto blanco y fondo blanco/texto negro</p>
        </div>

        {/* Test 2: Estado Actual */}
        <div className="p-6 rounded-xl mb-6" style={{
          background: theme === 'dark' ? '#111111' : '#ffffff',
          border: `1px solid ${theme === 'dark' ? '#2E3B32' : '#E0E7E2'}`,
          color: theme === 'dark' ? '#ffffff' : '#222222'
        }}>
          <h2 className="text-2xl font-bold mb-4">Test 2 - Estado</h2>
          <div className="space-y-2">
            <div>Tema en React: <strong>{theme}</strong></div>
            <div>Clase en HTML: <strong>{document.documentElement.className}</strong></div>
            <div>LocalStorage: <strong>{localStorage.getItem('papine-theme')}</strong></div>
          </div>
        </div>

        {/* Test 3: Botones */}
        <div className="p-6 rounded-xl" style={{
          background: theme === 'dark' ? '#111111' : '#ffffff',
          border: `1px solid ${theme === 'dark' ? '#2E3B32' : '#E0E7E2'}`,
          color: theme === 'dark' ? '#ffffff' : '#222222'
        }}>
          <h2 className="text-2xl font-bold mb-4">Test 3 - Interacción</h2>
          <button 
            className="px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105"
            style={{
              background: '#00A835',
              color: 'black'
            }}
            onClick={toggleTheme}
          >
            Cambiar Tema (Actual: {theme})
          </button>
          <p className="mt-4">Haz clic en el botón y observa la consola</p>
        </div>

        {/* Test 4: Logos */}
        <div className="p-6 rounded-xl mt-6" style={{
          background: theme === 'dark' ? '#111111' : '#ffffff',
          border: `1px solid ${theme === 'dark' ? '#2E3B32' : '#E0E7E2'}`,
          color: theme === 'dark' ? '#ffffff' : '#222222'
        }}>
          <h2 className="text-2xl font-bold mb-4">Test 4 - Logos</h2>
          <div className="flex gap-4">
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-lg mb-2 flex items-center justify-center text-2xl">
                {theme === 'dark' ? '🌙' : '☀️'}
              </div>
              <p>Logo Actual: {theme === 'dark' ? 'Oscuro' : 'Claro'}</p>
            </div>
            <div className="text-center">
              <img 
                src={theme === 'dark' ? '/logoOscuro.jpg' : '/logoClaro.jpg'} 
                alt="Logo"
                className="w-32 h-32 rounded-lg border-2 border-gray-400 object-cover"
                onError={(e) => {
                  console.log('❌ Error cargando logo');
                  const target = e.target as HTMLImageElement;
                  target.style.background = theme === 'dark' ? '#333' : '#ddd';
                  target.style.display = 'flex';
                  target.style.alignItems = 'center';
                  target.style.justifyContent = 'center';
                  target.style.color = theme === 'dark' ? '#fff' : '#000';
                  target.innerHTML = '<span>NO LOGO</span>';
                }}
              />
              <p>Logo Dinámico</p>
            </div>
          </div>
        </div>
      </div>

      {/* Toggle Button */}
      <button 
        className="fixed bottom-8 right-8 w-14 h-14 rounded-full flex items-center justify-center text-xl transition-all hover:scale-110"
        style={{
          background: theme === 'dark' ? '#111111' : '#ffffff',
          border: `2px solid ${theme === 'dark' ? '#2E3B32' : '#E0E7E2'}`,
          color: theme === 'dark' ? '#ffffff' : '#222222'
        }}
        onClick={toggleTheme}
      >
        {theme === 'dark' ? '☀️' : '🌙'}
      </button>
    </div>
  )
}