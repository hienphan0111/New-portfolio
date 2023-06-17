'use client'

import { Container, VStack, Text, Divider } from '@chakra-ui/react';
import About from '@/components/About';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import CareerObjectives from '@/components/CareerObjectives';
import Projects from '@/components/Projects';
import MySkills from '@/components/MySkills';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main >
      <Navbar />
      <Divider border-bottom='2px' border-color='#469597' />
      <VStack mx='auto' my='2'>
        <Hero />
        <About />
        <CareerObjectives />
        <Projects />
        <MySkills />
        <Footer />
      </VStack>
    </main>
  )
}
