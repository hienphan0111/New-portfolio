import React from 'react';
import Contact from './Contact';
import {
  AbsoluteCenter,
  Box,
  Divider,
  Flex,
  Heading,
  VStack,
  Text,
  HStack,
  Link,
} from '@chakra-ui/react';
import Socials from './Socials';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';

const Footer = () => {
  return (
    <VStack
      id= "footer"
      w='full'
      px={{ base: '3%', md: '10%' }}
      pt={{ base: '2%', md: '5%' }}
      bgGradient='linear(to-t, primary.600, white)'
    >
      <Contact />
      <Flex direction='column' gap='4' w='full' alignItems='center' mt='12'>
        <Heading>Kevin Phan</Heading>
        <Text>A Full stack developer</Text>
        <Box display='flex' padding='5' w='full' alignItems='center'>
          <Divider borderWidth='1px' borderColor={'primary.100'} />
          <Text px='4' w={{base: '35em', lg:'30%'}}>
            Reach me through
          </Text>
          <Divider borderWidth='1px' borderColor={'primary.100'} />
        </Box>
        <Socials />
      </Flex>
      <Box bg='primary.200' color='white' h='30px' w="full" display="flex" justifyContent="center" alignItems="center" mt="3">
        Copyrigh by <AiOutlineCopyrightCircle />
        Kevin-Phan. All rights Boxts are reserved
      </Box>
    </VStack>
  );
};

export default Footer;
