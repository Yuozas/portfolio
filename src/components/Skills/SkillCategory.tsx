import React from "react";
import {Box, Flex, Grid, GridItem, Heading, Icon, Text, useColorModeValue} from "@chakra-ui/react";
import {Skill, SkillProps} from "./index.ts";

interface SkillCategoryProps {
    title: string;
    icon: React.ElementType;
    emoji: string;
    skills: SkillProps[];
    colorScheme: string;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, icon, emoji, skills, colorScheme }) => {
    const bgColor = useColorModeValue(`${colorScheme}.50`, `${colorScheme}.900`);
    const borderColor = useColorModeValue(`${colorScheme}.200`, `${colorScheme}.700`);
    const headingColor = useColorModeValue(`${colorScheme}.800`, `${colorScheme}.100`);

    return (
        <Box
            bg={bgColor}
            borderRadius="lg"
            p={6}
            boxShadow="md"
            border="2px solid"
            borderColor={borderColor}
        >
            <Flex align="center" mb={6}>
                <Icon as={icon} boxSize={8} mr={3} color={headingColor} />
                <Heading size="lg" color={headingColor}>{title}</Heading>
                <Text fontSize="2xl" ml={2}>{emoji}</Text>
            </Flex>
            <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={6}>
                {skills.map((skill) => (
                    <GridItem key={skill.name}>
                        <Skill {...skill} />
                    </GridItem>
                ))}
            </Grid>
        </Box>
    );
};

export default SkillCategory;