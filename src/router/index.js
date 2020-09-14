import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { renderRoutes } from 'react-router-config';
import Routes from './routes';
import theme from '../../styles/theme';

const Router = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      {renderRoutes(Routes)}
    </BrowserRouter>
  </ThemeProvider>
);

export default Router;
