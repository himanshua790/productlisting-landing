import React, { useState } from "react";
import PropTypes from "prop-types";

const ProductImage = ({
  src,
  fallbackText,
  alt = "Product image",
  ...props
}) => {
  const [imgError, setImgError] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "237.3px",
        height: "237.3px",
        backgroundColor: "#443E3E",
        borderRadius: "12px",
      }}
    >
      {imgError || !src ? (
        <div style={{ color: "#aaa", fontSize: "16px", textAlign: "center" }}>
          {fallbackText || "Image not available"}
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          onError={() => setImgError(true)}
          style={{ maxWidth: "100%", maxHeight: "100%" }}
          {...props}
        />
      )}
    </div>
  );
};

ProductImage.propTypes = {
  src: PropTypes.string,
  fallbackText: PropTypes.string,
  alt: PropTypes.string,
};

export default ProductImage;
