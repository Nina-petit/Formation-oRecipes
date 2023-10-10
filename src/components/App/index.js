import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

import Menu from 'src/containers/Menu';
import Home from 'src/containers/Home';
import Recipe from 'src/containers/Recipe';
import Error from 'src/components/Error';

import Loading from './Loading';

import './style.scss';

function App(props) {
  useEffect(() => {
    props.loadRecipes();
  }, []);

  if (props.loading) {
    return <Loading />;
  }
  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <Menu />
          <Home />
        </Route>
        <Route path="/recipe/:slug">
          <Menu />
          <Recipe />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
    </div>
  );
}

App.propTypes = {
  loading: PropTypes.bool,
  loadRecipes: PropTypes.func.isRequired,
};

App.defaultProps = {
  loading: false,
};

export default App;
