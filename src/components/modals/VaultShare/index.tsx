import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  FormControl,
  HStack,
  Input,
  Text,
  useToast, VStack,
} from '@chakra-ui/react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { addUserVaultRequest, addUserVaultRequestProps } from '../../../api/vault/addUserRequest.ts';
import { getUserVaultRequest } from '../../../api/vault/getUserRequest.ts';
import VaultUserShare from './VaultUserShare.tsx';

interface VaultShareProps {
  onClose: () => void;
  onOpen: () => void;
  isOpen: boolean;
  vault: any;
}

function VaultShare (props: VaultShareProps) {
  const toast = useToast();
  const queryClient = useQueryClient();
  const users = useQuery(
    ['users_shared_drawer', props.vault.id],
    () => getUserVaultRequest(props.vault.id),
    {
      enabled: !!props.vault.id,
    }
  );
  
  const addUserMutation = useMutation(addUserVaultRequest, {
    onSuccess: () => {
      toast({
        title: 'Utilisateur ajouter',
        status: 'success',
        duration: 9000,
        isClosable: true,
        position: 'top-right',
      });
      queryClient.invalidateQueries('users_shared_drawer')
      addUserForm.reset({
        username: '',
        id: props.vault.id
      })
    },
  });
  
  const addUserForm = useForm<addUserVaultRequestProps>({
    defaultValues: {
      username: '',
      id: props.vault.id
    },
  });
  
  useEffect(() => {
    addUserForm.reset({
      username: '',
      id: props.vault.id
    })
    queryClient.invalidateQueries('users_shared_drawer')
  }, [props.vault])
  
  
  const onSubmit: SubmitHandler<addUserVaultRequestProps> = (data) => addUserMutation.mutate(data);
  
  return (
    
    <Drawer placement={'right'} onClose={props.onClose} isOpen={props.isOpen} size={'md'}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader borderBottomWidth='1px'>
          {props.vault.name}
        </DrawerHeader>
        <DrawerCloseButton />
        <DrawerBody>
          <VStack w={'100%'} spacing={5} my={5}>
            <form style={{ width: '100%' }} onSubmit={addUserForm.handleSubmit(onSubmit)}>
              <VStack alignItems={'start'}>
                <Text fontWeight={'bold'} fontSize={'lg'}>Partagez avec :</Text>
                <FormControl>
                  <HStack>
                    <Input
                      {...addUserForm.register('username', { required: true })}
                      placeholder={'Entrer un email'}
                      variant={'filled'}
                    />
                    <Button type={'submit'} colorScheme={'red'}>Ajouter</Button>
                  </HStack>
                </FormControl>
              </VStack>
            </form>
            
            <VStack alignItems={'start'} w={'100%'}>
              <Text fontWeight={'bold'} fontSize={'lg'}>Membres :</Text>
              <VStack w={'100%'}>
                {
                  users?.data?.data && users.data.data.map((item: any, index: any) => (
                    <VaultUserShare vault={props.vault} user={item} key={index} />
                  ))
                }
              </VStack>
            </VStack>
          </VStack>
        
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}

export default VaultShare;