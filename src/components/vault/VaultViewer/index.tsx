import LoginView from './LoginView.tsx';
import { Box } from '@chakra-ui/react';
import { ReactElement } from 'react';

interface VaultViewerProps {
  selectedElement: {
    id: number;
    vault_id: number;
    name: string;
    username: string;
    password: string;
    url: string;
    notes: string;
    totp: string;
    created_at: string;
    updated_at: string;
    type: 'string';
  };
}

function VaultViewer(props: VaultViewerProps) {
  
  const view: { [key: string]: ReactElement } = {
    "login": <LoginView element={props.selectedElement} />,
  }
  
  return (
    <Box w={'100%'}>
      {view[props.selectedElement?.type]}
    </Box>
  )
}

export default VaultViewer;