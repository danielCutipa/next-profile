import { Typography, Box, Container } from '@material-ui/core'
import Copyright from './Copyright'
import styles from 'styles/Footer.module.css'

const Footer = () => {
  return (
    <Box component='footer' className={styles.footer}>
      <Container maxWidth='md'>
        <Typography variant='body1' align='center'>
          Made with ❤ from Bolivia.
        </Typography>
        <Copyright />
      </Container>
    </Box>
  )
}

export default Footer
// https://hackernoon.com/how-to-make-a-silky-smooth-scroll-in-react-5dj3xdl