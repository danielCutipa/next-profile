import Footer from '@components/footer/Footer'
import NavBar from '@components/navbar/NavBar'

type LayoutProps = {
  children?: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => (
  <>
    <NavBar />
    {children}
    <Footer />
  </>
)

export default Layout
