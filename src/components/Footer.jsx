import React from 'react';
import Contact from './Contact';
import { Flex, VStack } from '@chakra-ui/react';

const Footer = () => {
  return (
    <VStack
      w='full'
      px={{ base: '3%', md: '10%' }}
      py={{ base: '2%', md: '5%' }}
      bgGradient='linear(to-t, primary.600, white)'
    >
      <Contact />
    </VStack>
  );
};

export default Footer;
