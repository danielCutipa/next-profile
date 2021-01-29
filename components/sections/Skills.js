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
        Skills
      </Typography>

      <Container maxWidth='md'>...</Container>
    </Box>
  )
}

export default About
