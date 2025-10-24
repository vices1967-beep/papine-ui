// src/components/BrandHeader.tsx
export function BrandHeader() {
  return (
    <header className="text-center mb-12">
      <div className="flex items-center justify-center gap-4 mb-4">
        <img 
          src="/logo.png" 
          alt="Papine Seeds"
          className="w-16 h-16 rounded-lg"
        />
        <div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
            Papine Seeds
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mt-2">
            Cultivo inteligente • Genética premium
          </p>
        </div>
      </div>
    </header>
  )
}