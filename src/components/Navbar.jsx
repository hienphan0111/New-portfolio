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
  useColorMode,
  Divider,
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
    title: 'My Projects',
    url: '#my_projects',
  },
  {
    id: 5,
    title: 'Career Objectives',
    url: '#career_objectives',
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
      w="100%"
      h='20'
      px={{ base: '2em', lg: '10rem' }}
      bg="primary.200"
      top="0"
      color="primary.400"
      pos="fixed"
      zIndex={2}
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
          <MenuList color="black">
            {links.map((link) => (
              <MenuItem key={link.id}>
                <Link href={link.url}>{link.title}</Link>
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Stack>
    </Flex>
  );
};

export default Navbar;
