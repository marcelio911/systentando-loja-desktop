import React from 'react'

interface ProductItemProps {
  product: {
    nome: string
    categoria: string
    preco: number
  }
  onAdd: (product: ProductItemProps['product']) => void
}

const ProductItem: React.FC<ProductItemProps> = ({ product, onAdd }) => {
  return (
    <div className="flex items-center justify-between p-2 border-b">
      <div>
        <h3 className="font-bold">{product.nome}</h3>
        <p className="text-gray-500">{product.categoria}</p>
      </div>
      <div className="flex items-center">
        <span className="text-lg font-bold mr-2">R$ {product.preco.toFixed(2)}</span>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
          onClick={() => onAdd(product)}
        >
          +
        </button>
      </div>
    </div>
  )
}

export default ProductItem
