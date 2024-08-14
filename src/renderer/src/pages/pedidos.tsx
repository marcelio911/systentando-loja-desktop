import { useState } from 'react'

import { Header } from '@renderer/components/common'
import DataGrid from '@renderer/components/common/DataGrid'
import FilterPanel from '@renderer/components/common/FilterPanel'
import Menu from '@renderer/components/common/Menu'
import MainContent from '@renderer/components/principals/MainContent'
import RootTemplate from '@renderer/components/principals/RootTemplate'

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
          <div className="container mx-auto p-4">
            <FilterPanel
              placeholder="Item ou cliente"
              onSearch={handleSearch}
              onFilterChange={handleFilterChange}
            />

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
          </div>
        </MainContent>
      </RootTemplate>
    </div>
  )
}

export default PedidosPage
