import React from "react";
import { Box, Typography } from "@mui/material";

const ProductDescription = () => {
  return (
    <Box sx={{ padding: "16px" }}>
      <Typography variant="h4" gutterBottom>
        Product Description
      </Typography>
      <Typography variant="body1" paragraph>
        This is a comprehensive description of the product, detailing its features, benefits, and specifications.
      </Typography>
      <Typography variant="body1" paragraph>
        - Feature 1
      </Typography>
      <Typography variant="body1" paragraph>
        - Feature 2
      </Typography>
    </Box>
  );
};

export default ProductDescription;
