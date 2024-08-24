import React from "react";
import {Flex, Icon, Progress, Text, useColorModeValue} from "@chakra-ui/react";
import {FaRegStar, FaStar} from "react-icons/fa";
import {CmdBlock} from "../Global";

export interface SkillProps {
    name: string;
    level: number;
    description: string;
    icon: React.ElementType;
}

const Skill: React.FC<SkillProps> = ({ name, level, description, icon }) => {
    const starColor = useColorModeValue('yellow.400', 'yellow.200');

    return (
        <CmdBlock icon={icon}>
            <Text color="green.500" mb={2} fontWeight="bold">
                C:\Skills&gt; echo {name}
            </Text>
            <Flex align="center" mb={2}>
                <Progress value={level * 10} colorScheme="green" flex={1} mr={2} />
                <Flex>
                    {[...Array(5)].map((_, i) => (
                        <Icon
                            key={i}
                            as={i < Math.round(level / 2) ? FaStar : FaRegStar}
                            color={starColor}
                            boxSize={4}
                        />
                    ))}
                </Flex>
            </Flex>
            <Text color="gray.500" fontSize="sm">
                {description}
            </Text>
        </CmdBlock>
    );
};

export default Skill;