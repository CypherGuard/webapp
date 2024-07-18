import { IconButton, Menu, MenuButton, MenuItem, MenuList, useDisclosure } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import LoginAdd from '../modals/LoginAdd';

interface AddButtonProps {
  id: string;
}

function AddButton(props: AddButtonProps) {
  const {onClose, isOpen, onOpen, } = useDisclosure()
  
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label='Add'
        colorScheme='red'
        icon={<AddIcon />}
      />
      <MenuList>
        <MenuItem onClick={onOpen} >
          Add password
        </MenuItem>
      </MenuList>
      <LoginAdd
        isOpen={isOpen}
        onClose={onClose}
        onOpen={onOpen}
        vault_id={props.id}
      />
    </Menu>
  )
}

export default AddButton;