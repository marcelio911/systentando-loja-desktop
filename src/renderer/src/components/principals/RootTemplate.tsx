import React, { PropsWithChildren } from 'react'

const RootTemplate: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="flex-1 flex flex-col w-full sm:w-auto">{children}</div>
}

export default RootTemplate
