import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import App from './containers/App';
import store from './store';
import './styles.css';
import { ORANGE, BLUE } from './constants/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: ORANGE,
    },
    secondary: {
      main: BLUE,
    },
  },
});

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
