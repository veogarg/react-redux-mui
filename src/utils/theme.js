import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

let theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[500]
    },
    secondary: {
      main: green[500]
    }
  },
  typography: {
    subtitle1: {
      fontSize: 12
    },
    body1: {
      fontWeight: 500
    },
    button: {
      fontStyle: 'italic'
    },
    h1: {
      color: '#d0d0d0'
    }
  }
});
theme = responsiveFontSizes(theme);

export default theme;
