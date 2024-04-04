import React from "react";
import { Box, Flex, Center, Image, Icon, useMediaQuery } from "@chakra-ui/react";
import { FaPhoneAlt} from "react-icons/fa";
import Logo from "../../assets/99designsLogo.png";
import BreadCrumbs from "./BreadCrumbs";
import MobileHeader from "./MobileHeader";
export default function HeaderCategories() {
    const [isMobile] = useMediaQuery("(max-width: 1020px)");

    return (
        <>  
            {isMobile && (<MobileHeader />)}
            <Center
          
            >
                <Flex
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
                                <Box ml={20} pos={"relative"} right={"20px"}
                                bottom={5}
                                >
                                    <Image w="80%" src={Logo} />
                                    <BreadCrumbs />
                                </Box>
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
                                <Box ml={10}>
                                    <Flex>
                                        <Icon pos="relative" top={"4px"} mr={"5px"} as={FaPhoneAlt} opacity={1} />
                                        <h1>+1 877 834 4534</h1>
                                    </Flex>
                                </Box>
                                <Box ml={"5px"}>
                                    <h1>Log in</h1>
                                </Box>
                            </>
                        )}
                        
                        
                    </Flex>

                    
                    
                </Flex>
            </Center>
        </>
    );
}
