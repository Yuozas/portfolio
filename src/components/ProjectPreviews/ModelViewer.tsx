import React, { useEffect } from 'react';
import { Box } from '@chakra-ui/react';

interface ModelViewerProps {
    modelUrl: string;
    width?: string;
    height?: string;
}

const ModelViewer: React.FC<ModelViewerProps> = ({ modelUrl, width = '100%', height = '500px' }) => {
    useEffect(() => {
        import('@google/model-viewer');
    }, []);

    return (
        <Box width={width}>
            <div dangerouslySetInnerHTML={{
                __html: `
          <model-viewer
            src="${modelUrl}"
            auto-rotate
            camera-controls
            style="width: ${width}; height:${height};"
          ></model-viewer>
        `
            }} />
        </Box>
    );
};

export default ModelViewer;