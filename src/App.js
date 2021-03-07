import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import routes from 'routes';
import NotFound from 'containers/NotFound';

import {ThemeProvider} from '@material-ui/core';
import theme from 'materialTheme';

function App () {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Switch>
          {routes.map ((item, index) => (
            <Route
              key={index}
              exact
              path={item.path}
              component={item.component}
            />
          ))}
          <Route component={NotFound} />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
