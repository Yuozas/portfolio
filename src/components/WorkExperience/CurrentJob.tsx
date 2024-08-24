import React from 'react';
import {
    Box,
    Text,
    Badge,
    VStack,
    useColorModeValue,
} from '@chakra-ui/react';
import {calculateDuration} from "../../utils";

interface CurrentJobProps {
    title: string;
    company: string;
    startDate: string;
    location: string;
    description: React.ReactNode;
}

const CurrentJob: React.FC<CurrentJobProps> = ({ title, company, startDate, location, description }) => {
    const bgColor = useColorModeValue('green.100', 'green.900');
    const textColor = useColorModeValue('gray.800', 'white');
    const badgeColor = useColorModeValue('green.500', 'green.200');
    const badgeTextColor = useColorModeValue('white', 'gray.800');

    const duration = calculateDuration(startDate, 'Present');

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
            <Text fontSize="md" mb={2}>{`${startDate} - Present | ${location}`}</Text>
            <Badge
                colorScheme="green"
                mb={2}
                bg={badgeColor}
                color={badgeTextColor}
            >
                Current Job
            </Badge>
            <Text fontWeight="bold" mb={2}>Duration: {duration}</Text>
            <VStack align="start" spacing={2}>
                {description}
            </VStack>
        </Box>
    );
};

export default CurrentJob;