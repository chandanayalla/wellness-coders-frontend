import React from 'react';
import { Box, Heading, Text, Container, Image, VStack } from '@chakra-ui/react';

const HurdlePage = () => {
  return (
    <Container maxW="xl" bg="white" p={8} borderRadius="lg" boxShadow="md">
      <VStack spacing={6} align="start">
        <Heading as="h1" size="xl" color="black">Hurdling Meal Plan</Heading>

        {/* Example Image */}
        {/* <Image
          src=""
          alt="Long Jump Athlete"
          borderRadius="md"
          boxSize="full"
          objectFit="cover"
        /> */}

        <Text mt={4}>
        Hurdling is a track and field event in which athletes race over a series of evenly spaced barriers called hurdles.


        </Text>

        {/* Additional Content */}
        <Text fontWeight="bold">Sample Meal Plan:</Text>
        <Text>
        7-Day Diet Plan <br/><br/><br/>
        Day 1:
•⁠  ⁠Breakfast: Greek yogurt parfait with granola, mixed berries, and a drizzle of honey.
•⁠  ⁠Snack: Apple slices with almond butter.
•⁠  ⁠Lunch: Grilled chicken breast with a quinoa salad (cucumber, cherry tomatoes, and feta cheese).
•⁠  ⁠Snack: Carrot sticks with hummus.
•⁠  ⁠Dinner: Baked salmon with sweet potato and steamed broccoli.
Day 2:
•⁠  ⁠Breakfast: Smoothie with spinach, banana, protein powder, and almond milk.
•⁠  ⁠Snack: Cottage cheese with pineapple chunks.
•⁠  ⁠Lunch: Turkey and avocado wrap with a whole-grain tortilla and a side of mixed greens.
•⁠  ⁠Snack: A small handful of mixed nuts.
•⁠  ⁠Dinner: Stir-fried tofu with brown rice and bell peppers.
Day 3:
•⁠  ⁠Breakfast: Oatmeal topped with sliced bananas, chia seeds, and a sprinkle of cinnamon.
•⁠  ⁠Snack: Fresh fruit (e.g., an orange) and a handful of sunflower seeds.
•⁠  ⁠Lunch: Lentil soup with a side salad (mixed greens, cucumbers, and a light vinaigrette).
•⁠  ⁠Snack: A piece of dark chocolate and a small handful of almonds.
•⁠  ⁠Dinner: Grilled shrimp with quinoa and roasted asparagus.
Day 4:
•⁠  ⁠Breakfast: Whole-grain toast with avocado, scrambled eggs, and a side of mixed fruit.
•⁠  ⁠Snack: Greek yogurt with a handful of fresh berries.
•⁠  ⁠Lunch: Chicken and vegetable stir-fry with brown rice.
•⁠  ⁠Snack: Hard-boiled eggs.
•⁠  ⁠Dinner: Baked cod with a side of wild rice and steamed green beans.
Day 5:
•⁠  ⁠Breakfast: Chia pudding made with almond milk, topped with mango slices and a few almonds.
•⁠  ⁠Snack: Sliced bell peppers with guacamole.
•⁠  ⁠Lunch: Chickpea salad with avocado, cherry tomatoes, cucumber, and a lemon-tahini dressing.
•⁠  ⁠Snack: Protein bar or a small smoothie.
•⁠  ⁠Dinner: Turkey meatballs with whole-grain pasta and marinara sauce, plus a side salad.
Day 6:
•⁠  ⁠Breakfast: Smoothie bowl with mixed berries, spinach, protein powder, and topped with granola.
•⁠  ⁠Snack: Fresh fruit (e.g., a pear) with a handful of walnuts.
•⁠  ⁠Lunch: Tuna salad with mixed greens, cherry tomatoes, cucumbers, and a light vinaigrette.
•⁠  ⁠Snack: A handful of edamame.
•⁠  ⁠Dinner: Grilled chicken breast with roasted Brussels sprouts and sweet potato wedges.
Day 7:
•⁠  ⁠Breakfast: Egg white omelette with mushrooms, spinach, and a side of whole-grain toast.
•⁠  ⁠Snack: Greek yogurt with a small handful of granola.
•⁠  ⁠Lunch: Quinoa bowl with black beans, corn, avocado, and salsa.
•⁠  ⁠Snack: Carrot sticks with hummus.
•⁠  ⁠Dinner: Baked pork tenderloin with sautéed kale and a side of wild rice.


<br/>

        </Text>
      </VStack>
    </Container>
  );
};

export default HurdlePage;