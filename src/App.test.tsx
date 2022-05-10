import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';

describe('React Router', () => {
  it('renders main page', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const about = screen.getByTestId('about-link');
    const main = screen.getByTestId('main-link');
    const input = screen.getByPlaceholderText('text');
    fireEvent.input(input, {
      target: { value: '123123' },
    });
    userEvent.click(about);
    expect(screen.getByTestId('about-link')).toBeInTheDocument();
    userEvent.click(main);
    expect(screen.getByTestId('main-link')).toBeInTheDocument();
    expect(screen.queryByPlaceholderText('text')).toContainHTML('123123');
  });
});
