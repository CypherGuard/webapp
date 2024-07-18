import {
  Box,
  Divider, FormControl, FormLabel,
  HStack,
  IconButton,
  Input,
  InputGroup, InputLeftElement,
  InputRightAddon,
  InputRightElement,
  Text, Textarea,
  VStack,
} from '@chakra-ui/react';
import { AttachmentIcon, EditIcon, HamburgerIcon, LinkIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useState } from 'react';

interface LoginViewProps {
  element: {
    id: number;
    vault_id: number;
    name: string;
    username: string;
    password: string;
    url: string;
    notes: string;
    totp: string;
    created_at: string;
    updated_at: string;
    type: string;
  };
}

function LoginView (props: LoginViewProps) {
  const [hide, setHide] = useState<boolean>(true);
  const [totpHide, setTotpHide] = useState<boolean>(true);
  
  return (
    <VStack justifyContent={'space-between'} w={'100%'} spacing={5}>
      <HStack justifyContent={'space-between'} w={'100%'}>
        <Text fontSize={'xl'} fontWeight={'bold'}>{props.element.name}</Text>
        <HStack spacing={2}>
          <IconButton aria-label={'edit'} icon={<EditIcon />} />
          <IconButton aria-label={'edit'} icon={<HamburgerIcon />} />
        </HStack>
      </HStack>
      
      <VStack w={'100%'}>
        <FormControl>
          <FormLabel>Username / email</FormLabel>
          <InputGroup>
            <Input value={props.element.username} isReadOnly variant={'filled'}/>
            <InputRightElement>
              <IconButton aria-label={'copy'} icon={<AttachmentIcon />} />
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <Divider orientation={'horizontal'} />
        <FormControl>
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <InputLeftElement>
              <IconButton aria-label={'eyes'} icon={hide ? <ViewOffIcon /> : <ViewIcon />} onClick={() => setHide(!hide)} />
            </InputLeftElement>
            <Input value={props.element.password} isReadOnly variant={'filled'} type={hide ? 'password' : 'text'} />
            <InputRightElement>
              <IconButton aria-label={'copy'} icon={<AttachmentIcon />} />
            </InputRightElement>
          </InputGroup>
        </FormControl>
      </VStack>
      
      <VStack w={'100%'}>
        <FormControl>
          <FormLabel>Website url</FormLabel>
          <InputGroup>
            <InputLeftElement>
              <IconButton aria-label={'open'} icon={<LinkIcon />} onClick={() => window.open(props.element.url, '_blank')} />
            </InputLeftElement>
            <Input value={props.element.url} isReadOnly variant={'filled'}/>
            <InputRightElement>
              <IconButton aria-label={'copy'} icon={<AttachmentIcon />} />
            </InputRightElement>
          </InputGroup>
        </FormControl>
      </VStack>
      
      <VStack w={'100%'} alignItems={'start'}>
        <Text fontSize={'md'}>Notes</Text>
        <Textarea value={props.element.notes} isReadOnly variant={'filled'} />
      </VStack>
      
      <VStack w={'100%'}>
        <FormControl>
          <FormLabel>TOTP</FormLabel>
          <InputGroup>
            <InputLeftElement>
              <IconButton aria-label={'eyes'} icon={totpHide ? <ViewOffIcon /> : <ViewIcon />} onClick={() => setTotpHide(!totpHide)} />
            </InputLeftElement>
            <Input value={props.element.totp} isReadOnly variant={'filled'} type={totpHide ? 'password' : 'text'} />
            <InputRightElement>
              <IconButton aria-label={'copy'} icon={<AttachmentIcon />} />
            </InputRightElement>
          </InputGroup>
        </FormControl>
      </VStack>
      
      <VStack w={'100%'}>
        <Text fontSize={'sm'}>Created at: {props.element.created_at}</Text>
        <Text fontSize={'sm'}>Updated at: {props.element.updated_at}</Text>
      </VStack>
    </VStack>
  );
}

export default LoginView;