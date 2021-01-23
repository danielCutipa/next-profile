import * as React from 'react'
import Head from 'next/head'
import 'styles/global.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Daniel Cutipa | Profile</title>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
