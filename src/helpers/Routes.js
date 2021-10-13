import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import LoginPage from '../pages/LoginPage';
import SignalsPage from '../pages/SignalsPage';

function Routes({ userToken, setUserToken }) {
  return (
    <Switch>
      <Route exact path='/' component={() => <SignalsPage userToken={userToken} setUserToken={setUserToken} />} />
      <Route path='/' component={() => <LoginPage userToken={userToken} setUserToken={setUserToken} />} />
    </Switch>
  );
}

Routes.propTypes = {
  userToken: PropTypes.any.isRequired,
  setUserToken: PropTypes.func.isRequired
};

export default Routes;
