import React from 'react'

interface ActionBarProps {
  onSearch: (searchTerm: string) => void
  onCategoryFilter: () => void
  onLayoutChange: (layout: string) => void
}

const ActionBar: React.FC<ActionBarProps> = ({ onSearch, onCategoryFilter, onLayoutChange }) => {
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value)
  }

  return (
    <div className="flex items-center justify-between p-4 bg-gray-200 rounded-lg">
      {/* Campo de busca */}
      <div className="flex-grow">
        <div className="relative">
          <input
            type="text"
            placeholder="Nome ou código"
            className="w-full pl-10 pr-4 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            onChange={handleSearch}
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Botões de ação */}
      <div className="flex items-center ml-4 space-x-2">
        <button
          onClick={onCategoryFilter}
          className="bg-gray-200 boder-solid-1 border-gray-300 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded"
        >
          Categorias ^
        </button>
        <button
          onClick={() => onLayoutChange('grid')}
          className="bg-gray-600 hover:bg-gray-300 text-gray-200 font-bold py-2 px-4 rounded"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Ícone de layout em grid */}
          </svg>
        </button>
        <button
          onClick={() => onLayoutChange('list')}
          className="bg-gray-700 hover:bg-gray-800 text-gray-200 font-bold py-2 px-4 rounded"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Ícone de layout em lista */}
          </svg>
        </button>
      </div>
    </div>
  )
}

export default ActionBar
