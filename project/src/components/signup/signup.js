import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { api } from "../axios/api";
import {
  Input,
  FormControl,
  FormLabel,
  Box,
  Stack,
  Button,
  Heading,
  Text,
  Link,
} from '@chakra-ui/react';

export const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [name, setName] = useState("");

  const signup = async () => {
    try {
      const response = await axios.post(api + "/signup", { email, name, mobile, password });
      if (response.data.message) {
        console.log(response?.data?.values);
        alert(response.data.message);
        navigate('/signin');
      } else {
        alert(response.data.error);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Box
      minH="100vh"
      bgImage="url('sports-nutrition.jpg')"  
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        maxW="lg"
        mx="auto"
        p={8}
        borderWidth={1}
        borderRadius="lg"
        boxShadow="2xl"
        bg="white"
        mt={12}
        position="relative"
        zIndex={1}
        _before={{
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.3,
          zIndex: -1
        }}
      >
        <Heading as="h2" size="xl" textAlign="center" color="teal.600" mb={6}>
          Create Your Account
        </Heading>
        <Stack spacing={6}>
          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              focusBorderColor="black"
              _placeholder={{ color: 'gray.400' }}
            />
          </FormControl>

          <FormControl id="name" isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
              focusBorderColor="black"
              _placeholder={{ color: 'gray.400' }}
            />
          </FormControl>

          <FormControl id="mobile" isRequired>
            <FormLabel>Mobile</FormLabel>
            <Input
              type="tel"
              placeholder="Enter your mobile number"
              onChange={(e) => setMobile(e.target.value)}
              focusBorderColor="black"
              _placeholder={{ color: 'gray.400' }}
            />
          </FormControl>

          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              focusBorderColor="black"
              _placeholder={{ color: 'gray.400' }}
            />
          </FormControl>

          <Button
            onClick={signup}
            colorScheme="teal"
            size="lg"
            width="100%"
            _hover={{ bg: "teal.600" }}
            _active={{ bg: "teal.700", transform: "scale(0.95)" }}
          >
            Sign Up
          </Button>

          <Text textAlign="center" color="gray.500">
            Already have an account?{' '}
            <Link color="teal.500" href="/signin">
              Sign In
            </Link>
          </Text>
        </Stack>
      </Box>
    </Box>
  );
};
