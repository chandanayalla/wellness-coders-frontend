import React from 'react';
import { Box, Flex, Link, Image, Heading, Text, Button, useBreakpointValue, useMediaQuery, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Home1 = () => {
  const navigate = useNavigate();
  const [isMobile] = useMediaQuery("(max-width: 48em)");
  const displayMenu = useBreakpointValue({ base: 'none', md: 'flex' });

  const handleGetStartedClick = () => {
    navigate('/nutrition');
  };

  const handleSignOutClick = () => {
    navigate('/');
  };
  const handleUserDetailsClick = () => {
    navigate('/Profile');
  };

  return (
    <Flex direction="column" minH="100vh" bgGradient="linear(to-r, teal.400, teal.500)">
      <Box
        as="nav"
        width="full"
        bg="white"
        color="black"
        py={4}
        px={6}
        position="fixed"
        top={0}
        left={0}
        zIndex={1}
        boxShadow="lg"
      >
        <Flex align="center" justify="space-between" maxW="1200px" mx="auto">
          <Link href="/" aria-label="Homepage">
            <Image src="logo2.0.webp" alt="Logo" boxSize="70px" borderRadius="12px" />
          </Link>

          <Flex
            as="ul"
            listStyleType="none"
            spacing={4}
            align="center"
            display={displayMenu}
            gap={6}
          >
            <Box as="li">
            
              <Link href="/home1" fontWeight="bold" color="black" _hover={{ textDecoration: 'underline', color: '#e60f2e' }}>
                HOME
              </Link>
            </Box>
            <Box as="li">
              <Link href="/about1" fontWeight="bold" color="black" _hover={{ textDecoration: 'underline', color: '#e60f2e' }}>
                ABOUT
              </Link>
            </Box>
            <Box as="li">
              <Link href="/contact" fontWeight="bold" color="black" _hover={{ textDecoration: 'underline', color: '#e60f2e' }}>
                CONTACT
              </Link>
            </Box>
          </Flex>

  
          <Flex align="center">
            {/* <Button
              variant="solid"
              colorScheme="teal"
              size="sm"
              borderRadius="full"
              onClick={handleSignOutClick}
              ml={4}
            >
              Sign Out
            </Button> */}

            {isMobile && (
              <Box ml={4}>
                <Menu>
                  <MenuButton as={Button} variant="outline" colorScheme="teal" size="sm" borderRadius="full">
                    Menu
                  </MenuButton>
                  <MenuList>
                    <MenuItem onClick={() => navigate('/home1')}>Home</MenuItem>
                    <MenuItem onClick={() => navigate('/about1')}>About</MenuItem>
                    <MenuItem onClick={() => navigate('/contact')}>Contact</MenuItem>
                  </MenuList>
                </Menu>
              </Box>
            )}

            <Box ml={4}>
              <Menu>
                <MenuButton as={Button} colorScheme="teal" size="sm" borderRadius="full">
                  Profile
                </MenuButton>
                <MenuList>
                  <MenuItem onClick={handleUserDetailsClick}>User Details</MenuItem>
                  <MenuItem onClick={handleSignOutClick}>Sign Out</MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </Flex>
        </Flex>
      </Box>

  
      <Box
        pt="80px"
        flex="1"
        display="flex"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        color="white"
        px={4}
        bgGradient="linear(to-b, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7))"
        minH="calc(100vh - 80px)"
      >
        <Flex
          direction="column"
          align="center"
          justify="center"
          maxW="800px"
          mx="auto"
        >
          <Heading as="h1" size="2xl" mb={4} textShadow="2px 2px 4px rgba(0, 0, 0, 0.5)">
            Welcome to Our Website
          </Heading>
          <Text fontSize="lg" mb={6} textShadow="1px 1px 3px rgba(0, 0, 0, 0.5)">
            We are delighted to have you here! Explore our site to learn more about us.
          </Text>
          <Button
            onClick={handleGetStartedClick}
            size="lg"
            colorScheme="teal"
            variant="solid"
            _hover={{ bg: 'teal.800' }}
            borderRadius="full"
          >
            Get Started
          </Button>
        </Flex>
      </Box>

    
      <Box
        as="footer"
        bg="white"
        color="black"
        py={6}
        px={4}
        textAlign="center"
        width="full"
        borderTop="1px solid rgba(255, 255, 255, 0.3)"
      >
        <Flex direction="column" align="center">
          <Heading as="h3" size="lg" mb={2} textTransform="uppercase">
            Explore Nutrition & Meal Planning
          </Heading>
          <Text mb={4} fontSize="md">
            Your go-to resource for healthy eating and meal planning.
          </Text>
          <Flex as="ul" listStyleType="none" spacing={4} mb={4} justify="center">
            <Box as="li" mx={2}>
              <Link href="/nutrition" fontWeight="bold" _hover={{ textDecoration: 'underline' }}>
                Nutrition
              </Link>
            </Box>
            <Box as="li" mx={2}>
              <Link href="/meal-planning" fontWeight="bold" _hover={{ textDecoration: 'underline' }}>
                Meal Planning
              </Link>
            </Box>
            <Box as="li" mx={2}>
              <Link href="/recipes" fontWeight="bold" _hover={{ textDecoration: 'underline' }}>
                Recipes
              </Link>
            </Box>
          </Flex>
          <Text fontSize="sm" opacity={0.8}>
            © 2024 Wellness Coders. All rights reserved.
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Home1;
