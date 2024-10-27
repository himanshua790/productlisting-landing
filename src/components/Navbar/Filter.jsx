import { Box } from "@mui/material";
import React from "react";

const Filter = () => {
  return (
    <Box
      sx={{
        borderRadius: "1000px", // Applied as per the original code
        border: "2px solid white",
        width: "40px",
        height: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        padding: "8px",
        gap: "10px",
      }}
    >
      <img src="/icons/adjustments.png" alt="Filter Icon" />
    </Box>
  );
};

export default Filter;
