import React from 'react';
import { render, cleanup } from './core/utils/test'
import App from './App';

afterEach(cleanup)

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/header.title/i);
  expect(linkElement).toBeInTheDocument();
});
