import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useToast,
} from '@chakra-ui/react';
import { useMutation, useQueryClient } from 'react-query';
import { SubmitHandler, useForm } from 'react-hook-form';
import { editVaultRequest, editVaultRequestProps } from '../../../api/vault/editRequest.ts';
import { useEffect } from 'react';

interface VaultEditProps {
  onClose: () => void;
  onOpen: () => void;
  isOpen: boolean;
  vault: any;
}

function VaultEdit(props: VaultEditProps) {
  const toast = useToast();
  const queryClient = useQueryClient();

  const mutation = useMutation(editVaultRequest, {
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

  const { register, handleSubmit, reset } = useForm<editVaultRequestProps>({
    defaultValues: {
      name: props.vault.name,
      id: props.vault.id,
    },
  });

  useEffect(() => {
    reset({
      name: props.vault.name,
      id: props.vault.id,
    });
  }, [props.vault]);

  const onSubmit: SubmitHandler<editVaultRequestProps> = (data) => mutation.mutate(data);

  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Vault</ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalBody>
            <FormControl>
              <FormLabel>Vault Name</FormLabel>
              <Input {...register('name', { required: true })} placeholder="Vault Name" variant={'filled'} />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" variant={'outline'} mr={3} onClick={props.onClose}>
              Close
            </Button>
            <Button colorScheme={'red'} type={'submit'} variant={'solid'}>
              Modify
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
}

export default VaultEdit;
