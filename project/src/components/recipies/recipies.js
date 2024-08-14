import React from 'react';
import { ChakraProvider, Box, Image, Text, Stack, Heading, Divider, SimpleGrid } from '@chakra-ui/react';

const recipes = [
  {
    name: 'whole-grain pasta',
    image: 'https://via.placeholder.com/150',
    ingredients: [''],
    calories: 500,
  },
  {
    name: 'Caesar Salad',
    image: 'https://via.placeholder.com/150',
    ingredients: ['Romaine lettuce', 'Caesar dressing', 'Croutons', 'Parmesan cheese'],
    calories: 250
  },
  {
    name: 'Caesar Salad',
    image: 'https://via.placeholder.com/150',
    ingredients: ['Romaine lettuce', 'Caesar dressing', 'Croutons', 'Parmesan cheese'],
    calories: 250
  },
  {
    name: 'Caesar Salad',
    image: 'https://via.placeholder.com/150',
    ingredients: ['Romaine lettuce', 'Caesar dressing', 'Croutons', 'Parmesan cheese'],
    calories: 250
  },
  {
    name: 'Caesar Salad',
    image: 'https://via.placeholder.com/150',
    ingredients: ['Romaine lettuce', 'Caesar dressing', 'Croutons', 'Parmesan cheese'],
    calories: 250
  },
  {
    name: 'Caesar Salad',
    image: 'https://via.placeholder.com/150',
    ingredients: ['Romaine lettuce', 'Caesar dressing', 'Croutons', 'Parmesan cheese'],
    calories: 250
  },
  {
    name: 'Caesar Salad',
    image: 'https://via.placeholder.com/150',
    ingredients: ['Romaine lettuce', 'Caesar dressing', 'Croutons', 'Parmesan cheese'],
    calories: 250
  },
  {
    name: 'Caesar Salad',
    image: 'https://via.placeholder.com/150',
    ingredients: ['Romaine lettuce', 'Caesar dressing', 'Croutons', 'Parmesan cheese'],
    calories: 250
  },
  {
    name: 'Caesar Salad',
    image: 'https://via.placeholder.com/150',
    ingredients: ['Romaine lettuce', 'Caesar dressing', 'Croutons', 'Parmesan cheese'],
    calories: 250
  },
  {
    name: 'Caesar Salad',
    image: 'https://via.placeholder.com/150',
    ingredients: ['Romaine lettuce', 'Caesar dressing', 'Croutons', 'Parmesan cheese'],
    calories: 250
  },
  {
    name: 'Caesar Salad',
    image: 'https://via.placeholder.com/150',
    ingredients: ['Romaine lettuce', 'Caesar dressing', 'Croutons', 'Parmesan cheese'],
    calories: 250
  },
  {
    name: 'Caesar Salad',
    image: 'https://via.placeholder.com/150',
    ingredients: ['Romaine lettuce', 'Caesar dressing', 'Croutons', 'Parmesan cheese'],
    calories: 250
  },
  {
    name: 'Caesar Salad',
    image: 'https://via.placeholder.com/150',
    ingredients: ['Romaine lettuce', 'Caesar dressing', 'Croutons', 'Parmesan cheese'],
    calories: 250
  },
  {
    name: 'Caesar Salad',
    image: 'https://via.placeholder.com/150',
    ingredients: ['Romaine lettuce', 'Caesar dressing', 'Croutons', 'Parmesan cheese'],
    calories: 250
  },
  {
    name: 'Caesar Salad',
    image: 'https://via.placeholder.com/150',
    ingredients: ['Romaine lettuce', 'Caesar dressing', 'Croutons', 'Parmesan cheese'],
    calories: 250
  },
];

const RecipeCard = ({ recipe }) => (
  <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
    <Stack spacing={4} align="center">
      <Image borderRadius="md" src={recipe.image} alt={recipe.name} boxSize="150px" objectFit="cover" />
      <Heading as="h3" size="lg">{recipe.name}</Heading>
      <Text fontSize="md" fontWeight="bold">Ingredients:</Text>
      <Stack spacing={2} align="start">
        {recipe.ingredients.map((ingredient, index) => (
          <Text key={index} fontSize="sm">{ingredient}</Text>
        ))}
      </Stack>
      <Divider />
      <Text fontSize="md" color="gray.600">Calories: {recipe.calories} kcal</Text>
    </Stack>
  </Box>
);

const RecipePage = () => (
  <ChakraProvider>
    <Box p={8}>
      <Heading mb={6}>Recipe Collection</Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </SimpleGrid>
    </Box>
  </ChakraProvider>
);

export default RecipePage;