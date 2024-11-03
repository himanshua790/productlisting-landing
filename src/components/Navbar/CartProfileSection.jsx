import React, { useState } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LanguagePopover from "./LanguagePopover";
import ProfilePopover from "./ProfilePopover";

const CartProfileSection = () => {
  // State for Language Popover
  const [languageAnchorEl, setLanguageAnchorEl] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState("English (US)");

  // State for Profile Popover
  const [profileAnchorEl, setProfileAnchorEl] = useState(null);

  // Handlers for Language Popover
  const handleLanguageClick = (event) => {
    setLanguageAnchorEl(languageAnchorEl ? null : event.currentTarget);
  };

  const handleLanguageClose = () => {
    setLanguageAnchorEl(null);
  };

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
  };

  // Handlers for Profile Popover
  const handleProfileClick = (event) => {
    setProfileAnchorEl(profileAnchorEl ? null : event.currentTarget);
  };

  const handleProfileClose = () => {
    setProfileAnchorEl(null);
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <Stack
        direction={{ xs: "row" }}
        spacing={{ xs: 0 }}
        sx={{
          alignItems: "center",
          gap: "24px",
        }}
      >
        <Typography
          sx={{
            color: "white",
            fontSize: "14px",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            flexShrink: 0,
          }}
        >
          List your creation
        </Typography>

        {/* Language Icon with Popover */}
        <LanguageIcon
          sx={{ color: "white", fontSize: "18px", cursor: "pointer" }}
          onClick={handleLanguageClick}
        />
        <LanguagePopover
          anchorEl={languageAnchorEl}
          open={Boolean(languageAnchorEl)}
          onClose={handleLanguageClose}
          selectedLanguage={selectedLanguage}
          onSelectLanguage={handleLanguageSelect}
        />

        {/* Profile Button with Popover */}
        <Button
          sx={{
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "2px solid white",
            borderRadius: "1000px",
            minWidth: "78px",
            minHeight: "48px",
            padding: "8px 16px",
            gap: "8px",
            flexShrink: 0,
          }}
          onClick={handleProfileClick}
        >
          <MenuIcon fontSize="small" sx={{ flexShrink: 0 }} />
          <AccountCircleRoundedIcon sx={{ fontSize: "32px", flexShrink: 0 }} />
        </Button>

        <ProfilePopover
          anchorEl={profileAnchorEl}
          onClose={handleProfileClose}
        />

        {/* Cart Button */}
        <Box
          sx={{
            borderRadius: "1000px",
            border: "2px solid white",
            minWidth: "48px",
            minHeight: "48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            color: "white",
            flexShrink: 0,
          }}
          onClick={() => console.log("Cart Clicked")}
        >
          <ShoppingCartOutlinedIcon />
        </Box>
      </Stack>
    </Box>
  );
};

export default CartProfileSection;
