import React from 'react';
import { Box, Flex, Text, Link, VStack, Icon } from '@chakra-ui/react';
import { FaHome, FaUser, FaCog } from 'react-icons/fa';

const SideNavBar = () => {
  return (
    <Box
      as="nav"
      width="250px"
      height="100vh"
      bg="gray.800"
      color="white"
      position="fixed"
      p={4}
    >
      <Flex direction="column" height="100%">
        <Text fontSize="2xl" fontWeight="bold" mb={6}>
          The Cookbook
        </Text>
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
    </Box>
  );
};

export default SideNavBar;