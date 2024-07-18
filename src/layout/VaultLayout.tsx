import { ReactNode } from 'react';
import { Box, Divider, HStack } from '@chakra-ui/react';
import VaultViewer from '../components/vault/VaultViewer';

interface VaultLayoutProps {
  children: ReactNode;
  selectedElement: any | undefined;
}

function VaultLayout(props: VaultLayoutProps) {
  return (
    <HStack w={'100%'} h={'100%'} alignItems={'start'}>
      <Box w={'60%'} h={'100%'} p={4}>
        {props.children}
      </Box>
      {
        props.selectedElement &&
          <Divider orientation={'vertical'} />
      }
      {
        props.selectedElement &&
        <Box w={'40%'} h={'100%'} p={4}>
          <VaultViewer selectedElement={props.selectedElement} />
        </Box>
      }
    </HStack>
  );
}

export default VaultLayout;
