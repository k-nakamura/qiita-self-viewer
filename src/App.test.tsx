import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from "./view/Home";

test('render home', () => {
  render(<Home/>);
  const linkElement = screen.getByText(/This is Home/i);
  expect(linkElement).toBeInTheDocument();
})
