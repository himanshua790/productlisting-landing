import React from "react";
import { Box, Grid2, Typography } from "@mui/material";
import ProductOverview from "./ProductOverview";
import ProductDescription from "./ProductDescription";
import TrendingReel from "./TrendingReel";
import UserReviews from "./UserReviews";

const ProductPage = () => {
  return (
    <Box sx={{ width: "100%", padding: "16px", overflow: "hidden" }}>
      <Typography variant="h4">Home &gt;Product Name</Typography>
      <Grid2 container spacing={2}>
        <Grid2 size={4}>
          <ProductOverview />
        </Grid2>
        <Grid2 size={4}>
          <ProductDescription />
        </Grid2>
        <Grid2 size={4}>
          <TrendingReel />
        </Grid2>
      </Grid2>
      <Box sx={{ marginTop: "32px" }}>
        <UserReviews />
      </Box>
    </Box>
  );
};

export default ProductPage;
