import React from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '@renderer/store'

import CartItem from './CartItem'

const Cart: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cartState.items)

  return (
    <div className="flex-1 p-4 content-start ">
      <h2 className="text-xl font-bold mb-2">Carrinho</h2>
      <div className="grid grid-cols-1 gap-2 bg-gray-300 rounded p-2 h-2/3 overflow-y-auto">
        {cartItems.map(item => (
          <CartItem
            key={item.id}
            item={item}
            onRemove={() => {
              /* Lógica para remover do carrinho */
            }}
          />
        ))}
      </div>
      <button className="bg-yellow-500 hover:bg-yellow-700 absolute right-10 text-white font-bold py-2 px-4 rounded mt-2">
        Dar desconto
      </button>
    </div>
  )
}

export default Cart
