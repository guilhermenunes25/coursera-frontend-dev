import { Heading, Image, Text, VStack, HStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack align="start" spacing={4} p={0} borderWidth="1px" borderRadius="md" boxShadow="md" bg="white">
      <Image
        w="100%"
        h="auto"
        src={imageSrc}
        alt={title}
        borderRadius="lg"
      />
      <Heading as="h4" size="md" color="black" ml={4}>
        {title}
      </Heading>
      <Text fontSize="sm" color="black" ml={4}>
        {description}
      </Text>
      <HStack spacing={2} ml={4} mb={4}>
        <Text fontSize="sm" color="gray.600">See more</Text>
        <FontAwesomeIcon icon={faArrowRight} size="1x"  color="black"/>
      </HStack>
    </VStack>
  );
};

export default Card;