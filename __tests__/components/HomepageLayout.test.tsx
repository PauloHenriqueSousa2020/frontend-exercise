import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { HomeLayout } from '@/components'

describe('HomeLayout Component Tests', () => {
  it('Should render HomeLayout component', () => {
    render(<HomeLayout />);

    const starWarsLogo = screen.getByAltText('Star Wars logo');
    expect(starWarsLogo).toBeInTheDocument();

    expect(screen.getByText('Bem-vindo ao Universo de Star Wars!')).toBeInTheDocument();
    expect(screen.getByText(/Explore o fascinante universo de Star Wars/)).toBeInTheDocument();

    const exploreLink = screen.getByRole('link', { name: /explorar planetas/i });
    expect(exploreLink).toBeInTheDocument();

    expect(screen.getByTestId('theme-switch-container')).toBeInTheDocument();
    expect(screen.getByTestId('planet-info-card-container')).toBeInTheDocument();
  });  
});