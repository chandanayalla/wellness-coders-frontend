import React from 'react';
import { Box, Text, SimpleGrid, Button, VStack, Center } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const NutritionInfoPage = () => {
  const navigate = useNavigate();

  const handleCalorieCalculatorClick = () => {
    navigate('/calorieCalculator');
  };

  const handleMacronutrientCalculatorClick = () => {
    navigate('/MacronutritionCalculator');
  };

  const handleHydrationCalculatorClick = () => {
    navigate('/HydrationCalculator');
  };

  const handleAddMealsClick = () => {
    navigate('/add-meals');
  };

  return (
    <Box p={8}>
      {/* Description Section */}
      <VStack spacing={4} align="start" mb={8}>
        <Text fontSize="2xl" fontWeight="bold">
          Understanding Your Nutritional Needs
        </Text>
        <Text fontSize="lg">
          Proper nutrition is essential for athletes and fitness enthusiasts to optimize performance, recovery, and overall health.
          Knowing your calorie needs, macronutrient ratios, and hydration strategies is crucial in tailoring your diet to meet your goals.
        </Text>
        <Text fontSize="md">
          <strong>Calorie Needs:</strong> Determining the right amount of calories ensures you are fueling your body adequately for your activity level.
        </Text>
        <Text fontSize="md">
          <strong>Macronutrient Ratios:</strong> Balancing proteins, fats, and carbohydrates is key to supporting energy levels, muscle repair, and overall health.
        </Text>
        <Text fontSize="md">
          <strong>Hydration Strategy:</strong> Staying hydrated is vital for optimal performance and recovery, as it affects everything from energy levels to muscle function.
        </Text>
      </VStack>

      {/* Columns with Calculate Buttons */}
      <SimpleGrid columns={3} spacing={8} mb={12}>
        <Box p={6} borderWidth="1px" borderRadius="md">
          <Text fontSize="xl" mb={4}>
            Calorie Counter
          </Text>
          <Text mb={4}>
            Add your content here related to calorie needs.
          </Text>
          <Button colorScheme="teal" width="full" onClick={handleCalorieCalculatorClick}>
            Calorie Calculator
          </Button>
        </Box>
        <Box p={6} borderWidth="1px" borderRadius="md">
          <Text fontSize="xl" mb={4}>
            Macronutrients Calculator
          </Text>
          <Text mb={4}>
            Add your content here related to macronutrient ratios.
          </Text>
          <Button colorScheme="teal" width="full" onClick={handleMacronutrientCalculatorClick}>
            Macronutrient Calculator
          </Button>
        </Box>
        <Box p={6} borderWidth="1px" borderRadius="md">
          <Text fontSize="xl" mb={4}>
            Hydration Strategy
          </Text>
          <Text mb={4}>
            Add your content here related to hydration strategy.
          </Text>
          <Button colorScheme="teal" width="full" onClick={handleHydrationCalculatorClick}>
            Hydration Calculator
          </Button>
        </Box>
      </SimpleGrid>

      {/* Centered Box */}
      <Center>
        <Box
          maxW="lg"
          p={6}
          borderWidth="1px"
          borderRadius="md"
          bg="gray.50"
          boxShadow="lg"
          textAlign="center"
        >
          <Text fontSize="xl" fontWeight="bold" mb={4}>
            Add Meals
          </Text>
          <Text mb={4}>
            Here you can select meals for <strong>Breakfast</strong>, <strong>Lunch</strong>, and <strong>Dinner</strong>.
          </Text>
          <Button colorScheme="teal" onClick={handleAddMealsClick}>
            Enter
          </Button>
        </Box>
      </Center>
    </Box>
  );
};

export default NutritionInfoPage;
