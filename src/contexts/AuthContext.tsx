'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { SessionProvider, useSession } from 'next-auth/react'

export function AuthProvider({ children }: { children: React.ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>
}

export const useAuth = () => {
  return useSession()
}