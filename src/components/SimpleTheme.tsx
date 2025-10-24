'use client'

import { useTheme } from '@/contexts/ThemeContext'

export default function SimpleTheme() {
  const { theme, toggleTheme } = useTheme()

  console.log('SimpleTheme renderizado, tema:', theme)

  return (
    <div className="min-h-screen p-8" style={{ 
      background: theme === 'dark' ? '#0a0a0a' : '#f9fafb',
      color: theme === 'dark' ? '#ffffff' : '#000000',
      transition: 'all 0.3s ease'
    }}>
      <h1 className="text-4xl font-bold mb-6">🎉 TEMA FUNCIONANDO!</h1>
      
      <div className="max-w-2xl mx-auto">
        <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg">
          <p><strong>✅ useTheme() está funcionando correctamente</strong></p>
          <p>Tema actual: <strong>{theme}</strong></p>
        </div>

        <button 
          onClick={toggleTheme}
          className="w-full py-4 bg-blue-500 text-white rounded-lg font-bold text-lg hover:bg-blue-600 transition-colors mb-6"
        >
          CAMBIAR A MODO {theme === 'dark' ? 'CLARO' : 'OSCURO'}
        </button>

        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 rounded-lg" style={{
            background: theme === 'dark' ? '#1a1a1a' : '#f0f0f0'
          }}>
            <h3 className="font-bold mb-2">Card Oscuro/Claro</h3>
            <p>Este card cambia con el tema</p>
          </div>
          
          <div className="p-4 rounded-lg border-2" style={{
            borderColor: theme === 'dark' ? '#333' : '#ddd'
          }}>
            <h3 className="font-bold mb-2">Card con Borde</h3>
            <p>Borde que cambia con el tema</p>
          </div>
        </div>
      </div>
    </div>
  )
}