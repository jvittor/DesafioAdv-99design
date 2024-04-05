import React, { useState } from "react";
import { Box, Flex, SimpleGrid, Text, Center, Image, Icon, Button } from "@chakra-ui/react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../assets/99designsLogo.png";
import BreadCrumbs from "./BreadCrumbs";

export default function MobileHeader() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

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
                    <FaBars fontSize={"22px"} onClick={toggleMenu} />
                </Flex>
                <Flex ml={6}>
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
            <Box
                position="fixed"
                top="0"
                left="0"
                bottom="0"
                width={menuOpen ? "80%" : 0}
                bg="white"
                opacity={menuOpen ? 1 : 0}
                visibility={menuOpen ? "visible" : "hidden"}
                transition="opacity 0.5s ease, width 0.5s ease"
            >
                {/* conteúdo do menu */}
                <Button onClick={closeMenu} mt={4} ml={6} colorScheme="blue">
                    Fechar
                </Button>
            </Box>
        </SimpleGrid>
    );
}
