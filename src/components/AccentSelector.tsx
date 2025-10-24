"use client"

import { setAccent, accentColors } from "@/lib/theme"

export default function AccentSelector() {
  return (
    <div className="accent-selector">
      {Object.entries(accentColors).map(([key, color]) => (
        <div
          key={key}
          className="accent-option"
          style={{ backgroundColor: color.base }}
          onClick={() => setAccent(key as keyof typeof accentColors)}
          title={key}
        />
      ))}
    </div>
  )
}