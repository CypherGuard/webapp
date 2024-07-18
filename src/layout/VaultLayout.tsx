import { ReactNode } from 'react';
import { Box, HStack } from '@chakra-ui/react';
import VaultViewer from '../components/vault/VaultViewer';

interface VaultLayoutProps {
  children: ReactNode;
  element: any | undefined;
}

function VaultLayout(props: VaultLayoutProps) {
  return (
    <HStack w={'100%'} h={'100%'} alignItems={'start'} spacing={0}>
      <Box h={'100%'}>
        {props.children}
      </Box>
      {
        props.element &&
          <Box w={'100%'} height={'100%'}>
            <VaultViewer element={props.element}/>
          </Box>
      }
    </HStack>
  );
}

export default VaultLayout;
