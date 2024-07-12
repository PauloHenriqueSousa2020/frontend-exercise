import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { PlanetDetailsModalSkeleton } from '@/components';

describe('PlanetDetailsModalSkeleton Component Tests', () => {
  beforeEach(() => {
    render(<PlanetDetailsModalSkeleton />);
  });

  it('Should render PlanetDetailsModalSkeleton component', () => {
    expect(screen.getByTestId('planet-details-modal-skeleton-container')).toBeInTheDocument();
    expect(screen.getByTestId('header-line')).toBeInTheDocument(); 

    expect(screen.getByTestId('first-section-lines')).toBeInTheDocument();    

    const firstSectionLines = screen.getAllByTestId('first-section-line');
    expect(firstSectionLines.length).toBe(2);
    firstSectionLines.forEach(bar => {
      expect(bar).toBeInTheDocument();
    });

    expect(screen.getByTestId('last-section-lines')).toBeInTheDocument();    

    const lastSectionLines = screen.getAllByTestId('last-section-line');
    expect(lastSectionLines.length).toBe(8);
    lastSectionLines.forEach(bar => {
      expect(bar).toBeInTheDocument();
    });
  });

  it("Should render with animation on skeleton", () => {
    expect(screen.getByTestId('planet-details-modal-skeleton-container')).toHaveStyle('animation:');
  })
})