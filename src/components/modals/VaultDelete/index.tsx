import {
  Button,
  Highlight,
  Text,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent, ModalFooter,
  ModalHeader,
  ModalOverlay, useToast, VStack,
} from '@chakra-ui/react';
import { useMutation, useQueryClient } from 'react-query';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { deleteVaultRequest, deleteVaultRequestProps } from '../../../api/vault/deleteRequest.ts';

interface VaultDeleteProps {
  onClose: () => void;
  onOpen: () => void;
  isOpen: boolean;
  vault: any;
}

function VaultDelete (props:VaultDeleteProps) {
  const toast = useToast();
  const queryClient = useQueryClient()
  
  const mutation = useMutation(deleteVaultRequest, {
    onSuccess: () => {
      toast({
        title: 'Vault Edited',
        status: 'success',
        duration: 9000,
        isClosable: true,
        position: 'top-right',
      });
      props.onClose();
      queryClient.invalidateQueries('vault_list_request')
    },
  });
  
  const { handleSubmit, reset } = useForm<deleteVaultRequestProps>({
    defaultValues: {
      id: props.vault.id
    },
  });
  
  useEffect(() => {
    reset({
      id: props.vault.id
    })
  }, [props.vault])
  
  
  const onSubmit: SubmitHandler<deleteVaultRequestProps> = (data) => mutation.mutate(data);
  
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Delete Vault</ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalBody>
            <VStack spacing={5} w={'100%'} alignItems={'start'}>
              <Text fontWeight='bold'>
                <Highlight
                  query={'This action is irreversible'}
                  styles={{ px: '2', py: '1', rounded: 'full', bg: 'red.100' }}
                >
                  Are you sure you want to delete this vault? This action is irreversible.
                </Highlight>
              </Text>
              <Text fontWeight='bold'>
                <Highlight
                  query={['All passwords', 'deleted']}
                  styles={{ px: '2', py: '1', rounded: 'full', bg: 'red.100' }}
                >
                  All passwords in this vault will be deleted.
                </Highlight>
              </Text>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="red" variant={'outline'} mr={3} onClick={props.onClose}>
              Close
            </Button>
            <Button colorScheme={'red'} type={'submit'} variant={'solid'}>Confirm</Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  )
}

export default VaultDelete;