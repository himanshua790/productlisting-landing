import { AppBar, Stack } from "@mui/material";
import React from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import CartProfileSection from "./CartProfileSection";

export default function Navbar() {
  return (
    <AppBar
      position="static"
      sx={{
        minHeight: "80px",
        justifyContent: "center",
        borderBottom: "2px solid #515151",
        paddingX: "80px",
      }}
    >
      <Stack
        direction={{ xs: "row" }}
        sx={{
          alignItems: "center",
          paddingX: "auto",
          justifyContent: "space-between",
          gap: "100px",
        }}
      >
        <Logo />
        <SearchBar />
        <CartProfileSection />
      </Stack>
    </AppBar>
  );
}
