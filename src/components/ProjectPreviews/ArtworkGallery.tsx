import React, {useState, useEffect, useCallback, useRef, useMemo} from 'react';
import {
    Box,
    SimpleGrid,
    Image,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    IconButton,
    Flex,
} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

interface ArtworkImage {
    src: string;
    alt: string;
    rotation?: number;
}

interface ArtworkGalleryProps {
    images: ArtworkImage[];
}

const ArtworkGallery: React.FC<ArtworkGalleryProps> = ({ images }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
    const [windowDimensions, setWindowDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });
    const modalContentRef = useRef<HTMLDivElement>(null);

    const isOneImage = useMemo(() => {
        return images.length === 1;
    }, [images.length]);

    useEffect(() => {
        const handleResize = () => setWindowDimensions({ width: window.innerWidth, height: window.innerHeight });
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleImageClick = (index: number) => {
        setSelectedImageIndex(index);
        onOpen();
    };

    const handleNavigation = useCallback((direction: 'prev' | 'next', e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedImageIndex === null) return;

        let newIndex: number;
        if (direction === 'next') {
            newIndex = (selectedImageIndex + 1) % images.length;
        } else {
            newIndex = (selectedImageIndex - 1 + images.length) % images.length;
        }
        setSelectedImageIndex(newIndex);
    }, [selectedImageIndex, images.length]);

    const handleModalClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    }, [onClose]);

    return (
        <Box width="100%">
            <SimpleGrid columns={isOneImage ? { base: 1 } : { base: 1, md: 2, lg: 3 }} spacing={6}>
                {images.map((image, index) => (
                    <Box
                        key={index}
                        height="300px"
                        overflow="hidden"
                        position="relative"
                        borderRadius="md"
                        boxShadow="md"
                        cursor="pointer"
                        onClick={() => handleImageClick(index)}
                        _hover={{ boxShadow: "lg" }}
                    >
                        <Image
                            src={image.src}
                            alt={image.alt}
                            objectFit="cover"
                            width="100%"
                            height="100%"
                            transform={`rotate(${image.rotation || 0}deg)`}
                            transition="transform 0.3s"
                            _hover={{ transform: `rotate(${image.rotation || 0}deg) scale(1.05)` }}
                        />
                    </Box>
                ))}
            </SimpleGrid>

            <Modal isOpen={isOpen} onClose={onClose} size="full">
                <ModalOverlay />
                <ModalContent bg="rgba(0,0,0,0.8)" maxW="100vw" maxH="100vh" m={0}>
                    <ModalCloseButton color="white" zIndex={2} top={4} right={4} />
                    <ModalBody p={0} display="flex" alignItems="center" justifyContent="center" onClick={handleModalClick}>
                        {selectedImageIndex !== null && (
                            <Flex
                                ref={modalContentRef}
                                direction="column"
                                align="center"
                                justify="center"
                                width="100%"
                                height="100%"
                                position="relative"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {
                                    !isOneImage &&
                                    <IconButton
                                        aria-label="Previous image"
                                        icon={<ChevronLeftIcon />}
                                        onClick={(e) => handleNavigation('prev', e)}
                                        size="lg"
                                        fontSize="3xl"
                                        variant="ghost"
                                        color="white"
                                        position="absolute"
                                        left={4}
                                        top="50%"
                                        transform="translateY(-50%)"
                                        zIndex={2}
                                    />
                                }
                                {
                                    !isOneImage &&
                                    <IconButton
                                        aria-label="Next image"
                                        icon={<ChevronRightIcon />}
                                        onClick={(e) => handleNavigation('next', e)}
                                        size="lg"
                                        fontSize="3xl"
                                        variant="ghost"
                                        color="white"
                                        position="absolute"
                                        right={4}
                                        top="50%"
                                        transform="translateY(-50%)"
                                        zIndex={2}
                                    />
                                }
                                <Box
                                    width={`${windowDimensions.width * 0.8}px`}
                                    height={`${windowDimensions.height * 0.8}px`}
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"
                                >
                                    <Image
                                        src={images[selectedImageIndex].src}
                                        alt={images[selectedImageIndex].alt}
                                        maxWidth="100%"
                                        maxHeight="100%"
                                        objectFit="contain"
                                        transform={`rotate(${images[selectedImageIndex].rotation || 0}deg)`}
                                    />
                                </Box>
                            </Flex>
                        )}
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Box>
    );
};

export default ArtworkGallery;