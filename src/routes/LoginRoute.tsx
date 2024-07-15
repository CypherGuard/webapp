import AuthLayout from '../layout/AuthLayout.tsx';
import { Button, FormControl, HStack, Input, Link, ModalBody, Text, VStack } from '@chakra-ui/react';
import { Link as ReactRouterLink, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useMutation } from 'react-query';
import { loginRequest, LoginRequestProps } from '../api/auth/loginRequest.ts';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAuth } from '../utils/context/auth.tsx';
import { AxiosResponse } from 'axios';
import Icon from '../assets/images/vault.svg';

export function LoginRoute() {
  const navigate = useNavigate();
  const auth = useAuth();
  const { t } = useTranslation(['translation', 'auth']);

  const mutation = useMutation(loginRequest, {
    onSuccess: (data: AxiosResponse) => {
      auth.logIn(navigate, data.data.token as string);
    },
  });

  const { register, handleSubmit } = useForm<LoginRequestProps>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<LoginRequestProps> = (data) => mutation.mutate(data);

  return (
    <AuthLayout>
      <ModalBody>
        <form onSubmit={handleSubmit(onSubmit)}>
          <VStack w={'100%'} spacing={7}>
            <VStack>
              <HStack p={4}>
                <img src={Icon} alt={'logo'} />
                <Text fontWeight={'bold'} fontSize={'xl'}>CypherGuard</Text>
              </HStack>
              <Text>{t('auth:login.description')}</Text>
            </VStack>
            <VStack w={'100%'} spacing={3}>
              <FormControl>
                <Input
                  {...register('email', { required: true })}
                  placeholder={t('translation:input.email.placeholder')}
                  variant={'filled'}
                />
              </FormControl>
              <FormControl>
                <Input
                  {...register('password', { required: true })}
                  placeholder={t('translation:input.password.placeholder')}
                  variant={'filled'}
                />
              </FormControl>
            </VStack>
            <VStack w={'100%'} spacing={2}>
              <Button w={'100%'} colorScheme={'red'} type={'submit'}>
                {t('translation:button.login')}
              </Button>
              <Button w={'100%'} onClick={() => navigate('/register')}>
                {t('translation:button.register')}
              </Button>
            </VStack>
            <Link as={ReactRouterLink} to={'/forgot-password'}>
              {t('translation:button.forgot_password')}
            </Link>
          </VStack>
        </form>
      </ModalBody>
    </AuthLayout>
  );
}
