import React from "react";
import { SimpleGrid, Box } from "@chakra-ui/react";

export default function Categories() {
    return (
        <> 
        <SimpleGrid 
        marginLeft={"-200px"}
        columns={1} spacing={10}
        display="none"
        >
            <Box bg='tomato' height='80px'></Box>
      
        </SimpleGrid>
        </>
    );
}