'use client'

import { ReactNode } from 'react'
import { useCartStore } from '@/lib/cart'

export function CartProvider({ children }: { children: ReactNode }) {
  return children
}

