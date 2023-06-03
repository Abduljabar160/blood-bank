import React, { useState } from "react";
import { useNavigate } from "react-router-native";
import { NativeBaseProvider, Box, FormControl, Stack, Input, WarningOutlineIcon, Button, Center, Select, CheckIcon, Text, Image, Link } from "native-base";

import bloodImg from "./assets/img/Blood.jpg";

export default function Login() {
  const navigate = useNavigate();
  return <Box w="100%" bg="aliceblue" style={{flex: 1, justifyContent: 'center'}}>
    <Center marginTop={10}>
    <Image size={150} borderRadius={100} source={bloodImg} alt="Alternate Text" />
    <Text mt={5} color={"primary.50"} fontWeight={"bold"}>BLOODHERO</Text>
    </Center>
    <FormControl isRequired>
      <Stack mx="4">
        <FormControl>
        <FormControl.Label>Email Address</FormControl.Label>
        <Input _light={{
        bg: "coolGray.100",
        _hover: {
          bg: "coolGray.200"
        },
        _focus: {
          bg: "coolGray.200:alpha.70"
        }
      }} _dark={{
        bg: "coolGray.800",
        _hover: {
          bg: "coolGray.900"
        },
        _focus: {
          bg: "coolGray.900:alpha.70"
        }
      }} shadow={2} type="text" defaultValue="" placeholder="Email" />
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          Atleast 6 characters are required.
        </FormControl.ErrorMessage>
        </FormControl>

        <FormControl.Label>Password</FormControl.Label>
        <Input _light={{
        bg: "coolGray.100",
        _hover: {
          bg: "coolGray.200"
        },
        _focus: {
          bg: "coolGray.200:alpha.70"
        }
      }} _dark={{
        bg: "coolGray.800",
        _hover: {
          bg: "coolGray.900"
        },
        _focus: {
          bg: "coolGray.900:alpha.70"
        }
      }} shadow={2} type="password" placeholder="password" />
        <FormControl.HelperText>
          Must be atleast 6 characters.
        </FormControl.HelperText>
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          Atleast 6 characters are required.
        </FormControl.ErrorMessage>
        <Box alignItems="center" m="5">
            <Button mb={3} px={10} size="md" colorScheme="secondary" onPress={() => navigate("/dashboard")}> Login </Button>
        </Box>
      </Stack>
    </FormControl>
  </Box>;
};