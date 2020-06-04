import React from 'react';
// import { render } from '@testing-library/react';
import Enzyme, { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import { render } from '@testing-library/react';

import Adapter from 'enzyme-adapter-react-16';
import SingleCard from '../SingleCard';

Enzyme.configure({ adapter: new Adapter() });

const mockProps = {
  name: 'Meow',
  text: 'SomeText',
  type: 'SomeType',
  imageUrl: 'https://google.com',
  set: 'SetName',
};

describe('<SingleCard>', () => {
  const wrapper = shallow(<SingleCard card={mockProps} />);

  test('should render class with class name', () => {
    // Expect the wrapper object to be defined
    expect(wrapper.find('.elder-card')).toBeDefined();
  });
});
