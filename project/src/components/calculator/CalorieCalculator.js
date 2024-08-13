import React, { useState } from 'react';
import { Box, FormControl, FormLabel, Input, Button, VStack, Heading } from '@chakra-ui/react';

const CalorieCalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [activityLevel, setActivityLevel] = useState('');
  const [calories, setCalories] = useState(null);

  const calculateCalories = () => {
    const bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    const totalCalories = bmr * parseFloat(activityLevel);
    setCalories(totalCalories);
  };

  return (
    <Box
    backgroundImage="url('/calorie1.jpg')" 
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        minHeight="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        p={4}
    >
    <Box p={6} shadow="larger" borderWidth="1px" borderRadius="lg" backgroundColor="white">
      <Heading size="lg" mb={4}>Calorie Needs Calculator</Heading>
      <VStack spacing={4}>
        <FormControl id="weight">
          <FormLabel>Weight (kg)</FormLabel>
          <Input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
        </FormControl>
        <FormControl id="height">
          <FormLabel>Height (cm)</FormLabel>
          <Input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
        </FormControl>
        <FormControl id="age">
          <FormLabel>Age (years)</FormLabel>
          <Input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
        </FormControl>
        <FormControl id="activity-level">
          <FormLabel>Activity Level (1 - 5)</FormLabel>
          <Input type="number" value={activityLevel} onChange={(e) => setActivityLevel(e.target.value)} />
        </FormControl>
        <Button colorScheme="teal" onClick={calculateCalories}>Calculate Calories</Button>
        {calories && <Box mt={4}>Your daily calorie needs: {calories.toFixed(2)} kcal</Box>}
      </VStack>
    </Box>
  </Box>
  );
};

export default CalorieCalculator;