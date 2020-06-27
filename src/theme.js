export const themeObj = {
  palette: {
    type: 'light',
    primary: {
      main: '#009688',
      dark: '#00796B',
      light: '#B2DFDB',
    },
    secondary: {
      main: '#fafafa',
      dark: '#fafafa',
      light: '#000000',
    },
    divider: '#BDBDBD',
  },
  overrides: {
    MuiContainer: {
      root: {
        textAlign: 'center',
        paddingTop: '3rem',
      },
    },

    // MuiTab: {
    //   root: {
    //     color: 'white',
    //     '&:hover': {
    //       backgroundColor: 'purple',
    //     },
    //   },
    // },
  },
  props: {
    MuiTypography: {
      gutterBottom: true,
    },
    // MuiGrid: {
    //   justify: 'center',
    //   alignItems: 'center',
    // },
  },
};
