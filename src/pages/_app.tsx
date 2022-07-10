import type { AppProps } from 'next/app'

import { ApolloProvider } from '@apollo/client'
import { apolloClient } from '../api/apolloClient'

import '../styles/globals.css'
import { FunctionComponent, useState, Fragment } from 'react'
import { interceptError } from '../contexts'

type ContextProviderProps = {
  children: React.ReactNode; // 👈️ type children
};

export const loggedUserId = 5

function MyApp({ Component, pageProps }: AppProps) {
  
  const ContextProvider: FunctionComponent<ContextProviderProps> = ({ children }) => {

    const [error, serError] = useState<string>('')

    return (
        <Fragment>
          <interceptError.Provider value={{error, serError}}>
            <ApolloProvider client={apolloClient}>
              {children}
            </ApolloProvider>
          </interceptError.Provider>
        </Fragment>
    )
  }

  return (
    <ContextProvider>
        <Component {...pageProps} />
    </ContextProvider>
  )
}

export default MyApp
