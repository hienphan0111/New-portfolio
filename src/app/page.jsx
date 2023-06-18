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
      <VStack mx='auto' my='2' overflowY="none">
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
