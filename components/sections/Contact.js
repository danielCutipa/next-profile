import {
  Box,
  Button,
  Container,
  Grid,
  makeStyles,
  Typography
} from '@material-ui/core'
import styles from 'styles/Contact.module.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  }
}))

const About = () => {
  const classes = useStyles()

  return (
    <Box component='section' color='secondary' className={styles.wrap}>
      <Typography variant='h2' align='center' sx={{ mt: 2 }} gutterBottom>
        Contact
      </Typography>
      <Typography variant='h5' align='center' sx={{ mt: '5vh' }} gutterBottom>
        Would you like to work with me? Awesome!
      </Typography>

      <Container maxWidth='md'>
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12} align='center'>
              <Button
                variant='outlined'
                color='secondary'
                href='https://wa.me/message/5VLUWE26T3BKP1'
                target='_blank'
              >
                let's talk
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </Box>
  )
}

export default About
