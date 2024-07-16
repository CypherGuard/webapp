import { useContext, createContext, ReactNode } from 'react';
import { NavigateFunction } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';
import { useCookies } from 'react-cookie';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';
import { GetCurrentUser } from '../../api/auth/getCurrentUser.ts';

interface AuthContextProps {
  token: any;
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
  const [cookie, setCookie, removeCookie] = useCookies(['token']);
  const token = cookie['token'];
  
  const { data: userData } = useQuery('me', GetCurrentUser, {
    enabled: !!token, // La requête ne sera exécutée que si le token est présent
  });
  const user = userData?.data ?? {
    id: '',
    email: '',
    fullname: '',
  };
  
  const toast = useToast();
  const { t } = useTranslation(['auth']);
  
  const logOut = (navigate: NavigateFunction) => {
    removeCookie('token');
    localStorage.removeItem('site');
    navigate('/login');
  };
  
  const logIn = (navigate: NavigateFunction, token: string) => {
    setCookie('token', token);
    navigate('/');
    toast({
      title: t('auth:login.notif.success.title'),
      description: t('auth:login.notif.success.message'),
      status: 'success',
      duration: 9000,
      position: 'top-right',
      isClosable: true,
    });
  };
  
  const redirect = (navigate: NavigateFunction) => {
    navigate('/login');
  };
  
  return (
    <AuthContext.Provider value={{ token, user, logOut, redirect, logIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
