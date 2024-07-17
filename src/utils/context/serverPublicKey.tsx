import { useContext, createContext, ReactNode } from 'react';
import { useQuery } from 'react-query';
import { GetServerPublicKey } from '../../api/pgp/getPublicKey.ts';

interface ServerPublicKeyContextProps {
  publicKey: string;
}

const ServerPublicKeyContext = createContext<ServerPublicKeyContextProps>({
  publicKey: '',
});

const ServerPublicKeyProvider = ({ children }: { children: ReactNode }) => {
  const { data: userData } = useQuery('server_public_key', GetServerPublicKey);
  const publicKey = userData?.data?.public_key ?? '';

  return <ServerPublicKeyContext.Provider value={{ publicKey }}>{children}</ServerPublicKeyContext.Provider>;
};

export default ServerPublicKeyProvider;

export const useServerPublicKey = () => {
  return useContext(ServerPublicKeyContext);
};
