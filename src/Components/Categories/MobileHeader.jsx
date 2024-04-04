import React from "react";
import { Box, Flex, SimpleGrid, Text, Center, Image, Icon } from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";
import Logo from "../../assets/99designsLogo.png";
import BreadCrumbs from "./BreadCrumbs";

export default function MobileHeader() {
    return (
        <SimpleGrid
            columns={3} 
            spacing={10}
            w={"100%"}
            pos="relative"
            right={"4px"}
            mt={4}
        >
            <Box h={"80px"}>
                <Flex
                mt={4}
                ml={6}
                >
                    <FaBars fontSize={"22px"}/>
                </Flex>
                <Flex
                ml={6}
                >
                    <BreadCrumbs />
                </Flex>
            </Box>
            <Box h={"80px"}>
                <Center>
                    <Image maxW="130px"  src={Logo} />
                </Center>
            </Box>
            <Box h={"80px"}>
                <Text
                textAlign={"right"}
                mt={4}
                mr={6}
                >
                    Log in
                </Text>
            </Box>
        </SimpleGrid>
    );
}
