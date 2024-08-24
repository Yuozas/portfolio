import React from 'react';
import {
    Box,
    Flex,
    HStack,
    IconButton,
    Button,
    useDisclosure,
    useColorModeValue,
    useColorMode,
    Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import {NavLink} from "./index.ts";

const Navbar: React.FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                <IconButton
                    size={'md'}
                    icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                    aria-label={'Open Menu'}
                    display={{ md: 'none' }}
                    onClick={isOpen ? onClose : onOpen}
                />
                <HStack spacing={8} alignItems={'center'}>
                    <Box fontWeight="bold">Juozas Žilys</Box>
                    <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/work-experience">Work Experience</NavLink>
                        <NavLink to="/education">Education</NavLink>
                        <NavLink to="/skills">Skills</NavLink>
                        <NavLink to="/projects">Projects</NavLink>
                    </HStack>
                </HStack>
                <Flex alignItems={'center'}>
                    <Button onClick={toggleColorMode} mr={4}>
                        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                    </Button>
                </Flex>
            </Flex>

            {isOpen ? (
                <Box pb={4} display={{ md: 'none' }}>
                    <Stack as={'nav'} spacing={4}>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/work-experience">Work Experience</NavLink>
                        <NavLink to="/education">Education</NavLink>
                        <NavLink to="/skills">Skills</NavLink>
                        <NavLink to="/projects">Projects</NavLink>
                    </Stack>
                </Box>
            ) : null}
        </Box>
    );
};

export default Navbar;