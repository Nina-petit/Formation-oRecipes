import { connect } from 'react-redux';

import { getRecipes } from 'src/actions/recipes';

import App from 'src/components/App';

const mapStateToProps = (state) => ({
  loading: state.recipes.loading,
});

const mapDispatchToProps = (dispatch) => ({
  loadRecipes: () => {
    dispatch(getRecipes());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
