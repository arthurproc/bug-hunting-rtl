import React from 'react';
import { render, screen, userEvent } from '@testing-library/react';

import SearchForm from '../components/SearchForm';

describe('Test SearchForm', () => {
  it('pushes to `weather/itabira` when submit form with `itabira`', () => {
    const { history } = render(<SearchForm />);
    jest.spyOn(history, 'push');

    const city = 'itabira';
    const submitButton = screen.getByText(/Search/i);
    const input = screen.getByPlaceholderText('Enter city');
    userEvent.type(input, city);
    userEvent.click(submitButton);

    expect(history.push).toHaveBeenCalledWith(`/weather/${city}`);
  });
});
