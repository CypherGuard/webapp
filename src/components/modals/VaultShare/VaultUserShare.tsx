import { Avatar, Button, ButtonGroup, HStack, IconButton, useToast } from '@chakra-ui/react';
import { SmallCloseIcon } from '@chakra-ui/icons';
import { useMutation, useQueryClient } from 'react-query';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { removeUserVaultRequest, removeUserVaultRequestProps } from '../../../api/vault/removeUserRequest.ts';

interface VaultUserShareProps {
  vault: any;
  user: any;
}

function VaultUserShare(props: VaultUserShareProps) {
  const toast = useToast();
  const queryClient = useQueryClient();
  
  const removeUserMutation = useMutation(removeUserVaultRequest, {
    onSuccess: () => {
      toast({
        title: 'Utilisateur supprimé',
        status: 'success',
        duration: 9000,
        isClosable: true,
        position: 'top-right',
      });
      queryClient.invalidateQueries('users_shared_drawer')
    },
  });
  
  const removeUserForm = useForm<removeUserVaultRequestProps>({
    defaultValues: {
      username: props.user.username,
      id: props.vault.id
    },
  });
  
  const onRemoveSubmit: SubmitHandler<removeUserVaultRequestProps> = (data) => removeUserMutation.mutate(data);
  
  useEffect(() => {
    removeUserForm.reset({
      username: props.user.username,
      id: props.vault.id
    })
    queryClient.invalidateQueries('users_shared_drawer')
  }, [props.vault])
  
  return (
    <form style={{ width: '100%' }} onSubmit={removeUserForm.handleSubmit(onRemoveSubmit)}>
      <ButtonGroup isAttached w={'100%'}>
        <Button w={'100%'}>
          <HStack w={'100%'}>
            <Avatar
              size={'xs'}
              name={props.user.fullname}
            />
            <p>{props.user.fullname}</p>
          </HStack>
        </Button>
        <IconButton colorScheme={'red'} aria-label={'delete'} icon={<SmallCloseIcon />} type={'submit'} />
      </ButtonGroup>
    </form>
  )
}

export default VaultUserShare;