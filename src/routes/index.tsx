import { createBrowserRouter } from 'react-router-dom';
import { HomeRoute } from './HomeRoute.tsx';
import { LoginRoute } from './LoginRoute.tsx';
import { RegisterRoute } from './RegisterRoute.tsx';
import { AuthenticatedRoute } from '../layout/AuthenticatedRoute.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthenticatedRoute element={<HomeRoute />} />,
  },
  {
    path: '/login',
    element: <LoginRoute />,
  },
  {
    path: '/register',
    element: <RegisterRoute />,
  },
]);
