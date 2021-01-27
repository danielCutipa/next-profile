import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  makeStyles,
  Typography
} from '@material-ui/core'
import styles from 'styles/Projects.module.css'

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
        Projects
      </Typography>

      <Container maxWidth='md'>
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item sm={5} xs={12}>
              <Box>
                <Typography variant='h4' gutterBottom component='div'>
                  ThinkShopStore
                </Typography>
                <Typography variant='body1' gutterBottom>
                  body1. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum
                  inventore consectetur, neque doloribus, cupiditate numquam
                  dignissimos laborum fugiat deleniti? Eum quasi quidem
                  quibusdam.
                </Typography>
                <Link href='https://thinkshopstore.com/' target='_blank'>
                  <Button variant='outlined' color='secondary'>
                    See live
                  </Button>
                </Link>
              </Box>
            </Grid>

            <Grid item sm={7} xs={12} align='center'>
              <img
                src='/src/images/think.PNG'
                className={styles.img}
                alt='photo'
              />
            </Grid>
          </Grid>
        </div>
      </Container>
    </Box>
  )
}

export default About
