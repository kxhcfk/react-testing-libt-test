import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app components', () => {
  render(<App />);
  const roleEl = screen.getByRole('button');
  const textEl = screen.getByText(/test/i);
  expect(roleEl).toBeInTheDocument();
  expect(textEl).toBeInTheDocument();
});
