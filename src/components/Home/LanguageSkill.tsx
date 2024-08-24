import React from "react";
import {Box, Flex, Progress, Text} from "@chakra-ui/react";

interface LanguageSkillProps {
    language: string;
    speaking: number;
    understanding: number;
    writing: number;
}

const LanguageSkill: React.FC<LanguageSkillProps> = ({ language, speaking, understanding, writing }) => {
    const getLevelText = (level: number) => {
        if (level === 4) return "Perfect";
        if (level === 3) return "Good";
        if (level === 2) return "Average";
        if (level === 1) return "Basics";
        return "None";
    };

    return (
        <Box mb={4}>
            <Text fontWeight="bold">{language}</Text>
            <Flex align="center" mb={1}>
                <Text width="100px">Speaking</Text>
                <Progress value={speaking * 25} colorScheme="green" height="12px" width="100px" mr={2} />
                <Text>{getLevelText(speaking)}</Text>
            </Flex>
            <Flex align="center" mb={1}>
                <Text width="100px">Understanding</Text>
                <Progress value={understanding * 25} colorScheme="green" height="12px" width="100px" mr={2} />
                <Text>{getLevelText(understanding)}</Text>
            </Flex>
            <Flex align="center">
                <Text width="100px">Writing</Text>
                <Progress value={writing * 25} colorScheme="green" height="12px" width="100px" mr={2} />
                <Text>{getLevelText(writing)}</Text>
            </Flex>
        </Box>
    );
};

export default LanguageSkill;