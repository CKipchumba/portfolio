import { red } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'



// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#519DA6',
    },
    secondary: {
      main: '#D9A79C',
    },

    common: {
        black: '#1E1E1E',
    },
    
    error: {
      main: red.A400,
    },
    warning: {
      main: red.A100,
    },
    background: {
      default: '#fff',
    },
  },

  shape: {
    borderRadius: 12
  },
})


export default theme