import { HStack, Text, VStack } from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';

interface VaultElementProps {
  element: any;
  onClick?: () => void;
}

function VaultElement (props: VaultElementProps) {
  
  return (
    <HStack w={'100%'} borderRadius={5} py={2} cursor={'pointer'} onClick={() => {
      console.log('clicked');
      props.onClick(props.element.id);
    }}>
      <VStack px={3}>
        <HStack>
          <EmailIcon />
        </HStack>
      </VStack>
      <VStack justifyContent={'space-around'} alignItems={'start'}>
        <Text fontWeight={'bold'}>{props.element.name}</Text>
        <Text color={'#ababab'} fontSize={'xs'} t>{props.element.username}</Text>
      </VStack>
    </HStack>
  )
}

export default VaultElement;