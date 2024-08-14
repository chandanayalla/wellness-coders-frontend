import React, { useState } from 'react';
import {
  ChakraProvider,
  Container,
  FormControl,
  FormLabel,
  Select,
  Button,
  Box,
  VStack,
  Heading,
  Divider,
  Input,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { api } from '../axios/api';

const App = () => {
  const [breakfast, setBreakfast] = useState('');
  const [lunch, setLunch] = useState('');
  const [dinner, setDinner] = useState('');
  const [customMeal, setCustomMeal] = useState({ breakfast: '', lunch: '', dinner: '' });
  const [showAlert, setShowAlert] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async () => {
    const data = {
      breakfast: customMeal.breakfast || breakfast,
      lunch: customMeal.lunch || lunch,
      dinner: customMeal.dinner || dinner,
    };
    try {
      const response = await axios.post(api + "/meals", data);
      setShowAlert(true);
      navigate('/result', { state: data });
    } catch (error) {
      console.error('Error submitting meal data:', error);
    }
  };

  return (
    <Box
    backgroundImage="url('/dinner1.avif')" 
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        minHeight="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        p={4}
    >
    <ChakraProvider>
      <Container maxW="container.md" mt={10} p={8} borderWidth={1} borderRadius="lg" boxShadow="lg" bg="white">
        <VStack spacing={6} align="stretch">
          <Heading as="h1" size="xl" color="red">Athlete Meal Planning</Heading>
          <Divider />
          <Box>
            <Heading as="h2" size="md" mb={4} color="black">Breakfast</Heading>
            <FormControl>
              <FormLabel color="black">Meal</FormLabel>
              <Select
                //backgroundColor={'white'}
                placeholder="Select Breakfast"
                value={breakfast}
                onChange={(e) => setBreakfast(e.target.value)}
                focusBorderColor="black"
              >
                <option value="Protein-Packed Smoothie with Spinach, Banana, and Protein Powder">Protein-Packed Smoothie with Spinach, Banana, and Protein Powder</option>
                <option value="Quinoa Porridge with Almonds and Berries">Quinoa Porridge with Almonds and Berries</option>
                <option value="Greek Yogurt with Nuts and Honey">Greek Yogurt with Nuts and Honey</option>
                <option value="Egg White Omelette with Spinach and Avocado">Egg White Omelette with Spinach and Avocado</option>
                <option value="Oatmeal with Chia Seeds, Flaxseeds, and Fresh Fruit">Oatmeal with Chia Seeds, Flaxseeds, and Fresh Fruit</option>
              </Select>
              <FormLabel mt={4} color="black">Or Enter Custom Breakfast</FormLabel>
              <Input
                placeholder="Enter custom breakfast"
                value={customMeal.breakfast}
                onChange={(e) => setCustomMeal({ ...customMeal, breakfast: e.target.value })}
                focusBorderColor="black"
                //backgroundColor={'white'}
              />
            </FormControl>
          </Box>

          <Divider />

    
          <Box>
            <Heading as="h2" size="md" mb={4} color="black">Lunch</Heading>
            <FormControl>
              <FormLabel color="black">Meal</FormLabel>
              <Select
                //backgroundColor={'white'}
                placeholder="Select Lunch"
                value={lunch}
                onChange={(e) => setLunch(e.target.value)}
                focusBorderColor="black"
              >
                <option value="Grilled Chicken Salad with Quinoa and Mixed Greens">Grilled Chicken Salad with Quinoa and Mixed Greens</option>
                <option value="Salmon Bowl with Brown Rice, Edamame, and Avocado">Salmon Bowl with Brown Rice, Edamame, and Avocado</option>
                <option value="Turkey and Sweet Potato Bowl with Broccoli">Turkey and Sweet Potato Bowl with Broccoli</option>
                <option value="Lentil and Vegetable Soup with Whole-Grain Bread">Lentil and Vegetable Soup with Whole-Grain Bread</option>
                <option value="Chickpea and Avocado Wrap with Spinach">Chickpea and Avocado Wrap with Spinach</option>
              </Select>
              <FormLabel mt={4} color="black">Or Enter Custom Lunch</FormLabel>
              <Input
                //backgroundColor={'white'}
                placeholder="Enter custom lunch"
                value={customMeal.lunch}
                onChange={(e) => setCustomMeal({ ...customMeal, lunch: e.target.value })}
                focusBorderColor="black"
              />
            </FormControl>
          </Box>

          <Divider />

          <Box>
            <Heading as="h2" size="md" mb={4} color="black">Dinner</Heading>
            <FormControl>
              <FormLabel color="black">Meal</FormLabel>
              <Select
                //backgroundColor={'white'}
                placeholder="Select Dinner"
                value={dinner}
                onChange={(e) => setDinner(e.target.value)}
                focusBorderColor="black"
              >
                <option value="Baked Chicken Breast with Roasted Vegetables and Sweet Potatoes">Baked Chicken Breast with Roasted Vegetables and Sweet Potatoes</option>
                <option value="Tuna and Avocado Salad with a Side of Quinoa">Tuna and Avocado Salad with a Side of Quinoa</option>
                <option value="Stir-Fried Tofu with Broccoli, Bell Peppers, and Brown Rice">Stir-Fried Tofu with Broccoli, Bell Peppers, and Brown Rice</option>
                <option value="Stuffed Bell Peppers with Ground Turkey and Black Beans">Stuffed Bell Peppers with Ground Turkey and Black Beans</option>
                <option value="Salmon with a Side of Steamed Asparagus and Wild Rice">Salmon with a Side of Steamed Asparagus and Wild Rice</option>
              </Select>
              <FormLabel mt={4} color="black">Or Enter Custom Dinner</FormLabel>
              <Input
                //backgroundColor={'white'}
                placeholder="Enter custom dinner"
                value={customMeal.dinner}
                onChange={(e) => setCustomMeal({ ...customMeal, dinner: e.target.value })}
                focusBorderColor="black"
              />
            </FormControl>
          </Box>

          <Divider />

          <Button colorScheme="red" size="lg" onClick={handleSubmit}>Submit</Button>

          {showAlert && (
            <Alert status="success" variant="subtle" mt={4}>
              <AlertIcon />
              <AlertTitle>Submitted!</AlertTitle>
              <AlertDescription>Your meal selection has been saved.</AlertDescription>
            </Alert>
          )}
        </VStack>
      </Container>
    </ChakraProvider>
    </Box>

  );
};

export default App;