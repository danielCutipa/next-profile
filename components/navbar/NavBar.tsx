import Link from 'next/link'
import Typography from '@material-ui/core/Typography'
import { Button } from '@material-ui/core'

export default function NavBar() {
  return (
    <Typography>
      <Link href='/'>
        <Button variant='contained' color='primary'>
          Primary
        </Button>
      </Link>
      <Link href='/about'>
        <Button variant='contained' color='secondary'>
          Secondary
        </Button>
      </Link>
    </Typography>
  )
}
