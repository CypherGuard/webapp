import AuthLayout from '../layout/AuthLayout.tsx';
import { Button, FormControl, Input, Link, ModalBody, Text, VStack } from '@chakra-ui/react';
import { Link as ReactRouterLink, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import { loginRequest, LoginRequestProps } from '../api/auth/loginRequest.ts';

export function RegisterRoute() {
  const navigate = useNavigate();
  const queryClient = useQueryClient()
  const { t } = useTranslation(['translation', 'auth']);
  
  const mutation = useMutation(loginRequest, {
    onSuccess: () => {
      queryClient.invalidateQueries('todos')
    },
  })
  
  const {
    register,
    handleSubmit,
  } = useForm<LoginRequestProps>({
    defaultValues: {
      email: '',
      username: '',
      password: '',
      password_confirm: '',
    },
  });
  
  const onSubmit: SubmitHandler<LoginRequestProps> = (data) => mutation.mutate(data)
  

  return (
    <AuthLayout>
      <ModalBody>
        <form onSubmit={handleSubmit(onSubmit)}>
          <VStack w={'100%'} spacing={7}>
            <VStack>
              <Text fontSize={'3xl'} fontWeight={'bold'}>
                {t('auth:register.title')}
              </Text>
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
