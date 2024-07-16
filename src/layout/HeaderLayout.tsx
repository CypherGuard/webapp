import { Box, Divider, VStack } from '@chakra-ui/react';
import { ReactNode } from 'react';
import Header from '../components/Header';

interface HeaderLayoutProps {
  children: ReactNode;
}

function HeaderLayout(props: HeaderLayoutProps) {
  return (
    <VStack w={'100%'} h={'100vh'} alignItems={'start'} spacing={0}>
      <Header />
      <Divider orientation='horizontal' />
      <Box w={'100%'} height={'100%'}>
        {props.children}
      </Box>
    </VStack>
  );
}

export default HeaderLayout;