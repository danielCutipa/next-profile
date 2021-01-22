import React, { PropsWithChildren } from 'react'

import Navbar from '@components/navbar/Navbar'
import Footer from '@components/footer/Footer'

type LayoutProps = {
  children?: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
)

export default Layout
