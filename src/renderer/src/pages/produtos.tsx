import { useState } from 'react'

import { Header } from '@renderer/components/common'
import DataGrid from '@renderer/components/common/DataGrid'
import FilterPanel from '@renderer/components/common/FilterPanel'
import Menu from '@renderer/components/common/Menu'
import MainContent from '@renderer/components/principals/MainContent'
import RootTemplate from '@renderer/components/principals/RootTemplate'

import mockedProducts from './__mocks__/products.json'

interface Product {
  id: number
  name: string
  category: string
  stock: number
  price: number
  status: boolean
  emphasis: boolean
  online: boolean
}

function ProdutosPdvPage(): JSX.Element {
  const [items] = useState<Product[]>(mockedProducts)
  const [filteredItems, setFilteredItems] = useState<Product[]>(items)

  const handleFilterChange = (selectedFilters: string[]) => {
    // Lógica de filtragem aqui
    const filtered = items.filter(item => selectedFilters.includes(item.category))
    setFilteredItems(filtered)
  }

  const handleSearch = (searchTerm: string) => {
    // Lógica de busca aqui
    const filtered = items.filter(item =>
      item.category.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    setFilteredItems(filtered)
  }
  return (
    <div className="flex w-full">
      <Menu />
      <RootTemplate>
        <Header title="Produtos PDV" />
        <MainContent>
          <div className="container mx-auto p-4">
            <FilterPanel
              placeholder="Item ou código"
              onSearch={handleSearch}
              onFilterChange={handleFilterChange}
            />

            <DataGrid
              columns={[
                { key: 'id', label: 'Código' },
                { key: 'emphasis', label: 'Destaque' },
                { key: 'name', label: 'Produto' },
                { key: 'category', label: 'Categoria', highlight: true },
                { key: 'stock', label: 'Estoque' },
                { key: 'price', label: 'Preço' },
                { key: 'status', label: 'Status' },
                { key: 'online', label: 'Catalógo' },
              ]}
              data={filteredItems}
              rowsPerPage={7}
            />
          </div>
        </MainContent>
      </RootTemplate>
    </div>
  )
}

export default ProdutosPdvPage
