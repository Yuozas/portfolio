import React from "react";
import {Box, Heading, Text, useColorModeValue} from "@chakra-ui/react";

interface SkillCardProps {
    icon: string;
    title: string;
    description: string;
}


const SkillCard: React.FC<SkillCardProps> = ({ icon, title, description }) => (
    <Box
        bg={useColorModeValue('gray.100', 'gray.700')}
        p={6}
        borderRadius="lg"
        boxShadow="md"
        _hover={{ boxShadow: 'lg' }}
        transition="box-shadow 0.2s"
    >
        <Text fontSize="4xl" mb={2}>
            {icon}
        </Text>
        <Heading as="h3" size="md" mb={2}>
            {title}
        </Heading>
        <Text>{description}</Text>
    </Box>
);

export default SkillCard;