import {
  Button, FormControl, FormLabel,
  HStack, Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent, ModalFooter,
  ModalHeader,
  ModalOverlay, useDisclosure, useToast,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { useMutation } from 'react-query';
import { SubmitHandler, useForm } from 'react-hook-form';
import { createVaultRequest, createVaultRequestProps } from '../../../api/vault/createRequest.ts';

interface VaultAddButtonProps {
  onAdd: () => void;
}

function VaultAddButton (props: VaultAddButtonProps) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast = useToast();
  
  const mutation = useMutation(createVaultRequest, {
    onSuccess: () => {
      toast({
        title: 'Vault Created',
        status: 'success',
        duration: 9000,
        isClosable: true,
        position: 'top-right',
      });
      onClose();
      props.onAdd();
    },
  });
  
  const { register, handleSubmit } = useForm<createVaultRequestProps>({
    defaultValues: {
      name: '',
    },
  });
  
  const onSubmit: SubmitHandler<createVaultRequestProps> = (data) => mutation.mutate(data);
  
  return (
    <>
      <Button w={'100%'} onClick={onOpen} variant={'ghost'}>
        <HStack w={'100%'} justifyContent={'space-between'}>
          <p>Coffre fort</p>
          <AddIcon />
        </HStack>
      </Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
          <ModalHeader>Create Vault</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalBody>
              <FormControl>
                <FormLabel>Vault Name</FormLabel>
                <Input {...register('name', { required: true })} placeholder="Vault Name" variant={'filled'} />
              </FormControl>
            </ModalBody>
            
            <ModalFooter>
              <Button colorScheme="red" variant={'outline'} mr={3} onClick={onClose}>
                Close
              </Button>
              <Button colorScheme={'red'} type={'submit'}>Create</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  )
}

export default VaultAddButton;