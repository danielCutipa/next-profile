import Container from '@material-ui/core/Container'
import Footer from './Footer'
import styles from 'styles/Layout.module.css'

const Layout = ({ children }) => {
  const handleVerify = (token) => {
    console.log(token)
  }

  return (
    <Container
      disableGutters={true}
      maxWidth={false}
      className={styles.container}
    >
      {children}
      <Footer />
    </Container>
  )
}

export default Layout
