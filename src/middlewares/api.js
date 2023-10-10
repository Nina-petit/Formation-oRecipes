import axios from 'axios';

import { GET_RECIPES, getRecipesSuccess } from 'src/actions/recipes';

const apiMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_RECIPES:
      axios.get('http://localhost:3001/recipes')
        .then((response) => {
          store.dispatch(getRecipesSuccess(response.data));
        });
      next(action);
      break;
    default:
      next(action);
      break;
  }
};

export default apiMiddleware;
