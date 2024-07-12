import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { InputSearch } from '@/components';

describe("InputSearch Component Tests", () => {
  it('Should render InputSearch component', () => {
    const handleChangeDebounce = jest.fn();
    render(<InputSearch handleChangeDebounce={handleChangeDebounce} />);
    
    expect(screen.getByPlaceholderText('Buscar planetas')).toBeInTheDocument();
    expect(screen.getByTestId('search-icon')).toBeInTheDocument();
  });

  test('Should call handleChangeDebounce and updates input value', () => {
    const handleChangeDebounce = jest.fn();
    render(<InputSearch handleChangeDebounce={handleChangeDebounce} />);

    const input = screen.getByPlaceholderText('Buscar planetas');

    fireEvent.change(input, { target: { value: 'Search' } });

    expect(handleChangeDebounce).toHaveBeenCalledWith('Search');
    expect(input).toHaveValue('Search');
  });
})