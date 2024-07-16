import AuthLayout from '../layout/AuthLayout.tsx';
import { Button, FormControl, HStack, Input, Link, ModalBody, Text, useToast, VStack } from '@chakra-ui/react';
import { Link as ReactRouterLink, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { registerRequest, RegisterRequestProps } from '../api/auth/registerRequest.ts';
import Icon from '../assets/images/vault.svg';

export function RegisterRoute() {
  const navigate = useNavigate();
  const { t } = useTranslation(['translation', 'auth']);
  const toast = useToast();

  const mutation = useMutation(registerRequest, {
    onSuccess: () => {
      navigate('/login');
      toast({
        title: t('auth:register.success'),
        status: 'success',
        duration: 9000,
        isClosable: true,
        position: 'top-right',
      });
    },
  });

  const { register, handleSubmit } = useForm<RegisterRequestProps>({
    defaultValues: {
      email: '',
      username: '',
      password: '',
      password_confirm: '',
    },
  });

  const onSubmit: SubmitHandler<RegisterRequestProps> = (data) => mutation.mutate(data);

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
              <Text>{t('auth:register.description')}</Text>
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
                  {...register('username', { required: true })}
                  placeholder={t('translation:input.username.placeholder')}
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
              <FormControl>
                <Input
                  {...register('password_confirm', { required: true })}
                  placeholder={t('translation:input.password_confirm.placeholder')}
                  variant={'filled'}
                />
              </FormControl>
            </VStack>
            <VStack w={'100%'} spacing={2}>
              <Button w={'100%'} colorScheme={'red'} type={'submit'}>
                {t('translation:button.register')}
              </Button>
              <Button w={'100%'} onClick={() => navigate('/login')}>
                {t('translation:button.login')}
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
