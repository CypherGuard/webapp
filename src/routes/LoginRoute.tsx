import AuthLayout from '../layout/AuthLayout.tsx';
import { Button, FormControl, Input, Link, ModalBody, Text, VStack } from '@chakra-ui/react';
import { Link as ReactRouterLink, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function LoginRoute() {
  const navigate = useNavigate();
  const { t } = useTranslation(['translation', 'auth']);

  return (
    <AuthLayout>
      <ModalBody>
        <VStack w={'100%'} spacing={7}>
          <VStack>
            <Text fontSize={'3xl'} fontWeight={'bold'}>
              {t('auth:login.title')}
            </Text>
            <Text>{t('auth:login.description')}</Text>
          </VStack>
          <VStack w={'100%'} spacing={3}>
            <FormControl>
              <Input placeholder={t('translation:input.email.placeholder')} variant={'filled'} />
            </FormControl>
            <FormControl>
              <Input placeholder={t('translation:input.password.placeholder')} variant={'filled'} />
            </FormControl>
          </VStack>
          <VStack w={'100%'} spacing={2}>
            <Button w={'100%'} colorScheme={'red'}>
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
      </ModalBody>
    </AuthLayout>
  );
}
