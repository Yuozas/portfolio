import React from 'react';
import {
    Box,
    Container,
    Flex,
    VStack,
    Heading,
    Text,
    Image,
    SimpleGrid,
    Icon,
    useColorModeValue,
} from '@chakra-ui/react';
import { FaEnvelope, FaPhone, FaBirthdayCake, FaMapMarkerAlt, FaLanguage } from 'react-icons/fa';
import {InfoItem, LanguageSkill, SkillCard, SocialIcons} from "../components/Home";
import AboutMe from "../components/Home/AboutMe.tsx";

const Home: React.FC = () => {
    const bg = useColorModeValue('gray.50', 'gray.900');
    const color = useColorModeValue('gray.800', 'white');

    return (
        <Box bg={bg} color={color} minHeight="100vh">
            <Container maxW="container.xl" py={8}>
                <Flex direction={{ base: 'column', md: 'row' }} gap={8}>
                    {/* Sidebar */}
                    <VStack
                        width={{ base: 'full', md: '30%' }}
                        bg={useColorModeValue('white', 'gray.800')}
                        p={6}
                        borderRadius="lg"
                        boxShadow="md"
                        spacing={4}
                        align="stretch"
                    >
                        <Image
                            borderRadius="full"
                            boxSize="150px"
                            src="/portfolio/profile-pic.jpg"
                            alt="Juozas Žilys"
                            mx="auto"
                        />
                        <Heading as="h1" size="xl" textAlign="center">
                            Juozas Žilys
                        </Heading>
                        <Text textAlign="center" color="gray.500">
                            Full-Stack Developer
                        </Text>
                        <VStack spacing={3} align="stretch">
                            <InfoItem icon={FaEnvelope} text="juozaszilys@hotmail.com" />
                            <InfoItem icon={FaPhone} text="+370 639 81818" />
                            <InfoItem icon={FaBirthdayCake} text="August 11, 1998" />
                            <InfoItem icon={FaMapMarkerAlt} text="Vilnius, Lithuania" />
                        </VStack>
                        <SocialIcons />

                        <Box mt={6}>
                            <Heading as="h3" size="md" mb={4}>
                                <Flex align="center">
                                    <Icon as={FaLanguage} mr={2} />
                                    Human Languages I Know
                                </Flex>
                            </Heading>
                            <LanguageSkill language="Lithuanian" speaking={4} understanding={4} writing={3} />
                            <LanguageSkill language="Russian" speaking={4} understanding={4} writing={3} />
                            <LanguageSkill language="English" speaking={4} understanding={4} writing={4} />
                            <LanguageSkill language="Japanese" speaking={1} understanding={1} writing={2} />
                            <LanguageSkill language="Polish" speaking={1} understanding={2} writing={0} />
                            <Text fontSize="sm" fontStyle="italic" mt={2}>
                                P.S. I've been fluent in the language of computers since I was four years old!
                            </Text>
                        </Box>
                    </VStack>

                    {/* Main Content */}
                    <VStack width={{ base: 'full', md: '70%' }} spacing={8} align="stretch">
                        <Box>
                            <Heading as="h2" size="xl" mb={4}>
                                About Me
                            </Heading>
                            <AboutMe/>
                        </Box>

                        <Box>
                            <Heading as="h2" size="xl" mb={4}>
                                What I'm Passionate About
                            </Heading>
                            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                                <SkillCard
                                    icon="🎮"
                                    title="Game Development"
                                    description="Creating immersive experiences with Unity and C#. Currently working on a horrow game with my friend and exploring innovative game mechanics."
                                />
                                <SkillCard
                                    icon="🌐"
                                    title="Web Development"
                                    description="Building responsive and dynamic websites using a variety of technologies including React, .NET, and PHP. Always exploring new frameworks and tools."
                                />
                                <SkillCard
                                    icon="🎨"
                                    title="Multimedia Production"
                                    description="Combining technical skills with creativity in video editing, 3D modeling, and digital art creation. Proficient in tools like Adobe Creative Suite."
                                />
                                <SkillCard
                                    icon="🤖"
                                    title="AI & Machine Learning"
                                    description="Exploring the fascinating world of artificial intelligence using Python. Excited about integrating AI into future projects."
                                />
                                <SkillCard
                                    icon="📱"
                                    title="Mobile App Development"
                                    description="Developing Android applications and exploring cross-platform solutions to bring ideas to life on mobile devices."
                                />
                                <SkillCard
                                    icon="🧠"
                                    title="Problem Solving"
                                    description="Tackling complex challenges across various domains, from algorithmic puzzles to real-world software architecture problems."
                                />
                            </SimpleGrid>
                        </Box>
                    </VStack>
                </Flex>
            </Container>
        </Box>
    );
};

export default Home;