import { AppProps } from 'next/app'
import '../global.css'

import CartProvider from '@store/Cart'
import Layout from '@components/layout/Layout'

const MyApp = ({ Component, pageProps }: AppProps) => {
  // Aditional props
  // Aditional layout
  // Manejar errores - componentDidCatch
  return (
    <Layout>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </Layout>
  )
}

export default MyApp
