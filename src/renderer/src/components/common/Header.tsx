import React from 'react'

const Header: React.FC = () => {
  const hiddenSidebar = () => {
    const sidebar = document.getElementById('sidebar')
    const openSidebarBtn = document.getElementById('openSidebarBtn')
    const mainContent = document.querySelector('.flex-1.flex.flex-col') // Seleciona o elemento que contém o header e o main

    openSidebarBtn?.addEventListener('click', () => {
      sidebar?.classList.toggle('-translate-x-full')
      sidebar?.classList.toggle('hidden')
      mainContent?.classList.toggle('w-full') // Alterna a classe w-full no main content
    })
  }
  return (
    <header className="bg-gray-700 p-4 w-full flex justify-between items-center">
      <button id="openSidebarBtn" className=" block" onClick={hiddenSidebar}>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>
      <h1 className="text-2xl justify-start font-bold text-gray-200">Vender</h1>
      <div className="grid grid-flow-col justify-end space-x-4">
        <div className="flex flex-row ">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
            Ajuda
          </button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            MA
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
