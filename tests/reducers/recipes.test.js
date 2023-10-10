import reducer from 'src/reducers/recipes';
import { getRecipes, getRecipesSuccess } from 'src/actions/recipes';
import { initialState } from '../../src/reducers/recipes';

// describe nous permet d'identifier une section dans
// nos tests
// cela permettra a JEST d'afficher quelle partie fonctionne ou pas
describe('recipes reducer', () => {
  // partie structure
  describe('structure', () => {
    // ici nous ferons nos assertions
    it('should be a function', () => {
      expect(typeof reducer).toBe('function');
    });

    // elle renvoie un objet
    it('should return an object', () => {
      // ici on fera la vérification
      // je m'attend a ce que le type retour du reducer soit un objet
      expect(typeof reducer()).toBe('object');
    });
  });

  // partie l'exécution
  describe('execution', () => {
    // elle gère correctement le state initial
    it('should return the initial state when called without arguments', () => {
      expect(reducer()).toEqual(initialState);
    });

    it('should handle correctly GET_RECIPES action', () => {
      const oldState = reducer();
      const action = getRecipes();

      expect(reducer(oldState, action))
        .toEqual({
          ...oldState,
          loading: true,
        });
    });

    it('should handle correctly GET_RECIPES_SUCCESS action', () => {
      const oldState = reducer();
      const mockRecipes = [{
        id: 1,
        title: 'crepe',
      }];
      const action = getRecipesSuccess(mockRecipes);

      expect(reducer(oldState, action))
        .toEqual({
          ...oldState,
          list: mockRecipes,
          loading: false,
        });
    });
  });
});
