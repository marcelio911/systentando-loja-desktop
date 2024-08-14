import { useState, useEffect } from 'react'

interface DataGridProps<T> {
  columns: { key: keyof T; label: string; highlight?: boolean }[]
  data: T[]
  rowsPerPage: number
}

const DataGrid = <T,>({ columns, data, rowsPerPage }: DataGridProps<T>) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [displayedData, setDisplayedData] = useState<T[]>([])

  useEffect(() => {
    const startIndex = (currentPage - 1) * rowsPerPage
    const endIndex = startIndex + rowsPerPage
    setDisplayedData(data.slice(startIndex, endIndex))
  }, [currentPage, data, rowsPerPage])

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage)
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 table-auto">
        {' '}
        {/* table-auto para melhor responsividade */}
        <thead className="bg-gray-50">
          <tr>
            {columns.map(column => (
              <th
                key={String(column.key)}
                scope="col"
                className={`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${
                  column.highlight ? 'bg-yellow-200' : ''
                }`}
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {displayedData.map((item, index) => (
            <tr key={index}>
              {columns.map(column => (
                <td
                  key={String(column.key)}
                  className={`px-6 py-4 text-gray-800 whitespace-nowrap ${column.highlight ? 'font-bold' : ''}`}
                >
                  {item[column.key as string]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Paginação */}
      <div className="flex justify-center mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 mr-2 bg-gray-300 hover:bg-gray-400 text-gray-700 rounded disabled:opacity-50"
        >
          Anterior
        </button>
        <span className="px-4 py-2">
          Página {currentPage} de {Math.ceil(data.length / rowsPerPage)}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === Math.ceil(data.length / rowsPerPage)}
          className="px-4 py-2 ml-2 bg-gray-300 hover:bg-gray-400 text-gray-700 rounded disabled:opacity-50"
        >
          Próxima
        </button>
      </div>
    </div>
  )
}

export default DataGrid
