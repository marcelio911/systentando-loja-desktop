import React from 'react'

interface PropsWithChildren {
  children: React.ReactNode
}

const ActionsPanel: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-200 rounded-lg">{children}</div>
  )
}

export default ActionsPanel
