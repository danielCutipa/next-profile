import { Box, Container, Typography } from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook'
import Grid from '@material-ui/core/Grid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import TwitterIcon from '@material-ui/icons/Twitter'
import { blue, grey } from '@material-ui/core/colors'
import Link from 'src/Link'
import styles from 'styles/Hero.module.css'
import ProTip from '../ProTip'

const Hero = () => {
  return (
    <Container maxWidth='sm' component='section' className={styles.wrap}>
      <Box>
        <Typography variant='h4' gutterBottom>
          Hi, my name is
        </Typography>
        <Typography variant='h2' color='secondary' gutterBottom>
          Daniel Cutipa
        </Typography>
        <Typography variant='h4' gutterBottom>
          {'Frontend Developer with React js.'}
        </Typography>
        <Typography variant='h5' gutterBottom>
          {'Team Leader and Coach.'}
        </Typography>

        <Grid container className={styles.icons}>
          <Link href='https://www.linkedin.com/in/danielcutipa'>
            <LinkedInIcon style={{ color: blue['A700'] }} />
          </Link>
          <Link href='https://github.com/danielCutipa'>
            <GitHubIcon style={{ color: grey['900'] }} />
          </Link>
          <Link href='https://www.facebook.com/daniel.cutipa.u'>
            <FacebookIcon style={{ color: blue['A700'] }} />
          </Link>
          <Link href='https://twitter.com/d_cutipa'>
            <TwitterIcon style={{ color: blue[500] }} />
          </Link>
        </Grid>
        <ProTip />
      </Box>
    </Container>
  )
}

export default Hero
