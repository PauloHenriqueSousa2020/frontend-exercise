import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { ThemeSwitch } from '@/components';
import { ThemeProvider } from 'next-themes';

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

Object.defineProperty(window, 'scrollTo', {
  writable: true,
  value: jest.fn(),
});

describe('ThemeSwitch Component Tests', () => {
  it('Should render ThemeSwitch component', async () => {
    render(
      <ThemeProvider defaultTheme="light">
        <ThemeSwitch />
      </ThemeProvider>
    );

    const themeSwitchContainer = screen.getByTestId('theme-switch-container');
    expect(themeSwitchContainer).toBeInTheDocument();

    const checkboxInput = screen.getByRole('checkbox');
    expect(checkboxInput).toBeInTheDocument();

    expect(screen.getByTestId('sun-icon')).toBeInTheDocument();

    fireEvent.click(checkboxInput);

    expect(screen.getByTestId('moon-icon')).toBeInTheDocument();
  });
});