import Image from 'next/image'
import {
  Box,
  Paper,
  Grid,
  Typography,
  Container,
  Button
} from '@material-ui/core'
import styles from 'styles/About.module.css'
import { makeStyles } from '@material-ui/core/styles'
import CardMedia from '@material-ui/core/CardMedia'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  media: {
    height: 300
  }
}))

const About = () => {
  const classes = useStyles()

  return (
    <Box component='section' color='secondary' className={styles.wrap}>
      <Typography variant='h2' align='center' sx={{ mt: 2 }} gutterBottom>
        About me
      </Typography>

      <Container maxWidth='md'>
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item sm={6} xs={12} align='center'>
              <Image
                src='/src/images/photo.jpg'
                className={styles.img}
                alt='photo_daniel_cutipa'
              />
            </Grid>
            <Grid item sm={6} xs={12} className={styles.text}>
              <Box>
                <Typography variant='h5' gutterBottom component='div'>
                  I am a software developer in web technologies, passionate
                  about building web applications that make people's lives
                  easier.
                </Typography>
                <Button
                  variant='contained'
                  href='https://www.linkedin.com/in/danielcutipa'
                  target='_blank'
                  color='secondary'
                >
                  Resume
                </Button>
              </Box>
            </Grid>
          </Grid>
        </div>
      </Container>
    </Box>
  )
}

export default About

// https://richardkaufman.dev/
// https://jonalvarezz.com/
// https://nicobytes.com/
