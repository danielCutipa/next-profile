import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <Box
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
      }}
    >
      <Container component='main' maxWidth='md' style={{ paddingTop: '30vh' }}>
        <Typography variant='h2' component='h1' gutterBottom>
          Daniel Cutipa
        </Typography>
        <Typography variant='h4' component='h2' gutterBottom>
          {'Frontend Developer with React js.'}
        </Typography>
        <Typography variant='h5' component='h2' gutterBottom>
          {'Team Leader and Coach.'}
        </Typography>
        <Typography variant='body1'>{`</>`}</Typography>
      </Container>
      <Footer />
    </Box>
  )
}

export default Home
