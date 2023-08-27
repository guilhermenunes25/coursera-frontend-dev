import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";



const Card = ({ title, description, imageSrc }) => {
  return (
    <Box p={0} borderWidth="1px" borderRadius="md" boxShadow="md" bg="white">
      <Image
        w="100%"
        h="auto"
        src={imageSrc}
        alt={title}
        borderRadius="lg"
        mb={4}
      />
      <VStack align="start" spacing={2}>
        <Heading as="h4" size="md" color={"black"}>
        {title}
        </Heading>
      <Text fontSize="sm" color={"black"}>{description}</Text>
      </VStack>
      <HStack spacing={2} mt={4}>
      <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </HStack>
    </Box>
  );
};
    


export default Card;