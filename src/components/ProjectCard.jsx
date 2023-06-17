import { ArrowForwardIcon } from '@chakra-ui/icons';
import {
  Flex,
  Heading,
  Text,
  Image,
  Box,
  Badge,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
  useDisclosure,
  ModalBody,
  HStack,
  Link,
  VStack,
} from '@chakra-ui/react';

import { useRef } from 'react';
import { BsGithub } from 'react-icons/bs';
import { VscPreview } from 'react-icons/vsc';

const ProjectCard = ({ project }) => {
  const { id, name, description, img, tech, github, demo } = project;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = useRef(null);

  return (
    <Flex
      key={project.id}
      direction='column'
      w={{ base: '100%', md: '45%' }}
      gap='4'
      ref={finalRef}
    >
      <Box rounded='2xl' p='4' bg='white' shadow='lg'>
        <Image src={img} alt='prj' objectFit='cover' />
      </Box>
      <Flex direction='column' mt='3' gap='2'>
        <Heading as='h3' fontSize='22px'>
          {name}
        </Heading>
        <HStack>
          {tech.map((item) => (
            <Badge colorScheme='green'>{item}</Badge>
          ))}
        </HStack>
        <Text noOfLines={3}>{description}</Text>
      </Flex>
      <Box>
        <Box as='button' color='primary.200' fontWeight='bold' onClick={onOpen}>
          More detail... <ArrowForwardIcon />
        </Box>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose} size={'xl'}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box rounded='2xl' p='4' bg='white' shadow='lg' mb='3'>
              <Image src={img} alt='prj' />
            </Box>
            <Text mt='3'>{description}</Text>
            <HStack mt='4'>
              <HStack
                py='1'
                px='4'
                rounded='md'
                border='1px'
                _hover={{ transform: 'translateY(-3px)', transition: '0.5s' }}
              >
                <BsGithub /> <Link href={github} _hover={{ textDecoration: 'none' }}> Github</Link>
              </HStack>
              <HStack
                py='1'
                px='4'
                rounded='md'
                border='1px'
                _hover={{ transform: 'translateY(-3px)', transition: '0.5s' }}
              >
                <VscPreview />
                <Link href={demo} _hover={{ textDecoration: 'none' }}>
                  Live preview
                </Link>
              </HStack>
            </HStack>
          </ModalBody>

          <ModalFooter mt='3'>
            <Box
              as='button'
              bg='primary.100'
              color='white'
              px='4'
              py='2'
              rounded='md'
              fontWeight='bold'
              transition='0.3s'
              _hover={{ bg: 'primary.300' }}
              mr={3}
              onClick={onClose}
            >
              Close
            </Box>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default ProjectCard;
