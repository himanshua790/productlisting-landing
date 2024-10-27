import { Box } from "@mui/material";
import React from "react";
import Filter from "./Filter";

const SearchBar = () => {
  /**
   * * Widt h Fill (689px) Height Hug (48px) Radiu s 100px Ga p 10px
   */
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#2B2828",
          gap: "10px",
          borderRadius: "100px",
          width: "529px",
          minHeight: "48px",
        }}
      >
        {/* Search */}
      </Box>
      <Filter />
    </Box>
  );
};

export default SearchBar;
