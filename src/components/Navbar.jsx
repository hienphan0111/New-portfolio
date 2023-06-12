'use client';

import {
  Flex,
  Link,
  Stack,
  HStack,
  Heading,
  Menu,
  MenuItem,
  MenuButton,
  IconButton,
  MenuList,
  useColorModeValue,
  useDisclosure,
  Button,
  useColorMode
} from '@chakra-ui/react';
import { HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { NextLink } from 'next/link';
import { useState } from 'react';

const links = [
  {
    id: 1,
    title: 'Home',
    url: '/',
  },
  {
    id: 2,
    title: 'About',
    url: '#about',
  },
  {
    id: 3,
    title: 'Skills',
    url: '#skills',
  },
  {
    id: 4,
    title: 'My Project',
    url: '#my_project',
  },
  {
    id: 5,
    title: 'Career Objective',
    url: '#career_objective',
  },
  {
    id: 6,
    title: 'Contact',
    url: '#contact',
  },
];

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      justifyContent='space-between'
      alignItems='center'
      w='full'
      h='20'
      px={{ base: '1rem', md: '10rem' }}
    >
      <Heading>Kevin Phan</Heading>
      <HStack
        spacing='20px'
        alignItems='center'
        h='full'
        display={{ base: 'none', md: 'flex' }}
      >
        {links.map((link) => (
          <Link
            key={link.id}
            href={link.url}
            fontWeight='bold'
            fontSize='18px'
            _active={{ color: 'blue' }}
            _hover={{ borderBottom: 'solid 2px #469597', bgClip: 'text', bgGradient: 'linear(to-l, #7928ca, #ff0080)' }}
            h='full'
            display='flex'
            alignItems='center'
          >
            {link.title}
          </Link>
        ))}
        <Button onClick={() => toggleColorMode()} variant='outline'>
          {
            colorMode === 'dark' ? <SunIcon in={isOpen}/> : <MoonIcon />
          }
        </Button>
      </HStack>
      <Stack hideFrom='md'>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label='Options'
            icon={<HamburgerIcon />}
            variant='outline'
          />
          <MenuList>
            {links.map((link) => (
              <MenuItem key={link.id}>{link.title}</MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Stack>
    </Flex>
  );
};

export default Navbar;
