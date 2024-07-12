import '@testing-library/jest-dom';
import { render, screen, fireEvent, act } from '@testing-library/react';
import Home from '@/pages';

jest.mock('../../src/hooks/useGetPlanets.ts', () => ({
  useGetPlanets: jest.fn(() => ({
    planets: [
      { name: 'Planet A', population: 1000, ulr: "https://swapi.dev/api/planets/1/" },
      { name: 'Planet B', population: 2000, url: "https://swapi.dev/api/planets/2/" }
    ],
    totalElements: 60,
    isValidating: false,
  })),
}));

jest.mock('../../src/hooks/useGetPlanetsDetail.ts', () => ({
  useGetPlanetsDetails: jest.fn(() => ({
    planetDetail: {
      name: 'Tatooine',
      residents: [],
      films: [],
      rotation_period: '23',
      orbital_period: '304',
      diameter: '10465',
      climate: 'arid',
      gravity: '1 standard',
      terrain: 'desert',
      surface_water: '1',
      population: '200000'
    },
    isValidating: false
  }))
}));

describe('Home Page Tests', () => {
  it('Should render total planets header', () => {
    render(<Home />);
    const totalPlanetsElement = screen.getByText(/Total de Planetas: 60/i);
    expect(totalPlanetsElement).toBeInTheDocument();
  });

  it('Should render planets card', () => {
    render(<Home />);
    const cards = screen.getAllByTestId("card-container")
    expect(cards.length).toBe(2);
  });

  it('Should open modal planet card', () => {
    render(<Home />);
    fireEvent.click(screen.getAllByRole('button', { name: /ver detalhes/i })[0]);
    expect(screen.getByTestId('planet-details-modal-container')).toBeInTheDocument();
  });

  it('Should close modal planet card', () => {
    render(<Home />);
    fireEvent.click(screen.getAllByRole('button', { name: /ver detalhes/i })[0]);
    expect(screen.getByTestId('planet-details-modal-container')).toBeInTheDocument();

    const closeButton = screen.getByRole('button', { name: /close/i });
    fireEvent.click(closeButton);
  });

  it('Should search planets', async () => {
    jest.useFakeTimers();
    render(<Home />);

    const input = screen.getByPlaceholderText('Buscar planetas');

    fireEvent.change(input, { target: { value: 'Search' } });

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(input).toHaveValue('Search');
  });

  it('Should navigate from pagination buttons', () => {
    render(<Home />);

    fireEvent.click(screen.getByText('Seguinte'));
    fireEvent.click(screen.getByText('Anterior'));
  });

  it('Should navigate from mobile pagiation buttons', () => {
    render(<Home />);

    fireEvent.click(screen.getByText('Próxima página'));
    fireEvent.click(screen.getByText('Página anterior'));
  })

  it('Should render not found planets message when returns is a empty array', async () => {
    const mockData = {
      planets: [],
      totalElements: 0,
      isValidating: false,
    };
    jest.requireMock('../../src/hooks/useGetPlanets.ts').useGetPlanets.mockImplementation(() => mockData);

    render(<Home />);
    await screen.findByText(/Nenhum planeta encontrado/i);
  });

  it('Should render card skeleton when isValidating is true in useGetPlanets', async () => {
    const mockData = {
      planets: [],
      totalElements: 0,
      isValidating: true,
    };
    jest.requireMock('../../src/hooks/useGetPlanets.ts').useGetPlanets.mockImplementation(() => mockData);

    render(<Home />);
    await screen.getAllByTestId('card-skeleton-container');
  });
});