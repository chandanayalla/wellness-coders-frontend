import React from 'react';
import {
  Box,
  Heading,
  Text,
  Select,
  VStack,
  Container,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
export const MealPlanning = () => {
  const navigate = useNavigate();

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    // Redirect based on the selected value
    if (selectedValue) {
      navigate('/${selectedValue}');
    }
  };

  return (
    <Box
      minH="100vh"
      bg="gray.50"
      py={10}
      px={6}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Container maxW="xl" bg="white" p={8} borderRadius="lg" boxShadow="md">
        <VStack spacing={6} align="start">
          <Heading as="h1" size="xl" color="black">
            Meal Planning for Athletes
          </Heading>

          <Text fontSize="lg" color="gray.700">
            Meal planning is essential for athletes to ensure they get the right
            nutrients to fuel their training and recovery. A well-balanced diet
            can enhance performance, prevent injuries, and help achieve
            personal fitness goals. Depending on the sport, different athletes
            may require different types and amounts of nutrients.
          </Text>

          <Text fontSize="md" color="gray.600">
            Choose your type of sport to learn more about specific meal plans:
          </Text>

          <Select placeholder="Select athlete type" focusBorderColor="teal.500" onChange={handleSelectChange}>
            <option value="longjump">Long Jump</option>
            <option value="polevault">Pole Vault</option>
            <option value="archery">Archery</option>
            <option value="wrestler">Wrestlers</option>
            <option value="runner">Runner</option>
            <option value="swimmer">Swimmer</option>
            <option value="marathon">Marathon</option>
            <option value="cyclist">Cyclist</option>
            <option value="javelin">Javelin Throw</option>
            <option value="hurdling">Hurdling</option>
            <option value="weightlifter">Weightlifter</option>
          </Select>

          <Text fontSize="sm" color="gray.500" pt={4}>
            Depending on the type of athlete, the nutritional needs can vary
            significantly. Select your sport from the dropdown above to learn
            more about how to tailor your diet to meet your athletic needs.
          </Text>
        </VStack>
      </Container>
    </Box>
  );
};

export default MealPlanning;