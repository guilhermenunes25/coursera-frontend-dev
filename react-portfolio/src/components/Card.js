import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";



const Card = ({ title, description, imageSrc }) => {
  return (
    <Box>
      <Image
        boxSize="200px"
        objectFit="cover"
        src={imageSrc}
        alt={title}
      />
      <VStack align="start" spacing={2}>
        <Heading as="h3" size="md">
        {title}
        </Heading>
      <Text fontSize="sm">{description}</Text>
      </VStack>
      <HStack spacing={2} mt={4}>
      <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </HStack>
    </Box>
  );
};
    

  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
    

export default Card;