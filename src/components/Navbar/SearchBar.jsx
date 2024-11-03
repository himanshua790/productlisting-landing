import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import {
  Box,
  Divider,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { FilterContext } from "../../Context/FilterContext";
import CategoryPopover from "../Filter/CategoryPopover";
import Filter from "./Filter";

// Main SearchBar Component
const SearchBar = () => {
  const {
    filter: { keyword, category },
    setFilterKeyword,
    setFilterCategory,
  } = useContext(FilterContext);
  const [activeSection, setActiveSection] = useState("none");
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(
    category.length ? category : ["All"]
  );
  const [selectedParent, setSelectedParent] = useState(null);
  const [localKeyword, setLocalKeyword] = useState("");

  const handleKeywordChange = (event) => {
    const { value } = event.target;
    setLocalKeyword(value);

    if (event.key === "Enter") {
      setFilterKeyword(localKeyword); // Update context keyword on Enter
    }
  };

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
    event.stopPropagation();
    setActiveSection("category");
    setAnchorEl(event?.currentTarget?.parentNode || event.currentTarget); // Set anchor to the parent element
  };

  const handleFilterClose = () => {
    setAnchorEl(null);
    setSelectedParent(null);
    setActiveSection("none");
  };

  // Handle parent hover
  const handleParentHover = (parent) => setSelectedParent(parent);

  // Handle category selection (parent and child)
  const handleCategorySelect = (parentKey, childKey = null) => {
    const selectedLabel = childKey
      ? [
          parentKey,
          categories[parentKey].find((child) => child.key === childKey)?.label,
        ]
      : [parentKey];

    setSelectedCategory(selectedLabel);
    setFilterCategory(selectedLabel); // Update the category filter in context
    handleFilterClose();
  };

  // Submit search
  const handleSearchSubmit = () => {
    setFilterCategory(selectedCategory);
    setFilterKeyword(localKeyword);
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
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
          onClick={() => setActiveSection("search")}
        >
          {activeSection === "search" ? (
            <TextField
              id="keyword-input"
              variant="standard"
              value={localKeyword}
              onChange={handleKeywordChange}
              onBlur={() => setActiveSection("none")}
              onFocus={() => setActiveSection("search")}
              slotProps={{
                input: {
                  disableUnderline: true,
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="clear search"
                        onClick={() => {
                          setLocalKeyword("");
                          setFilterKeyword("");
                        }}
                        edge="end"
                      >
                        {!!localKeyword && (
                          <ClearOutlinedIcon sx={{ color: "white" }} />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
              fullWidth
              autoFocus
            />
          ) : (
            <Box>
              <Typography fontSize={12} fontWeight={700} color="text.secondary">
                Keyword
              </Typography>
              <Typography fontSize={16} fontWeight={400} color="text.secondary">
                {keyword || "Search Abatoon"}
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
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "50%",
            padding: "0px 4px 0px 32px",
            backgroundColor:
              activeSection === "category" ? "#443E3E" : "#2B2828",
            borderRadius: "100px",
          }}
        >
          <Box
            sx={{ cursor: "pointer", width: "100%" }}
            onClick={handleFilterClick}
          >
            <Typography fontSize={12} fontWeight={700} color="text.secondary">
              Category
            </Typography>
            <Typography fontSize={16} fontWeight={400} color="text.secondary">
              {selectedCategory.join(" > ")}
            </Typography>
          </Box>
          <IconButton
            onClick={handleSearchSubmit}
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
          </IconButton>
        </Box>
      </Box>
      <Filter />

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
