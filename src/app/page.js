'use client'

import Navbar from "@/components/Navbar";
import { Container, VStack, Text, Divider } from '@chakra-ui/react';

export default function Home() {
  return (
    <Container maxW='100vw' h='100vh' m='0' p='0' centerContent >
      <Navbar />
      <Divider h='2px' />
      <VStack maxW={{ lg: '80vw' }} bg='green.300'>
        <Container w='full'>Main body sfasdfsfgdgdgdfg</Container>
        <Text w='100%'>Main body</Text>
      </VStack>
    </Container>
  )
}
