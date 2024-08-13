// src/store/slices/productsSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

import api from '@renderer/services/api'

interface Product {
  id: number
  nome: string
  categoria: string
  preco: number
}

interface ProductsState {
  products: Product[]
  loading: boolean
  error: string | null
}

const initialState: ProductsState = {
  products: [],
  loading: false,
  error: null,
}

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  try {
    const { data, status } = await api.get('/produtos')

    if (status !== 200) {
      throw new Error('Erro ao buscar produtos')
    }

    return data as Product[]
  } catch (error) {
    console.error(error)
    throw error
  }
})

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    fetchProducts: state => {
      state.loading = true
      state.error = null
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, state => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
        state.loading = false
        state.products = action.payload
        state.error = null
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Erro ao buscar produtos'
      })
  },
})

export default productsSlice.reducer
