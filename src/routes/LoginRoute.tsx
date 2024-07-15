import AuthLayout from "../layout/AuthLayout.tsx";
import {Button, Input, Link, ModalBody, Text, VStack} from "@chakra-ui/react";
import { Link as ReactRouterLink } from 'react-router-dom'

export function LoginRoute () {
  
  return (
    <AuthLayout>
      <ModalBody>
        <VStack w={'100%'} spacing={7}>
          <VStack>
            <Text fontSize={'3xl'} fontWeight={'bold'}>Welcome back</Text>
            <Text>login to your account</Text>
          </VStack>
          <VStack w={'100%'} spacing={3}>
            <Input placeholder={'username'} variant={'filled'} />
            <Input placeholder={'password'} variant={'filled'} />
          </VStack>
          <VStack w={'100%'} spacing={2}>
            <Button w={'100%'} colorScheme={'red'}>login</Button>
            <Button w={'100%'}>register</Button>
            <Link as={ReactRouterLink} to={'/register'}>forgot password ?</Link>
          </VStack>
        </VStack>
      </ModalBody>
    </AuthLayout>
  );
}