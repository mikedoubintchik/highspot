import { render } from '@testing-library/react';
import React from 'react';
import App from '../App';

describe('App should', () => {
  beforeEach(() => {
    // have to mock the IntersectionObserver
    global.IntersectionObserver = class IntersectionObserver {
      observe() {
        return this;
      }
    };
  });

  test('render app title', () => {
    const { getByText } = render(<App />);
    const appTitle = getByText(/Elder Scrolls Cards/i);
    expect(appTitle).toBeInTheDocument();
  });
});
