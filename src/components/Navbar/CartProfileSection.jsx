import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const CartProfileSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
      }}
    >
      <Stack
        direction={{ xs: "row" }}
        spacing={{ xs: 0 }}
        sx={{
          alignItems: "center",
          gap: "24px",
        }}
      >
        <Typography sx={{ color: "white", fontSize: "14px" }}>
          List your creation
        </Typography>
        <LanguageIcon
          sx={{ color: "white", fontSize: "18px" }}
          onClick={() => console.log("Language Clicked")}
        />
        <Button
          sx={{
            color: "white",
            display: "flex",
            alignItems: "center",
            border: "2px solid white",
            borderRadius: "1000px",
            width: "78px",
            height: "48px",
            padding: "8px ",
            gap: "10px",
          }}
          onClick={() => console.log("Profile menu clicked")}
        >
          <MenuIcon fontSize="small" />
          <AccountCircleRoundedIcon
            sx={{
              fontSize: "32px",
            }}
          />
        </Button>

        <Box
          sx={{
            borderRadius: "1000px", // Applied as per the original code
            border: "2px solid white",
            width: "48px",
            height: "48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            color: "white",
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
