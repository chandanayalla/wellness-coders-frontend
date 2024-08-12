import React, { useState } from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  Heading,
  Text,
} from '@chakra-ui/react';
import axios from 'axios';
import { api } from '../axios/api';
import { useNavigate } from 'react-router-dom';

export const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize the useNavigate hook
  const navigate = useNavigate();

  const handlePasswordReset = async () => {
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await axios.post(api + "/resetpassword", { email, newPassword, confirmPassword });
      alert(response.data.message);
      
      // Redirect to home page on successful password reset
      navigate('/');
    } catch (error) {
      console.error(error);
      alert("There was an error processing your request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box
      maxW="md"
      mx="auto"
      p={8}
      borderWidth={1}
      borderRadius="lg"
      boxShadow="lg"
      mt={12}
      bg="white"
    >
      <Heading as="h2" size="lg" textAlign="center" color="teal.600" mb={6}>
        Reset Password
      </Heading>
      <Text fontSize="md" textAlign="center" color="gray.500" mb={6}>
        Enter your new password below.
      </Text>
      <VStack spacing={6}>
        <FormControl id="email" isRequired>
          <FormLabel>Email address</FormLabel>
          <Input
            type="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            focusBorderColor="teal.500"
            _placeholder={{ color: 'gray.400' }}
          />
        </FormControl>

        <FormControl id="new-password" isRequired>
          <FormLabel>New Password</FormLabel>
          <Input
            type="password"
            placeholder="Enter your new password"
            onChange={(e) => setNewPassword(e.target.value)}
            focusBorderColor="teal.500"
            _placeholder={{ color: 'gray.400' }}
          />
        </FormControl>

        <FormControl id="confirm-password" isRequired>
          <FormLabel>Confirm Password</FormLabel>
          <Input
            type="password"
            placeholder="Confirm your new password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            focusBorderColor="teal.500"
            _placeholder={{ color: 'gray.400' }}
          />
        </FormControl>

        <Button
          colorScheme="teal"
          size="lg"
          width="100%"
          onClick={handlePasswordReset}
          isLoading={isSubmitting}
          loadingText="Submitting"
          _hover={{ bg: "teal.600" }}
          _active={{ bg: "teal.700", transform: "scale(0.95)" }}
        >
          Reset Password
        </Button>
      </VStack>
    </Box>
  );
};
