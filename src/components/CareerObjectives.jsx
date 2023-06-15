import {
  Box,
  Card,
  Flex,
  Grid,
  Heading,
  Text,
  GridItem,
  CardHeader,
  CardBody,
  useColorModeValue,
} from '@chakra-ui/react';
import { GoGoal } from 'react-icons/go';
import { GiStairsGoal } from 'react-icons/gi';
import { careerObjects } from '@/db/careerObjects';

const CareerObjectives = () => {
  return (
    <Flex
      w={{ base: '95%', md: '80%' }}
      py={{ base: '1%', md: '5%' }}
      direction='column'
      justifyContent='center'
    >
      <Box>
        <Flex alignItems='center' gap='3' mb='3'>
          <Box w='24px' color='primary.200'>
            <GiStairsGoal style={{ fontSize: '24px' }} />
          </Box>
          <Heading color='primary.100'>Career Objectives</Heading>
        </Flex>
        <Text>
          I want to become a skilled full stack developer, proficient in both
          frontend and backend technologies. My goals to build visually
          appealing and high-performing web applications that provide a positive
          user experience. I stay updated on the lastest web development trends
          and aim to work with talented teams to create to create impactful
          projects.
        </Text>
      </Box>
      <Grid
        templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
        gap={6}
        mt={10}
      >
          {
            careerObjects.map((obj) => (
              <GridItem key={obj.id}>
                <Card
                  bgGradient={useColorModeValue('linear(to-b, primary.600, white)', 'linear(to-b, gray.600, gray.200)')}
                  transition='0.3s'
                  p='4'
                  _hover={{ bg: 'primary.200', color: 'white' }}
                >
                  <CardHeader>
                    <Flex gap='2' alignItems='center' mb='3'>
                      <Box w='32px' h='32px' rounded='full' bg='white' />
                      <Text>{obj.subTitle}</Text>
                    </Flex>
                    <Heading as='h4' fontSize='xl'>
                      {obj.title}
                    </Heading>
                  </CardHeader>
                  <CardBody>
                    {obj.description}
                  </CardBody>
                </Card>
            </GridItem>
            ))
          }
      </Grid>
    </Flex>
  );
};

export default CareerObjectives;
