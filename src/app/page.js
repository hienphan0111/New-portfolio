'use client'

import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { Container, VStack, Text, Divider } from '@chakra-ui/react';
import { Main } from "next/document";

export default function Home() {
  return (
    <main >
      <Navbar />
      <Divider border-bottom='2px' border-color='#469597' />
      <VStack width={{ base: '100%', md: '80%' }} mx='auto' my='2'>
        <Hero />
        
      </VStack>
    </main>
  )
}
