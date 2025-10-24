// src/components/WhatsAppContact.tsx
export function WhatsAppFloat({ productName = "" }) {
  const phoneNumber = "5493424785402" // Tu número
  const message = productName 
    ? `Hola, me interesa obtener más información sobre: ${productName}`
    : "Hola, me gustaría recibir información sobre sus productos"
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 bg-green-500 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-all"
      >
        <span className="text-xl">💬</span>
        <span className="font-semibold">Info por WhatsApp</span>
      </a>
    </div>
  )
}