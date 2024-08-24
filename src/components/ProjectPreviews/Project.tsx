import React from 'react';
import {
    Box,
    Heading,
    Text,
    Link,
    Button,
    VStack,
} from '@chakra-ui/react';
import { FaDownload } from 'react-icons/fa';

interface ProjectProps {
    title: string;
    description: string;
    link?: string;
    linkName?: string;
    build?: string;
    embed?: React.ReactNode;
}

const Project: React.FC<ProjectProps> = ({ title, description, link, linkName, build, embed }) => (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
        <VStack align="start" spacing={4}>
            <Heading size="md">{title}</Heading>
            <Text>{description}</Text>
            <Box>
                {link && (
                    <Link href={link} isExternal mr={2}>
                        <Button colorScheme="blue">{linkName || 'View Project'}</Button>
                    </Link>
                )}
                {build && (
                    <Link href={build} download>
                        <Button leftIcon={<FaDownload />} colorScheme="green">
                            Download Build
                        </Button>
                    </Link>
                )}
            </Box>
            {embed && <Box mt={4} width="100%">{embed}</Box>}
        </VStack>
    </Box>
);

export default Project;