import React from 'react';
import {
    Box,
    Text,
    VStack,
    useColorModeValue,
} from '@chakra-ui/react';
import {calculateDuration} from "../../utils";

interface WorkExperienceProps {
    title: string;
    company: string;
    startDate: string;
    endDate: string;
    location: string;
    description: React.ReactNode;
}

const WorkExperience: React.FC<WorkExperienceProps> = ({ title, company, startDate, endDate, location, description }) => {
    const bgColor = useColorModeValue('gray.100', 'gray.700');
    const textColor = useColorModeValue('gray.800', 'white');

    const duration = calculateDuration(startDate, endDate);

    return (
        <Box
            bg={bgColor}
            p={6}
            borderRadius="md"
            mb={6}
            color={textColor}
            boxShadow="md"
        >
            <Text fontSize="2xl" fontWeight="bold">{title}</Text>
            <Text fontSize="xl">{company}</Text>
            <Text fontSize="md" mb={2}>{`${startDate} - ${endDate} | ${location}`}</Text>
            <Text fontWeight="bold" mb={2}>Duration: {duration}</Text>
            <VStack align="start" spacing={2}>
                {description}
            </VStack>
        </Box>
    );
};

export default WorkExperience;