import React from 'react';
import {
        Heading,
        Container,
        Divider,
        VStack,
        Text,
        UnorderedList,
        ListItem,
} from '@chakra-ui/react';
import { CurrentJob, WorkExperience } from "../components/WorkExperience";

const WorkExperiencePage: React.FC = () => {
        return (
            <Container maxW="container.xl" py={8}>
                    <Heading as="h1" size="2xl" mb={6}>Work Experience</Heading>

                    <CurrentJob
                        title="Full Stack Web Developer"
                        company="DAVIVA"
                        startDate="May 13, 2021"
                        location="Lithuania, Vilnius"
                        description={
                                <VStack align="start" spacing={4}>
                                        <Text fontWeight="bold">Technology Stack</Text>
                                        <UnorderedList pl={4}>
                                                <ListItem>Front-end: React</ListItem>
                                                <ListItem>Back-end: .NET</ListItem>
                                                <ListItem>Database: MariaDB</ListItem>
                                                <ListItem>Search: Elasticsearch</ListItem>
                                                <ListItem>Event-driven architecture: RabbitMQ, Hangfire</ListItem>
                                                <ListItem>Architecture: Domain-Driven Design (DDD), CQRS, MediatR, Clean Architecture</ListItem>
                                        </UnorderedList>

                                        <Text fontWeight="bold">Core Responsibilities</Text>
                                        <UnorderedList pl={4}>
                                                <ListItem>
                                                        Develop and maintain systems for:
                                                        <UnorderedList>
                                                                <ListItem>Product management</ListItem>
                                                                <ListItem>Order processing</ListItem>
                                                                <ListItem>Financial operations</ListItem>
                                                        </UnorderedList>
                                                </ListItem>
                                                <ListItem>
                                                        Implement and integrate:
                                                        <UnorderedList>
                                                                <ListItem>Marketplace APIs for product listing and order management</ListItem>
                                                                <ListItem>Automated parcel sending systems using delivery service APIs</ListItem>
                                                                <ListItem>User management systems using Keycloak</ListItem>
                                                        </UnorderedList>
                                                </ListItem>
                                                <ListItem>Responsible for system architecture decisions and feature implementations</ListItem>
                                                <ListItem>Collaborate with team members to optimize workflows and improve system efficiency</ListItem>
                                        </UnorderedList>

                                        <Text fontWeight="bold">Infrastructure & DevOps</Text>
                                        <UnorderedList pl={4}>
                                                <ListItem>Manage server infrastructure using Digital Ocean droplets and Docker containers</ListItem>
                                                <ListItem>Utilize Cloudflare for website management and security</ListItem>
                                                <ListItem>Work with Linux and Ubuntu for server management</ListItem>
                                        </UnorderedList>

                                        <Text fontWeight="bold">E-commerce & Web Development</Text>
                                        <UnorderedList pl={4}>
                                                <ListItem>Develop custom modules and maintain Prestashop-based e-commerce platform</ListItem>
                                                <ListItem>Develop and maintain WordPress websites</ListItem>
                                                <ListItem>Contribute to UI/UX improvements to maximize work efficiency</ListItem>
                                        </UnorderedList>

                                        <Text fontWeight="bold">Integration & API Work</Text>
                                        <UnorderedList pl={4}>
                                                <ListItem>Integrate with AWS for image storage</ListItem>
                                                <ListItem>Work with YouTube API for video management</ListItem>
                                                <ListItem>Implement PrintNode API for automated printing of labels and documents</ListItem>
                                        </UnorderedList>

                                        <Text fontWeight="bold">Specialized Tasks</Text>
                                        <UnorderedList pl={4}>
                                                <ListItem>Work with scanners and parcel cubes for automated weighing and dimensioning</ListItem>
                                                <ListItem>Extensive experience with PDF file generation for invoices, QR stickers, and financial reports</ListItem>
                                        </UnorderedList>

                                        <Text fontWeight="bold">Innovation & Improvement</Text>
                                        <UnorderedList pl={4}>
                                                <ListItem>Suggest and implement new features to enhance overall system functionality</ListItem>
                                                <ListItem>Continuously improve and optimize existing systems and workflows</ListItem>
                                        </UnorderedList>
                                </VStack>
                        }
                    />

                    <Divider my={8} />

                    <WorkExperience
                        title="Depot Clerk"
                        company="DPD"
                        startDate="December 1, 2020"
                        endDate="March 31, 2021"
                        location="United Kingdom, Dartford"
                        description={
                                <VStack align="start" spacing={4}>
                                        <Text fontWeight="bold">Key Responsibilities</Text>
                                        <UnorderedList pl={4}>
                                                <ListItem>Monitored driver activities and system compliance</ListItem>
                                                <ListItem>Inputted data into DPD's parcel/logistics monitoring system</ListItem>
                                                <ListItem>Ensured accurate and timely processing of parcels</ListItem>
                                                <ListItem>Coordinated with drivers and other depot staff to optimize delivery routes</ListItem>
                                        </UnorderedList>

                                        <Text fontWeight="bold">Skills Developed</Text>
                                        <UnorderedList pl={4}>
                                                <ListItem>Logistics management</ListItem>
                                                <ListItem>Data entry and system management</ListItem>
                                                <ListItem>Team coordination</ListItem>
                                                <ListItem>Problem-solving in a fast-paced environment</ListItem>
                                        </UnorderedList>
                                </VStack>
                        }
                    />

                    <WorkExperience
                        title="Node.js Developer Internship"
                        company="Indie Development Team (Anonymous)"
                        startDate="January 1, 2020"
                        endDate="May 31, 2020"
                        location="Canada (Remote)"
                        description={
                                <VStack align="start" spacing={4}>
                                        <Text fontWeight="bold">Project Focus</Text>
                                        <UnorderedList pl={4}>
                                                <ListItem>Developed and maintained Discord Bot using Node.js</ListItem>
                                                <ListItem>Implemented new features to enhance bot functionality</ListItem>
                                                <ListItem>Debugged and fixed existing issues in the codebase</ListItem>
                                        </UnorderedList>

                                        <Text fontWeight="bold">Skills Developed</Text>
                                        <UnorderedList pl={4}>
                                                <ListItem>Node.js development</ListItem>
                                                <ListItem>API integration (Discord API)</ListItem>
                                                <ListItem>Version control with Git</ListItem>
                                                <ListItem>Remote collaboration</ListItem>
                                        </UnorderedList>
                                </VStack>
                        }
                    />

                    <WorkExperience
                        title="Game Developer Internship"
                        company="Mobile Game Development Startup"
                        startDate="January 1, 2020"
                        endDate="January 2, 2020"
                        location="Lithuania, Vilnius"
                        description={
                                <VStack align="start" spacing={4}>
                                        <Text fontWeight="bold">Project Involvement</Text>
                                        <UnorderedList pl={4}>
                                                <ListItem>Participated in Unity C# Game development team</ListItem>
                                                <ListItem>Focused on UI element development using C# and Unity Engine built-in features</ListItem>
                                        </UnorderedList>

                                        <Text fontWeight="bold">Experience Gained</Text>
                                        <UnorderedList pl={4}>
                                                <ListItem>Exposure to professional game development environment</ListItem>
                                                <ListItem>Collaboration with developers of various experience levels</ListItem>
                                                <ListItem>Insight into startup challenges and operations</ListItem>
                                        </UnorderedList>

                                        <Text fontStyle="italic">Note: The startup was put on hold due to sponsorship issues after one day. The company is now operational under the name DragonAttack.</Text>
                                </VStack>
                        }
                    />

                    <WorkExperience
                        title="Web Developer Internship"
                        company="Logistics Company (Anonymous)"
                        startDate="January 1, 2019"
                        endDate="May 31, 2019"
                        location="Lithuania, Vilnius"
                        description={
                                <VStack align="start" spacing={4}>
                                        <Text fontWeight="bold">Project Overview</Text>
                                        <UnorderedList pl={4}>
                                                <ListItem>Independently developed a full website for a logistics company</ListItem>
                                                <ListItem>Implemented both front-end and back-end functionality</ListItem>
                                        </UnorderedList>

                                        <Text fontWeight="bold">Technologies Used</Text>
                                        <UnorderedList pl={4}>
                                                <ListItem>Back-end: PHP, PostgreSQL</ListItem>
                                                <ListItem>Front-end: JavaScript, jQuery, CSS, HTML</ListItem>
                                        </UnorderedList>

                                        <Text fontWeight="bold">Skills Developed</Text>
                                        <UnorderedList pl={4}>
                                                <ListItem>Full-stack web development</ListItem>
                                                <ListItem>Database design and management</ListItem>
                                                <ListItem>UI/UX considerations for logistics applications</ListItem>
                                                <ListItem>Project management and independent work</ListItem>
                                        </UnorderedList>
                                </VStack>
                        }
                    />
            </Container>
        );
};

export default WorkExperiencePage;