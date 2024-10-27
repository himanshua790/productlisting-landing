import { Rating, Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import ProductImage from "./ProductImage";

const ProductCard = ({ product }) => {
  return (
    <Stack rowGap={"8px"}>
      <ProductImage
        src={product.img}
        alt={product.imgAlt}
        fallbackText={`${product.category} > ${product.subCategory}`}
      />
      <Stack direction={"column"}>
        <Typography fontSize={14} fontWeight={700}>
          {product.name}
        </Typography>
        <Typography fontSize={14} fontWeight={400} color={"#B3B3B3"}>
          {product.creatorName}
        </Typography>
        <Stack direction={"row"} spacing={"4px"}>
          <Rating
            value={product.rating}
            precision={0.5}
            readOnly
            sx={{ color: "white" }}
            size="small"
          />{" "}
          <Typography variant="body2">{product.rating}</Typography>
        </Stack>
        <Typography fontSize={14} fontWeight={700}>
          {product.pricingCurrency} {product.pricing.toFixed(2)}
        </Typography>
      </Stack>
    </Stack>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    img: PropTypes.string,
    imgAlt: PropTypes.string,
    category: PropTypes.string.isRequired,
    subCategory: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    creatorName: PropTypes.string.isRequired,
    rating: PropTypes.number,
    pricing: PropTypes.number.isRequired,
    pricingCurrency: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
