import { Box, Button, Grid, Link, Typography } from '@material-ui/core'
import styles from 'styles/Project.module.css'

const Project = ({
  title,
  description,
  description2,
  url,
  tech,
  techUrl,
  image
}) => {
  return (
    <Grid container spacing={3} style={{ padding: '20px 0px' }}>
      <Grid item sm={5} xs={12}>
        <Box>
          <Typography variant='h4' gutterBottom component='div'>
            {title || 'title'}
          </Typography>
          <Typography variant='body1' gutterBottom>
            {description}
            {tech ? (
              <>
                {' '}
                <Link href={techUrl} target='_blank'>
                  {tech}
                </Link>{' '}
              </>
            ) : null}
            {description2}
          </Typography>

          <Button
            variant='outlined'
            color='secondary'
            href={url || '#'}
            disabled={url ? false : true}
            target='_blank'
          >
            See live
          </Button>
        </Box>
      </Grid>

      <Grid item sm={7} xs={12} align='center'>
        <img src={image} className={styles.img} alt='photo' />
      </Grid>
    </Grid>
  )
}

export default Project
