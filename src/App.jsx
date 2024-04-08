import React from "react";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CategoriesPage from "./Components/Categories/CategoriesPage";
import BrandIdentityPackPage from "./Components/BrandIdentityPack/BrandIdentityPackPage";


const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CategoriesPage />} />
          <Route path="/brand-identity-pack" element={<BrandIdentityPackPage />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
};
export default App;
