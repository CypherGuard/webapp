import Vault from '../Vault';
import { Box} from '@chakra-ui/react';
import VaultAddButton from '../VaultAddButton';


function VaultList() {
  const list = ['test', 'test2', 'test3']
  
  return (
    <Box p={4}>
      <VaultAddButton />
      <ul>
        {list.map((_item, index) => (
          <Vault key={index} />
        ))}
      </ul>
    </Box>
  )
}

export default VaultList;