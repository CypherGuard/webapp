import { createBrowserRouter } from 'react-router-dom';
import { HomeRoute } from './HomeRoute.tsx';
import { LoginRoute } from './LoginRoute.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeRoute />,
  },
  {
    path: '/login',
    element: <LoginRoute />,
  },
]);
