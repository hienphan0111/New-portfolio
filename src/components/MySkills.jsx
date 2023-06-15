import { Flex, Heading, Text, Image, VStack, Box, Progress, useColorModeValue } from '@chakra-ui/react';

import { skills } from '@/db/skills';

const MySkills = () => {
  return (
    <VStack
      px={{ base: '3%', md: '10%' }}
      py='5%'
      bg='primary.600'
    >
      <Box w='full'>
        <Heading as='h3' mb='3' fontSize="24px">
          My Skill
        </Heading>
        <Text>
          I possess a strong foundation in programming languages such as HTML,
          CSS, JavaScript, along with experience working with font-end
          frameworks such as React, Angular, and Vue, I am also proficient in
          back-end technologies such as Node.js and Ruby on Rails, and have a
          good understanding of databases like MySQL and MongoDB.
        </Text>
      </Box>
      <Flex
        w='full'
        justifyContent={{ base: 'center', md: 'space-between'}}
        flexWrap='wrap'
        mt='5'
      >
        {
          skills.map((skill) => (
            <Flex key={skill.id} minW={{ base: '80%', md: '30%'}} position='relative' justifyContent='flex-end' mt="6">
              <Box
                w='64px'
                h='64px'
                p='2'
                bg={useColorModeValue('primary.600', 'white')}
                rounded='2xl'
                position='absolute'
                top='15%'
                left='-1%'
              >
                <Image src={skill.logoUrl} w="full" />
              </Box>
              <Flex
                flexDirection='column'
                w='90%'
                bg={useColorModeValue('white', 'blackAlpha.400')}
                pl='50px'
                pr='2'
                py='3'
                rounded='2xl'
                gap={1}
              >
                <Heading as='h5' fontSize='18px'>
                  {skill.name}
                </Heading>
                <Text w='full'>{skill.description}</Text>
                <Progress value={skill.level} colorScheme="teal" />
              </Flex>
              <Box
                w='50%'
                h='80%'
                position='absolute'
                zIndex='-1'
                bg='primary.200'
                bottom='-1'
                right='-1'
                rounded='2xl'
                display='none'
                _hover={{ display: 'block' }}
              />
            </Flex>
            
          ))
        }
      </Flex>
    </VStack>
  );
};

export default MySkills;
