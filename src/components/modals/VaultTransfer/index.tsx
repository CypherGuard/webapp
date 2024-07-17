import {
  Button,
  FormControl,
  FormLabel,
  Highlight,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useToast,
  VStack,
} from '@chakra-ui/react';
import { useMutation, useQueryClient } from 'react-query';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { transferUserVaultRequest, transferUserVaultRequestProps } from '../../../api/vault/transferUserRequest.ts';

interface VaultTransferProps {
  onClose: () => void;
  onOpen: () => void;
  isOpen: boolean;
  vault: any;
}

function VaultTransfer(props: VaultTransferProps) {
  const toast = useToast();
  const queryClient = useQueryClient();

  const mutation = useMutation(transferUserVaultRequest, {
    onSuccess: () => {
      toast({
        title: 'Vault Edited',
        status: 'success',
        duration: 9000,
        isClosable: true,
        position: 'top-right',
      });
      props.onClose();
      queryClient.invalidateQueries('vault_list_request');
    },
  });

  const { register, handleSubmit, reset } = useForm<transferUserVaultRequestProps>({
    defaultValues: {
      username: '',
      id: props.vault.id,
    },
  });

  useEffect(() => {
    reset({
      username: '',
      id: props.vault.id,
    });
  }, [props.vault]);

  const onSubmit: SubmitHandler<transferUserVaultRequestProps> = (data) => mutation.mutate(data);

  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Delete Vault</ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalBody>
            <VStack spacing={5} w={'100%'} alignItems={'start'}>
              <FormControl>
                <FormLabel>Username</FormLabel>
                <Input {...register('username', { required: true })} placeholder="Username" variant={'filled'} />
              </FormControl>

              <Text fontWeight="bold">
                <Highlight
                  query={'This action is irreversible'}
                  styles={{ px: '2', py: '1', rounded: 'full', bg: 'red.100' }}
                >
                  Are you sure you want to transfer this vault? This action is irreversible.
                </Highlight>
              </Text>
              <Text fontWeight="bold">
                <Highlight
                  query={['All passwords', 'will be gived']}
                  styles={{ px: '2', py: '1', rounded: 'full', bg: 'red.100' }}
                >
                  All passwords in this vault will be gived to the user you selected.
                </Highlight>
              </Text>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="red" variant={'outline'} mr={3} onClick={props.onClose}>
              Close
            </Button>
            <Button colorScheme={'red'} type={'submit'} variant={'solid'}>
              Confirm
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
}

export default VaultTransfer;
