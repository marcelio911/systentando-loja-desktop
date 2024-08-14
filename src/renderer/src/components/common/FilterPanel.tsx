import React, { useState } from 'react'

interface FilterPanelProps {
  placeholder: string
  onSearch: (searchTerm: string) => void
  filterOptions?: { label: string; value: string }[]
  onFilterChange: (selectedFilters: string[]) => void
}

const FilterPanel: React.FC<FilterPanelProps> = ({
  placeholder,
  filterOptions = [
    { label: 'Data', value: 'date' },
    { label: 'Status', value: 'status' },
    { label: 'Valor', value: 'value' },
    { label: 'Pendente', value: 'Pendente' },
    { label: 'Confirmado', value: 'Confirmado' },
  ],
  onSearch,
  onFilterChange,
}) => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])

  const handleFilterChange = (value: string) => {
    setSelectedFilters(prevFilters =>
      prevFilters.includes(value)
        ? prevFilters.filter(filter => filter !== value)
        : [...prevFilters, value],
    )
    onFilterChange(selectedFilters)
  }
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value)
  }

  const onFilterStatus = () => {
    // Lógica para filtrar status
  }

  return (
    <div className="flex items-center justify-between p-4 bg-gray-200 rounded-lg">
      {/* Campo de busca */}
      <div className="flex-grow">
        <div className="relative">
          <input
            type="text"
            placeholder={placeholder}
            className="w-full pl-10 pr-4 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            onChange={handleSearch}
          />
        </div>
      </div>

      {/* Botões de ação */}
      <div className="flex items-center ml-4 space-x-2">
        <button
          onClick={onFilterStatus}
          className="bg-gray-200 boder-solid-1 border-gray-300 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded"
        >
          Todos status ^
        </button>
      </div>
      {filterOptions.map(option => (
        <div key={option.value} className="flex items-center">
          <input
            id={option.value}
            type="checkbox"
            value={option.value}
            checked={selectedFilters.includes(option.value)}
            onChange={() => handleFilterChange(option.value)}
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          />
          <label htmlFor={option.value} className="ml-3 block text-sm font-medium text-gray-700">
            {option.label}
          </label>
        </div>
      ))}
    </div>
  )
}

export default FilterPanel
