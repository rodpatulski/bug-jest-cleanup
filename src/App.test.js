import { render, screen, cleanup } from '@testing-library/react';
import App from './App';
import '@testing-library/react/dont-cleanup-after-each';


/* TO MAKE THE TEST PASS, COMMENT THE LINE BELOW OUT */
afterEach(cleanup);


beforeEach(() => {
  Object.defineProperty(global, "ResizeObserver", {
    writable: true,
    value: jest.fn().mockImplementation(() => ({
      observe: jest.fn(() => "Mocking works"),
      unobserve: jest.fn(),
      disconnect: jest.fn(),
    })),
  });
});


test('renders learn react link', () => {
  const element = document.createElement('div');
  element.id = 'chart';

  //const root = global.document.getElementById('root');
  document.body.appendChild(element);
  /* ANOTHER WAY TO MAKE THE TEST PASS IS TO COMMENT THE RENDER LINE BELOW */
  render(<App />);
});
