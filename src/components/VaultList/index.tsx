import Vault from '../Vault';
import { Box, Button, HStack } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons'


function VaultList() {
  const list = ['test', 'test2', 'test3']
  
  return (
    <Box p={4}>
      <Button w={'100%'} mb={4}>
        <HStack w={'100%'} justifyContent={'space-between'}>
          <p>Add Vault</p>
          <AddIcon />
        </HStack>
      </Button>
      <ul>
        {list.map((_item, index) => (
          <Vault key={index} />
        ))}
      </ul>
    </Box>
  )
}

export default VaultList;