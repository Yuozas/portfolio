import React from "react";
import {Icon} from "@chakra-ui/react";

interface SocialIconProps {
    icon: React.ElementType;
}

const SocialIcon: React.FC<SocialIconProps> = ({ icon }) => (
    <Icon
        as={icon}
        w={6}
        h={6}
        _hover={{ color: 'yellow.400' }}
        transition="color 0.2s"
    />
);

export default SocialIcon;