import React, { useState } from "react";
import { 
    NativeBaseProvider,
    Box,
    Center,
    Image,
    Text,
    styles,
    term_service
 } from "native-base";

 import findDonorImg from "./assets/img/find-donor.png";
 import bloodBankImg from "./assets/img/blood-bank.png";
 import requestImg from "./assets/img/request.png";
 import profileImg from "./assets/img/profile.png";
 import bloodImg from "./assets/img/Blood.jpg";

  
export default function HomePage() {
  const [] = useState("");
  return <Box w="100%" bg="aliceblue" style={{flex: 1, justifyContent: 'center'}}>
    <Center marginTop={5} mb={10}>
    <Text mt={5} mb={5} fontSize={20 }  fontWeight={('normal', 'italic')}>EVERY BLOOD DONOR IS A HERO</Text>
    <Image size={150} borderRadius={100} source={bloodImg} alt="Alternate Text" />
    </Center>
    
    <Box style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', marginBottom: 70, gap: 40}}>
        <Box border="1" borderRadius="md" justifyContent='flex-end' style={{borderWidth: 3, padding: 10 }}>
            <Image source={findDonorImg} alt="Alternate Text" size={"sm"} />
            <Text>Find Donor</Text>
        </Box>
        <Box border="1" borderRadius="md" justifyContent='flex-end' style={{borderWidth: 3, padding: 10 }}>
            <Image source={bloodBankImg} alt="Alternate Text" size={"sm"} />
            <Text>Blood Bank</Text>
        </Box>
    </Box>
    <Box style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: 40}}>
        <Box border="1" borderRadius="md" justifyContent='flex-end' style={{borderWidth: 3, padding: 10 }}>
            <Image source={requestImg} alt="Alternate Text" size={"sm"} />
            <Text>Request</Text>
        </Box>
        <Box border="1" borderRadius="md" justifyContent='flex-end' style={{borderWidth: 3, padding: 10,}}>
            <Image source={profileImg} alt="Alternate Text" size={"sm"} />
            <Text>Profile</Text>
        </Box>
    </Box>
  </Box>
};