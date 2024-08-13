import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import ActionBar from '@renderer/components/common/ActionsBar'
import { RootState } from '@renderer/store'
import { fetchProducts } from '@renderer/store/slices/productsSlice'

import ProductItem from './ProductItem'

const ProductList: React.FC = () => {
  const dispatch = useDispatch()
  const products = useSelector((state: RootState) => state.productsState.products)

  useEffect(() => {
    dispatch(fetchProducts()) // Buscar produtos do Superbase ao montar o componente
  }, [dispatch])

  const handleSearch = () => {
    // Lógica de busca
  }

  const handleCategoryFilter = () => {
    // Lógica de filtro por categoria
  }
  const handleLayoutChange = () => {
    // Lógica de mudança de layout
  }

  return (
    <div className="md:w-2/3 p-4 border-r border-gray-300">
      <h2 className="text-xl font-bold mb-2"> Produtos</h2>
      <ActionBar
        onSearch={handleSearch}
        onCategoryFilter={handleCategoryFilter}
        onLayoutChange={handleLayoutChange}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map(product => (
          <ProductItem
            key={product.id}
            product={product}
            onAdd={() => {
              /* Lógica para adicionar ao carrinho */
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default ProductList
