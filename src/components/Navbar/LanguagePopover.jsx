import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Popper,
} from "@mui/material";
import PropTypes from "prop-types";
import React from "react";

const LanguagePopover = ({
  anchorEl,
  open,
  onClose,
  selectedLanguage,
  onSelectLanguage,
}) => {
  const languages = [
    { label: "English (US)", iconSrc: "/icons/flags/us.png" },
    { label: "Japanese", iconSrc: "/icons/flags/japan.png" },
  ];

  return (
    <Popper
      open={open}
      anchorEl={anchorEl}
      placement="bottom-end"
      disablePortal={true}
      modifiers={[
        {
          name: "flip",
          enabled: true,
          options: {
            altBoundary: true,
            rootBoundary: "document",
          },
        },
        {
          name: "preventOverflow",
          enabled: true,
          options: {
            altAxis: true,
            altBoundary: true,
            tether: true,
            rootBoundary: "document",
          },
        },
        {
          name: "offset",
          options: {
            offset: [22, 20],
          },
        },
      ]}
      sx={{
        width: "203px",
        borderRadius: "8px",
        backgroundColor: "#2B2828",
        zIndex: 1,
      }}
    >
      <ArrowDropUpIcon
        sx={{
          color: "#2B2828",
          position: "absolute",
          top: -18,
          right: 16,
          fontSize: "2rem",
        }}
      />

      <List sx={{ padding: "6px" }}>
        {languages.map((language) => (
          <ListItemButton
            key={language.label}
            onClick={() => {
              onSelectLanguage(language.label);
              onClose();
            }}
            selected={language.label === selectedLanguage}
            sx={{
              minHeight: "32px",
              py: 0,
              gap: "8px",
              color: "rgba(255,255,255,.8)",
              backgroundColor:
                language.label === selectedLanguage ? "#443e3e" : "transparent",
              "&:hover": { backgroundColor: "#443e3e" },
              borderRadius: "6px",
            }}
          >
            <ListItemIcon sx={{ minWidth: "auto", mr: 1 }}>
              <Box
                component="img"
                src={language.iconSrc}
                alt={`${language.label} flag`}
                sx={{
                  width: "16.8px",
                  height: "12px",
                }}
              />
            </ListItemIcon>
            <ListItemText
              primary={language.label}
              primaryTypographyProps={{
                fontSize: 14,
                fontWeight: "medium",
                color: "inherit",
              }}
            />
          </ListItemButton>
        ))}
      </List>
    </Popper>
  );
};

LanguagePopover.propTypes = {
  anchorEl: PropTypes.object,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  selectedLanguage: PropTypes.string.isRequired,
  onSelectLanguage: PropTypes.func.isRequired,
};

export default LanguagePopover;
