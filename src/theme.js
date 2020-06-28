// import grey from '@material-ui/core/colors/grey';
import green from '@material-ui/core/colors/green';

export const themeObj = {
  palette: {
    type: 'dark',
    secondary: green,
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
    },
    MuiButton: {
      variant: 'outlined',
    },
    MuiTextField: {
      fullWidth: true,
      variant: 'outlined',
      color: 'secondary',
    },
  },
};
