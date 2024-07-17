import { HStack, IconButton, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { AddIcon, SearchIcon } from '@chakra-ui/icons';

function Header() {
  return (
    <HStack w={'100%'} px={2} py={2}>
      <InputGroup variant={'filled'}>
        <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.300" />} />
        <Input placeholder="Search" />
      </InputGroup>
      <IconButton colorScheme={'red'} aria-label={'Search'} icon={<AddIcon />} />
    </HStack>
  );
}

export default Header;
