import { Grid2, Typography } from "@mui/material";
import React from "react";
import Container from "../layout/Container";
import ProductCard from "./ProductCard";

const Products = Array.from({ length: 20 }, (_, i) => ({
  id: `product-${i}`,
  img: "",
  imgAlt: "Product image",
  category: "Category",
  subCategory: "Sub Category",
  name: `Product Name ${i + 1}`,
  creatorName: "Creator Name",
  rating: 4.5,
  pricing: 10.5,
  pricingCurrency: "$",
}));

const ProductListing = () => {
  return (
    <Container>
      <Grid2 container rowGap={"32px"} columnGap={"24px"}>
        <Grid2 size="12" alignSelf={"left"}>
          <Typography variant="h3">
            Parent category &gt; Child category
          </Typography>
        </Grid2>
        <Grid2 container rowGap={"32px"} columnGap={"24px"}>
          {Products.map((product) => (
            <Grid2 size="auto" key={product.id}>
              <ProductCard product={product} />
            </Grid2>
          ))}
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default ProductListing;
