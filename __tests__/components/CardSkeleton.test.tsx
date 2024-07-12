import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { CardSkeleton } from '@/components';

describe('CardSkeleton Component Tests', () => {
  beforeEach(() => {
    render(<CardSkeleton />);
  });

  it('Should render CardSkeleton component', () => {
    expect(screen.getByTestId('card-skeleton-container')).toBeInTheDocument();
    expect(screen.getByTestId('upper-circle')).toBeInTheDocument();    
    expect(screen.getByTestId('horizontal-line')).toBeInTheDocument();

    expect(screen.getByTestId('text-bars')).toBeInTheDocument();

    const textBars = screen.getAllByTestId('text-bar');
    expect(textBars.length).toBe(5);
    textBars.forEach(bar => {
      expect(bar).toBeInTheDocument();
    });

    expect(screen.getByTestId('separator-line')).toBeInTheDocument();
    expect(screen.getByTestId('bottom-button')).toBeInTheDocument();
  });

  it("Should render animate-pulse", () => {
    expect(screen.getByTestId('card-skeleton-container')).toHaveStyle('animation:');
  })
})