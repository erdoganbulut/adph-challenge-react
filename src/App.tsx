import React, { Fragment } from 'react';
import { hot } from 'react-hot-loader';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <Fragment>
      <div className="App">
        <Routes />
      </div>
    </Fragment>
  );
};

export default hot(module)(App);
