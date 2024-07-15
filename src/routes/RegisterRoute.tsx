import AuthLayout from '../layout/AuthLayout.tsx';
import { Button, Input, Link, ModalBody, Text, VStack } from '@chakra-ui/react';
import { Link as ReactRouterLink, useNavigate } from 'react-router-dom';

export function RegisterRoute() {
  const navigate = useNavigate();
  
  return (
    <AuthLayout>
      <ModalBody>
        <VStack w={'100%'} spacing={7}>
          <VStack>
            <Text fontSize={'3xl'} fontWeight={'bold'}>
              Welcome
            </Text>
            <Text>create your account</Text>
          </VStack>
          <VStack w={'100%'} spacing={3}>
            <Input placeholder={'email'} variant={'filled'} />
            <Input placeholder={'username'} variant={'filled'} />
            <Input placeholder={'password'} variant={'filled'} />
            <Input placeholder={'password confirm'} variant={'filled'} />
          </VStack>
          <VStack w={'100%'} spacing={2}>
            <Button w={'100%'} colorScheme={'red'}>
              Register
            </Button>
            <Button w={'100%'} onClick={() => navigate('/login')}>login</Button>
          </VStack>
          <Link as={ReactRouterLink} to={'/forgot-password'}>
            forgot password ?
          </Link>
        </VStack>
      </ModalBody>
    </AuthLayout>
  );
}
