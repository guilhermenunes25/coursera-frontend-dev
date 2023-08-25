import React, {useEffect} from "react";
import {useFormik} from "formik";
import {
    Box, 
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    Select,
    Textarea,
    VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";

const LandingSection = () => {
    const {isLoading, response, submit} = useSubmit();
    const {onOpen} = useAlertContext();

    const formik = useFormik({
        initialValues: {},
        onSubmit: (values) => {},
        validationSchema: Yup.object({}),
    });

    return (
        <FullScreenSection
            isDarkBackground
            backgroundColor="#512DA8"
            py={16}
            spacing={8}
        >
            <VStack spacing={4}>
                <FormControl isInvalid={false}>
                    <FormLabel htmlFor="firstName">Name</FormLabel>
                    <Input 
                    id="firstName"
                    name="firstName"
                    />
                    <FormErrorMessage></FormErrorMessage>
                </FormControl>
            </VStack>

        </FullScreenSection>
    )
}