import { createTheme, IconButton } from '@mui/material'
import { blueGrey, grey, red } from '@mui/material/colors'

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: 'white',
    },
    primary: {
      main: '#2196f3',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    text: {
      primary: blueGrey[800],
      secondary: grey[800],
    },
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },
    },
    MuiCard: {
      defaultProps: {
        elevation: 0,
      },
    },
  },
})
