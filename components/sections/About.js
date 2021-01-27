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
              <img
                src='/src/images/photo.jpg'
                className={styles.img}
                alt='photo'
              />
            </Grid>
            <Grid item sm={6} xs={12} className={styles.text}>
              <Box>
                <Typography variant='h5' gutterBottom component='div'>
                  Text about me
                </Typography>
                <Button variant='contained' color='secondary'>
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
