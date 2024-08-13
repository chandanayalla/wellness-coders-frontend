import React from 'react';
import { Box, Heading, List, ListItem, ChakraProvider, Container } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';

const ResultPage = () => {
  const location = useLocation();
  const { breakfast, lunch, dinner } = location.state || {};

  return (
    <ChakraProvider>
      <Box
        backgroundImage="url('/result.jpg')" 
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        minHeight="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        p={4}
      >
        <Container 
          maxW="container.md" 
          mt={10} 
          p={8} 
          borderWidth={1} 
          borderRadius="lg" 
          boxShadow="lg" 
          bg="white" 
          opacity={0.9} // Slight opacity for better readability
        >
          <Heading as="h1" size="xl" mb={6} color="teal.600">Submitted Meals</Heading>
          <Box p={5} borderWidth={1} borderRadius="lg" bg="gray.50">
            <Heading as="h2" size="lg" color="teal.600" mb={4}>Selected Meals:</Heading>
            <List spacing={3}>
              <ListItem><strong>Breakfast:</strong> {breakfast || 'None selected'}</ListItem>
              <ListItem><strong>Lunch:</strong> {lunch || 'None selected'}</ListItem>
              <ListItem><strong>Dinner:</strong> {dinner || 'None selected'}</ListItem>
            </List>
          </Box>
        </Container>
      </Box>
    </ChakraProvider>
  );
};

export default ResultPage;
