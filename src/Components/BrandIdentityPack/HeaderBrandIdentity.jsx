import React from "react";
import { Box, Flex, Center, Image, Icon, useMediaQuery, Text, Stack} from "@chakra-ui/react";
import { FaPhoneAlt} from "react-icons/fa";
import Logo from "../../assets/99designsLogo.png";
import BreadCrumbs from "../Categories/BreadCrumbs";
import MobileHeaderBrand from "./MobileHeaderBrand";
import CategoriesDesignSection from "../Categories/CategoriesDesignSection";
import CarouselDesigns from "../Categories/CarouselDesigns";

export default function HeaderBrandIdentity() {
    const [isMobile] = useMediaQuery("(max-width: 1020px)");

    return (
        <>  
            {isMobile && (<MobileHeaderBrand />)}
            <Center
            >
                
                <Stack
                    fontFamily={"Arial Medium"}
                    fontSize={{ lg: "14px", xl: "16.8px", "2xl": "16.8px" }}
                    mt={"20px"}
                    fontWeight={"medium"}
                    color={"black"}
                    ml={"80px"}
                >
                    
                    <Flex gap={5} mt={"10px"} pos={"relative"} right={"50px"}>
                        {!isMobile && (
                            <>
                                <Box pos={"relative"} left={2}
                                bottom={1} ml={'-17rem'}
                                >
                                    <Image w="80%" src={Logo} />

                                </Box>
                                <Flex
                                gap={5}
                                pos="relative"
                                >
                                    <Box>
                                        <h1>Categories</h1>
                                    </Box>
                                    <Box>
                                        <h1>How it works</h1>
                                    </Box>
                                    <Box>
                                        <h1>Find a designer</h1>
                                    </Box>
                                    <Box>
                                        <h1>Inspiration</h1>
                                    </Box>
                                    <Box>
                                        <h1>Studio</h1>
                                    </Box>
                                    <Box
                                    pos="relative"
                                    left={"18rem"}
                                    >
                                        <Flex
                                        >
                                            <Icon pos="relative" top={"4px"} mr={"5px"} as={FaPhoneAlt} opacity={1} />
                                            <h1>+1 877 834 4534</h1>
                                        </Flex>
                                    </Box>
                                    <Box pos={"relative"} left={"19rem"}>
                                        <h1>Log in</h1>
                                    </Box>
                                </Flex>
                            </>
                        )}
                        
                        
                    </Flex>

                    
                    
                </Stack>
            </Center>
        </>
    );
}
