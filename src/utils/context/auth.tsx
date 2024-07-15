import { useContext, createContext, useState, ReactNode } from 'react';
import { NavigateFunction } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';

interface AuthContextProps {
  token: string;
  user: any;
  logOut: (navigate: NavigateFunction) => void;
  logIn: (navigate: NavigateFunction, token1: string) => void;
  redirect: (navigate: NavigateFunction) => void;
}

const AuthContext = createContext<AuthContextProps>({
  token: '',
  user: null,
  logOut: () => {},
  logIn: () => {},
  redirect: () => {},
});

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('site') || '');
  const toast = useToast()

  const logOut = (navigate: NavigateFunction) => {
    setUser(null);
    setToken('');
    localStorage.removeItem('site');
    navigate('/login');
  };

  const logIn = (navigate: NavigateFunction, token: string) => {
    setToken(token);
    navigate('/');
    toast({
      title: "Logged in",
      description: "You have successfully logged in",
      status: "success",
      duration: 9000,
      position: "top-right",
    })
  };

  const redirect = (navigate: NavigateFunction) => {
    navigate('/login');
  };

  return <AuthContext.Provider value={{ token, user, logOut, redirect, logIn }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
