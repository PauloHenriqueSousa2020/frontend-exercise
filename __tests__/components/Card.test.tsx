import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import { Card } from '@/components';

describe('Card Component Tests', () => {
  it('Should render Card component', () => {
    const planet = {
      name: "Tatooine",
      diameter: "10465",
      climate: "arid",
      gravity: "1 standard",
      terrain: "desert",
      population: "200000",
      url: "https://swapi.dev/api/planets/1/"
    }

    const handleOpenPlanetDetails = jest.fn();
    render(<Card planet={planet} handleOpenPlanetDetails={handleOpenPlanetDetails} />);

    expect(screen.getByTestId("card-container")).toBeInTheDocument();

    expect(screen.getByTestId("planet-image")).toBeInTheDocument();
    
    expect(screen.getByText("Tatooine")).toBeInTheDocument();

    expect(screen.getByText("Terreno:")).toBeInTheDocument();
    expect(screen.getByText("Diamêtro:")).toBeInTheDocument();
    expect(screen.getByText("Clima:")).toBeInTheDocument();
    expect(screen.getByText("População:")).toBeInTheDocument();
    expect(screen.getByText("Gravidade:")).toBeInTheDocument();

    expect(screen.getByText("desert")).toBeInTheDocument();
    expect(screen.getByText("10465")).toBeInTheDocument();
    expect(screen.getByText("arid")).toBeInTheDocument();
    expect(screen.getByText("200000")).toBeInTheDocument();
    expect(screen.getByText("1 standard")).toBeInTheDocument();

    expect(screen.getByTestId("card-border-line")).toBeInTheDocument();

    expect(screen.getByRole('button', { name: /ver detalhes/i })).toBeInTheDocument();
  });

  it('should test click button functionality', () => {
    const planet = {
      name: "Tatooine",
      diameter: "10465",
      climate: "arid",
      gravity: "1 standard",
      terrain: "desert",
      population: "200000",
      url: "https://swapi.dev/api/planets/1/"
    }

    const handleOpenPlanetDetails = jest.fn();
    render(<Card planet={planet} handleOpenPlanetDetails={handleOpenPlanetDetails} />);

    const button = screen.getByRole('button', { name: /ver detalhes/i });
    fireEvent.click(button);

    expect(handleOpenPlanetDetails).toHaveBeenCalledWith(planet.url);
  });
});