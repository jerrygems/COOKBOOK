import React from 'react';
import { Box, Button, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, Flex, Text, Link, VStack, Icon } from '@chakra-ui/react';
import { FaHome, FaUser, FaCog } from 'react-icons/fa';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { useDisclosure } from '@chakra-ui/react';


const SideNavBar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box>
            {/* Floating Action Button */}
            <Button
                onClick={onOpen}
                position="fixed"
                bottom="20px"
                left="20px"
                borderRadius="full"
                colorScheme="teal"
                size="lg"
                leftIcon={<ChevronRightIcon />}
            />

            {/* Drawer Component */}
            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader>
                        <Text fontSize="2xl" fontWeight="bold" mb={6}>
                            CookBook
                        </Text>
                    </DrawerHeader>

                    <DrawerBody>
                        <Flex direction="column" height="100%">
                            <VStack spacing={4} align="start">
                                <Link href="#home" display="flex" alignItems="center">
                                    <Icon as={FaHome} mr={2} />
                                    Home
                                </Link>
                                <Link href="#recipes" display="flex" alignItems="center">
                                    <Icon as={FaUser} mr={2} />
                                    Recipes
                                </Link>
                                <Link href="#about" display="flex" alignItems="center">
                                    <Icon as={FaCog} mr={2} />
                                    About
                                </Link>
                            </VStack>
                        </Flex>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>

    );
};

export default SideNavBar;