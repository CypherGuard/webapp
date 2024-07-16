import {
  Button,
  ButtonGroup,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList, useDisclosure,
} from '@chakra-ui/react';
import {
  AddIcon,
  EditIcon,
  EmailIcon,
  ExternalLinkIcon,
  SettingsIcon,
  TriangleDownIcon,
  WarningTwoIcon,
} from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import VaultEdit from '../../modals/VaultEdit';
import VaultDelete from '../../modals/VaultDelete';
import { useAuth } from '../../../utils/context/auth.tsx';
import VaultShare from '../../modals/VaultShare';
import VaultTransfer from '../../modals/VaultTransfer';

interface VaultProps {
  vault: any;
}

function Vault(props: VaultProps) {
  const navigate = useNavigate();
  const edit = useDisclosure()
  const deletion = useDisclosure()
  const share = useDisclosure()
  const transfer = useDisclosure()
  const {user} = useAuth()
  
  return (
    <ButtonGroup isAttached variant='outline' w={'100%'}>
      <Button w={'100%'} variant={'ghost'} colorScheme={'red'} onClick={() => navigate(`/vault/${props.vault.id}`)}>
        <HStack w={'100%'}>
          <TriangleDownIcon />
          <p>{props.vault.name}</p>
        </HStack>
      </Button>
      {
        user.id === props.vault.owner_id && (
          <Menu>
            <MenuButton as={IconButton} aria-label='Add to friends' variant={'ghost'} icon={<SettingsIcon />} />
            <MenuList>
              <MenuItem icon={<EditIcon />} onClick={edit.onOpen}>
                Editer
                <VaultEdit
                  vault={props.vault}
                  isOpen={edit.isOpen}
                  onOpen={edit.onOpen}
                  onClose={edit.onClose}
                />
              </MenuItem>
              <MenuItem icon={<AddIcon />} onClick={share.onOpen}>
                Partager
                <VaultShare
                  vault={props.vault}
                  isOpen={share.isOpen}
                  onOpen={share.onOpen}
                  onClose={share.onClose}
                />
              </MenuItem>
              <MenuItem icon={<ExternalLinkIcon />}>
                Deplacer les mot de passe
              </MenuItem>
              <MenuDivider />
              <MenuItem icon={<EmailIcon />} color={'red.300'} onClick={transfer.onOpen}>
                Trasnferer la propriété
                <VaultTransfer
                  vault={props.vault}
                  isOpen={transfer.isOpen}
                  onOpen={transfer.onOpen}
                  onClose={transfer.onClose}
                />
              </MenuItem>
              <MenuItem icon={<WarningTwoIcon />} color={'red.300'} onClick={deletion.onOpen}>
                Supprimer
                <VaultDelete
                  vault={props.vault}
                  isOpen={deletion.isOpen}
                  onOpen={deletion.onOpen}
                  onClose={deletion.onClose}
                />
              </MenuItem>
            </MenuList>
          </Menu>
        )
      }
    </ButtonGroup>
  )
}

export default Vault;