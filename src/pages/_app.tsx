import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyles from 'styles/global'
import 'mapbox-gl/dist/mapbox-gl.css'
import '@mapbox/mapbox-gl-directions/src/mapbox-gl-directions.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>My Trip</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06092B" />
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
