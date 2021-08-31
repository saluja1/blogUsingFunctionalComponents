import React from 'react';
import { render } from '@testing-library/react';
import CopyrightBlock from '.';

test('renders copyright component', () => {
  const { getByText } = render(<CopyrightBlock copyright={"Copyright Text"} />);
  const linkElement = getByText(/Copyright Text/i);
  expect(linkElement).toBeInTheDocument();
});
