import { Box, DarkMode, HStack, Text, VStack } from '@chakra-ui/react';
import VaultList from '../vault/VaultList';
import Icon from '../../assets/images/vault.svg';

function Navbar() {
  return (
    <DarkMode>
      <Box w={'250px'} h={'100%'} bgColor={'gray.900'}>
        <VStack h={'100%'} w={'100%'}>
          <Box h={'100%'} w={'100%'}>
            <HStack p={4}>
              <img src={Icon} alt={'logo'} />
              <Text fontWeight={'bold'} fontSize={'xl'} color={'white'}>CypherGuard</Text>
            </HStack>
            <VaultList />
          </Box>
          <p>est</p>
        </VStack>
      </Box>
    </DarkMode>
  )
}

export default Navbar;