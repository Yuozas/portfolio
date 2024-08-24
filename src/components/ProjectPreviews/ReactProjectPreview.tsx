import React from 'react';
import { Box, VStack } from '@chakra-ui/react';
import {GitHubRepoCard} from "./index.ts";

interface ReactProjectPreviewProps {
    sandboxId: string;
    githubRepo: string;
    title: string;
    module: string;
}

const ReactProjectPreview: React.FC<ReactProjectPreviewProps> = ({ sandboxId, githubRepo, title, module }) => {
    return (
        <VStack spacing={4} align="stretch">
            <Box height="500px">
                <iframe
                    src={`https://codesandbox.io/embed/${sandboxId}?view=preview&module=${module}&hidenavigation=1&fontsize=14&hidenavigation=1&theme=dark`}
                    style={{
                        width: '100%',
                        height: '100%',
                        border: 0,
                        borderRadius: '4px',
                        overflow: 'hidden'
                    }}
                    title={title}
                    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                ></iframe>
            </Box>
            <GitHubRepoCard repo={githubRepo} />
        </VStack>
    );
};

export default ReactProjectPreview;