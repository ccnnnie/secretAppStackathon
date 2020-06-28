// import grey from '@material-ui/core/colors/grey';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    secondary: {
      main: '#4adf3d',
    },
    background: {
      paper: '#000000',
      default: '#000000',
    },
    text: {
      primary: '#4adf3d',
      disabled: '#fff',
    },
  },
  typography: {
    fontFamily:
      "Menlo, 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', 'Lucida Console', Monaco, monospace;",
  },
  overrides: {
    MuiContainer: {
      root: {
        textAlign: 'center',
        paddingTop: '3rem',
      },
    },
    MuiTextField: {
      root: {
        paddingTop: '1rem',
        paddingBottom: '1rem',
        '&.Mui-focused fieldset': {
          borderColor: 'green',
        },
      },
    },
  },
  props: {
    MuiTypography: {
      gutterBottom: true,
      display: 'block',
    },
    MuiButton: {
      variant: 'outlined',
    },
    MuiTextField: {
      fullWidth: true,
      variant: 'outlined',
      color: 'secondary',
    },
    MuiContainer: {
      maxWidth: 'md',
    },
  },
});

export default theme;
