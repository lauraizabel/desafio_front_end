import React from 'react';

import { Switch, Route, BrowserRouter } from 'react-router-dom';
import ListFill from '../pages/ListFill';
import RegistrationFilling from '../pages/RegistrationFilling';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/">
        <ListFill />
      </Route>
      <Route path="/register-form">
        <RegistrationFilling />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
