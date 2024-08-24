import React from "react";
import {Badge, Box, Text, useColorModeValue} from "@chakra-ui/react";

interface CourseItemProps {
    date: string;
    instructor: string;
    title: string;
    description: string;
    duration: string;
    hasCertificate: boolean;
}

const CourseItem: React.FC<CourseItemProps> = ({ date, instructor, title, description, duration, hasCertificate }) => (
    <Box mb={6} p={4} borderWidth={1} borderRadius="md" borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')}>{date}</Text>
        <Text fontSize="lg" fontWeight="bold">{title}</Text>
        <Text fontSize="sm" mb={2}>{instructor}</Text>
        <Text mb={2}>{description}</Text>
        <Badge colorScheme="green" mr={2}>{duration}</Badge>
        {hasCertificate && <Badge colorScheme="blue">Certificate</Badge>}
    </Box>
);

export default CourseItem;