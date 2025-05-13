import { createBrowserRouter } from 'react-router';
import { AuthLayout } from './pages/layouts/authLayout';
import { NotFound } from './pages/404';
import { SingIn } from './pages/auth/sing-in';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/sing-in',
        element: <SingIn />,
      },
    ],
  },
]);
