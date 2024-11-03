import { Grid2, Typography } from "@mui/material";
import React from "react";
import Container from "../layout/Container";
import ProductCard from "./ProductCard";
import { useContext } from "react";
import { FilterContext } from "../../Context/FilterContext";

const ProductListing = () => {
  const {
    filteredProducts,
    filter: { category },
  } = useContext(FilterContext);
  return (
    <Container>
      <Typography
        sx={{ alignSelf: "flex-start", marginLeft: "80px" }}
        variant="h3"
      >
        {category?.[0] || "All"} {category?.[1] ? ` > ${category[1]}` : ""}
      </Typography>
      <Grid2
        container
        rowGap={"32px"}
        columnGap={"24px"}
        sx={{
          padding: "0 78px",
          width: "100%",
        }}
      >
        {filteredProducts.map((product) => (
          <Grid2 size="auto" key={product.id}>
            <ProductCard product={product} />
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
};

export default ProductListing;
