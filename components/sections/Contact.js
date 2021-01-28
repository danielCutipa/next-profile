import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  makeStyles,
  Typography
} from '@material-ui/core'
import ReCAPTCHA from 'react-google-recaptcha'
import styles from 'styles/Contact.module.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  }
}))

const About = () => {
  const classes = useStyles()

  const onChange = (value) => {
    console.log(value)
  }

  return (
    <Box component='section' color='secondary' className={styles.wrap}>
      <Typography variant='h2' align='center' sx={{ mt: 2 }} gutterBottom>
        Contact
      </Typography>
      <Typography
        variant='h5'
        align='center'
        color='secondary'
        sx={{ mt: '10vh' }}
        gutterBottom
      >
        Would you like to work with me? Awesome!
      </Typography>

      <Container maxWidth='md'>
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12} align='center'>
              <ReCAPTCHA
                sitekey='6Le9_j0aAAAAALXLTvvKls5rQQxHjm-IcIEKFYJ8'
                onChange={onChange}
                style={{ marginBottom: 16 }}
              />

              <Link href='#' target='_blank'>
                <Button variant='outlined'>let's talk</Button>
              </Link>
            </Grid>
          </Grid>
        </div>
      </Container>
    </Box>
  )
}

export default About
