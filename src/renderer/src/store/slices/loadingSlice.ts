// src/store/loadingSlice.ts
import { createSlice } from '@reduxjs/toolkit'

const loadingSlice = createSlice({
  name: 'loading',
  initialState: false,
  reducers: {
    startLoading() {
      return true
    },
    stopLoading() {
      return false
    },
  },
})

export const { startLoading, stopLoading } = loadingSlice.actions
export default loadingSlice.reducer
