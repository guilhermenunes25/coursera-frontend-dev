import React, {useEffect, useRef} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {Box,HStack} from "@chakra-ui/react";
import { faGithub, faStackOverflow } from "@fortawesome/free-brands-svg-icons";

const socials = [
   {
       icon: faEnvelope,
       url: "mailto: hello@example.com",
   },
   {
    icon: faGithub,
    url: "https://github.com"
   },
   {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
   },
];
