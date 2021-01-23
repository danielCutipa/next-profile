import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import ProTip from '../src/ProTip'
import Link from '../src/Link'
import Copyright from '../src/Copyright'

const Index = () => {
  return (
    <Container
      maxWidth='sm'
      style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
    >
      <Box style={{ marginTop: '20vh' }}>
        <Typography variant='h2' component='h1' gutterBottom>
          Daniel Cutipa
        </Typography>
        <Typography variant='h4' component='h2' gutterBottom>
          {'Frontend Developer with React js.'}
        </Typography>
        <Typography variant='h5' component='h2' gutterBottom>
          {'Team Leader and Coach.'}
        </Typography>
        <Link href='/about' color='secondary'>
          Go to the about page
        </Link>
        <ProTip />
      </Box>
      <Copyright />
    </Container>
  )
}

export default Index

// <Box
//       style={{
//         display: 'flex',
//         flexDirection: 'column',
//         minHeight: '100vh'
//       }}
//     >
//       <Container component='main' maxWidth='md' style={{ paddingTop: '30vh' }}>
//         <Typography variant='h2' component='h1' gutterBottom>
//           Daniel Cutipa
//         </Typography>
//         <Typography variant='h4' component='h2' gutterBottom>
//           {'Frontend Developer with React js.'}
//         </Typography>
//         <Typography variant='h5' component='h2' gutterBottom>
//           {'Team Leader and Coach.'}
//         </Typography>
//         <Typography variant='body1'>{`</>`}</Typography>
//       </Container>
//       <Footer />
//     </Box>
