import React, { PropsWithChildren } from 'react'

const MainContent: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className="p-2 flex-1 bg-gray-600 overflow-y-auto">
      <div className="flex flex-col  md:flex-row space-y-1 w-full h-screen">{children}</div>
    </main>
  )
}

export default MainContent
