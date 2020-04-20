import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("something something", () => {
  expect(true).toBe(true);
})

test("something something else", () => {
  expect(true).toBe(false);
})