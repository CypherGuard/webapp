import { ReactNode } from 'react';
import { Box, HStack } from '@chakra-ui/react';
import Navbar from '../components/Navbar';

interface NavbarLayoutProps {
  children: ReactNode;
}

function NavbarLayout(props: NavbarLayoutProps) {
  return (
    <HStack w={'100vw'} h={'100vh'} alignItems={'start'} spacing={0}>
      <Box h={'100%'}>
        <Navbar />
      </Box>
      <Box w={'100%'} height={'100%'}>
        {props.children}
      </Box>
    </HStack>
  );
}

export default NavbarLayout;
