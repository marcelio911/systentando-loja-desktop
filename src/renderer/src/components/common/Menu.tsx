import React from 'react'
import { NavLink } from 'react-router-dom'

// Assumindo que você está usando react-router para navegação

const Menu: React.FC = () => {
  const menuItems = [
    { label: 'Vender', path: '/vender', icon: '...' }, // Substitua '...' pelo ícone desejado
    { label: 'Pedidos', path: '/pedidos', icon: '...' },
    { label: 'Produtos', path: '/produtos', icon: '...' },
    { label: 'Catálogo Online', path: '/catalogo-online', icon: '...' },
    { label: 'Clientes', path: '/clientes', icon: '...' },
    { label: 'Histórico', path: '/historico', icon: '...' },
    { label: 'Finanças', path: '/financas', icon: '...' },
    { label: 'Estatísticas', path: '/estatisticas', icon: '...' },
    { label: 'Usuários', path: '/usuarios', icon: '...' },
    { label: 'Configurações', path: '/configuracoes', icon: '...' },
    { label: 'Marketplaces', path: '/marketplaces', icon: '...' },
  ]

  return (
    <aside
      id="sidebar"
      className="bg-gray-800 text-white w-64 h-screen p-4 transition-transform duration-300 transform -translate-x-full sm:translate-x-0 sm:block hidden"
    >
      <ul>
        <li className="mb-2">
          <a href="#" className="flex items-center p-2 rounded hover:bg-gray-700">
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
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              ></path>
            </svg>
            <span className="ml-2">Dashboard</span>
          </a>
        </li>
        {menuItems.map(item => (
          <li key={item.path} className="mb-2">
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `flex items-center p-2 rounded hover:bg-gray-700 ${isActive ? 'bg-gray-700' : ''}`
              }
            >
              {/* Renderize o ícone aqui */}
              <span className="ml-2">{item.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default Menu
