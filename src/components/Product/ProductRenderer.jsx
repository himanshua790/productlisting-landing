// ProductImage.jsx
import React from "react";
import { Card, CardMedia } from "@mui/material";

const ProductImage = () => {
  return (
    <Card sx={{ maxHeight: "500px" }}>
      <CardMedia
        component="img"
        image="public/reel/sample1.jpg"
        alt="Product Image"
        sx={{ width: "100%", height: "auto", aspectRatio: "9 / 16" }}
      />
    </Card>
  );
};

export default ProductImage;
