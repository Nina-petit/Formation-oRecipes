// SI 0 recettes --> "Découvrez prochainement nos recettes"
// SI 1 recettes --> "Découvrez notre recette"
// SI 2-N recettes --> "Découvrez nos recettes"

import { getTitleByRecipesNumber } from 'src/selectors/recipes';

describe('getTitleByRecipesNumber', () => {
  describe('structure', () => {
    it('should be a function', () => {
      expect(typeof getTitleByRecipesNumber).toBe('function');
    });

    it('should return a string', () => {
      expect(typeof getTitleByRecipesNumber()).toBe('string');
    });
  });


  describe('execution', () => {
    it('should return the correct string if there is no recipe', () => {
      const mockState = {
        recipes: {
          list: []
        }
      };
      expect(getTitleByRecipesNumber(mockState)).toBe('Découvrez prochainement nos recettes');
    });
    it('should return the correct string if there is no recipe', () => {
      const mockState = {
        recipes: {
          list: [
            { id: 1, title: 'crepe'}
          ]
        }
      };
      expect(getTitleByRecipesNumber(mockState)).toBe('Découvrez notre recette');
    });
    it('should return the correct string if there is no recipe', () => {
      const mockState = {
        recipes: {
          list: [
            { id: 1, title: 'crepe' },
            { id: 2, title: 'pizza'}
          ]
        }
      }
      expect(getTitleByRecipesNumber(mockState)).toBe('Découvrez nos recettes');
    });
  });
});
