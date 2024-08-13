import React from 'react'

interface CartItemProps {
  item: {
    id: number
    nome: string
    quantidade: number
    preco: number
  }
  onRemove: () => void
}

const CartItem: React.FC<CartItemProps> = ({ item, onRemove }) => {
  const subtotal = item.quantidade * item.preco

  return (
    <div className="flex items-center justify-between p-2 border-b">
      <div>
        <h3 className="font-bold">{item.nome}</h3>
        <p className="text-gray-500">
          Qtd: {item.quantidade} x R$ {item.preco.toFixed(2)}
        </p>
      </div>
      <div className="flex items-center">
        <span className="text-lg font-bold mr-2">R$ {subtotal.toFixed(2)}</span>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
          onClick={onRemove}
        >
          -
        </button>
      </div>
    </div>
  )
}

export default CartItem
