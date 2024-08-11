// import React from 'react';
// import { Box, Flex, Link, Image, useBreakpointValue, Heading, Text, Button } from '@chakra-ui/react';

// const Home = () => {
//   return (
//     <Box
//       as="section"
//       bgGradient="linear(to-r, teal.400, teal.600)"
//       color="white"
//       py={6}
//       minH="100vh"
//       position="relative"
//     >
//       <Flex
//         as="nav"
//         align="center"
//         justify="space-between"
//         maxW="1200px"
//         mx="auto"
//         px={4}
//         wrap="wrap"
//         position="absolute"
//         top={0}
//         width="full"
//         zIndex={1}
//       >
//         <Link href="/" aria-label="Homepage">
//           <Image src="logo2.0.webp" alt="Logo" boxSize="55px" />
//         </Link>

//         <Flex
//           as="ul"
//           listStyleType="none"
//           spacing={4}
//           align="center"
//           display={useBreakpointValue({ base: 'none', md: 'flex' })}
//         >
//           <Box as="li" mx={2}>
//             <Link href="/" fontWeight="bold" _hover={{ textDecoration: 'underline' }}>
//               HOME
//             </Link>
//           </Box>
//           <Box as="li" mx={2} >
//             <Link href="/about" fontWeight="bold" _hover={{ textDecoration: 'underline' }}>
//               ABOUT US
//             </Link>
//           </Box>
//           <Box as="li" mx={2}>
//             <Link href="/contact" fontWeight="bold" _hover={{ textDecoration: 'underline' }}>
//               CONTACT
//             </Link>
//           </Box>
//         </Flex>

//         <Flex
//           display={{ base: 'flex', md: 'none' }}
//           align="center"
//           justify="center"
//         >
//           <Heading size="md">Menu</Heading>
//         </Flex>
//       </Flex>

//       <Flex
//         direction="column"
//         align="center"
//         justify="center"
//         h="calc(100vh - 80px)"
//         textAlign="center"
//         position="relative"
//         zIndex={1}
//         px={4}
//       >
//         <Heading as="h1" size="2xl" mb={4} textShadow="2px 2px 4px rgba(0, 0, 0, 0.5)">
//           Welcome to Our Website
//         </Heading>
//         <Text fontSize="lg" mb={6} textShadow="1px 1px 3px rgba(0, 0, 0, 0.5)">
//           We are delighted to have you here! Explore our site to learn more about us.
//         </Text>
//         <Button
//           as={Link}
//           href="/get-started"
//           size="lg"
//           colorScheme="teal"
//           variant="solid"
//           _hover={{ bg: 'teal.700' }}
//         >
//           Get Started
//         </Button>
//       </Flex>
//     </Box>
//   );
// };

// export default Home;



import React from 'react';
import { Box, Flex, Link, Image, Heading, Text, Button, useBreakpointValue, useMediaQuery } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/get-started');
  };

  // Media query for handling mobile and tablet screens
  const [isMobile] = useMediaQuery("(max-width: 48em)");

  return (
    <Flex direction="column" minH="100vh" bgGradient="linear(to-r, teal.400, teal.600)">
      {/* Top Navigation Bar */}
      <Box
        as="nav"
        width="full"
        bg="teal.800"
        color="white"
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
            <Image src="logo2.0.webp" alt="Logo" boxSize="55px" />
          </Link>

          {/* Navigation Links */}
          <Flex
            as="ul"
            listStyleType="none"
            spacing={4}
            align="center"
            display={useBreakpointValue({ base: 'none', md: 'flex' })}
            gap={6}
          >
            <Box as="li">
              <Link href="/" fontWeight="bold" _hover={{ textDecoration: 'underline', color: 'teal.200' }}>
                HOME
              </Link>
            </Box>
            <Box as="li">
              <Link href="/about" fontWeight="bold" _hover={{ textDecoration: 'underline', color: 'teal.200' }}>
                ABOUT US
              </Link>
            </Box>
            <Box as="li">
              <Link href="/contact" fontWeight="bold" _hover={{ textDecoration: 'underline', color: 'teal.200' }}>
                CONTACT
              </Link>
            </Box>
          </Flex>

          {/* Mobile Menu Button */}
          {isMobile && (
            <Box>
              <Button variant="outline" colorScheme="teal" size="sm" borderRadius="full">
                Menu
              </Button>
            </Box>
          )}
        </Flex>
      </Box>

      {/* Main Content */}
      <Box
        pt="80px" // Adjust padding to accommodate the fixed navbar
        flex="1"
        display="flex"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        color="white"
        px={4}
        bgGradient="linear(to-b, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7))"
        minH="calc(100vh - 80px)" // Ensure it fits within the viewport
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

      {/* Footer */}
      <Box
        as="footer"
        bg="teal.800"
        color="white"
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
            © 2024 Your Company Name. All rights reserved.
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Home;
