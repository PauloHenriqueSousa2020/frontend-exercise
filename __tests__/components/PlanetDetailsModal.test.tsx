import '@testing-library/jest-dom'
import { render, screen, waitFor, fireEvent } from '@testing-library/react'
import { PlanetDetailsModal } from '@/components'

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

describe('PlanetDetailsModal Component Tests', () => {
  it('Should not render modal when isOpen is false', () => {
    render(<PlanetDetailsModal isOpen={false} handleCloseModal={() => { }} url="" />);

    const modal = screen.queryByTestId('planet-details-modal-container');
    expect(modal).not.toBeInTheDocument();
  });

  it('Should render modal with skeleton when isOpen is true', () => {
    render(<PlanetDetailsModal isOpen={true} handleCloseModal={() => { }} url="" />);

    const modal = screen.queryByTestId('planet-details-modal-container');
    expect(modal).toBeInTheDocument();
  });

  it('Should render planet details', async () => {
    render(<PlanetDetailsModal isOpen={true} handleCloseModal={() => { }} url="https://swapi.dev/api/planets/1/" />);

    await waitFor(() => {
      expect(screen.getByText('Planeta: Tatooine')).toBeInTheDocument();
      expect(screen.getByText('Residentes: 0')).toBeInTheDocument();
      expect(screen.getByText('Filmes: 0')).toBeInTheDocument();
      expect(screen.getByText('Período de Rotação: 23')).toBeInTheDocument();
      expect(screen.getByText('Período Orbital: 304')).toBeInTheDocument();
      expect(screen.getByText('Diâmetro: 10465')).toBeInTheDocument();
      expect(screen.getByText('Clima: arid')).toBeInTheDocument();
      expect(screen.getByText('Gravidade: 1 standard')).toBeInTheDocument();
      expect(screen.getByText('Terreno: desert')).toBeInTheDocument();
      expect(screen.getByText('Superfície Aquática: 1')).toBeInTheDocument();
      expect(screen.getByText('População: 200000')).toBeInTheDocument();
    });
  });

  it('Should call handleCloseModal when close button is clicked', () => {
    const handleCloseModal = jest.fn();
    render(<PlanetDetailsModal isOpen={true} handleCloseModal={handleCloseModal} url="" />);

    const closeButton = screen.getByRole('button', { name: /close/i });
    fireEvent.click(closeButton);
    expect(handleCloseModal).toHaveBeenCalled();
  });

  it("Should render PlanetDetailsModal when isValidating is true", () => {
    const mockData = {
      planetDetail: {},
      isValidating: true
    };
    jest.requireMock('../../src/hooks/useGetPlanetsDetail.ts').useGetPlanetsDetails.mockImplementation(() => mockData);

    const handleCloseModal = jest.fn();
    render(<PlanetDetailsModal isOpen={true} handleCloseModal={handleCloseModal} url="" />);

    expect(screen.getByTestId('planet-details-modal-skeleton-container')).toBeInTheDocument();
  })
});