import { Link, Typography, Box, Container } from '@material-ui/core'

const Footer = () => {
  return (
    <Box
      component='footer'
      style={{
        marginTop: 'auto',
        bottom: 0
      }}
    >
      <Container maxWidth='sm' style={{ marginBottom: 10 }}>
        <Typography variant='body1' align='center'>
          Made with ❤ from Bolivia.
        </Typography>
        <Typography variant='body2' color='textSecondary' align='center'>
          {'Copyright © '}
          <Link color='inherit' href='https://danielcutipa.com/'>
            Daniel Cutipa
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Container>
    </Box>
  )
}

export default Footer
