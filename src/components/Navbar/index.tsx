import { Box, HStack, Text, VStack } from '@chakra-ui/react';
import VaultList from '../VaultList';
import Icon from '../../assets/images/vault.svg';

function Navbar() {
  return (
    <Box w={'250px'} h={'100%'} bgColor={'gray.900'}>
      <VStack h={'100%'} w={'100%'}>
        <Box h={'100%'} w={'100%'}>
          <HStack p={4}>
            <img src={Icon} alt={'logo'} />
            <Text fontWeight={'bold'} fontSize={'xl'}>CypherGuard</Text>
          </HStack>
          <VaultList />
        </Box>
        <p>est</p>
      </VStack>
    </Box>
  )
}

export default Navbar;