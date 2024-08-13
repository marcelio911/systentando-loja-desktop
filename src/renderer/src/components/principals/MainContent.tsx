import React, { PropsWithChildren } from 'react'

const MainContent: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className="p-4 flex-1 bg-gray-600">
      <div className="flex flex-col md:flex-row w-full h-screen">{children}</div>
    </main>
  )
}

export default MainContent
