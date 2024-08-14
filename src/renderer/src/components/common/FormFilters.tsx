import React from 'react'

interface PropsWithChildren {
  title: string
  children: React.ReactNode
}

const FormFilters: React.FC<PropsWithChildren> = ({ title, children }) => {
  return (
    <div
      id="filtros"
      className="bg-gray-200 transition-transform duration-600 text-gray-800 p-4
                 -translate-x-full h-full z-index-90 w-4/5 sm:w-2/5 fixed top-0 right-0"
    >
      <h2 className="title text-lg font-bold mb-4">{title} </h2>
      {children}
    </div>
  )
}

export default FormFilters
