import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';


test('renders Vite + React text', () =>{

    render(<App />);
    const headerElement = screen.getByText(/Vite \+ React/i);
    expect(headerElement).toBeInTheDocument();
});

test('increments count on button click', () => {

  render(<App />);
  const buttonElement = screen.getByText(/count is 0/i);
  fireEvent.click(buttonElement);
  expect(screen.getByText(/count is 1/i)).toBeInTheDocument();

})