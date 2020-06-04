// import { render } from '@testing-library/react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Grid from '../Grid';

Enzyme.configure({ adapter: new Adapter() });

// mock useContext
jest.mock('react', () => {
  const ActualReact = require.requireActual('react');
  return {
    ...ActualReact,
    useContext: () => ({
      store: {
        cards: [],
        filteredCards: [],
      },
    }),
  };
});

describe('<Filter />', () => {
  const wrapper = shallow(<Grid />);

  test('should render', () => {
    // Expect the wrapper object to be defined
    expect(wrapper.find('.grid')).toBeDefined();
  });
});
