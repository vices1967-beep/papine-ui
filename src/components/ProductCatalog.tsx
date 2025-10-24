'use client'

import { useState } from 'react'

interface Product {
  id: string
  name: string
  description: string
  image: string
  category: string
  characteristics: string[]
}

// Datos de ejemplo - CON RUTAS CORRECTAS
const sampleProducts: Product[] = [
  {
    id: "1",
    name: "Semilla Premium Autofloreciente",
    description: "Genética estabilizada para cultivo interior/exterior con floración automática.",
    image: "/products/autoflower.png", // ← Ruta corregida
    category: "Autoflorecientes",
    characteristics: ["Floración rápida", "Alto THC", "Resistente"]
  },
  {
    id: "2", 
    name: "Semilla Fotoperiódica Sativa",
    description: "Cepa sativa pura con efectos energéticos y creativos.",
    image: "/products/sativa.png", // ← Ruta corregida
    category: "Fotoperiódicas",
    characteristics: ["Efecto energético", "Aroma cítrico", "Cosecha larga"]
  },
  {
    id: "3",
    name: "Semilla CBD Medicinal",
    description: "Alto contenido en CBD, ideal para uso terapéutico y medicinal.",
    image: "/products/cbd.png", // ← Ruta corregida
    category: "Medicinales",
    characteristics: ["Alto CBD", "Efecto relajante", "Uso terapéutico"]
  },
  {
    id: "4",
    name: "Semilla Indica Relajante", 
    description: "Cepa indica pura con efectos relajantes y sedantes.",
    image: "/products/indica.png", // ← Ruta corregida
    category: "Indicas",
    characteristics: ["Efecto relajante", "Aroma terroso", "Cosecha media"]
  },
  {
    id: "5",
    name: "Semilla Híbrida Balanceada",
    description: "Híbrido equilibrado con lo mejor de sativa e indica.",
    image: "/products/hybrid.png", // ← Ruta corregida
    category: "Híbridas",
    characteristics: ["Balance perfecto", "Efecto versátil", "Alto rendimiento"]
  },
    {
    id: "5",
    name: "Semilla Híbrida Balanceada",
    description: "Híbrido equilibrado con lo mejor de sativa e indica.",
    image: "/products/hybrid.png", // ← Ruta corregida
    category: "Híbridas",
    characteristics: ["Balance perfecto", "Efecto versátil", "Alto rendimiento"]
    }
]

export default function ProductCatalog() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const categories = ['all', ...new Set(sampleProducts.map(p => p.category))]

  const filteredProducts = selectedCategory === 'all' 
    ? sampleProducts 
    : sampleProducts.filter(p => p.category === selectedCategory)

  return (
    <section className="max-w-7xl mx-auto mb-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Catálogo de Genética</h2>
        <p className="text-xl text-text-muted max-w-3xl mx-auto">
          Descubre nuestra selección premium de genética estabilizada y de alta calidad
        </p>
      </div>

      {/* Filtros de categoría */}
      <div className="flex flex-wrap gap-3 justify-center mb-8">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full font-semibold transition-all ${
              selectedCategory === category
                ? 'bg-accent text-white'
                : 'bg-surface text-text border border-muted hover:bg-muted'
            }`}
          >
            {category === 'all' ? 'Todas' : category}
          </button>
        ))}
      </div>

      {/* Grid de productos */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map(product => (
          <ProductCard 
            key={product.id} 
            product={product}
            onSelect={setSelectedProduct}
          />
        ))}
      </div>

      {/* Modal de producto */}
      {selectedProduct && (
        <ProductModal 
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  )
}

// Componente Card de Producto Individual CORREGIDO
function ProductCard({ product, onSelect }: { product: Product, onSelect: (product: Product) => void }) {
  const [imageError, setImageError] = useState(false)
  const [imageLoading, setImageLoading] = useState(true)
  
  const phoneNumber = "5493424785402" // Cambia por tu número real
  
  const handleWhatsApp = (e: React.MouseEvent) => {
    e.stopPropagation()
    const message = `Hola, me interesa obtener más información sobre: ${product.name}`
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <div 
      className="card cursor-pointer hover:scale-105 transition-transform"
      onClick={() => onSelect(product)}
    >
      {/* Imagen del producto - VERSIÓN CORREGIDA */}
      <div className="w-full h-48 rounded-lg mb-4 overflow-hidden bg-muted flex items-center justify-center">
        {!imageError ? (
          <>
            {imageLoading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-2 border-accent border-t-transparent"></div>
              </div>
            )}
            <img 
              src={product.image}
              alt={product.name}
              className={`w-full h-full object-cover transition-opacity duration-300 ${
                imageLoading ? 'opacity-0' : 'opacity-100'
              }`}
              onLoad={() => setImageLoading(false)}
              onError={() => {
                setImageError(true)
                setImageLoading(false)
              }}
            />
          </>
        ) : (
          <div className="text-center text-text-muted p-4">
            <div className="text-4xl mb-2">🌱</div>
            <div className="text-sm">{product.name}</div>
          </div>
        )}
      </div>

      {/* Contenido */}
      <div className="space-y-3">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-bold text-text">{product.name}</h3>
          <span className="px-2 py-1 bg-accent text-white text-xs rounded-full">
            {product.category}
          </span>
        </div>

        <p className="text-text-muted text-sm">{product.description}</p>

        {/* Características */}
        <div className="flex flex-wrap gap-2">
          {product.characteristics.map((char, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-muted text-text text-xs rounded-full"
            >
              {char}
            </span>
          ))}
        </div>

        {/* Botón WhatsApp */}
        <button
          onClick={handleWhatsApp}
          className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors flex items-center justify-center gap-2 mt-4"
        >
          <span>💬</span>
          Información por WhatsApp
        </button>
      </div>
    </div>
  )
}

// Modal de detalle de producto CORREGIDO
function ProductModal({ product, onClose }: { product: Product, onClose: () => void }) {
  const [imageError, setImageError] = useState(false)
  const phoneNumber = "5493424785402" // Cambia por tu número real
  
  const handleWhatsApp = () => {
    const message = `Hola, me interesa obtener más información sobre: ${product.name} - ${product.description}`
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div 
        className="card max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-2xl font-bold text-text">{product.name}</h2>
          <button
            onClick={onClose}
            className="text-text-muted hover:text-text text-2xl"
          >
            ×
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Imagen */}
          <div className="bg-muted rounded-lg h-64 flex items-center justify-center overflow-hidden">
            {!imageError ? (
              <img 
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="text-center text-text-muted p-4">
                <div className="text-6xl mb-2">🌱</div>
                <div>{product.name}</div>
              </div>
            )}
          </div>

          {/* Información */}
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-text mb-2">Descripción</h3>
              <p className="text-text-muted">{product.description}</p>
            </div>

            <div>
              <h3 className="font-semibold text-text mb-2">Características</h3>
              <ul className="text-text-muted space-y-1">
                {product.characteristics.map((char, index) => (
                  <li key={index}>• {char}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-text mb-2">Categoría</h3>
              <span className="px-3 py-1 bg-accent text-white text-sm rounded-full">
                {product.category}
              </span>
            </div>

            <button
              onClick={handleWhatsApp}
              className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
            >
              <span>💬</span>
              Solicitar información por WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}