import { render, screen } from '@testing-library/react';
import WeatherCard from './WeatherCard';

test('renders learn react link', () => {
  render(<WeatherCard />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
