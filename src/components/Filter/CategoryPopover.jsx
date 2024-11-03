import { Divider, Popover } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import ParentCategoryList from "./ParentCategoryList";
import ChildCategoryList from "./ChildCategoryList";
const CategoryPopover = ({
  anchorEl,
  onClose,
  categories,
  selectedParent,
  onParentHover,
  onCategorySelect,
}) => (
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
          padding: "16px",
          backgroundColor: "#2b2828",
          width: "444px",
          height: "352px",
          borderRadius: "32px",
        },
      },
    }}
  >
    <ParentCategoryList
      categories={categories}
      selectedParent={selectedParent}
      onParentHover={onParentHover}
      onCategorySelect={onCategorySelect}
    />
    <Divider orientation="vertical" flexItem sx={{ backgroundColor: "#515151", fontSize: "14px" }} />
    <ChildCategoryList
      selectedParent={selectedParent}
      categories={categories}
      onCategorySelect={onCategorySelect}
    />
  </Popover>
);

CategoryPopover.propTypes = {
  anchorEl: PropTypes.object,
  onClose: PropTypes.func.isRequired,
  categories: PropTypes.object.isRequired,
  selectedParent: PropTypes.string,
  onParentHover: PropTypes.func.isRequired,
  onCategorySelect: PropTypes.func.isRequired,
};

export default CategoryPopover;
