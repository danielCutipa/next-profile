import CssBaseline from '@material-ui/core/CssBaseline'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

import Footer from 'components/footer/Footer'

const Home = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
      }}
    >
      <CssBaseline />
      <Container component='main' sx={{ mt: 8, mb: 2 }} maxWidth='sm'>
        <Typography variant='h2' component='h1' gutterBottom>
          Daniel Cutipa
        </Typography>
        <Typography variant='h5' component='h2' gutterBottom>
          {'Frontend Developer with React.js.'}
        </Typography>
        <Typography variant='h5' component='h2' gutterBottom>
          {'Team leader and coach.'}
        </Typography>
        <Typography variant='body1'>Sticky footer placeholder.</Typography>
      </Container>
      <Box
        component='footer'
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800]
        }}
      >
        <Container maxWidth='sm'>
          <Typography variant='body1'>
            My sticky footer can be found here.
          </Typography>
          <Footer />
        </Container>
      </Box>
    </Box>
  )
}

export default Home
