import {
  Button,
  ButtonGroup,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { AddIcon, EditIcon, ExternalLinkIcon, SettingsIcon, TriangleDownIcon, WarningTwoIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

interface VaultProps {
  vault: any;
}

function Vault(props: VaultProps) {
  const navigate = useNavigate();
  
  return (
    <ButtonGroup isAttached variant='outline' w={'100%'}>
      <Button w={'100%'} variant={'ghost'} colorScheme={'red'} onClick={() => navigate(`/vault/${props.vault.id}`)}>
        <HStack w={'100%'}>
          <TriangleDownIcon />
          <p>{props.vault.name}</p>
        </HStack>
      </Button>
      <Menu>
        <MenuButton as={IconButton} aria-label='Add to friends' variant={'ghost'} icon={<SettingsIcon />} />
        <MenuList>
          <MenuItem icon={<EditIcon />}>
            Modifier
          </MenuItem>
          <MenuItem icon={<AddIcon />}>
            Partager
          </MenuItem>
          <MenuItem icon={<ExternalLinkIcon />}>
            Deplacer
          </MenuItem>
          <MenuDivider />
          <MenuItem icon={<WarningTwoIcon />}>
            Supprimer
          </MenuItem>
        </MenuList>
      </Menu>
    </ButtonGroup>
  )
}

export default Vault;