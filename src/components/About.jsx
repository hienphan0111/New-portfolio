import { Card, Stack, Flex, Image, Box, Text, Heading, Link, Spacer, HStack } from '@chakra-ui/react';
import { Link as NextLink } from 'next/link'
import { FcBusinessman } from 'react-icons/fc';
import { ArrowForwardIcon } from '@chakra-ui/icons';

const About = () => {
  return (
    <Flex id="about" direction={{base: 'column', md: 'row'}} px={{ base: '2%', md: '10%'}} py={{base: '1%', md: '3%'}} bg="#d4f2ef4f" gap="5">
      <Card
        variant="outline"
        rounded="2xl"
        p='5'
        bgGradient="linear(to-b, primary.200, #fff)"
      >
        <Image src="https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" h="100%"/>
        <Text fontSize='24px' bg="primary.200" fontWeight="bold" textAlign="center" color="white" py="2" roundedBottom="2xl">10+ Projects</Text>
      </Card>
      <Flex>
        <Flex direction="column" alignItems="flex-start" justifyContent="space-between" gap="5">
          <Flex>
            <FcBusinessman style={{width: '40px'}} />
            <Text>Kevin Phan</Text>
          </Flex>
          <Heading>A Full Stack Web Developer</Heading>
          <Text>
            As a Ful stack Web Developer, I am responsible for designing and building complete web application from start to finish. This includes creating user interfaces, writing server side code, and managing databases. With my comprehensive knowledge of the entire web development process. I can efficiently turn ides into fully functional websites or applications.
          </Text>
          <Link
            as={NextLink}
            href='#contact'
            backgroundColor='primary.100'
            color='white'
            py='2'
            px='4'
            rounded='md'
          >
            Contact me
            <ArrowForwardIcon />
          </Link>
          <HStack rounded="xl" border="1px" borderColor="primary.200" p="2">
            <Flex direction="column" p="3" bg="white" rounded="md" alignItems="center" gap="1">
              <Image src="https://cdn-icons-png.flaticon.com/128/10946/10946624.png" w="34px" h="34px" />
              <Text>Leadership</Text>
            </Flex>
            <Flex direction="column" p="3" bg="white" rounded="md" alignItems="center" gap="1">
              <Image src="https://cdn-icons-png.flaticon.com/128/4325/4325626.png" w="34px" h="34px" />
              <Text>Problem solving</Text>
            </Flex>
            <Flex direction="column" p="3" bg="white" rounded="md" alignItems="center" gap="1">
              <Image src="https://cdn-icons-png.flaticon.com/128/4260/4260116.png" w="34px" h="34px" />
              <Text>Communication</Text>
            </Flex>
            <Flex direction="column" p="3" bg="white" rounded="md" alignItems="center" gap="1">
              <Image src="https://cdn-icons-png.flaticon.com/128/1283/1283218.png" w="34px" h="34px" />
              <Text>Management</Text>
            </Flex>
          </HStack>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default About
