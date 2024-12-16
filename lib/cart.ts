import { create } from 'zustand'

export interface CartItem {
  id: string
  title: string
  price: number
  quantity: number
  image: string
  address: string
  seller: string
}

interface CartStore {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  getTotal: () => number
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [
    {
      id: '1',
      title: 'Smart Watch',
      price: 99,
      quantity: 1,
      image: '/images/smart-watch.jpg', // replace placeholder with actual image path
      address: '2972 Westheimer Rd. Santa Ana',
      seller: 'Veres Panna'
    },
    {
      id: '2',
      title: 'MacBook pro',
      price: 99,
      quantity: 1,
      image: '/images/mac-book.jpg', // replace placeholder with actual image path
      address: '4517 Washington Ave. Manchester',
      seller: 'Henry, Arthur'
    }
  ],

  addItem: (item) => set((state) => ({ items: [...state.items, item] })),
  removeItem: (id) => set((state) => ({ items: state.items.filter((item) => item.id !== id) })),
  updateQuantity: (id, quantity) => set((state) => ({
    items: state.items.map((item) =>
      item.id === id ? { ...item, quantity: Math.max(0, quantity) } : item
    )
  })),
  getTotal: () => {
    return get().items.reduce((total, item) => total + item.price * item.quantity, 0)
  }
}))

