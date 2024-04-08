import React, { useState, useEffect } from 'react';
import { Box, Grid, Flex, Text} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const styles = {
    image: {
      opacity: 1,
      transition: "opacity 0.5s ease",
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    
    return () => clearInterval(interval); 
  }, [currentIndex]); 

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };


  return (
    <Box>
      <Grid>
        <Box position="relative">
          <Flex>
          <Box
          transition={"opacity 0.5s ease"}
          w={{ base: "55%", md: "100%", lg: "100%"}}
          >
            <img
            src={slides[currentIndex].imageUrl} 
            alt={`Slide ${currentIndex + 1}`} 
            style={{ ...styles.image}}
            />
          </Box>
          </Flex>
        </Box>
      </Grid>
      <Flex  
        alignItems="center"
        mt={6}
        position="relative"
        width="100%">
        {slides.map((_, index) => (
          <Box
            key={index}
            w="10px"
            h="10px"
            borderRadius="50%"
            bg={currentIndex === index ? "black" : "#666"} 
            mx={2}
            pos={"relative"}
            right={2}
            
            cursor="pointer"
            onClick={() => setCurrentIndex(index)}
            opacity={0.7}
          />
        ))}
        <Text
        pos="relative"
        left={{base: "6.5rem", md: "27rem", lg: "27rem", xl: "27rem"}}
        bottom={2}
        fontFamily={"normal"}
        fontStyle={"italic"}
        textAlign={"right"}
        opacity={0.9}
        >
            Design constest for The Hype Lab
            < br />
            Winning deisgn by leonelbalza
        </Text>
      </Flex>
    </Box>
  );
};

export default Carousel;
