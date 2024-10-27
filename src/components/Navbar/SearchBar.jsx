import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { Box, Divider, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import CategoryPopover from "../Filter/CategoryPopover";

// Main SearchBar Component
const SearchBar = () => {
  const [activeSection, setActiveSection] = useState("none");
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedParent, setSelectedParent] = useState(null);

  // Categories data
  const categories = {
    Avatars: [
      { key: "human_like", label: "Human-like" },
      { key: "anthro_furry", label: "Anthro & Furry" },
      { key: "robot_cyborgs", label: "Robot & Cyborgs" },
      { key: "others_avatars", label: "Others" },
      { key: "all_avatars", label: "All in Avatars" },
    ],
    Fashion: [
      { key: "clothes", label: "Clothes" },
      { key: "accessories", label: "Accessories" },
      { key: "others_fashion", label: "Others" },
      { key: "all_fashion", label: "All in Fashion" },
    ],
    All: [],
  };

  // Open and close popover
  const handleFilterClick = (event) => {
    setActiveSection("category");
    setAnchorEl(event.currentTarget);
  };

  const handleFilterClose = () => {
    setAnchorEl(null);
    setSelectedParent(null);
    setActiveSection("none");
  };

  const handleSearchFocus = () => setActiveSection("search");
  const handleSearchBlur = () => setActiveSection("none");

  const handleParentHover = (parent) => setSelectedParent(parent);

  const handleCategorySelect = (parentKey, childKey = null) => {
    let selectedLabel;

    if (childKey) {
      if (childKey.includes("all_")) {
        selectedLabel = parentKey;
      } else {
        const childLabel = categories[parentKey].find(
          (child) => child.key === childKey
        )?.label;
        selectedLabel = `${childLabel}`;
      }
    } else {
      selectedLabel = parentKey;
    }

    setSelectedCategory(selectedLabel);
    handleFilterClose();
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      {/* Search Box */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#2B2828",
          borderRadius: "100px",
          width: "529px",
          minHeight: "48px",
        }}
      >
        {/* Search Input Field */}
        <Box
          onClick={handleSearchFocus}
          sx={{
            paddingX: "32px",
            backgroundColor: activeSection === "search" ? "#443E3E" : "#2B2828",
            borderRadius: "100px",
            height: "48px",
            display: "flex",
            alignItems: "center",
            width: "50%",
            cursor: "pointer",
          }}
        >
          {activeSection === "search" ? (
            <TextField
              id="keyword-input"
              variant="standard"
              slotProps={{
                input: {
                  disableUnderline: true,
                },
              }}
              fullWidth
              onBlur={handleSearchBlur}
              autoFocus
            />
          ) : (
            <Box>
              <Typography fontSize={12} fontWeight={700} color="text.secondary">
                Keyword
              </Typography>
              <Typography fontSize={16} fontWeight={400} color="text.secondary">
                Search Adatoon
              </Typography>
            </Box>
          )}
        </Box>

        {/* Divider */}
        {activeSection === "none" && (
          <Divider
            orientation="vertical"
            variant="middle"
            flexItem
            sx={{ bgcolor: "grey.600", height: "32px" }}
          />
        )}

        {/* Filter Button */}
        <Box
          onClick={handleFilterClick}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "50%",
            padding: "0px 4px 0px 32px",
            backgroundColor:
              activeSection === "category" ? "#443E3E" : "#2B2828",
            borderRadius: "100px",
            cursor: "pointer",
          }}
        >
          <Box>
            <Typography fontSize={12} fontWeight={700} color="text.secondary">
              Category
            </Typography>
            <Typography fontSize={16} fontWeight={400} color="text.secondary">
              {selectedCategory}
            </Typography>
          </Box>
          <Box
            sx={{
              borderRadius: "100px",
              backgroundColor: "#CA323D",
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <SearchRoundedIcon sx={{ color: "white" }} />
          </Box>
        </Box>
      </Box>

      {/* Category Popover */}
      <CategoryPopover
        anchorEl={anchorEl}
        categories={categories}
        selectedParent={selectedParent}
        onClose={handleFilterClose}
        onParentHover={handleParentHover}
        onCategorySelect={handleCategorySelect}
      />
    </Box>
  );
};

export default SearchBar;

// CategoryPopover Component

// ParentCategoryList Component
