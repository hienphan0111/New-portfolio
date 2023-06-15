import { ArrowForwardIcon } from '@chakra-ui/icons';
import {
  VStack,
  Text,
  Flex,
  Heading,
  Button,
  Box,
  Highlight,
  Img,
  HStack,
  Spacer,
  Link,
} from '@chakra-ui/react';
import { Link as NextLink } from 'next/link';
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import Image from 'next/image';
import heroImg from '@/assets/Hero.png'
import Socials from './Socials';

const styles = {
  iconHover: {
    '&:hover': {
      color: 'red',
    },
    border: '1px solid green',
  },
};

const Hero = () => {
  return (
    <Flex direction={{ base: 'column-reverse', md: 'row' }} gap='2' w={{base: '95%', md: '80%'}}>
      <VStack spacing='25px' align='stretch' justifyContent='center' pr='40px'>
        <Box>
          <Highlight
            query='Full-Stack Developer'
            styles={{
              px: '4',
              py: '1',
              bg: 'gray.100',
              color: 'primary.100',
              borderRadius: '2px',
              fontWeight: 'bold',
            }}
          >
            I Am Full-Stack Developer
          </Highlight>
        </Box>
        <Heading lineHeight='5rem'>
          <Highlight
            query={['potential', 'solutions']}
            styles={{
              color: 'white',
              bg: 'primary.100',
              rounded: 'full',
              px: '1',
              py: '1',
            }}
          >
            Maximize your business potential with customer web development
            solutions
          </Highlight>
        </Heading>
        <Text>
          Take your business to the next level with custom web development
          solutions
        </Text>
        <HStack>
          <Link
            as={NextLink}
            href='#contact'
            backgroundColor='primary.100'
            color='white'
            py='2'
            px='4'
            rounded='md'
          >
            Get inTouch
            <ArrowForwardIcon />
          </Link>
          <Button colorScheme='primary.100' variant='outline'>
            Download CV
          </Button>
        </HStack>
        <Socials />
      </VStack>
      <Spacer />
      <Box position='relative'>
        <Image src={heroImg} />
      </Box>
    </Flex>
  );
};

export default Hero;
