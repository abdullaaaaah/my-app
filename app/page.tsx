'use client'

import { Breadcrumb } from "@/components/breadcrumb"
import { DeliveryOptions } from "@/components/delivery-options"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { OrderSummary } from "@/components/order-summary"
import { PaymentForm } from "@/components/payment-form"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { useCartStore } from "@/lib/cart"

export default function CheckoutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f8f9fa]">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <Breadcrumb />
        <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-8">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Shipping Address</h2>
                <Button variant="outline" className="bg-orange-500 text-white hover:bg-orange-600 border-none">
                  + Multi-address shipping
                </Button>
              </div>
              <ProductList />
            </div>
            <DeliveryOptions />
          </div>
          <div className="space-y-4">
            <OrderSummary />
            <PaymentForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

function ProductList() {
  const items = useCartStore((state) => state.items)

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <ProductCard key={item.id} {...item} />
      ))}
    </div>
  )
}

