import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";



const Card = ({title, description, imageSrc}) => {
    return (
        <Heading as='h3' size='lg'>
        Featured Projects
         <HStack spacing={8}>
         <Feature
           title='Plan Money'
           desc='The future can be even brighter but a goal without a plan is just a wish'
         />
         <Feature
           title='Save Money'
           desc='You deserve good things. With a whooping 10-15% interest rate per annum, grow your savings on your own terms with our completely automated process'
         />
       </HStack>
        </Heading>    
    )
    

  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
    return null; 
};

export default Card;