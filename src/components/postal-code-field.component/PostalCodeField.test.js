import { render, screen } from '@testing-library/react';
import PostalCodeField from './PostalCodeField';

test('renders learn react link', () => {
  render(<PostalCodeField />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
