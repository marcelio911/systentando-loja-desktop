import { isRouteErrorResponse, useRouteError } from 'react-router-dom'

import i18next from 'i18next'

const RootErrorFallback = () => {
  const error = useRouteError()

  console.log(error)

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return (
        <div>
          <h1> {i18next.t('error.404')}</h1>
          <p>Sorry, we couldn&apos;t find the page you were looking for</p>
        </div>
      )
    }
  }

  return (
    <div>
      <h1>Something went wrong</h1>
      <p>Try refreshing the page</p>
    </div>
  )
}

export default RootErrorFallback
