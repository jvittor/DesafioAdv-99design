import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import Categories from "./Categories";
import HeaderCategories from "./HeaderCategories";

export default function GridCategories() {
  return (
    <Grid
      templateAreas={`"header header"
                      "nav main"`}
      gridTemplateRows={'130px 10fr'}
      gridTemplateColumns={'0px 1fr'}
      h='800px' 
      color='blackAlpha.700'
      fontWeight='bold'
    >
      <GridItem pl='2' bg='white' area={'header'}>
        <HeaderCategories /> 
      </GridItem>
      <GridItem pl='2' bg='green.300' area={'main'}>
        <Categories />
      </GridItem>

    </Grid>
  );
};
