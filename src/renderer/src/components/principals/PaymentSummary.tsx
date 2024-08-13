import React from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '@renderer/store'

const PaymentSummary: React.FC = () => {
  const subtotal = useSelector((state: RootState) => state.cartState.subtotal)
  const desconto = useSelector((state: RootState) => state.cartState.desconto)
  const total = subtotal - desconto

  return (
    <div className="p-4 border-t h-1/3">
      <div className="flex justify-between mb-2">
        <span>Subtotal:</span>
        <span className="font-bold">R$ {subtotal.toFixed(2)}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Desconto:</span>
        <span className="font-bold">R$ {desconto.toFixed(2)}</span>
      </div>
      <div className="flex justify-between mb-4">
        <span className="font-bold">Total:</span>
        <span className="text-xl font-bold">R$ {total.toFixed(2)}</span>
      </div>
      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full">
        Ir para pagamento
      </button>
    </div>
  )
}

export default PaymentSummary
