import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './utils/theme';
import i18n from './utils/i18n';
import { I18nextProvider } from 'react-i18next';
import { QueryClient, QueryClientProvider } from 'react-query';
import AuthProvider from './utils/context/auth.tsx';
import { CookiesProvider } from 'react-cookie';

const queryClient = new QueryClient();

function App() {
  return (
    <CookiesProvider defaultSetOptions={{ path: '/' }}>
      <QueryClientProvider client={queryClient}>
        <I18nextProvider i18n={i18n} defaultNS={'translation'}>
          <ChakraProvider theme={theme}>
            <AuthProvider>
              <RouterProvider router={router} />
            </AuthProvider>
          </ChakraProvider>
        </I18nextProvider>
      </QueryClientProvider>
    </CookiesProvider>
  );
}

export default App;
