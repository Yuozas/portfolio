import React from "react";
import {Box, Text, useColorModeValue} from "@chakra-ui/react";

interface EducationItemProps {
    period: string;
    institution: string;
    degree: string;
}

const EducationItem: React.FC<EducationItemProps> = ({ period, institution, degree }) => (
    <Box mb={6}>
        <Text fontWeight="bold" fontSize="lg">{period}</Text>
        <Text fontSize="xl" fontWeight="medium">{institution}</Text>
        <Text color={useColorModeValue('gray.600', 'gray.400')}>{degree}</Text>
    </Box>
);

export default EducationItem;