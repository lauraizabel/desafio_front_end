import React from 'react';

import { Switch, Route, BrowserRouter } from 'react-router-dom';
import ListFill from '../pages/ListFill';
import RegistrationFilling from '../pages/RegistrationFilling';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={ListFill} />
      <Route path="/register-form" exact component={RegistrationFilling} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
