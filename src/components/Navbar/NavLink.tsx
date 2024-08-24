import React from "react";
import {Link, useColorModeValue} from "@chakra-ui/react";
import {Link as RouterLink} from "react-router-dom";

interface NavLinkProps {
    children: React.ReactNode;
    to: string;
}

const NavLink: React.FC<NavLinkProps> = ({ children, to }) => (
    <Link
        as={RouterLink}
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.200', 'gray.700'),
        }}
        to={to}
    >
        {children}
    </Link>
);

export default NavLink