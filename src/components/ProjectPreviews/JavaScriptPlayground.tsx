import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { Box } from '@chakra-ui/react';

interface JavaScriptPlaygroundProps {
    code: string;
}

const JavaScriptPlayground: React.FC<JavaScriptPlaygroundProps> = ({ code }) => {
    return (
        <LiveProvider code={code}>
            <Box mb={4}>
                <LiveEditor />
            </Box>
            <LiveError />
            <Box p={4} border="1px solid" borderColor="gray.200" borderRadius="md">
                <LivePreview />
            </Box>
        </LiveProvider>
    );
};

export default JavaScriptPlayground;