import React from 'react'
import ReactDOM from 'react-dom/client'
import { initReactI18next } from 'react-i18next'

import i18next from 'i18next'

import FileSystemRouter from '@renderer/components/FileSystemRouter/FileSystemRouter'
import RootProvider from '@renderer/providers'

const currentResource = await window.electron.getCurrentI18nextResource()

await i18next.use(initReactI18next).init({
  lng: currentResource.language,
  resources: {
    [currentResource.language]: {
      [currentResource.ns]: currentResource.resource,
    },
  },
  debug: import.meta.env.MODE === 'development',
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RootProvider>
      <FileSystemRouter />
    </RootProvider>
  </React.StrictMode>,
)
