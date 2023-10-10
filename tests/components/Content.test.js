import React from 'react';
// shallow est une fonction de enzyme qui permet de
// faire un "fake" rendu de notre composant
import { shallow } from 'enzyme';

import Content from 'src/components/Content';
import Card from 'src/components/Card';

// on importe nos données statiques
import recipes from 'src/data';

describe('<Content />', () => {
  // on fait un faux rendu d'un bout de JSX
  // on obtient un objet wrapper
  // sur lequel on pourra faire des tests
  const wrapper = shallow(
    <Content title="Test" text="Hello World" recipes={recipes} />
  );

  it('should have a title', () => {
    expect(wrapper.find('.content-title'))
      .toHaveLength(1);
  });

  it('should have a text content', () => {
    expect(wrapper.find('.content-text'))
      .toHaveLength(1);
  });

  it('should have as many Cards as recipes', () => {
    expect(wrapper.find(Card))
      .toHaveLength(recipes.length);
  });

  it('should not display any Cards if no recipes were given', () => {
    const wrapperWithoutRecipes = 
      shallow(<Content title="Test" text="Hello World"/>);

    expect(wrapperWithoutRecipes.find(Card)).toHaveLength(0);
  });
});
