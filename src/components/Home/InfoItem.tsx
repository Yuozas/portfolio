import React from "react";
import {Flex, Icon, Text} from "@chakra-ui/react";

interface InfoItemProps {
    icon: React.ElementType;
    text: string;
}

const InfoItem: React.FC<InfoItemProps> = ({ icon, text }) => (
    <Flex align="center">
        <Icon as={icon} color="yellow.400" mr={2} />
        <Text>{text}</Text>
    </Flex>
);

export default InfoItem;