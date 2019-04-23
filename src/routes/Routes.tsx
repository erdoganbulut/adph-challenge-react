import React, { FunctionComponent } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home/Home';

const Routes: FunctionComponent = () => (
  <Switch>
    <Route path="/" exact component={Home} />
  </Switch>
);

export default Routes;
