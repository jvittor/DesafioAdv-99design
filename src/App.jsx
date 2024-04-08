import React from "react";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Categories from "./Components/Categories/GridCategories";
import  BrandIdentityPack from "./Components/BrandIdentityPack/BrandIdentityPack";


const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Categories />} />
          <Route path="/brand-identity-pack/details" element={<BrandIdentityPack />} />
          {/* <Route path="*" element={<Pagina404 />} />  alterar depois*/}
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
};
export default App;
