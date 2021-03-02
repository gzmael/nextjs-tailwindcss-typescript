import React from 'react'
import { AppProps } from 'next/app'
import { GlobalStyles } from 'twin.macro'
import { GlobalStyle } from '../styles/globals'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyles />
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
