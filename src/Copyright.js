import Typography from '@material-ui/core/Typography'
import MuiLink from '@material-ui/core/Link'

export default function Copyright() {
  return (
    <Typography
      variant='body2'
      color='textSecondary'
      align='center'
      style={{ marginTop: 'auto', padding: 30, bottom: 0 }}
    >
      {'Copyright © '}
      <MuiLink color='inherit' href='https://danielcutipa.com/'>
        Daniel Cutipa
      </MuiLink>{' '}
      {new Date().getFullYear()}.
    </Typography>
  )
}
