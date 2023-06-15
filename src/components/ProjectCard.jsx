import { ArrowForwardIcon } from '@chakra-ui/icons';
import {
  Flex,
  Heading,
  Text,
  Image,
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
  useDisclosure,
  ModalBody,
} from '@chakra-ui/react';
import { useRef } from 'react';

const ProjectCard = ({ project }) => {
  const { id, name, description, img } = project;
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
        <Text>{description}</Text>
      </Flex>
      <Box>
        <Box as='button' color='primary.200' fontWeight='bold' onClick={onOpen}>
          More detail... <ArrowForwardIcon />{' '}
        </Box>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose} size={'xl'}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box rounded='2xl' p='4' bg='white' shadow='lg' mb="3">
              <Image src={img} alt='prj' objectFit='cover' />
            </Box>
            <Text mt="3">{description}</Text>
          </ModalBody>

          <ModalFooter mt="3">
            <Box
              as='button'
              bg='primary.100'
              color='white'
              px='4'
              py='2'
              rounded='md'
              fontWeight='bold'
              transition="0.3s"
              _hover={{ bg: "primary.300" }}
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
