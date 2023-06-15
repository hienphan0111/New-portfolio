import React from 'react'

import { Flex, Box, Heading, Text } from '@chakra-ui/react';
import ProjectCard from './ProjectCard';
import { projects } from '@/db/projects';

const Projects = () => {
  return (
    <Flex justifyContent="center" direction="column" alignItems="center" gap="3" mb="5">
      <Box w='80%'>
        <Heading as='h3' mb='3' fontSize="24px">
          My Projects
        </Heading>
        <Text>
          I always learn by build the real projects. That help me enhanced my skills quickly.
        </Text>
      </Box>
      <Flex w={{ base: '95%', md: "80%"}} justifyContent="space-between" flexWrap="wrap" gap="4">
        {
          projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))
        }
      </Flex>
    </Flex>
  )
}

export default Projects
