import React from 'react';
import { Box, Text, VStack, Divider } from '@chakra-ui/react';

const ContactPage = () => {
  return (
    <Box p={8} maxW="md" mx="auto">
      <VStack spacing={6} align="start">
        <Text fontSize="2xl" fontWeight="bold">Contact Us</Text>
        <Box>
          <Text fontSize="lg" fontWeight="semibold">Name</Text>
          <Text mb={2}></Text>
          <Text fontSize="lg" fontWeight="semibold">Phone Number</Text>
          <Text mb={2}>+123 456 7890</Text>
          <Text fontSize="lg" fontWeight="semibold">Email</Text>
          <Text mb={4}>john.doe@example.com</Text>
        </Box>
        <Divider />
        <Text fontSize="md">
          If you have any questions or need further assistance, feel free to reach out to me using the contact details above.
        </Text>
      </VStack>
    </Box>
  );
};

export default ContactPage;