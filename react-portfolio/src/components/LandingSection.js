import React from "react";
import { Avatar, Heading, VStack, Text } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <Avatar src="https://i.pravatar.cc/150?img=7" name="Pete" size="150px" />
    <Heading as="h5" size="sm">
      {greeting}
    </Heading>
    <VStack spacing={0.1} align="center">
      <Text fontSize="48px" fontWeight="bold" color="white">
        {bio1}
      </Text>
      <Text fontSize="48px" fontWeight="bold" color="white">
        {bio2}
      </Text>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;