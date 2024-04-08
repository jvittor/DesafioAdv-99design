import React from "react";
import { Text, Link } from "@chakra-ui/react";

export default function BreadCrumbs() {
    const breadcrumbs = [
        { label: "Home", url: "/" },
        { label: "Categories", url: "/categories" },
        // breadcrumbs já gatilhado para o backend
    ];

    return (
        <>
            <Text
            mt={{base: 6, md: 6, lg: 4, xl: 4, "2xl": 4}} 
            fontSize={{ base: "10px", md: "12px", lg: "13px", xl: "13px", "2xl": "14px" }}
            fontFamily={"Arial"}
            >
                {breadcrumbs.map((breadcrumb, index) => (
                    <span key={index}>
                        {index > 0 && (
                            <span style={{ opacity: "0.5", margin: "0 5px" }}>/</span> 
                        )}
                        {index === 0 ? (
                            <Link
                                href={breadcrumb.url}
                                style={{ fontStyle: "light", color: "black", opacity: "0.5" }}
                                _hover={{ textDecoration: "underline" }}
                            >
                                {breadcrumb.label}
                            </Link>
                        ) : (
                            <span>{breadcrumb.label}</span>
                        )}
                    </span>
                ))}
            </Text>
   
        </>
    );
}
