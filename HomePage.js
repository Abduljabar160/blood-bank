import React, { useState } from "react";
import { 
    NativeBaseProvider,
    Box,
    Center,
    Image,
    Text
 } from "native-base";

 import findDonorImg from "./assets/img/find-donor.png";
 import bloodBankImg from "./assets/img/blood-bank.png";
 import requestImg from "./assets/img/request.png";
 import profileImg from "./assets/img/profile.png";
 import bloodImg from "./assets/img/Blood.jpg";


export default function HomePage() {
  const [service, setService] = useState("");
  return <Box w="100%" bg="primary.50" style={{flex: 1, justifyContent: 'center'}}>
    <Center marginTop={5} mb={10}>
    <Image size={150} borderRadius={100} source={bloodImg} alt="Alternate Text" />
    <Text mt={5} fontSize={20 }  fontWeight={"bold"}>EVERY BLOOD DONOR IS A HERO</Text>
    </Center>
    
    <Box style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', marginBottom: 70, gap: 40}}>
        <Box border="1" borderRadius="md" justifyContent='flex-end' style={{borderWidth: 3, padding: 10 }}>
            <Image source={findDonorImg} alt="Alternate Text" size={"sm"} />
        </Box>
        <Box border="1" borderRadius="md" justifyContent='flex-end' style={{borderWidth: 3, padding: 10 }}>
            <Image source={bloodBankImg} alt="Alternate Text" size={"sm"} />
        </Box>
    </Box>
    <Box style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: 40}}>
        <Box border="1" borderRadius="md" justifyContent='flex-end' style={{borderWidth: 3, padding: 10 }}>
            <Image source={requestImg} alt="Alternate Text" size={"sm"} />
        </Box>
        <Box border="1" borderRadius="md" justifyContent='flex-end' style={{borderWidth: 3, padding: 10 }}>
            <Image source={profileImg} alt="Alternate Text" size={"sm"} />
        </Box>
    </Box>
  </Box>
};