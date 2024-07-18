import { Box, Button, Divider, HStack, VStack } from '@chakra-ui/react';
import VaultElement from '../VaultElement';
import { Dispatch } from 'react';

interface VaultElementListProps {
  element: any[];
  onClick?: Dispatch<any>;
}

function VaultElementList(props: VaultElementListProps) {
  
  return (
    <VStack w={'100%'} h={'100%'} alignItems={'start'}>
      <HStack>
        <Button>WIP</Button>
      </HStack>
      <Box h={'100%'} overflowY={'scroll'} w={'100%'}>
        <VStack alignItems={'start'} spacing={1}>
          {
            props.element.map((item: any, index: any) => <Box key={index} w={'100%'}>
              <VaultElement element={item} onClick={props.onClick} />
              <Divider orientation={'horizontal'}/>
            </Box>)
          }
        </VStack>
      </Box>
    </VStack>
  )
}

export default VaultElementList;