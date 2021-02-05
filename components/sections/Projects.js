import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  makeStyles,
  Typography
} from '@material-ui/core'
import Project from 'components/Project'
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
          <Project
            title={'Universiclick'}
            description={
              'Universiclick is one of the best platform for managing students and teachers of an educational institution.'
            }
            url={'https://universiclick.com/'}
            image={'/src/images/universiclick.PNG'}
          />
          <Project
            title={'ThinkShopStore'}
            // description={`ThinkShop is a web application for the sale of real state such as apartments, it's build with Odoo taking advantage of the tools it provides.`}
            description={`ThinkShop is a web application for the sale of real state such as
            apartments, it's build with`}
            description2={'taking advantage of the tools it provides.'}
            url={'https://thinkshopstore.com/'}
            techUrl={'https://www.odoo.com'}
            tech={'Odoo'}
            image={'/src/images/think.PNG'}
          />
        </div>
      </Container>
    </Box>
  )
}

export default About
