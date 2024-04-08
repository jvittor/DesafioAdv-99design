import React from "react";
import { Box, Wrap, Stack, Image, Text, Flex, Icon, Heading, HStack, Center, useMediaQuery} from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import Identity from "../../assets/identity.png";
import { IoMdCheckmark } from "react-icons/io";
import HeaderCategories from "./HeaderCategories";

export default function GridCategories() {
  const [isSmallScreen] = useMediaQuery("(max-width: 768px)");
  return (
    <>
      <Box
        width="100%"
        height={{ base: "4800px", md: "4000px", lg: "2600px" }}
        overflow="hidden"
      >
        
        <Box
        w="100%"
        h="200px"
        backgroundImage="linear-gradient(to top, rgba(0, 0, 0, 0.09) 1%, white 60%)"
        pos="absolute"
        >

        </Box>
        <HeaderCategories />
        <Center
          pos="relative"
          top={"22rem"}>
          <Box
            pos="relative"
            bottom={"15rem"}
            w={{ base: "90%", md: "90%", lg: "auto" }}
          >
            
            <Wrap
              flexWrap="wrap"
            >
              
              <a
              href="/brand-identity-pack"
              >
              <Box
                h={{ base: "300px", md: "350px", lg: "300px" }}
                w={{ base: "460px", md: "42.7rem", lg: "460px" }}
                _hover={{ transform: "scale(1.05)", boxShadow: "lg", zIndex: "1" }}
                transition="transform 0.3s ease-in-out"
                borderRight="1px solid rgba(0, 0, 0, 0.1)"
                borderBottom="1px solid rgba(0, 0, 0, 0.1)"
                bg="white"
                as="button"
              >
                <Box
                  bg="#01A1C1"
                  h="30px"
                  w="140px"
                  borderRadius="20px"
                  pos="relative"
                  mt={3}
                  ml={5}
                >
                  <Text
                    ml={2}
                    color="white"
                    fontFamily="Nunito Sans"
                    pos="relative"
                    top={1}
                  >
                    <Icon
                      color="white"
                      as={FaStar}
                      mr={1}
                      pos="relative"
                      top="2px"
                    />
                    Most popular
                  </Text>
                </Box>
                <Flex
                  pos="relative"
                  top={5}
                >
                  <Image pos="relative" bottom={3} ml={5} mr={3} w="15%" src={Identity} />
                  <Heading fontFamily="Nunito Sans" fontSize="20px" pos="relative" bottom={1}>
                    Logo & brand identity pack
                    <br />
                    <Flex>
                      <Text fontWeight="normal" pos="relative" top={2} fontFamily="Arial" fontSize="16px">
                        from US$599
                      </Text>
                      <Box bg="white" pos="relative" top={1} left={2} h={6} w="90px" border="1px solid #01A1C1" borderRadius="2px">
                        <Flex align="center" justify="center" h="100%">
                          <Text color="#01A1C1" fontSize="14px" fontFamily="Nunito Sans" fontWeight="light">
                            Save 39%+
                          </Text>
                        </Flex>
                      </Box>
                    </Flex>
                  </Heading>
                </Flex>
                <Box bg="white" w="100%">
                  <Text fontFamily="Arial" fontSize="15px" opacity={0.7} ml={6} mt={3}>
                    A logo plus digital and print essentials to kick-start your brand
                  </Text>
                </Box>
                <Flex>
                  <Icon pos="relative" top={2} ml={5} fontSize="20px" mr={2} as={IoMdCheckmark} />
                  <Text opacity={0.7} fontFamily="Nunito Sans" mt={2} fontSize="14px">
                    Logo
                  </Text>
                </Flex>
                <Flex>
                  <Icon pos="relative" top={2} ml={5} fontSize="20px" mr={2} as={IoMdCheckmark} />
                  <Text opacity={0.7} fontFamily="Nunito Sans" mt={2} fontSize="14px">
                    Business card
                  </Text>
                </Flex>
                <Flex>
                  <Icon pos="relative" top={2} ml={5} fontSize="20px" mr={2} as={IoMdCheckmark} />
                  <Text opacity={0.7} fontFamily="Nunito Sans" mt={2} fontSize="14px">
                    Letterhead & Envelope
                  </Text>
                </Flex>
                <Flex>
                  <Icon pos="relative" top={2} ml={5} fontSize="20px" mr={2} as={IoMdCheckmark} />
                  <Text opacity={0.7} fontFamily="Nunito Sans" mt={2} fontSize="14px">
                    Facebook cover
                  </Text>
                </Flex>
              </Box>
              </a>


              {/* segundo box */}
              <Box
                pos="relative"
                right={{ base: 0, md: 0, lg: 2 }}
                bottom={{ base: "8px", md: "8px", lg: 0 }}
                h={{base: "200px", md: "300px", lg: "300px"}}
                w={{ base: "385px", md: "350px", lg: "250px" }}
                _hover={{ transform: "scale(1.05)", boxShadow: "lg", zIndex: "2" }}
                transition="transform 0.3s ease-in-out"
                borderRight="1px solid rgba(0, 0, 0, 0.1)"
                borderBottom="1px solid rgba(0, 0, 0, 0.1)"
                bg="white"
              >
                <Center>
                  <Stack
                    pos="relative"
                    bottom={{base: 10, md: 4, lg: 4}}
                    right={{ base: "5rem", md: 12, lg: 0 }}
                  >
                    <Image mt={{base: 12, md: 10, lg: 10}} w="50%"
                      pos="relative"
                      src={Identity} />
                    <Box>
                      <Heading textAlign={"left"} fontFamily="Nunito Sans"
                        fontSize={{ base: "20px", md: "17.5px", lg: "20px" }}
                        pos="relative"
                        bottom={1}>
                        Logo design
                        <br />
                        <Text textAlign={"left"} fontWeight="normal" pos="relative" top={2} fontFamily="Arial"
                          fontSize={{ base: "16px", md: "17.8px", lg: "16px" }}
                        >
                          from US$299
                        </Text>

                      </Heading>
                    </Box>

                  </Stack>
                </Center>
                <Text fontFamily="Arial" fontSize="15px" opacity={0.7} 
                ml={{base: "30px", md: "44px", lg: "44px"}} 
                pos="relative"
                bottom={{base: 8, md: 0, lg: 0}}
                >
                  An unforgettable logo <br style={{ display: "none", md: "none", lg: "block" }} />crafted for your brand
                </Text>
              </Box>



              <Box
                h={{base: "250px", md: "300px", lg: "300px"}}
                pos="relative"
                bottom={{ base: 4, md: "8px", lg: 0 }}
                right={{ base: 0, md: 2, lg: 4 }}
                w={{ base: "25rem", md: "20.8rem", lg: "16.6rem" }}
                _hover={{ transform: "scale(1.05)", boxShadow: "lg", zIndex: "3" }}
                transition="transform 0.3s ease-in-out"
                borderBottom="1px solid rgba(0, 0, 0, 0.1)"
                bg="white"
                
              >
                <Center>
                  <Stack
                    pos="relative"
                    bottom={4}
                    right={{ base: "5rem", md: 12, lg: 0 }}
                  >
                    <Image mt={10} w="50%"
                      pos="relative"
                      src={Identity} />
                    <Box>
                      <Heading textAlign={"left"} fontFamily="Nunito Sans"
                        fontSize={{ base: "20px", md: "17.5px", lg: "20px" }}
                        pos="relative" bottom={1}>
                        Business card
                        <br />
                        <Text textAlign={"left"} fontWeight="normal" pos="relative" top={2} fontFamily="Arial"
                          fontSize={{ base: "16px", md: "17.8px", lg: "16px" }}
                        >
                          from US$169
                        </Text>
                      </Heading>
                    </Box>
                  </Stack>
                </Center>
                <Box bg="white" >
                  <Text
                    pos="relative"
                    right={{ base: 3, md: 2, lg: 0 }}
                    fontFamily="Arial" fontSize="15px" opacity={0.7} ml={"44px"} >
                    A unique card design to build <br style={{ display: "block", md: "block", lg: "block" }} />connections
                  </Text>
                </Box>
              </Box>

            </Wrap>

            {/* quarto box */}
            <Flex
              flexWrap={"wrap"}
            >
              <Box
                h={{ base: "300px", md: "320px", lg: "300px" }}
                pos="relative"
                bottom={{ base: 4, md: 2, lg: 0 }}
                w={{ base: "460px", md: "683px", lg: "460px" }}
                _hover={{ transform: "scale(1.05)", boxShadow: "lg", zIndex: "4" }}
                transition="transform 0.3s ease-in-out"
                borderRight="1px solid rgba(0, 0, 0, 0.1)"
                borderBottom="1px solid rgba(0, 0, 0, 0.1)"
                bg="white"
              >
                <Flex
                  pos="relative"
                  top="20%"
                >
                  <Image mt={3} ml={5} w="15%" src={Identity} />
                  <Stack
                    pos="relative"
                    top={5}
                  >
                    <Heading fontFamily="Nunito Sans" fontSize="20px" pos="relative" bottom={1}>
                      Logo & brand guide
                      <br />
                      <Flex>
                        <Text fontWeight="normal" pos="relative" top={2} fontFamily="Arial" fontSize="16px">
                          from US$429
                        </Text>
                        <Box bg="white" pos="relative" top={1} left={2} h={6} w="90px" border="1px solid #01A1C1" borderRadius="2px">
                          <Flex align="center" justify="center" h="100%">
                            <Text color="#01A1C1" fontSize="14px" fontFamily="Nunito Sans" fontWeight="light">
                              Save US$70
                            </Text>
                          </Flex>
                        </Box>
                      </Flex>
                    </Heading>
                  </Stack>
                </Flex>
                <Stack
                  mt={14}
                >
                  <Box bg="white" w="100%">
                    <Text fontFamily="Arial" fontSize="15px" opacity={0.7} ml={6} mt={5}>
                      Extend your logo design into a real brand with matching fonts, colors and style
                    </Text>
                  </Box>
                  <Flex>
                    <Icon pos="relative" top={2} ml={5} fontSize="20px" mr={2} as={IoMdCheckmark} />
                    <Text opacity={0.7} fontFamily="Nunito Sans" mt={2} fontSize="14px">
                      Logo
                    </Text>
                  </Flex>
                  <Flex>
                    <Icon pos="relative" top={2} ml={5} fontSize="20px" mr={2} as={IoMdCheckmark} />
                    <Text opacity={0.7} fontFamily="Nunito Sans" mt={2} fontSize="14px">
                      Brand guide document
                    </Text>
                  </Flex>
                </Stack>
              </Box>

              {/* quinto box */}
              <Box
                pos="relative"
                bottom={{ base: 4, md: 2, lg: 0 }}
                h={{base: "280px", md: "300px", lg: "300px"}}
                w={{ base: "516px", md: "683px", lg: "516px" }}
                _hover={{ transform: "scale(1.05)", boxShadow: "lg", zIndex: "5" }}
                transition="transform 0.3s ease-in-out"
                borderRight="1px solid rgba(0, 0, 0, 0.1)"
                borderBottom="1px solid rgba(0, 0, 0, 0.1)"
                bg="white"
              >
                <Flex
                  pos="relative"
                  top="20%"
                  left={{base: "-1%", md: "5%", lg: "5%"}}
                >
                  <Image mt={3} ml={5} w="15%" src={Identity} />
                  <Heading fontFamily="Nunito Sans" fontSize="20px" pos="relative" bottom={1}>
                    Logo & business card
                    <br />
                    <Flex>
                      <Text fontWeight="normal" pos="relative" top={2} fontFamily="Arial" fontSize="16px">
                        from US$449
                      </Text>
                      <Box bg="white" pos="relative" top={1} left={2} h={6} w="90px" border="1px solid #01A1C1" borderRadius="2px">
                        <Flex align="center" justify="center" h="100%">
                          <Text color="#01A1C1" fontSize="14px" fontFamily="Nunito Sans" fontWeight="light">
                            Save US$49
                          </Text>
                        </Flex>
                      </Box>
                    </Flex>
                  </Heading>
                </Flex>
                <Stack
                  mt={12}
                  ml={{base: 0, md: 6, lg: 6}}
                >
                  <Box bg="white" w="100%">
                    <Text fontFamily="Arial" fontSize="15px" opacity={0.7} ml={6} mt={5}>
                      A logo and business card design that pair perfectly
                    </Text>
                  </Box>
                  <Flex>
                    <Icon pos="relative" top={2} ml={5} fontSize="20px" mr={2} as={IoMdCheckmark} />
                    <Text opacity={0.7} fontFamily="Nunito Sans" mt={2} fontSize="14px">
                      Logo
                    </Text>
                  </Flex>
                  <Flex>
                    <Icon pos="relative" top={2} ml={5} fontSize="20px" mr={2} as={IoMdCheckmark} />
                    <Text opacity={0.7} fontFamily="Nunito Sans" mt={2} fontSize="14px">
                      Business card
                    </Text>
                  </Flex>
                </Stack>
              </Box>
            </Flex>

            {/* sexto box */}
            <Flex>
              <Box
                pos="relative"
                bottom={{ base: 4, md: 2, lg: 0 }}
                h="380px"
                w={{ base: "460px", md: "683px", lg: "460px" }}
                _hover={{ transform: "scale(1.05)", boxShadow: "lg", zIndex: "6" }}
                transition="transform 0.3s ease-in-out"
                borderBottom="1px solid rgba(0, 0, 0, 0.1)"
                bg="white"
              >
                <Flex
                  pos="relative"
                  top="20%"
                >
                  <Image mt={3} ml={5} w="15%" src={Identity} />
                  <Heading fontFamily="Nunito Sans" fontSize="20px" pos="relative" bottom={1}>
                    Logo & website
                    <br />
                    <Flex>
                      <Text fontWeight="normal" pos="relative" top={2} fontFamily="Arial" fontSize="16px">
                        from US$1,399
                      </Text>
                      <Box bg="white" pos="relative" top={1} left={2} h={6} w="140px" border="1px solid #01A1C1" borderRadius="2px">
                        <Flex align="center" justify="center" h="100%">
                          <Text color="#01A1C1" fontSize="14px" fontFamily="Nunito Sans" fontWeight="light">
                            Save up to US$300
                          </Text>
                        </Flex>
                      </Box>
                    </Flex>
                  </Heading>
                </Flex>
                <Stack
                  mt={14}
                >
                  <Box bg="white" w="100%">
                    <Text fontFamily="Arial" fontSize="15px" opacity={0.7} ml={6} mt={5}>
                      A custom logo and Squarespace website that matches your brand
                    </Text>
                  </Box>
                  <Flex>
                    <Icon pos="relative" top={2} ml={5} fontSize="20px" mr={2} as={IoMdCheckmark} />
                    <Text opacity={0.7} fontFamily="Nunito Sans" mt={2} fontSize="14px">
                      Logo
                    </Text>
                  </Flex>
                  <Flex>
                    <Icon pos="relative" top={2} ml={5} fontSize="20px" mr={2} as={IoMdCheckmark} />
                    <Text opacity={0.7} fontFamily="Nunito Sans" mt={2} fontSize="14px">
                      Fully functioning, cusstom-designed Squarespace website
                    </Text>
                  </Flex>
                  <Flex>
                    <Icon pos="relative" top={2} ml={5} fontSize="20px" mr={2} as={IoMdCheckmark} />
                    <Text opacity={0.7} fontFamily="Nunito Sans" mt={2} fontSize="14px">
                      Content uploaded for you
                    </Text>
                  </Flex>

                </Stack>


              </Box>

              <Box
                ml={10}
                h="380px"
                w="320px"
                display={{ base: "none", md: "none", lg: "block" }}
              >
                <Image
                  pos="absolute"
                  mt={20}
                  src={"https://99designs-start-static.imgix.net/categories-page/parent-categories/logo-01.png?auto=format&ch=Width%2CDPR&q=50&h=545"} />


              </Box>
            </Flex>
            <Box
              display={{ base: "block", md: "block", lg: "none" }}
              pos={"relative"}
              bottom={{ base: 0, md: 2, lg: 0 }}
              h="400px"
              w={{ base: "460px", md: "683px", lg: "460px" }}
              bgSize="cover"
              bgImage="https://99designs-start-static.imgix.net/categories-page/parent-categories/logo-01.png?auto=format&ch=Width%2CDPR&q=50&h=900"
            />

            {/* sétimo box */}
            <Box
              pos={"relative"}
              bottom={{ base: 0, md: 2, lg: 0 }}
              h={{ base: "360px", md: "380px", lg: "360px" }}
              w={{ base: "380px", sm: "383px", md: "683px", lg: "460px", xl: "460px" }}
              _hover={{ transform: "scale(1.05)", boxShadow: "lg", zIndex: "10" }}
              transition="transform 0.3s ease-in-out"
              borderBottom="1px solid rgba(0, 0, 0, 0.1)"
              bg="white"
            >
              <Flex
                pos="relative"
                top="20%"
                left={{ base: "5%", sm: "5%", md: "5%", lg: "5%" , xl: "5%"}} 
              >
                <Image mt={3} ml={5} w="15%" src={Identity} />
                <Heading fontFamily="Nunito Sans" fontSize="20px" pos="relative" 
                bottom={{base: 5, sm: 1, md: 1, lg: 1, xl: 1}}>
                  Logo & social media pack
                  <br />
                  <Flex>
                    <Text fontWeight="normal" pos="relative" top={2} fontFamily="Arial" fontSize="16px">
                      from US$399
                    </Text>
                    <Box bg="white" pos="relative" top={1} left={2} h={6} w="90px" border="1px solid #01A1C1" borderRadius="2px">
                      <Flex align="center" justify="center" h="100%">
                        <Text color="#01A1C1" fontSize="14px" fontFamily="Nunito Sans" fontWeight="light">
                          Save US$137
                        </Text>
                      </Flex>
                    </Box>
                  </Flex>
                </Heading>
              </Flex>
              <Stack
                mt={12}
                ml={6}
              >
                <Box bg="white" w="100%">
                  <Text fontFamily="Arial" fontSize="15px" opacity={0.7} ml={6} mt={5}>
                    A logo and business card design that pair perfectly
                  </Text>
                </Box>
                <Flex>
                  <Icon pos="relative" top={2} ml={5} fontSize="20px" mr={2} as={IoMdCheckmark} />
                  <Text opacity={0.7} fontFamily="Nunito Sans" mt={2} fontSize="14px">
                    Logo
                  </Text>
                </Flex>
                <Flex>
                  <Icon pos="relative" top={2} ml={5} fontSize="20px" mr={2} as={IoMdCheckmark} />
                  <Text opacity={0.7} fontFamily="Nunito Sans" mt={2} fontSize="14px">
                    Facebook cover
                  </Text>
                </Flex>

                <Flex>
                  <Icon pos="relative" top={2} ml={5} fontSize="20px" mr={2} as={IoMdCheckmark} />
                  <Text opacity={0.7} fontFamily="Nunito Sans" mt={2} fontSize="14px">
                    Twitter header
                  </Text>
                </Flex>

                <Flex>
                  <Icon pos="relative" top={2} ml={5} fontSize="20px" mr={2} as={IoMdCheckmark} />
                  <Text opacity={0.7} fontFamily="Nunito Sans" mt={2} fontSize="14px">
                    Youtube background
                  </Text>
                </Flex>
              </Stack>
            </Box>
            <Wrap
              flexWrap="wrap"
            >
              <Box
                pos="relative"
                bottom={{ base: 0, md: 2, lg: 0 }}
                h="300px"
                w={{base: "390px", md: "360px", lg: "250px"}}
                _hover={{ transform: "scale(1.05)", boxShadow: "lg" }}
                transition="transform 0.3s ease-in-out"
                borderRight="1px solid rgba(0, 0, 0, 0.1)"
                borderBottom="1px solid rgba(0, 0, 0, 0.1)"
                bg="white"
              >
                <Center>
                  <Stack
                    pos="relative"
                    bottom={4}
                    right={{base: "4rem", md: "3.2rem", lg: 0}}
                  >
                    <Image mt={10} w="50%"
                      pos="relative"
                      src={Identity} />
                    <Box>
                      <Heading textAlign={"left"} fontFamily="Nunito Sans" 
                      fontSize={{base: "20px", md: "17px", lg: "20px"}} pos="relative" bottom={1}>
                        Brand guide
                        <br />
                        <Text textAlign={"left"} fontWeight="normal" pos="relative" top={2} fontFamily="Arial" 
                        fontSize={{base: "16px", md: "17px", lg: "16px"}}>
                          from US$299
                        </Text>

                      </Heading>
                    </Box>
                  </Stack>
                </Center>
                <Text fontFamily="Arial" fontSize="15px" opacity={0.7} ml={"44px"} >
                  A comprehensive guide of your brand's <br style={{ display: isSmallScreen ? "block" : "none" }}/>fonts, colors <br style={{ display: isSmallScreen ? "none" : "block" }}/>
                  and style
                </Text>
              </Box>
              <Box
                pos="relative"
                bottom={{ base: 2, md: 2, lg: 0 }}
                right={{ base: 0, md: 2, lg: 2 }}
                h="300px"
                w={{base: "400px", md: "323px", lg: "210px"}}
                _hover={{ transform: "scale(1.05)", boxShadow: "lg" }}
                transition="transform 0.3s ease-in-out"
                borderRight="1px solid rgba(0, 0, 0, 0.1)"
                borderBottom="1px solid rgba(0, 0, 0, 0.1)"
                bg="white"
              >
                <Center>
                  <Stack
                    pos="relative"
                    bottom={4}
                    right={{ base: 20, md: "3.2rem", lg: 0 }}
                  >
                    <Image mt={10} w="50%"
                      pos="relative"
                      src={Identity} />
                    <Box>
                      <Heading textAlign={"left"} fontFamily="Nunito Sans" 
                      fontSize={{base: "20px", md: "17px", lg: "20px"}} 
                      pos="relative" bottom={1}>
                        Stationery
                        <br />
                        <Text textAlign={"left"} fontWeight="normal" pos="relative" top={2} fontFamily="Arial" 
                        fontSize={{base: "16px", md: "17px", lg: "16px"}}>
                          from US$199
                        </Text>

                      </Heading>
                    </Box>

                  </Stack>
                </Center>
                <Text fontFamily="Arial" fontSize="15px" opacity={0.7} 
                ml={{ base: "29px", md: "29px", lg: "25px" }} >
                  Letterhead and envelopes that send your <br style={{ display: isSmallScreen ? "block" : "none" }}/>brand's message
                </Text>
              </Box>


              {/* ultimo box */}
              <Box
                pos="relative"
                bottom={{ base: 4, md: 4, lg: 0 }}
                right={{ base: 0, md: 0, lg: 4 }}
                h={{base: "280px", md: "240px", lg: "300px"}}
                w={{ base: "382spx", md: "683px", lg: "509px" }}
                _hover={{ transform: "scale(1.05)", boxShadow: "lg" }}
                transition="transform 0.3s ease-in-out"
                borderBottom="1px solid rgba(0, 0, 0, 0.1)"
                bg="white"
              >
                <Center>
                  <Stack
                    pos="relative"
                    top={{ base: 20, md: 20, lg: "4rem" }}
                    right={{ base: "13.5rem", md: "8rem", lg: "2.5rem" }}
                  ><Flex
                    pos="relative"
                    top={{base: "20%", md: "20%", lg: "25%"}}
                    left={{base: "65%", md: "5%", lg: "5%"}}
                  >
                  <Image mr={{base: 4, md: 2, lg: 2}} w="17%" src={Identity} />
                  <Heading fontFamily="Nunito Sans" fontSize="20px" pos="relative" bottom={1}>
                    Full-Service Brand Pack
                    <br />
                    <Flex>
                      <Text fontWeight="normal" pos="relative" top={2} fontFamily="Arial" fontSize="16px">
                        from US$3,999
                      </Text>
                    </Flex>
                  </Heading>
                </Flex>
                </Stack>
                </Center>
                <Box bg="white" >
                  <Text fontFamily="Arial" fontSize="15px" pos={"relative"} 
                  top={{base: "6rem", md: "6rem", lg: "5rem"}} opacity={0.7} ml={"44px"} >
                    A strategically crafted brand identity guided by your personal <br style={{ display: isSmallScreen ? "none" : "block" }}/> Creative Director from 99 designs <br  style={{ display: isSmallScreen ? "block" : "none" }}/>Studio
                  </Text>
                </Box>
                

              </Box>
              
            </Wrap>


            {/* imagem */}
            <Box
              h={{base: "600px", md: "300px", lg: "300px"}}
              w={{base: "100%", md: "683px", lg: "990px"}}
              mt={20}
              bg="#F3F2F0"
              overflow={"hidden"}
            >
              <Heading
              fontFamily="Nunito Sans"
              fontSize={{ base: "35px", md: "24px", lg: "35px" }}
              pos="relative"
              top={{base: "3rem", md: "1.2rem", lg: "3rem"}}
              left={{base: 0, md: "1.2rem", lg: "3rem"}}
              textAlign={{ base: "center", md: "left", lg: "left" }}
              >
                Find the right brand <br style={{ display: isSmallScreen ? "block" : "none" }}/>  solution <br style={{ display: isSmallScreen ? "none" : "block" }}/> for you
                <Text
                fontFamily={"Nunito Sans"}
                fontSize={"17px"}
                fontWeight={"normal"}
                mt={"1rem"}
                pos="relative"
                textAlign={{ base: "center", md: "left", lg: "left" }}
                >
                Answer a few simple questions about <br style={{ display: isSmallScreen ? "block" : "none" }}/>
                your business and we'll <br style={{ display: isSmallScreen ? "none" : "block" }}/> recommend a <br style={{ display: isSmallScreen ? "block" : "none" }}/>
                design solution that's right for you.
              </Text>
              <Box
              bg="#313030"
              w={{base: "80%", md: "40%", lg: "30%"}}
              h="60px"
              mt={"2rem"}
              borderRadius={"50px"}
              _hover={{ bg: "#464545" }}
              as='button'
              >
                <Center>
                <Text
                color="white"
                fontFamily={"Nunito Sans"}
                fontSize={"20px"}
                fontWeight={"bold"}
                >
                  Take the branding quiz
                </Text>
                </Center>
              </Box>
              </Heading>
              <Box
                h="300px"
                bottom={{base: 0, md: "15rem", lg: 0}}
                w={{base:"70%", md:"60%", lg:"40%"}} 
                ml={{base: "15%", md: "40%", lg: "60%"}}
                pos="relative"
                top={{base: "3rem", md: "-12rem", lg: "-12rem"}}
              >
                <Text
                  pos="relative"
                  top={{base: "12rem", md: "4rem", lg: "3rem"}}
                  bottom={{base: 0, md: 0, lg: "20rem"}}
                  ml={{base: "3rem", md: "5rem", lg: "1rem"}}
                  fontFamily={"Normal"}
                  fontSize={{base: "18", md: "20", lg: "18"}}
                  fontStyle={"italic"}
                  opacity={0.8}
                >Illustration by wildanya</Text>
                <Image
                  pos={"relative"}
                  w={{base: "22rem", md: "22rem", lg: "auto"}}
                  left={{base: 0, md: "5rem", lg: 0}}
                  top={{base: 0, md: 5, lg: 0}}
                  src={"https://start-image-proxy.imgix.net/https%3A%2F%2F99designs-start-static.imgix.net%2Fbranding-product-recommender%2Fbranding-banner.png?auto=format&ch=Width%2CDPR&dpr=2&s=45c0a607c0f78a50f7e96f9948ed04b7"} />
              </Box>
            </Box>

          </Box>

        </Center>

      </Box>




    </>
  );
}
