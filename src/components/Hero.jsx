import { ArrowForwardIcon } from '@chakra-ui/icons';
import {
  VStack,
  Text,
  Flex,
  Heading,
  Button,
  Box,
  Highlight,
  Image,
  HStack,
  Spacer,
  Link,
} from '@chakra-ui/react';
import { Link as NextLink } from 'next/link';
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { IconContext } from 'react-icons';

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
      </VStack>
      <Spacer />
      <Box position='relative'>
        <Image
          src='https://images.pexels.com/photos/4974914/pexels-photo-4974914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='profile'
        />
        <Box
          className={styles.iconHover}
          position= 'absolute'
          left= '50%'
          bottom= '50px'
          color='blue'
        >
          <FaFacebook
            style={{
              fontSize: '40px',
            }}
          />
        </Box>
        <Box
          _hover={{
            color: 'red',
            border: '1px solid black',
          }}
          position= 'absolute'
          left= '40%'
          bottom= '70px'
          color='blue'
        >
          <FaLinkedin
            style={{
              fontSize: '40px',
            }}
          />
        </Box>
        <Box
          _hover={{
            color: 'red',
            border: '1px solid black',
          }}
          position= 'absolute'
          left= '60%'
          bottom= '70px'
          color='blue'
        >
          <FaWhatsapp
            style={{
              fontSize: '40px',
            }}
          />
        </Box>
        <Box
          _hover={{
            color: 'red',
            border: '1px solid black',
          }}
          position= 'absolute'
          left= '70%'
          bottom= '80px'
          color='blue'
        >
          <AiOutlineMail
            style={{
              fontSize: '40px',
            }}
          />
        </Box>
        <Box
          _hover={{
            color: 'red',
            border: '1px solid black',
          }}
          position= 'absolute'
          left= '80%'
          bottom= '100px'
          color='blue'
        >
          <FaGithub
            style={{
              fontSize: '40px',
            }}
          />
        </Box>
      </Box>
    </Flex>
  );
};

export default Hero;
