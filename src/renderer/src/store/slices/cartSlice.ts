// src/store/slices/cartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// src/store/index.ts
import { configureStore } from '@reduxjs/toolkit'

interface CartItem {
  id: number
  nome: string
  quantidade: number
  preco: number
}

interface CartState {
  items: CartItem[]
  subtotal: number
  desconto: number
}

const initialState: CartState = {
  items: [],
  subtotal: 0,
  desconto: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id)
      if (existingItem) {
        existingItem.quantidade += 1
      } else {
        state.items.push({ ...action.payload, quantidade: 1 })
      }
      state.subtotal += action.payload.preco
    },
    removeItem: (state, action: PayloadAction<number>) => {
      const index = state.items.findIndex(item => item.id === action.payload)
      if (index !== -1) {
        state.subtotal -= state.items[index].preco * state.items[index].quantidade
        state.items.splice(index, 1)
      }
    },
    setDesconto: (state, action: PayloadAction<number>) => {
      state.desconto = action.payload
    },
  },
})

export const { addItem, removeItem, setDesconto } = cartSlice.actions
export default cartSlice.reducer
