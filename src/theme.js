import { createMuiTheme } from '@material-ui/core/styles'
import { pink, red } from '@material-ui/core/colors'

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#512da8'
    },
    secondary: pink,
    error: {
      main: red.A400
    },
    background: {
      default: '#fff'
    }
  }
})

export default theme
