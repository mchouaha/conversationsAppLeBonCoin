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

    return (
        <Fragment>
            <ApolloProvider client={apolloClient}>
              {children}
            </ApolloProvider>
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
