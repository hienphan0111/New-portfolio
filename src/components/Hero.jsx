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
import { FaFacebook } from 'react-icons/fa';

const Hero = () => {
  return (
    <Flex gap='2'>
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
        <FaFacebook
          style={{
            color: 'blue',
            fontSize: '40px',
            position: 'absolute',
            left: '50%',
            bottom: '50px',
            __hover: {
              color: 'red',
            }
          }}
        />
      </Box>
    </Flex>
  );
};

export default Hero;
