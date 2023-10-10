export const GET_RECIPES = 'GET_RECIPES';
export const GET_RECIPES_SUCCESS = 'GET_RECIPES_SUCCESS';

export const getRecipes = () => ({
  type: GET_RECIPES,
});

export const getRecipesSuccess = (recipes) => (
  {
    type: GET_RECIPES_SUCCESS,
    recipes,
  }
);
