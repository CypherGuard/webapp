import { ReactNode } from 'react';
import { Box, Divider, HStack } from '@chakra-ui/react';
import VaultViewer from '../components/vault/VaultViewer';

interface VaultLayoutProps {
  children: ReactNode;
  id: any | undefined;
}

function VaultLayout(props: VaultLayoutProps) {
  return (
    <HStack w={'100%'} h={'100%'} alignItems={'start'} spacing={0}>
      <Box w={'100%'} h={'100%'} p={4}>
        {props.children}
      </Box>
      {
        props.id &&
          <>
            <Divider orientation={'vertical'} />
            <Box height={'100%'} p={4}>
              <VaultViewer id={props.id}/>
            </Box>
          </>
      }
    </HStack>
  );
}

export default VaultLayout;
