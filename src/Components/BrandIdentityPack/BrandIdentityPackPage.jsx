import React from 'react';
import { Box, Center, Flex, Heading, Wrap, Text, HStack, Icon, Stack, Divider, Image, useMediaQuery } from '@chakra-ui/react';
import LogoBrand from './LogoBrand.Carousel';
import logobrand1 from '../../assets/logobrand1.png';
import logobrand2 from '../../assets/logobrand2.png';
import { RiCheckLine } from "react-icons/ri";
import { IoMdArrowDown } from "react-icons/io";
import { FaAngleRight } from "react-icons/fa6";
import CollaboratesBackground from '../../assets/collaboratesBackground.png';
import HeaderBrandIdentity from "./HeaderBrandIdentity";
import DoodleMobile from '../../assets/doodleMobile.png';

export default function BrandIdentityPack() {
    const [isSmallScreen] = useMediaQuery("(max-width: 1020px)");
    return (

        <>
            <HeaderBrandIdentity />
            <Box
                width={{ base: "450px", sm: "100%", md: "100%", lg: "100%", xl: "100%" }}
                height={{ base: "2250px", md: "2300px", lg: "2250px" }}
                overflow="hidden"
                pos={"absolute"}
                mt={"-5rem"}
                left={{base: "-2rem", sm: "100%", md: 0, lg: 0, xl: 0 }}
            >
                
                <Center
                    pos="relative"
                    top={"8rem"}
                    left={"2rem"}

                >
                    <Box>
                        <Wrap
                            spacing={"5rem"}
                        >
                            <Box
                                h={{base: "350px", md: "570px", lg: "570px"}}
                                w="700px"
                            >
                                <Box
                                pos="relative"
                                left={{base: "9.9rem", md: 0, lg: 0}}
                                >
                                <LogoBrand slides={[
                                    { imageUrl: logobrand1 },
                                    { imageUrl: logobrand2 }
                                ]}
                                />
                                </Box>
                            </Box>
                            <Box
                                h={{base: "400px", md: "550px", lg: "550px"}}
                                pos="relative"
                                left={{ base: "10rem", md: 0, lg: 0 }}
                                w={{base: "380px", md: "auto", lg: "460px"}}
                                border={{
                                    base: "1px solid rgba(0, 0, 0, 0.0)",
                                    md: "1px solid rgba(0, 0, 0, 0)",
                                    lg: "1px solid rgba(0, 0, 0, 0.1)"
                                }}
                                bg="white"
                                borderRadius={"10px"}
                                mb={{ base: "0rem", md: "-5rem", lg: 0 }}
                            >
                                <Center>
                                    <Box
                                        w={{ base: "88%", md: "100%", lg: "88%" }}
                                        pos={"relative"}
                                        bottom={"2rem"}
                                        right={{base: "1.5rem", md: 0, lg: 0}}
                                    >
                                        <Heading
                                            textAlign={"left"}
                                            fontFamily={"Nunito Sans"}
                                            fontSize={{base: "25px", md: "30px", lg: "30px"}}
                                            mt={{base: "2rem", md: "2rem", lg: "2rem", xl: "4rem"}}
                                        >
                                            Logo & brand identity pack
                                        </Heading>
                                        <Text
                                            fontFamily={"Nunito Sans"}
                                            fontSize={{base: "18px", md: "20px", lg: "20px"}}
                                            fontWeight={"bold"}
                                            mt={5}
                                        >Starting from $599</Text>
                                        <Stack
                                        display={{ base: "block", md: "block", lg: "none" }}
                                        >
                                            <Heading
                                            fontFamily={"Nunito Sans"}
                                            fontSize={"20px"}
                                            mt={"1rem"}
                                            >
                                                Branding as unique as your business.
                                            </Heading>
                                            <Text
                                                fontFamily={"Nunito Sans"}
                                                fontSize={"17px"}
                                                mt={"1rem"}
                                            >
                                                Invite our professional designers to bring your brand to life through custom logo design,
                                                <br />
                                                business cards, letterhead and social media graphics.
                                            </Text>
                                        </Stack>
                                        <Stack
                                        display={{ base: "none", md: "none", lg: "block" }}
                                        >
                                            <HStack
                                                mt={5}
                                            >
                                                <Icon
                                                    fontSize={"25px"}
                                                    as={RiCheckLine} />
                                                <Text
                                                    fontFamily={"Nunito Sans"}
                                                    fontWeight={500}
                                                >
                                                    1 finished, completely custom logo design
                                                </Text>
                                            </HStack>
                                            <HStack
                                                mt={2}
                                            >
                                                <Icon
                                                    fontSize={"25px"}
                                                    as={RiCheckLine} />
                                                <Text
                                                    fontFamily={"Nunito Sans"}
                                                    fontWeight={500}
                                                >
                                                    1 business card design
                                                </Text>
                                            </HStack>
                                            <HStack
                                                mt={2}
                                            >
                                                <Icon
                                                    fontSize={"25px"}
                                                    as={RiCheckLine} />
                                                <Text
                                                    fontFamily={"Nunito Sans"}
                                                    fontWeight={500}
                                                >
                                                    1 letterhead
                                                </Text>
                                            </HStack>
                                            <HStack
                                                mt={2}
                                            >
                                                <Icon
                                                    fontSize={"25px"}
                                                    as={RiCheckLine} />
                                                <Text
                                                    fontFamily={"Nunito Sans"}
                                                    fontWeight={500}
                                                >
                                                    1 envelope
                                                </Text>
                                            </HStack>
                                            <HStack
                                                mt={2}
                                            >
                                                <Icon
                                                    fontSize={"25px"}
                                                    as={RiCheckLine} />
                                                <Text
                                                    fontFamily={"Nunito Sans"}
                                                    fontWeight={500}
                                                >
                                                    1 Facebook cover
                                                </Text>
                                            </HStack>
                                            <HStack
                                                mt={2}
                                            >
                                                <Icon
                                                    fontSize={"25px"}
                                                    as={RiCheckLine} />
                                                <Text
                                                    fontFamily={"Nunito Sans"}
                                                    fontWeight={500}
                                                >
                                                    1 Full copyright ownership
                                                </Text>
                                            </HStack>
                                            <HStack
                                                mt={2}
                                            >
                                                <Icon
                                                    fontSize={"25px"}
                                                    as={RiCheckLine} />
                                                <Text
                                                    fontFamily={"Nunito Sans"}
                                                    fontWeight={500}
                                                >
                                                    1 Digital print and web files (RGB, CMYK, PNG, <br />JPG, PDF)
                                                </Text>
                                            </HStack>
                                            <HStack
                                                mt={2}
                                            >
                                                <Icon
                                                    fontSize={"25px"}
                                                    as={RiCheckLine} />
                                                <Text
                                                    fontFamily={"Nunito Sans"}
                                                    fontWeight={500}
                                                >
                                                    The original, editable file (i.e AI)
                                                </Text>
                                            </HStack>
                                            <HStack
                                                mt={2}
                                            >
                                                <Icon
                                                    fontSize={"25px"}
                                                    as={RiCheckLine} />
                                                <Text
                                                    fontFamily={"Nunito Sans"}
                                                    fontWeight={500}
                                                >
                                                    100% money back guarantee
                                                </Text>
                                            </HStack>
                                            <Box
                                                mt={4}
                                                bg="#1C1B1A"
                                                w={"100%"}
                                                h="50px"
                                                borderRadius={"50px"}
                                                as='button'
                                                _hover={{ bg: "#5B5A58" }}
                                            >
                                                <Center>
                                                    <Flex>
                                                        <Text
                                                            color="white"
                                                            fontFamily={"Nunito Sans"}
                                                            fontWeight={"bold"}
                                                            fontSize={"18px"}
                                                            mr={1}
                                                        >Select a package</Text>
                                                        <Icon color="white" fontSize={"25px"} as={IoMdArrowDown} />
                                                    </Flex>
                                                </Center>
                                            </Box>
                                        </Stack>
                                    </Box>
                                </Center>
                            </Box>
                        </Wrap>
                        <Box
                            h="800px"
                            pos="relative"
                            left={{base: "10rem", md: 0, lg: 0}}
                            w={{base: "57%", md: "57%", lg: "57%"}}
                            mt={{md: '-14rem', lg: '6rem'}}
                        >
                            <HStack
                            >
                                <Box
                                    h="30px"
                                    w={{base: "25%", md: "30%", lg: "19%"}}
                                    as='button'
                                    borderBottom={"2px solid black"}
                                    _hover={{ borderBottom: "3px solid #5B5A58" }}
                                >
                                    <Text
                                        color="black"
                                        fontFamily={"Nunito Sans"}
                                        fontSize={{base: "15px", md: "17px", lg: "20px"}}
                                        fontWeight={"bold"}
                                        _hover={{ color: "#5B5A58" }}
                                    >
                                        What you get
                                    </Text>
                                </Box>
                                <Box
                                    h="30px"
                                    w={{base: "25%", md: "30%", lg: "19%"}}
                                    as='button'
                                    _hover={{ borderBottom: "2px solid #5B5A58" }}
                                >
                                    <Text
                                        color="#5B5A58"
                                        fontFamily={"Nunito Sans"}
                                        fontSize={{base: "15px", md: "17px", lg: "20px"}}
                                        fontWeight={"bold"}
                                    >
                                        How it works
                                    </Text>
                                </Box>
                                <Box
                                    h="30px"
                                    w={{base: "14%", md: "15%", lg: "10%"}}
                                    as='button'
                                    _hover={{ borderBottom: "2px solid #5B5A58" }}
                                >
                                    <Text
                                        color="#5B5A58"
                                        fontFamily={"Nunito Sans"}
                                        fontSize={{base: "15px", md: "17px", lg: "20px"}}
                                        fontWeight={"bold"}
                                    >
                                        Pricing
                                    </Text>
                                </Box>
                                <Box
                                    h="30px"
                                    w={{base: "10%", md: "15%", lg: "8%"}}
                                    as='button'
                                    _hover={{ borderBottom: "2px solid #5B5A58" }}
                                >
                                    <Text
                                        color="#5B5A58"
                                        fontFamily={"Nunito Sans"}
                                        fontSize={{base: "15px", md: "17px", lg: "20px"}}
                                        fontWeight={"bold"}
                                    >
                                        FAQs
                                    </Text>
                                </Box>

                            </HStack>
                            <Divider borderWidth={1} />
                            <Stack
                            display={{base: 'none', lg: 'block'}}
                            >
                                <Heading
                                    fontFamily={"Nunito Sans"}
                                    fontSize={"28px"}
                                    mt={"5rem"}
                                    opacity={0.9}
                                >
                                    Branding as unique as your business.
                                </Heading>
                                <Text
                                    fontFamily={"Nunito Sans"}
                                    fontSize={"17px"}
                                    mt={"1rem"}
                                >
                                    Invite our professional designers to bring your brand to life through custom logo design,
                                    <br />
                                    business cards, letterhead and social media graphics.
                                </Text>
                            </Stack>
                            <Divider display={{base: 'none', lg: 'block'}} opacity={1} mt={'5rem'} borderWidth={1} />
                            <Heading
                                textAlign={"left"}
                                fontFamily={"Nunito Sans"}
                                fontSize={{base: "20px", md: "25px", lg: "25px"}}
                                mt={"3rem"}
                            >
                                What you get
                            </Heading>
                            <Stack>
                                <HStack
                                    mt={5}
                                >
                                    <Icon
                                        fontSize={"25px"}
                                        as={RiCheckLine} />
                                    <Text
                                        fontFamily={"Nunito Sans"}
                                        fontWeight={500}
                                    >
                                        1 finished, completely custom logo design
                                    </Text>
                                </HStack>
                                <HStack
                                >
                                    <Icon
                                        fontSize={"25px"}
                                        as={RiCheckLine} />
                                    <Text
                                        fontFamily={"Nunito Sans"}
                                        fontWeight={500}
                                    >
                                        1 business card design
                                    </Text>
                                </HStack>
                                <HStack>
                                    <Icon
                                        fontSize={"25px"}
                                        as={RiCheckLine} />
                                    <Text
                                        fontFamily={"Nunito Sans"}
                                        fontWeight={500}
                                    >
                                        1 letterhead
                                    </Text>
                                </HStack>
                                <HStack>
                                    <Icon
                                        fontSize={"25px"}
                                        as={RiCheckLine} />
                                    <Text
                                        fontFamily={"Nunito Sans"}
                                        fontWeight={500}
                                    >
                                        1 envelope
                                    </Text>
                                </HStack>
                                <HStack>
                                    <Icon
                                        fontSize={"25px"}
                                        as={RiCheckLine} />
                                    <Text
                                        fontFamily={"Nunito Sans"}
                                        fontWeight={500}
                                    >
                                        1 Facebook cover
                                    </Text>
                                </HStack>
                                <HStack>
                                    <Icon
                                        fontSize={"25px"}
                                        as={RiCheckLine} />
                                    <Text
                                        fontFamily={"Nunito Sans"}
                                        fontWeight={500}
                                    >
                                        1 Full copyright ownership
                                    </Text>
                                </HStack>
                                <HStack>
                                    <Icon
                                        fontSize={"25px"}
                                        as={RiCheckLine} />
                                    <Text
                                        fontFamily={"Nunito Sans"}
                                        fontWeight={500}
                                    >
                                        1 Digital print and web files (RGB, CMYK, PNG, JPG, PDF)
                                    </Text>
                                </HStack>
                                <HStack>
                                    <Icon
                                        fontSize={"25px"}
                                        as={RiCheckLine} />
                                    <Text
                                        fontFamily={"Nunito Sans"}
                                        fontWeight={500}
                                    >
                                        The original, editable file (i.e AI)
                                    </Text>
                                </HStack>
                                <HStack>
                                    <Icon
                                        fontSize={"25px"}
                                        as={RiCheckLine} />
                                    <Text
                                        fontFamily={"Nunito Sans"}
                                        fontWeight={500}
                                    >
                                        100% money back guarantee
                                    </Text>
                                </HStack>
                            </Stack>
                            <Divider mt={"3.3rem"} opacity={1} borderWidth={1} w={{base: "42rem", md: "42rem", lg: 0}} />
                            <Heading
                                textAlign={"left"}
                                fontFamily={"Nunito Sans"}
                                fontSize={{base: "20px", md: "25px", lg: "25px"}}
                                mt={"2rem"}
                            >
                                Collaboration method
                            </Heading>
                            <Box
                                mt="1rem"
                                backgroundImage={CollaboratesBackground}
                                bgSize="cover"
                                h={{base: "390px", md: "300px", lg: "300px"}}
                                w={{base: "100%", md: "700px", lg: "100%"}}
                                mb={{base: "-7rem", md: 0, lg: 0}}
                            >
                                <Stack
                                    pos="relative"
                                    top={5}
                                    ml={{base: 0, md: 5, lg: 5}}
                                >
                                    <Heading
                                        fontSize={"20px"}
                                        fontFamily={"Nunito Sans"}
                                    >
                                        Constest Bundle
                                    </Heading>
                                    <Text
                                        fontFamily={"Nunito Sans"}
                                        fontSize={"17px"}
                                    >
                                        Open your design brief to our entire community. Designers submit their ideas and you 
                                        <br style={{ display: isSmallScreen ? "none" : "block" }}/>  pick your favorite design.
                                    </Text>
                                    <HStack
                                        mt={2}
                                        spacing={5}
                                    >
                                        <Icon
                                            fontSize={"25px"}
                                            as={RiCheckLine} />
                                        <Text
                                            fontFamily={"Nunito Sans"}
                                            fontWeight={500}
                                        >
                                            Creative concepts from mutilple designers
                                        </Text>
                                    </HStack>
                                    <HStack
                                        spacing={5}
                                    >
                                        <Icon
                                            fontSize={"25px"}
                                            as={RiCheckLine} />
                                        <Text
                                            fontFamily={"Nunito Sans"}
                                            fontWeight={500}
                                        >
                                            Choose a winning design and receive copyright to the files
                                        </Text>
                                    </HStack>
                                    <HStack
                                        spacing={5}
                                    >
                                        <Icon
                                            fontSize={"25px"}
                                            as={RiCheckLine} />
                                        <Text
                                            fontFamily={"Nunito Sans"}
                                            fontWeight={500}
                                        >
                                            Work with the winning designer to finalize deliverables in your<br />bundle
                                        </Text>
                                    </HStack>
                                    <Box
                                        mt={2}
                                        h="30px"
                                        w={{base: "30%", md: "19%", lg: "19%"}}
                                        as='button'
                                        borderBottom={"2px solid #AAA8A7"}
                                    >
                                        <HStack>
                                            <Text
                                                color="black"
                                                fontFamily={"Nunito Sans"}
                                                fontSize={{base: "16px", md: "17px", lg: "17px"}}
                                                opacity={0.9}
                                            >
                                                Find out more
                                            </Text>
                                            <Icon ml={-1} as={FaAngleRight} />
                                        </HStack>
                                    </Box>
                                </Stack>
                            </Box>
                            <Image
                            display={{base: "block", md: "block", lg: "none", xl: "none"}}
                            w={"30%"}
                            pos="relative"
                            left={"16.3rem"}
                            src={DoodleMobile} />
                            
                            <Box
                                bg="white"
                                h="300px"
                                w={{base: "100%", md: "700px", lg: "100%"}}
                            >
                                <Heading
                                    textAlign={"left"}
                                    fontFamily={"Nunito Sans"}
                                    fontSize={"25px"}
                                    mt={"2rem"}
                                >
                                    How a contest works
                                </Heading>
                                <HStack
                                    w={"33%"}
                                    mt={5}
                                >
                                    <Image src={"https://99designs-start-static.imgix.net/product-details/how-it-works/contest-1.jpg"} />
                                    <Image src={"https://99designs-start-static.imgix.net/product-details/how-it-works/contest-2.jpg"} />
                                    <Image src={"https://99designs-start-static.imgix.net/product-details/how-it-works/contest-3.jpg"} />
                                </HStack>
                                <HStack
                                    fontFamily={"Nunito Sans"}
                                    fontSize={"15px"}
                                    spacing={{base: "1rem", md: "5.3rem", lg: "5.3rem"}}
                                >
                                    <Text
                                        fontWeight={"bold"}
                                    >
                                        01.
                                        <Text
                                            fontWeight={"normal"}
                                        >
                                            Write a design brief
                                        </Text>
                                    </Text>
                                    <Text
                                        pos="relative"
                                        left={6}
                                        fontWeight={"bold"}
                                    >
                                        02.
                                        <Text
                                            fontWeight={"normal"}
                                        >
                                            Designers submit concepts
                                        </Text>
                                    </Text>
                                    <Text
                                        fontWeight={"bold"}
                                    >
                                        03.
                                        <Text
                                            fontWeight={"normal"}
                                        >
                                            Pick a winning design
                                        </Text>
                                    </Text>
                                </HStack>
                            </Box>
                        </Box>
                    </Box>
                </Center>
            </Box>
        </>

    )
}