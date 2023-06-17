import { useRef, useEffect } from 'react';

import { Flex, Box, Heading, Text } from '@chakra-ui/react';
import { motion, useAnimation, useInView } from 'framer-motion';

import ProjectCard from './ProjectCard';
import { projects } from '@/db/projects';
import { motions } from '@/utils/motions';

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref);

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <Flex
      id="my_projects"
      ref={ref}
      justifyContent='center'
      direction='column'
      alignItems='center'
      gap='3'
      mb='5'
    >
      <Box
        as={motion.div}
        animate={controls}
        initial='hidden'
        variants={motions.fadeInRight}
        w='80%'
      >
        <Heading as='h3' mb='3' fontSize='24px'>
          My Projects
        </Heading>
        <Text>
        I find that learning by building real projects is an effective way for me to enhance my skills rapidly. By working on practical applications, I can apply theoretical knowledge in a hands-on manner, gaining valuable experience and insights. This approach allows me to tackle challenges and problem-solve, fostering a deeper understanding of the concepts and technologies involved. Overall, building real projects accelerates my learning process and equips me with practical skills that can be readily applied in the field.
        </Text>
      </Box>
      <Flex
        as={motion.div}
        animate={controls}
        initial='hidden'
        variants={motions.fadeInLeft}
        w={{ base: '95%', md: '80%' }}
        justifyContent='space-between'
        flexWrap='wrap'
        gap='4'
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Flex>
    </Flex>
  );
};

export default Projects;
