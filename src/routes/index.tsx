import { createBrowserRouter } from 'react-router-dom';
import { HomeRoute } from './HomeRoute.tsx';
import { LoginRoute } from './LoginRoute.tsx';
import { RegisterRoute } from './RegisterRoute.tsx';
import { AuthenticatedRoute } from '../layout/AuthenticatedRoute.tsx';
import VaultRoute from './VaultRoute.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthenticatedRoute element={<HomeRoute />} />,
  },
  {
    path: '/vault/:id',
    element: <AuthenticatedRoute element={<VaultRoute />} />,
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
