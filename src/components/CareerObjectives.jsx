import { Box, Card, Flex, Grid, Heading, Text, GridItem, CardHeader, CardBody } from '@chakra-ui/react';
import { GoGoal } from 'react-icons/go';
import { GiStairsGoal } from 'react-icons/gi';

const CareerObjectives = () => {
  return (
    <Flex w={{ base: '95%', md: '80%' }} py={{ base: '1%', md: '5%'}} direction="column" justifyContent="center">
      <Box>
        <Flex alignItems="center" gap="3" mb="3">
          <Box w="24px" color="primary.200" >
            <GiStairsGoal style={{ fontSize: '24px' }}/>
          </Box>
          <Heading color="primary.100">Career Objectives</Heading>
        </Flex>
        <Text>
          I want to become a skilled full stack developer, proficient in both frontend and backend technologies. My goals to build visually appealing and high-performing web applications that provide a positive user experience. I stay updated on the lastest web development trends and aim to work with talented teams to create to create impactful projects.
        </Text>
      </Box>
      <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)'}} gap={6} mt={10}>
        <GridItem>
          <Card bgGradient='linear(to-b, primary.600, white)' transition='0.3s' p="4" _hover={{ bg:"primary.200", color: 'white'}}>
            <CardHeader>
              <Flex gap="2" alignItems="center" mb="3">
                <Box w="32px" h="32px" rounded="full" bg="white" />
                <Text>Long-term</Text>
              </Flex>
              <Heading as="h4" fontSize="xl" >Full Stack Web Developer</Heading>
            </CardHeader>
            <CardBody>
              As a Full Stack Web Developer, I leverage my knowledge of both frontend and backend development to create robust, scalable, and efficient web applications. I collaborated with cross-functional teams to gather and analyze requirements, design intuitive user interfaces, write and test clean.
            </CardBody>
          </Card>
        </GridItem>
        <GridItem>
          <Card bgGradient='linear(to-b, primary.600, white)' transition='0.3s' p="4" _hover={{ bg:"primary.200", color: 'white'}}>
            <CardHeader>
              <Flex gap="2" alignItems="center" mb="3">
                <Box w="32px" h="32px" rounded="full" bg="white" />
                <Text>Long-term</Text>
              </Flex>
              <Heading as="h4" fontSize="xl" >Senior Developer</Heading>
            </CardHeader>
            <CardBody>
              I can be responsible for leading the design and development of software applications and systems. In addition to designning and coding complex software solutions. I mentor junior team members and collaborate with cross functional teams to ensure successfull.
            </CardBody>
          </Card>
        </GridItem>
        <GridItem>
          <Card bgGradient='linear(to-b, primary.600, white)' transition='0.3s' p="4" _hover={{ bg:"primary.200", color: 'white'}}>
            <CardHeader>
              <Flex gap="2" alignItems="center" mb="3">
                <Box w="32px" h="32px" rounded="full" bg="white" />
                <Text>Short-term</Text>
              </Flex>
              <Heading as="h4" fontSize="xl" >Mid-level Developer</Heading>
            </CardHeader>
            <CardBody>
              I can be an integral part of the design and development of software apps and systems. To ensure high coding standards. I want to work with talented teams and senior developers to learn and enhance my coding skill.
            </CardBody>
          </Card>
        </GridItem>
        <GridItem>
          <Card bgGradient='linear(to-b, primary.600, white)' transition='0.3s' p="4" _hover={{ bg:"primary.200", color: 'white'}}>
            <CardHeader>
              <Flex gap="2" alignItems="center" mb="3">
                <Box w="32px" h="32px" rounded="full" bg="white" />
                <Text>Short-term</Text>
              </Flex>
              <Heading as="h4" fontSize="xl" >Mid-level Developer</Heading>
            </CardHeader>
            <CardBody>
              I can be an integral part of the design and development of software apps and systems. To ensure high coding standards. I want to work with talented teams and senior developers to learn and enhance my coding skill.
            </CardBody>
          </Card>
        </GridItem>


      </Grid>
    </Flex>
  )
}

export default CareerObjectives
