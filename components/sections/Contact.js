import { Box, Paper, Typography } from '@material-ui/core'
import styles from 'styles/Contact.module.css'
import BuildIcon from '@material-ui/icons/Build'

const About = () => {
  return (
    <Box component='section' color='secondary' className={styles.wrap}>
      <Typography variant='h2' align='center' sx={{ mt: 2 }} gutterBottom>
        Contact
      </Typography>
      <Typography
        variant='h3'
        align='center'
        color='secondary'
        sx={{ mt: '10vh' }}
        gutterBottom
      >
        Building <BuildIcon />
      </Typography>
      {/* <div className={styles.root}>
        <Paper className={styles.paper} elevation={15} />
        <Paper className={styles.paper} elevation={24} />
      </div> */}
    </Box>
  )
}

export default About
