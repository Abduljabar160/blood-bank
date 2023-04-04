import React, { useState } from "react";
import { NativeBaseProvider, Box, FormControl, Stack, Input, WarningOutlineIcon, Button, Center, Select, CheckIcon, Text, Image, Link } from "native-base";

import bloodImg from "./assets/img/Blood.jpg";

export default function StartingPage() {
  const [service, setService] = useState("");
  return <Box w="100%" bg="danger.800" style={{flex: 1, justifyContent: 'center'}}>
    <Center marginTop={10} mb={10}>
    <Image size={150} borderRadius={100} source={bloodImg} alt="Alternate Text" />
    <Text mt={5} fontWeight="bold" color= "#ffffff">BLOODHERO</Text>
    </Center>
     
    <Box alignItems="center" mt="10">
        <Button mb={3} px={10} size="md" colorScheme="secondary"> Get Started </Button>
    </Box>

  </Box>;
};