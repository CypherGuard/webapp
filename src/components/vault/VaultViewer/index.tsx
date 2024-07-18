import LoginView from './LoginView.tsx';
import { Box } from '@chakra-ui/react';

interface VaultViewerProps {
  selectedElement: any;
}

function VaultViewer(props: VaultViewerProps) {
  
  const view = {
    "login": <LoginView element={props.selectedElement} />,
  }
  
  return (
    <Box w={'100%'}>
      {view[props.selectedElement?.type]}
    </Box>
  )
}

export default VaultViewer;