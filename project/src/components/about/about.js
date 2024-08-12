import React from 'react';
import { Box, Flex, Heading, Text, Button, Image } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate('/');
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
          <Button variant="outline" colorScheme="teal" onClick={handleBackClick}>
            Home
          </Button>
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
            About
          </Heading>
          
          {/* Image for sports nutrition */}
          {/* <Image
            src=""  // Replace with a relevant image URL
            alt="Sports Nutrition"
            borderRadius="lg"
            mb={6}
            boxShadow="lg"
          /> */}

          <Text fontSize="lg" mb={6} textShadow="1px 1px 3px rgba(0, 0, 0, 0.5)">
            The goal of sports nutrition is to ensure you’re well-hydrated, well-fueled, and well-nourished.
            If you just take care of those three factors, you give yourself a serious edge. That’s because you’ll improve
            your ability to gain strength, muscle, and endurance, recover faster between workouts and competitions, heal more
            quickly from injuries, and perform your best when it matters most.
          </Text>

          {/* Image for meal planning */}
          <Image
            src="side2.webp"  // Replace with a relevant image URL
            alt="Meal Planning"
            borderRadius="lg"
            mb={6}
            boxShadow="lg"
            height={300}
            width={400}
          />

          <Text fontSize="md" mb={6}>
            Research shows that athletes rarely meet all of their nutritional needs. Even those who try to eat a healthy diet may not get enough fluids,
            calories, macronutrients, or micronutrients. This is true for everyone from youth athletes to professional athletes. 
            Nutrient deficiencies can reduce endurance, decrease muscle strength and power, increase recovery time, reduce muscle mass, and increase body fat.
          </Text>

          {/* Image for hydration */}
          <Image
            src="main.jpeg"  // Replace with a relevant image URL
            alt="Hydration"
            borderRadius="lg"
            mb={6}
            boxShadow="lg"
            height={300}
            width={400}
          />

          <Text fontSize="md" mb={6}>
            For adolescent athletes, being consistently well-fueled throughout the day is critical—not just for performance but for overall health and well-being, too.
            Chronic energy deficits can cause delayed puberty, short stature, menstrual dysfunction, loss of muscle mass, fatigue, and an increased chance of injury or illness.
          </Text>
          <Image
            src=""  // Replace with a relevant image URL
            alt="Sports Nutrition"
            borderRadius="lg"
            mb={6}
            boxShadow="lg"
          />
          <Text fontSize="md" mb={6}>
            The easiest way to calculate your personal calorie needs is to use our nutrition calculator. Just answer each question, and in less than a minute, you’ll have
            a sports nutrition plan that’s 100 percent customized for your goals, including the amount of calories, protein, carbs, and fat you should eat.
          </Text>
          <Image
            src=""  // Replace with a relevant image URL
            alt="Sports Nutrition"
            borderRadius="lg"
            mb={6}
            boxShadow="lg"
          />
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
        <Text fontSize="sm" opacity={0.8}>
          © 2024 Wellness Coders. All rights reserved.
        </Text>
      </Box>
    </Flex>
  );
};

export default About;
