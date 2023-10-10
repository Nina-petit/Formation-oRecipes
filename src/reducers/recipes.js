import { GET_RECIPES, GET_RECIPES_SUCCESS } from 'src/actions/recipes';

export const initialState = {
  list: [],
  loading: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        loading: true,
      };
    case GET_RECIPES_SUCCESS:
      return {
        ...state,
        // je met les recettes dans l'action
        // dans mon state
        list: action.recipes,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
