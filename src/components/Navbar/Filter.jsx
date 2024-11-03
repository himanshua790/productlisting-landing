import { Box, Divider, Popover, Typography, Button } from "@mui/material";
import React, { useContext, useState } from "react";
import { PriceRange } from "../Filter/PriceRange";
import CloseIcon from "@mui/icons-material/Close";
import PlatformFilter from "../Filter/PlatformFilter";
import { FilterContext } from "../../Context/FilterContext";

const Filter = () => {
  const {
    applyFilters,
    clearFilters,
    setTempPriceRange,
    setTempPlatform,
    tempPriceRange,
    tempPlatform,
  } = useContext(FilterContext);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleFilterClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleFilterClose = () => {
    setAnchorEl(null);
  };

  const handleApplyFilters = () => {
    applyFilters();
    handleFilterClose();
  };

  return (
    <>
      <Box
        onClick={handleFilterClick}
        sx={{
          borderRadius: "1000px",
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
      <Popover
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleFilterClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: -10, horizontal: "right" }}
        slotProps={{
          paper: {
            sx: {
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#2b2828",
              height: "45rem",
              width: "35rem",
              borderRadius: "12px",
            },
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            minHeight: "64px",
            padding: "20px",
          }}
        >
          <CloseIcon
            sx={{ cursor: "pointer" }}
            fontSize="medium"
            onClick={handleFilterClose}
          />
          <Typography
            variant="body1"
            fontWeight={700}
            sx={{ width: "100%", textAlign: "center" }}
          >
            Filter
          </Typography>
        </Box>
        <Divider variant="fullWidth" sx={{ borderColor: "#515151" }} />

        {/* PriceRange component with temporary price range state */}
        <PriceRange
          tempPriceRange={tempPriceRange}
          setTempPriceRange={setTempPriceRange}
        />

        <Divider variant="middle" sx={{ borderColor: "#515151" }} />

        {/* PlatformFilter component with temporary platform state */}
        <PlatformFilter
          tempPlatform={tempPlatform}
          setTempPlatform={setTempPlatform}
        />
        <Divider variant="fullWidth" sx={{ borderColor: "#515151" }} />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "16px 24px",
          }}
        >
          <Button
            variant="text"
            onClick={clearFilters}
            sx={{
              textShadow: `
      1px 1px 0px #000,   
      -1px -1px 0px #000, 
      1px -1px 0px #000,  
      -1px 1px 0px #000   
    `,
            }}
          >
            Clear All
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleApplyFilters}
            sx={{
              width: "181px", // Fixed width
              height: "48px", // Fixed height
            }}
          >
            Apply
          </Button>
        </Box>
      </Popover>
    </>
  );
};

export default Filter;
