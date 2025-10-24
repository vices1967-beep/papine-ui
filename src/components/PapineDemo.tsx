'use client'

import { useTheme } from '@/contexts/ThemeContext'
import { useEffect, useState } from 'react'
import AuthSection from './AuthSection'
import ProductCatalog from './ProductCatalog'
import {WhatsAppFloat} from './WhatsAppFloat'

export default function PapineDemo() {
  const { theme, toggleTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [logoStatus, setLogoStatus] = useState<'loading' | 'loaded' | 'error'>('loading')
  const [selectedAccent, setSelectedAccent] = useState('green')

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    setLogoStatus('loading')
    const img = new Image()
    const logoUrl = theme === 'dark' ? '/logoOscuro.jpeg' : '/logoClaro.jpeg'
    
    img.onload = () => {
      console.log('✅ Logo JPEG cargado:', logoUrl)
      setLogoStatus('loaded')
    }
    img.onerror = () => {
      console.log('❌ Error cargando logo JPEG:', logoUrl)
      setLogoStatus('error')
    }
    img.src = logoUrl
  }, [theme])

  if (!mounted) {
    return (
      <div className="min-h-screen p-8 flex items-center justify-center">
        <p className="text-xl">Cargando Papine Seeds...</p>
      </div>
    )
  }

  // 🎨 PALETA DE COLORES COMPLETA
  const colorPalette = {
    neutrals: {
      black: '#000000',
      darkGray: '#2E3B32',
      mediumGray: '#41504C',
      beige: '#D3B06C',
      white: '#FFFFFF',
      lightBeige: '#E8D9B0'
    },
    accents: {
      green: {
        DEFAULT: '#00A835',
        soft: '#00A83522',
        strong: '#00C542',
        muted: '#1A3320'
      },
      blue: {
        DEFAULT: '#2E9AFE',
        soft: '#2E9AFE22',
        strong: '#1A7CD9',
        muted: '#1E2E40'
      },
      violet: {
        DEFAULT: '#8A2BE2',
        soft: '#8A2BE222',
        strong: '#7A1FD9',
        muted: '#2E1E40'
      },
      brown: {
        DEFAULT: '#9C661F',
        soft: '#9C661F22',
        strong: '#8A5A1A',
        muted: '#332918'
      }
    }
  }

  // Configuración de colores según el tema
  const colors = {
    dark: {
      bg: colorPalette.neutrals.black,
      surface: colorPalette.neutrals.darkGray,
      muted: colorPalette.neutrals.mediumGray,
      text: colorPalette.neutrals.white,
      textMuted: colorPalette.neutrals.beige,
      accent: colorPalette.accents[selectedAccent as keyof typeof colorPalette.accents].DEFAULT,
      accentSoft: colorPalette.accents[selectedAccent as keyof typeof colorPalette.accents].soft,
      accentStrong: colorPalette.accents[selectedAccent as keyof typeof colorPalette.accents].strong,
      accentMuted: colorPalette.accents[selectedAccent as keyof typeof colorPalette.accents].muted
    },
    light: {
      bg: colorPalette.neutrals.white,
      surface: colorPalette.neutrals.lightBeige,
      muted: colorPalette.neutrals.beige,
      text: colorPalette.neutrals.black,
      textMuted: colorPalette.neutrals.mediumGray,
      accent: colorPalette.accents[selectedAccent as keyof typeof colorPalette.accents].DEFAULT,
      accentSoft: colorPalette.accents[selectedAccent as keyof typeof colorPalette.accents].soft,
      accentStrong: colorPalette.accents[selectedAccent as keyof typeof colorPalette.accents].strong,
      accentMuted: colorPalette.accents[selectedAccent as keyof typeof colorPalette.accents].muted
    }
  }

  const currentColors = theme === 'dark' ? colors.dark : colors.light
  const logoUrl = theme === 'dark' ? '/logoOscuro.jpeg' : '/logoClaro.jpeg'

  return (
    <div 
      className="min-h-screen p-8 transition-all duration-300"
      style={{
        background: currentColors.bg,
        color: currentColors.text
      }}
    >
      {/* Header con Logo */}
      <header className="max-w-7xl mx-auto mb-12 mt-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Logo Container */}
            <div className="relative">
              <img 
                src={logoUrl}
                alt={`Papine UI Logo ${theme}`}
                className={`w-60 h-30 rounded-lg object-cover border-2 transition-all duration-300 ${
                  logoStatus === 'loaded' ? 'opacity-100' : 'opacity-0 absolute'
                }`}
                style={{ borderColor: currentColors.muted }}
                onLoad={() => setLogoStatus('loaded')}
                onError={() => setLogoStatus('error')}
              />
              
              {/* Placeholder */}
              <div 
                className={`w-60 h-30 rounded-lg flex items-top justify-center border-2 transition-all duration-300 ${
                  logoStatus === 'loaded' ? 'opacity-0' : 'opacity-100'
                }`}
                style={{
                  background: currentColors.accentSoft,
                  borderColor: currentColors.muted,
                  color: currentColors.accent
                }}
              >
                {logoStatus === 'loading' ? (
                  <div className="animate-spin rounded-full h-8 w-8 border-2 border-current border-t-transparent"></div>
                ) : (
                  <span className="font-bold text-4xl">Papine Seeds</span>
                )}
              </div>
            </div>
            
            <div>
              <h1 className="text-5xl font-bold">Papine Seeds</h1>
              <p style={{ color: currentColors.textMuted }}>
                Sistema de diseño • {theme === 'dark' ? 'Modo Oscuro' : 'Modo Claro'}
                {logoStatus === 'error' && ' • (Logo no cargado)'}
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div 
              className="px-4 py-2 rounded-full font-semibold"
              style={{
                background: currentColors.accent,
                color: 'white'
              }}
            >
              {theme === 'dark' ? '🌙 OSCURO' : '☀️ CLARO'}
            </div>
          </div>
        </div>
      </header>
            {/* Sección del Catálogo de Productos */}
      <ProductCatalog />

      {/* Paleta de Colores */}
      <section className="max-w-7xl mx-auto mb-20">
        <h3 className="text-3xl font-bold text-center mb-12">Paleta de Colores</h3>
        
        {/* Colores Neutros */}
        <div className="mb-12">
          <h4 className="text-2xl font-bold mb-6 text-center">Colores Neutros</h4>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {Object.entries(colorPalette.neutrals).map(([name, color]) => (
              <div key={name} className="text-center">
                <div 
                  className="w-full h-16 rounded-lg mb-2 border flex items-center justify-center font-bold"
                  style={{ 
                    background: color,
                    borderColor: currentColors.muted,
                    color: name === 'beige' || name === 'lightBeige' || name === 'white' ? '#000000' : '#FFFFFF'
                  }}
                >
                  Aa
                </div>
                <h5 className="font-semibold text-sm capitalize">{name}</h5>
                <p style={{ color: currentColors.textMuted, fontSize: '0.7rem' }}>
                  {color}
                </p>
              </div>
            ))}
          </div>
        </div>

      {/* Selector de Acento */}
      <section className="max-w-4xl mx-auto mb-12">
        <div className="flex flex-wrap gap-4 justify-center">
          {Object.entries(colorPalette.accents).map(([key, accent]) => (
            <button
            key={key}
            className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
              selectedAccent === key 
                ? 'ring-2 ring-offset-2 ring-current ring-offset-current' 
                : 'opacity-80 hover:opacity-100'
            }`}
            style={{
              background: accent.DEFAULT,
              color: 'white'
            }}
            onClick={() => setSelectedAccent(key)}
          >
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </button>
          ))}
        </div>
      </section>

      {/* Hero Section */}
      <section 
        className="max-w-6xl mx-auto mb-16 rounded-2xl p-12 text-center"
        style={{
          background: `linear-gradient(135deg, ${currentColors.accentMuted} 0%, ${currentColors.bg} 100%)`,
          border: `1px solid ${currentColors.muted}`
        }}
      >
        <h2 className="text-5xl font-bold mb-6">
          Papine UI - Paleta Completa
        </h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto" style={{ color: currentColors.textMuted }}>
          Acento seleccionado: <strong>{selectedAccent.toUpperCase()}</strong>
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button 
            className="px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:scale-105"
            style={{
              background: currentColors.accent,
              color: 'white'
            }}
          >
            Botón Primario
          </button>
          <button 
            className="px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:scale-105 border-2"
            style={{
              background: 'transparent',
              borderColor: currentColors.accent,
              color: currentColors.accent
            }}
          >
            Botón Outline
          </button>
        </div>
      </section>

      {/* Sección de Autenticación */}
      <section className="max-w-md mx-auto mb-12">
        <div 
          className="rounded-2xl p-8 transition-all duration-300"
          style={{
            background: currentColors.surface,
            border: `1px solid ${currentColors.muted}`,
            color: currentColors.text
          }}
        >
          <AuthSection />
        </div>
      </section>



        {/* Colores de Acento */}
        <div>
          <h4 className="text-2xl font-bold mb-6 text-center">Colores de Acento</h4>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {Object.entries(colorPalette.accents).map(([name, accent]) => (
              <div key={name} className="text-center">
                <div className="space-y-2">
                  <div 
                    className="w-full h-12 rounded-lg flex items-center justify-center font-bold"
                    style={{ 
                      background: accent.DEFAULT,
                      color: 'white'
                    }}
                  >
                    Primario
                  </div>
                  <div 
                    className="w-full h-8 rounded-lg flex items-center justify-center text-xs"
                    style={{ 
                      background: accent.strong,
                      color: 'white'
                    }}
                  >
                    Strong
                  </div>
                  <div 
                    className="w-full h-8 rounded-lg flex items-center justify-center text-xs border"
                    style={{ 
                      background: accent.soft,
                      color: accent.DEFAULT,
                      borderColor: currentColors.muted
                    }}
                  >
                    Soft
                  </div>
                  <div 
                    className="w-full h-8 rounded-lg flex items-center justify-center text-xs"
                    style={{ 
                      background: accent.muted,
                      color: 'white'
                    }}
                  >
                    Muted
                  </div>
                </div>
                <h5 className="font-semibold mt-2 capitalize">{name}</h5>
                <p style={{ color: currentColors.textMuted, fontSize: '0.7rem' }}>
                  {accent.DEFAULT}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp Float */}
      <WhatsAppFloat />

      {/* Toggle Button */}
      <button 
        className="fixed bottom-8 right-8 w-14 h-14 rounded-full flex items-center justify-center text-xl transition-all duration-300 hover:scale-110"
        style={{
          background: currentColors.surface,
          border: `2px solid ${currentColors.muted}`,
          color: currentColors.text
        }}
        onClick={toggleTheme}
      >
        {theme === 'dark' ? '☀️' : '🌙'}
      </button>
    </div>
  )
}