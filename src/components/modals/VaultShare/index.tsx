import {
  Avatar,
  Button, ButtonGroup,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  FormControl,
  HStack, IconButton,
  Input,
  Text,
  useToast, VStack,
} from '@chakra-ui/react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { SmallCloseIcon } from '@chakra-ui/icons';
import { addUserVaultRequest, addUserVaultRequestProps } from '../../../api/vault/addUserRequest.ts';
import { getUserVaultRequest } from '../../../api/vault/getUserRequest.ts';

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
  
  const mutation = useMutation(addUserVaultRequest, {
    onSuccess: () => {
      toast({
        title: 'Utilisateur ajouter',
        status: 'success',
        duration: 9000,
        isClosable: true,
        position: 'top-right',
      });
      queryClient.invalidateQueries('users_shared_drawer')
    },
  });
  
  const { register, handleSubmit, reset } = useForm<addUserVaultRequestProps>({
    defaultValues: {
      username: '',
      id: props.vault.id
    },
  });
  
  useEffect(() => {
    reset({
      username: '',
      id: props.vault.id
    })
    queryClient.invalidateQueries('users_shared_drawer')
  }, [props.vault])
  
  
  const onSubmit: SubmitHandler<addUserVaultRequestProps> = (data) => mutation.mutate(data);
  
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
            <form style={{ width: '100%' }} onSubmit={handleSubmit(onSubmit)}>
              <VStack alignItems={'start'}>
                <Text fontWeight={'bold'} fontSize={'lg'}>Partagez avec :</Text>
                <FormControl>
                  <HStack>
                    <Input
                      {...register('username', { required: true })}
                      placeholder={'Entrer un email'}
                      variant={'filled'}
                    />
                    <Button type={'submit'} colorScheme={'red'}>Ajouter</Button>
                  </HStack>
                </FormControl>
              </VStack>
            </form>
            
            <form style={{ width: '100%' }}>
              <VStack alignItems={'start'} w={'100%'}>
                <Text fontWeight={'bold'} fontSize={'lg'}>Membres :</Text>
                <VStack w={'100%'}>
                  {
                    users?.data?.data && users.data.data.map((item: any, index: any) => (
                      <ButtonGroup isAttached w={'100%'} key={index}>
                        <Button w={'100%'}>
                          <HStack w={'100%'}>
                            <Avatar
                              size={'xs'}
                              name={item.fullname}
                            />
                            <p>{item.fullname}</p>
                          </HStack>
                        </Button>
                        <IconButton colorScheme={'red'} aria-label={'delete'} icon={<SmallCloseIcon />} />
                      </ButtonGroup>
                    ))
                  }
                </VStack>
              </VStack>
            </form>
          </VStack>
        
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}

export default VaultShare;