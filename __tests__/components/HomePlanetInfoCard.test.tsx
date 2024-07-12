import '@testing-library/jest-dom'
import { act, render, screen, waitFor } from '@testing-library/react'
import { HomePlanetInfoCard } from '@/components'

jest.useFakeTimers();

describe('HomePlanetInfoCard Component Tests', () => {
  it('Should render HomePlanetInfoCard component', () => {
    render(<HomePlanetInfoCard />);
    
    const planetInfoCard = screen.getByTestId('planet-info-card-container');
    expect(planetInfoCard).toBeInTheDocument();
  });

  it('Should update planet info after interval', async () => {
    render(<HomePlanetInfoCard />);
    
    await waitFor(() => screen.getByText(/Tatooine/i));
    act(() => {
      jest.advanceTimersByTime(5000);
    })
    await waitFor(() => screen.getByText(/Coruscant/i));
  });
});
