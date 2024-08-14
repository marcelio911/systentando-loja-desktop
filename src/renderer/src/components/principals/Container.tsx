import React, { PropsWithChildren } from 'react'

const Container: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="container mx-auto p-4">{children}</div>
}

export default Container
