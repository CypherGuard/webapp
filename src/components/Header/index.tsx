import { HStack, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import AddButton from '../AddButton';
import { useParams } from 'react-router-dom';

function Header() {
  let { id } = useParams();
  
  return (
    <HStack w={'100%'} px={2} py={2}>
      <InputGroup variant={'filled'}>
        <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.300" />} />
        <Input placeholder="Search" />
      </InputGroup>
      {
        id && <AddButton id={id} />
      }
    </HStack>
  );
}

export default Header;
