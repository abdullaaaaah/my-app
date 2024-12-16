'use client'

import { Button } from "@/components/ui/button"
import { useCartStore } from "@/lib/cart"

export function OrderSummary() {
  const getTotal = useCartStore((state) => state.getTotal)

  const subtotal = getTotal()
  const shipping = 5.00
  const tax = subtotal * 0.05
  const total = subtotal + shipping + tax

  return (
    <div className="bg-white rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-3">Checkout</h2>
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Shipping</span>
          <span>${shipping.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Tax</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="border-t pt-2 mt-2">
          <div className="flex justify-between font-medium">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
      <Button className="w-full mt-4 bg-orange-500 hover:bg-orange-600">Place order</Button>
    </div>
  )
}

