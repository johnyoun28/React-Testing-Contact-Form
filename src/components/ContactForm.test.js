import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ContactForm from './ContactForm';

describe('renders ContactForm without errors', () => {
  render(<ContactForm />);
});

test('user able to fill out and submit form', async () => {
  render(<ContactForm />);

  const firstNameInput = screen.getByLabelText(/first name/i);
  const lastNameInput = screen.getByLabelText(/last name/i);
  const emailInput = screen.getByLabelText(/email/i);
  const messageInput = screen.getByLabelText(/message/i);
  const button = screen.getByRole('button', { name: /submit/i });

  fireEvent.change(firstNameInput, {
    target: { name: 'firstName', value: 'john' },
  });

  fireEvent.change(lastNameInput, {
    target: { name: 'lastName', value: 'youn' },
  });

  fireEvent.change(emailInput, {
    target: { name: 'email', value: 'john@john.com' },
  });

  fireEvent.change(messageInput, {
    target: { name: 'message', value: 'hi' },
  });

  fireEvent.click(button);

  await screen.findByText(/john/i);
});
