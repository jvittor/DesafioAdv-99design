import React, { useState } from "react";
import { Box, Flex, SimpleGrid, Text, Center, Image, Icon, Button, HStack} from "@chakra-ui/react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../assets/99designsLogo.png";
import BreadCrumbs from "../Categories/BreadCrumbs";

export default function MobileHeaderBrand() {
    return (
      <>
        <Box
        pos="relative"
        zIndex={2}
        w={{base: "450px", sm: "100%", md: "100%", lg: "100%", xl: "100%"}}
        >
        <HStack
        mt={2}
        spacing={{base: "6rem", sm: "8rem", md: "18rem", lg: "10rem", xl: "100%"}}
        >
            <Box
            ml={{base: "2rem", sm: "8rem", md: "2rem", lg: "10rem", xl: "100%"}}
            >
                <Icon fontSize={{base: "2rem", sm: "2rem", md: "1.2rem", lg: "2rem", xl: "2rem"}} as={FaBars} />
            </Box>
            <Box>
                <Image w="100%" src={Logo}/>
            </Box>
            <Box
            pos="relative"
            right={{base: "2rem", sm: "10rem", md: "2rem", lg: 0, xl: 0}}
            >
                <Text
                fontFamily={"Nunito Sans"}
                fontSize={"15px"}
                fontWeight={"bold"}
                whiteSpace={"nowrap"}
                >
                    Log in
                </Text>
            </Box>
        </HStack>
        </Box>
      </>  
    );
}
