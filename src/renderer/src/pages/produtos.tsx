import { useState } from 'react'

import { Header } from '@renderer/components/common'
import ActionsPanel from '@renderer/components/common/ActionsPanel'
import DataGrid from '@renderer/components/common/DataGrid'
import FilterPanel from '@renderer/components/common/FilterPanel'
import FormFilters from '@renderer/components/common/FormFilters'
import Menu from '@renderer/components/common/Menu'
import Container from '@renderer/components/principals/Container'
import MainContent from '@renderer/components/principals/MainContent'
import RootTemplate from '@renderer/components/principals/RootTemplate'
import useToggle from '@renderer/hooks/useToggle'

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
  const showFilterPanel = useToggle(false)

  const handleFilterChange = (selectedFilters: string[]) => {
    // Lógica de filtragem aqui
    const filtered = items.filter(item => selectedFilters.includes(item.category))
    setFilteredItems(filtered)
  }

  const handleImport = () => {
    // Lógica de importação aqui
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
          <Container>
            <ActionsPanel>
              <FilterPanel
                placeholder="Item ou código"
                onSearch={handleSearch}
                onFilterChange={handleFilterChange}
                showFilterPanel={showFilterPanel}
              >
                <button
                  onClick={handleImport}
                  className="bg-gray-200 boder-solid-1 border-gray-300 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded"
                >
                  Importar
                </button>
              </FilterPanel>
            </ActionsPanel>

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
          </Container>
          {showFilterPanel.state && (
            <FormFilters title="Formulário de filtros">
              Implementar que vai ser dinamico {'{...}'}
            </FormFilters>
          )}
        </MainContent>
      </RootTemplate>
    </div>
  )
}

export default ProdutosPdvPage
