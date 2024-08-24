import { Flex, Link } from '@chakra-ui/react';
import { FaFacebookF, FaYoutube, FaInstagram } from 'react-icons/fa';
import {SocialIcon} from "./index.ts";

const SocialIcons = () => (
    <Flex justify="center" gap={4}>
        <Link href="https://www.facebook.com/WhyIsThisStillHere/" isExternal>
            <SocialIcon icon={FaFacebookF} />
        </Link>
        <Link href="https://www.youtube.com/@GlitchInMatrix" isExternal>
            <SocialIcon icon={FaYoutube} />
        </Link>
        <Link href="https://www.instagram.com/yuozasu/" isExternal>
            <SocialIcon icon={FaInstagram} />
        </Link>
    </Flex>
);

export default SocialIcons;