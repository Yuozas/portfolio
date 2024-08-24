import React from 'react';
import {
    Box,
    VStack,
    Heading,
    Divider,
    Container,
    SimpleGrid,
} from '@chakra-ui/react';
import {CourseItem, EducationItem} from "../components/Education";

const Education: React.FC = () => {
    return (
        <Container maxW="container.xl" py={8}>
            <VStack spacing={8} align="stretch">
                <Heading as="h1" size="2xl">Education</Heading>

                <Box>
                    <Heading as="h2" size="xl" mb={4}>Academic Education</Heading>
                    <EducationItem
                        period="2017 - 2020"
                        institution="SMK University of Applied Social Sciences"
                        degree="Professional Bachelor of Informatics Sciences in Software Engineering degree"
                    />
                    <EducationItem
                        period="2013 - 2017"
                        institution="Vilnius, Senvage Gymnasium"
                        degree="Secondary Education"
                    />
                    <EducationItem
                        period="2004 - 2013"
                        institution="Vilnius, Balys Dvarionas Ten-Year Music School"
                        degree="Music Education"
                    />
                </Box>

                <Divider />

                <Box>
                    <Heading as="h2" size="xl" mb={4}>Courses and Seminars</Heading>
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                        <CourseItem
                            date="2016.04"
                            instructor="Dalia Dokšaitė"
                            title="Japanese for advanced"
                            description="More speaking practice, cognitive culture. Official and everyday speech complex phrases. More kanji."
                            duration="40h"
                            hasCertificate={true}
                        />
                        <CourseItem
                            date="2015.12"
                            instructor="Dalia Dokšaitė"
                            title="Japanese for beginners"
                            description="Kanji basics, full hiragana, full katakana, sentence structure, different Japanese words, key phrases and self introduction."
                            duration="40h"
                            hasCertificate={true}
                        />
                    </SimpleGrid>
                </Box>
            </VStack>
        </Container>
    );
};

export default Education;