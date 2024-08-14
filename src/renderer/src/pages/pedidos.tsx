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

import mockedOders from './__mocks__/orders.json'

interface Order {
  id: number
  date: string
  seller: string
  itens: string
  customer: string
  status: string
  value: number
}

function PedidosPage(): JSX.Element {
  const [orders] = useState<Order[]>(mockedOders)
  const showFilterPanel = useToggle(false)
  const [filteredOrders, setFilteredOrders] = useState<Order[]>(orders)

  const handleFilterChange = (selectedFilters: string[]) => {
    // Lógica de filtragem aqui
    const filtered = orders.filter(order => selectedFilters.includes(order.status))
    setFilteredOrders(filtered)
  }

  const handleSearch = (searchTerm: string) => {
    // Lógica de busca aqui
    const filtered = orders.filter(order =>
      order.customer.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    setFilteredOrders(filtered)
  }

  return (
    <div className="flex w-full">
      <Menu />
      <RootTemplate>
        <Header title="Pedidos" />
        <MainContent>
          <Container>
            <ActionsPanel>
              <FilterPanel
                placeholder="Item ou cliente"
                onSearch={handleSearch}
                onFilterChange={handleFilterChange}
                showFilterPanel={showFilterPanel}
              />
            </ActionsPanel>

            <DataGrid
              columns={[
                { key: 'id', label: 'Código' },
                { key: 'date', label: 'Data' },
                { key: 'customer', label: 'Cliente' },
                { key: 'seller', label: 'Vendedor' },
                { key: 'itens', label: 'Itens' },
                { key: 'status', label: 'Status', highlight: true },
                { key: 'value', label: 'Valor' },
              ]}
              data={filteredOrders}
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

export default PedidosPage
