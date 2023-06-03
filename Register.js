import React, { useState } from "react";
import { useNavigate } from "react-router-native";
import {
  Box,
  FormControl,
  Stack,
  Input,
  WarningOutlineIcon,
  Button,
  Center,
  Text,
  Image,
  Link,
  navigate
} from "native-base";
import axios from 'axios';

import bloodImg from "./assets/img/Blood.jpg";
import AlertBox from './AlertBox';

export default function Register({ navigation }) {
  const [firstName, setFirstName] = useState("");
  const handleFirstNameChange = text => setFirstName(text);

  const [lastName, setLastName] = useState("");
  const handleLastNameChange = text => setLastName(text);

  const [contactnumber, setContactNum] = useState("");
  const handleContactNumChange = text => setContactNum(text);

  const [email, setEmail] = useState("");
  const handleEmailChange = text => setEmail(text);

  const navigate = useNavigate();
  const fetchPosts = async () => {
    // const { data } = await axios.post('http://localhost:9000/api/posts/');
    // console.log(data);
    await axios.post('http://192.168.1.13:9000/api/auth/register', {
      first_name: firstName,
      last_name: lastName,
      contact_number: contactnumber,
      username: email,
      password:"alex"
    })
    .then(function (response) {
      // <AlertBox />
      setFirstName('');
      setContactNum('');
      setEmail('');
      setLastName('');
    })
    .catch(function (error) {
      console.log(error);
    });
};

  return <Box w="100%" bg="aliceblue" style={{flex: 1}}>
    <Center marginTop={10}>
    <Image size={150} borderRadius={100} source={bloodImg} alt="Alternate Text" />
    </Center>

    <FormControl isRequired>
      <Stack mx="4">
        <FormControl.Label style={{color:'white'}}>First Name</FormControl.Label>
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
      }} shadow={2} type="text" defaultValue="" value={firstName} placeholder="Full Name" onChangeText={handleFirstNameChange} />
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          Atleast 6 characters are required.
        </FormControl.ErrorMessage>

        <FormControl.Label style={{color:'white'}}>Last Name</FormControl.Label>
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
      }} shadow={2} type="text" defaultValue="" value={lastName} placeholder="Full Name" onChangeText={handleLastNameChange} />
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          Atleast 6 characters are required.
        </FormControl.ErrorMessage>

        <FormControl>
        <FormControl.Label>Contact Number</FormControl.Label>
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
      }} shadow={2} type="number" defaultValue="" value={contactnumber} placeholder="Contact Number" onChangeText={handleContactNumChange}  />
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          Atleast 6 characters are required.
        </FormControl.ErrorMessage>
        </FormControl>

        <FormControl>
        <FormControl.Label color={'primary'}>Email Address</FormControl.Label>
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
      }} shadow={2} type="text" defaultValue="" value={email} placeholder="Email" onChangeText={handleEmailChange}/>
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
      }} shadow={2} type="password" placeholder="Password" />
        <FormControl.HelperText>
          Must be atleast 6 characters.
        </FormControl.HelperText>
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          Atleast 6 characters are required.
        </FormControl.ErrorMessage>

        <FormControl.Label>RetypePassword</FormControl.Label>
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
      }} shadow={2} type="password" placeholder="Retype Password" />
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          Atleast 6 characters are required.
        </FormControl.ErrorMessage>
        <Box alignItems="center" m="5">
            <Button mb={3} px={10} size="md" colorScheme="secondary" onPress={()=> fetchPosts() }> Register </Button>
            <Box display={'flex'} flexDirection={'row'}>
              <Text>Already have account? </Text><Link onPress={() => navigate("/login")}>Login here</Link>
            </Box>
        </Box>
      </Stack>
    </FormControl>
  </Box>;
};