import React from "react";
import {Box, Flex, Icon, Text, useColorModeValue} from "@chakra-ui/react";

const CmdBlock: React.FC<{ children: React.ReactNode, icon: React.ElementType }> = ({ children, icon }) => {
    const bgColor = useColorModeValue('gray.100', 'gray.700');
    const borderColor = useColorModeValue('gray.300', 'gray.600');
    const iconColor = useColorModeValue('blue.500', 'blue.300');

    return (
        <Box
            bg={bgColor}
            border="1px solid"
            borderColor={borderColor}
            borderRadius="md"
            p={4}
            fontFamily="monospace"
            position="relative"
            transition="all 0.3s"
            _hover={{ transform: 'translateY(-5px)', boxShadow: 'lg' }}
        >
            <Flex align="center" mb={2}>
                <Icon as={icon} color={iconColor} boxSize={6} mr={2} />
                <Text
                    position="absolute"
                    top={-3}
                    left={2}
                    bg={bgColor}
                    px={2}
                    fontSize="xs"
                    fontWeight="bold"
                >
                    CMD
                </Text>
            </Flex>
            {children}
        </Box>
    );
};

export default CmdBlock;