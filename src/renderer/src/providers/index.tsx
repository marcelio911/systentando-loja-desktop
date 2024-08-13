import type { PropsWithChildren } from 'react'
import { Provider, ProviderProps } from 'react-redux'

import { PersistGate } from 'redux-persist/integration/react'

import { Loading } from '@renderer/components/common'
// import ToastContainer from '@renderer/components/ToastContainer'
import { store, persistor } from '@renderer/store'

const providerProps: ProviderProps = {
  store: store,
}

export default function RootProvider({ children }: PropsWithChildren) {
  return (
    <Provider {...providerProps}>
      <PersistGate loading={null} persistor={persistor}>
        {/* <ToastContainer /> */}
        <Loading />

        {children}
      </PersistGate>
    </Provider>
  )
}
