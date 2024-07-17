import { useAuth } from '../utils/context/auth.tsx';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { JSX } from 'react/jsx-runtime';

interface AuthenticatedRouteProps {
  element: JSX.Element;
}

export function AuthenticatedRoute(props: AuthenticatedRouteProps) {
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.token) {
      auth.redirect(navigate);
    }
  }, [auth.token]);

  return auth.token ? props.element : null;
}
