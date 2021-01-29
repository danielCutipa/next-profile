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
                  ThinkShop is a web application for the sale of real state such
                  as apartments, it's build with{' '}
                  <Link href='https://www.odoo.com' target='_blank'>
                    Odoo
                  </Link>{' '}
                  taking advantage of the tools it provides.
                </Typography>

                <Button
                  variant='outlined'
                  color='secondary'
                  href='https://thinkshopstore.com/'
                  target='_blank'
                >
                  See live
                </Button>
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
