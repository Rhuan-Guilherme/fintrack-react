import { createBrowserRouter } from 'react-router';
import { AuthLayout } from './pages/layouts/authLayout';
import { NotFound } from './pages/404';
import { SingIn } from './pages/auth/sing-in';
import { SingUp } from './pages/auth/sing-up';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <h1>Home page</h1>,
  },
  {
    path: '/',
    element: <AuthLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/sing-in',
        element: <SingIn />,
      },
      {
        path: '/sing-up',
        element: <SingUp />,
      }
    ],
  },
  
]);
