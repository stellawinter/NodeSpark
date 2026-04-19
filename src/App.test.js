// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders NodeSpark title', () => {
    render(<App />);
    const titleElement = screen.getByText(/NodeSpark/i);
    expect(titleElement).toBeInTheDocument();
});
