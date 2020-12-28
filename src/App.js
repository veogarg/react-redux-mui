import { Typography } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import theme from 'utils/theme';
import { createBrowserHistory } from 'history';
import configStore from 'utils/store';
import CssBaseline from '@material-ui/core/CssBaseline';
import Routes from 'routes';

const App = () => {
  const history = createBrowserHistory();
  const store = configStore({}, history);
  return (
    <Provider store={store}>
      <BrowserRouter basename="/carolina-react-admin-dashboard-material-ui-free/">
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
