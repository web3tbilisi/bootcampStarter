import {
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import backgroundImage from "./assets/images/background.png";
import bootcampLogo from "./assets/images/logoWeb.png";
import React from "react";

export default function YourComponent() {
  return (
    // Creating the page background
    <Box
      w={"100vw"}
      h={"100vh"}
      bg={"#000000"}
      bgImage={backgroundImage}
      backgroundPosition={"center"}
      backgroundSize={"cover"}
      overflowX={"hidden"}
    >
      {/* Creating the page header */}
      <Center w={"100%"} h={"100%"}>
        <Box align={"center"} px={"14"}>
          <Image src={bootcampLogo} />
          <Heading color={"white"} py={"5"} size={"4xl"}>
            Starter Boilerplate Repo
          </Heading>
          <Center pb={"8"}>
            <ConnectButton />
          </Center>
          <Text color={"white"}>
            This repository is preloaded with all the required polyfills and
            other patches needed to create a dApp on the latest versions of
            React via <b>Create React App</b>. Included already to accelerate
            your build process are <b>RainbowKit</b>, <b>Truffle</b> and{" "}
            <b>Chakra UI</b>.
          </Text>
        </Box>
      </Center>
      ß
    </Box>
  );
}
