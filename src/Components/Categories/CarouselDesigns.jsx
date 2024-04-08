import React from 'react';
import { Box, Center, HStack, Text, Flex, Icon, Heading } from "@chakra-ui/react";
import { IoSearchSharp } from "react-icons/io5";


export default function CarouselDesigns() {
    return (
             
             <>
                <HStack
                ml={7}
                pos="relative"
                bottom={"6rem"}
                
                >
                    <Box
                    w="10%"
                    bg={"#DAD9D7"}
                    h="70px"
                    borderRadius={"10px"}
                    >
                        <Center>
                            <Icon 
                            mt={6}
                            fontSize={"1.5rem"} as={IoSearchSharp} />
                        </Center>
                    </Box>
                    <Box
                    w="22%"
                    bg={"#01A1C1"}
                    h="70px"
                    borderRadius={"10px"}
                    >
                        <Center>
                            <Heading
                            fontSize={"1.4rem"}
                            mt={"1.6rem"}
                            color="white"
                            fontWeight={"bold"}
                            fontFamily={"Nunito Sans"}
                            >
                                Logo & identity
                            </Heading>
                        </Center>
                    </Box>
                    <Box
                    w="25%"
                    bg={"#01A1C1"}
                    h="70px"
                    borderRadius={"10px"}
                    >
                        <Center>
                            <Heading
                            fontSize={"1.4rem"}
                            mt={"1.6rem"}
                            color="white"
                            fontWeight={"bold"}
                            fontFamily={"Nunito Sans"}
                            >
                                Web & app design
                            </Heading>
                        </Center>
                    </Box>
                    <Box
                    w="30%"
                    bg={"#01A1C1"}
                    h="70px"
                    borderRadius={"10px"}
                    >
                        <Center>
                            <Heading
                            fontSize={"1.4rem"}
                            mt={"1.6rem"}
                            color="white"
                            fontWeight={"bold"}
                            fontFamily={"Nunito Sans"}
                            >
                                Business & advertising
                            </Heading>
                        </Center>
                    </Box>
                    <Box
                    w="40%"
                    bg={"#01A1C1"}
                    h="70px"
                    borderRadius={"10px"}
                    >
                        <Center>
                            <Heading
                            fontSize={"1.4rem"}
                            mt={"1.6rem"}
                            color="white"
                            fontWeight={"bold"}
                            fontFamily={"Nunito Sans"}
                            >
                                Clothing & merchandise
                            </Heading>
                        </Center>
                    </Box>
                    <Box
                    w="25%"
                    bg={"#01A1C1"}
                    h="70px"
                    borderRadius={"10px"}
                    >
                        <Center>
                            <Heading
                            fontSize={"1.4rem"}
                            mt={"1.6rem"}
                            color="white"
                            fontWeight={"bold"}
                            fontFamily={"Nunito Sans"}
                            >
                                Web & app design
                            </Heading>
                        </Center>
                    </Box>
                    <Box
                    w="25%"
                    bg={"#01A1C1"}
                    h="70px"
                    borderRadius={"10px"}
                    >
                        <Center>
                            <Heading
                            fontSize={"1.4rem"}
                            mt={"1.6rem"}
                            color="white"
                            fontWeight={"bold"}
                            fontFamily={"Nunito Sans"}
                            >
                                Web & app design
                            </Heading>
                        </Center>
                    </Box>
                    
                </HStack>
            </>
    );
}
