import React from 'react';
import { Text, VStack } from '@chakra-ui/react';

const AboutMe: React.FC = () => {
    return (
        <VStack spacing={4} align="stretch">
            <Text fontSize="lg" fontWeight="bold">
                Hi, I'm Juozas Žilys – a passionate programmer and technology enthusiast.
            </Text>

            <Text>
                My journey in the world of coding has led me through various exciting fields of technology.
                I love all aspects of development, from web and mobile to AI and multimedia.
                Currently, I'm focusing on enhancing my game development skills, a area I've always been passionate about.
            </Text>

            <Text>
                I thrive on the challenge of turning complex problems into elegant, efficient solutions.
                My diverse background allows me to approach challenges from multiple angles,
                bringing creative and innovative solutions to any project.
            </Text>

            <Text>
                As an avid learner, I'm always exploring new technologies and pushing my boundaries.
                I believe in the power of continuous growth and embracing new challenges in our ever-evolving tech landscape.
            </Text>
        </VStack>
    );
};

export default AboutMe;