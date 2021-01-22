import Footer from '@components/footer/Footer'

type LayoutProps = {
  children?: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => (
  <>
    {children}
    <Footer />
  </>
)

export default Layout
