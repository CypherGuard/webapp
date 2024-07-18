import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useToast,
  FormControl, FormLabel, Input, VStack,
} from '@chakra-ui/react';
import { useMutation, useQueryClient } from 'react-query';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { createLoginRequest, createLoginRequestProps } from '../../../api/login/createRequest.ts';

interface LoginAddProps {
  onClose: () => void;
  onOpen: () => void;
  isOpen: boolean;
  vault_id: any;
}

function LoginAdd(props: LoginAddProps) {
  const toast = useToast();
  const queryClient = useQueryClient();
  
  const mutation = useMutation(createLoginRequest, {
    onSuccess: () => {
      toast({
        title: 'Identifiant créé',
        status: 'success',
        duration: 9000,
        isClosable: true,
        position: 'top-right',
      });
      props.onClose();
      queryClient.invalidateQueries('vault_list');
    },
  });
  
  const { register, handleSubmit, reset } = useForm<createLoginRequestProps>({
    defaultValues: {
      vault_id: props.vault_id
    },
  });
  
  useEffect(() => {
    reset({
      vault_id: props.vault_id
    });
  }, [props.vault_id]);
  
  const onSubmit: SubmitHandler<createLoginRequestProps> = (data) => mutation.mutate(data);
  
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add login</ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalBody>
            <VStack spacing={3}>
              <FormControl>
                <FormLabel>Login Name</FormLabel>
                <Input {...register('name', { required: true })} placeholder="Vault Name" variant={'filled'} />
              </FormControl>
              
              <FormControl>
                <FormLabel>Username or email</FormLabel>
                <Input {...register('username', { required: true })} placeholder="Username or email" variant={'filled'} />
              </FormControl>
              
              <FormControl>
                <FormLabel>Password</FormLabel>
                <Input {...register('password', { required: true })} placeholder="Password" variant={'filled'} />
              </FormControl>
              
              <FormControl>
                <FormLabel>URL</FormLabel>
                <Input {...register('url', { required: true })} placeholder="URL" variant={'filled'} />
              </FormControl>
              
              <FormControl>
                <FormLabel>Notes</FormLabel>
                <Input {...register('notes', { required: true })} placeholder="Notes" variant={'filled'} />
              </FormControl>
              
              <FormControl>
                <FormLabel>TOTP</FormLabel>
                <Input {...register('totp', { required: true })} placeholder="TOTP" variant={'filled'} />
              </FormControl>
            </VStack>
          </ModalBody>
          
          <ModalFooter>
            <Button colorScheme="red" variant={'outline'} mr={3} onClick={props.onClose}>
              Close
            </Button>
            <Button colorScheme={'red'} type={'submit'} variant={'solid'}>
              Add
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
}

export default LoginAdd;
