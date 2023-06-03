import React from "react";
import { useNavigate } from "react-router-native";
import { Box, Button, Center,Text, Image } from "native-base";
import bloodImg from "./assets/img/Blood.jpg";

const StartingPage = () => {
  const navigate = useNavigate();
  return <Box w="100%" bg="error.600" style={{flex: 1, justifyContent: 'center'}}>
      <Center marginTop={10} mb={10}>
      <Image size={150} borderRadius={100} source={bloodImg} alt="Alternate Text" />
      <Text mt={5} fontWeight="bold" color= "aliceblue">BLOODHERO</Text>
      </Center>
      <Box alignItems="center" mt="10">
          <Button mb={3} px={10} size="md" bgColor={"error.500"}  onPress={() => navigate("/register")}> Get Started </Button>
      </Box>
    </Box>
};

export default StartingPage;