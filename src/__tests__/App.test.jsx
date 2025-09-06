import { render, screen, fireEvent } from '@testing-library/react';
import { act } from "react";
import App from '../App';

test('renders Vite + React text', () =>{
    act(() => {
    render(<App />);
  });
    const headerElement = screen.getByText(/Vite \+ React/i);
    expect(headerElement).toBeInTheDocument();
});

test('increments count on button click', () => {
    act(() => {
    render(<App />);
  });
    const buttonElement = screen.getByText(/count is 0/i);
    expect(buttonElement).toBeInTheDocument();

    fireEvent.click(buttonElement);
    expect(buttonElement).toHaveTextContent('count is 1');

    fireEvent.click(buttonElement);
    expect(buttonElement).toHaveTextContent('count is 2');

})