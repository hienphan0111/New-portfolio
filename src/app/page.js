'use client'

import About from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from '@/components/Navbar';
import CareerObjectives from '@/components/CareerObjectives';
import { Container, VStack, Text, Divider } from '@chakra-ui/react';
import { Main } from "next/document";
import MySkills from "@/components/MySkills";

export default function Home() {
  return (
    <main >
      <Navbar />
      <Divider border-bottom='2px' border-color='#469597' />
      <VStack mx='auto' my='2'>
        <Hero />
        <About />
        <CareerObjectives />
        <MySkills />
      </VStack>
    </main>
  )
}
