import { Box, Button, DarkMode, HStack, Text, VStack } from '@chakra-ui/react';
import VaultList from '../vault/VaultList';
import Icon from '../../assets/images/vault.svg';
import { CalendarIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  
  return (
    <DarkMode>
      <Box w={'250px'} h={'100%'} bgColor={'gray.900'}>
        <VStack h={'100%'} w={'100%'} px={4}>
          <VStack h={'100%'} w={'100%'} spacing={4}>
            <HStack p={4}>
              <img src={Icon} alt={'logo'} />
              <Text fontWeight={'bold'} fontSize={'xl'} color={'white'}>CypherGuard</Text>
            </HStack>
            <Button w={'100%'} onClick={() => navigate('/')}>
              <HStack w={'100%'} justifyContent={'space-between'}>
                <p>Dashboard</p>
                <CalendarIcon />
              </HStack>
            </Button>
            <VaultList />
          </VStack>
          <p>est</p>
        </VStack>
      </Box>
    </DarkMode>
  )
}

export default Navbar;