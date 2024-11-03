import React from "react";
import { Card, CardMedia, Typography, Box, Button } from "@mui/material";

const ProductOverview = () => {
  return (
    <Card sx={{ maxWidth: "500px", mx: "auto" }}>
      <CardMedia
        component="img"
        image="public/reel/sample1.jpg"
        alt="Product Image"
        sx={{ aspectRatio: "9/16", height: "auto", width: "100%" }}
      />
      <Box sx={{ padding: "16px" }}>
        <Typography variant="h5" gutterBottom>
          Product Name
        </Typography>
        <Typography variant="h6">Price: $299.99</Typography>
        <Typography variant="subtitle2" color="textSecondary" gutterBottom>
          Created by: Creator Name
        </Typography>
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Add to Cart
        </Button>
      </Box>
    </Card>
  );
};

export default ProductOverview;
