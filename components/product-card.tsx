'use client'

import Image from "next/image"
import { Minus, Plus } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useCartStore, CartItem } from "@/lib/cart"

type ProductCardProps = CartItem

export function ProductCard({ id, image, title, price, address, seller, quantity }: ProductCardProps) {
  const updateQuantity = useCartStore((state) => state.updateQuantity)
  const removeItem = useCartStore((state) => state.removeItem)

  return (
    <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-4 p-4 bg-white rounded-lg shadow-sm w-full max-w-full overflow-hidden">
      {/* Image Section */}
      <div className="flex-shrink-0">
        <Image
          src={image}
          alt={title}
          width={100}
          height={100}
          className="rounded-lg object-cover w-full max-w-[120px] md:max-w-none"
        />
      </div>

      {/* Product Details Section */}
      <div className="flex-1">
        <h3 className="font-medium text-lg truncate">{title}</h3>
        <p className="text-sm text-muted-foreground truncate">{address}</p>
        <p className="text-sm text-muted-foreground mb-2 truncate">{seller}</p>
        
        {/* Quantity and Actions */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center gap-4 flex-wrap">
            {/* Quantity Controls */}
            <div className="flex items-center">
              <span className="text-sm mr-2">Quantity:</span>
              <Button 
                variant="outline" 
                size="icon" 
                className="h-8 w-8"
                onClick={() => updateQuantity(id, quantity - 1)}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-8 text-center">{quantity}</span>
              <Button 
                variant="outline" 
                size="icon" 
                className="h-8 w-8"
                onClick={() => updateQuantity(id, quantity + 1)}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>

            {/* Additional Actions */}
            <div className="flex items-center gap-2 flex-wrap">
              <Button variant="ghost" size="sm" className="whitespace-nowrap" onClick={() => removeItem(id)}>Delete</Button>
              <Button variant="ghost" size="sm" className="whitespace-nowrap">Save for later</Button>
              <Button variant="ghost" size="sm" className="whitespace-nowrap">Edit</Button>
            </div>
          </div>
          <div className="text-xl font-semibold">${(price * quantity).toFixed(2)}</div>
        </div>
      </div>
    </div>
  )
}
