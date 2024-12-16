import Link from "next/link"
import { Home } from 'lucide-react'

export function Breadcrumb() {
  return (
    <nav className="flex items-center space-x-2 text-sm text-muted-foreground py-4">
      <Home className="h-4 w-4" />
      <Link href="/" className="hover:text-foreground">
        Home
      </Link>
      <span>/</span>
      <Link href="/cart" className="hover:text-foreground">
        Shopping Cart
      </Link>
      <span>/</span>
      <span className="text-foreground">Checkout</span>
    </nav>
  )
}

