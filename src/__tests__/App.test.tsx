import React from 'react';
import { render, waitFor } from '@testing-library/react';
import App from 'src/App';

test('renders without crashing', async () => {
  const { baseElement } = render(<App />);
  await waitFor(() => expect(baseElement).toBeDefined());
});
