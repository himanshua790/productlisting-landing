import {
  Divider,
  Popover,
  Stack,
  Typography
} from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
const ProfilePopover = ({ anchorEl, onClose }) => (
  <Popover
    anchorEl={anchorEl}
    open={Boolean(anchorEl)}
    onClose={onClose}
    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    transformOrigin={{
      vertical: -10,
      horizontal: "right",
    }}
    slotProps={{
      paper: {
        sx: {
          display: "flex",
          padding: "10px 8px",
          backgroundColor: "#2b2828",
          width: "220px",
          height: "184px",
          borderRadius: "12px",
        },
      },
    }}
  >
    <Stack sx={{ width: "100%", padding: "0px", fontSize: "14px" }}>
      <Typography sx={{ fontSize: "14px", margin: "8px 0px" }} variant="body2">
        Sign in
      </Typography>
      <Typography sx={{ fontSize: "14px",  margin: "8px 0px" }} variant="body2">
        Sign up
      </Typography>

      <Divider
        orientation="horizontal"
        flexItem
        sx={{ marginTop: "4px", backgroundColor: "#515151", fontSize: "14px" }}
      />
      <Typography sx={{ fontSize: "14px",  margin: "8px 0px" }} variant="body2">
        List your item
      </Typography>
      <Typography sx={{ fontSize: "14px",  margin: "8px 0px" }} variant="body2">
        Message to Yuta(The founder)
      </Typography>
    </Stack>
  </Popover>
);

ProfilePopover.propTypes = {
  anchorEl: PropTypes.object,
  onClose: PropTypes.func.isRequired,
};

export default ProfilePopover;
