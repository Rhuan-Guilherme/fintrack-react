import { createBrowserRouter } from 'react-router';
import { Teste } from './components/teste';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Teste />,
  },
]);
