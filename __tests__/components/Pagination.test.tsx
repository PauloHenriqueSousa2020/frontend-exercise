import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react';
import { Pagination } from '@/components';

describe('Pagination Component', () => {
  it('Should render Pagination component correctly', () => {
    const props = {
      count: 100,
      page: 1,
      perPage: 10,
      onChange: jest.fn(),
    };
  
    render(<Pagination {...props} />);

    expect(screen.getByText('Anterior')).toBeInTheDocument();
    expect(screen.getByText('Seguinte')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('10')).toBeInTheDocument();
  });

  it('Should call onChange with the correct page number when a page number is clicked', () => {
    const onChange = jest.fn();
    const props = {
      count: 100,
      page: 1,
      perPage: 10,
      onChange
    };
  
    render(<Pagination {...props} />);

    fireEvent.click(screen.getByText('2'));
    expect(onChange).toHaveBeenCalledWith(2);
  });

  it('calls onChange with the correct page number when next button is clicked', () => {
    const onChange = jest.fn();
    const props = {
      count: 100,
      page: 1,
      perPage: 10,
      onChange
    };
  
    render(<Pagination {...props} />);

    fireEvent.click(screen.getByText('Seguinte'));
    expect(onChange).toHaveBeenCalledWith(2);
  });

  it('calls onChange with the correct page number when previous button is clicked', () => {
    const onChange = jest.fn();
    const props = {
      count: 100,
      page: 2,
      perPage: 10,
      onChange
    };
    render(<Pagination {...props} />);

    fireEvent.click(screen.getByText('Anterior'));
    expect(onChange).toHaveBeenCalledWith(1);
  });

  it('disables previous button on the first page', () => {
    const props = {
      count: 100,
      page: 1,
      perPage: 10,
      onChange: jest.fn()
    };
    render(<Pagination {...props} />);

    expect(screen.getByRole('button', { name: /anterior/i })).toBeDisabled();
  });

  it('disables next button on the last page', () => {
    const props = {
      count: 100,
      page: 10,
      perPage: 10,
      onChange: jest.fn()
    };
    render(<Pagination {...props} />);

    expect(screen.getByRole('button', { name: /seguinte/i })).toBeDisabled();
  });
});
