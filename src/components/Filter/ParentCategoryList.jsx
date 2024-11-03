import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import { IconButton, List, ListItem, ListItemText } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";

const ParentCategoryList = ({
  categories,
  selectedParent,
  onParentHover,
  onCategorySelect,
}) => (
  <List sx={{ width: "50%", padding: "0px" }}>
    {Object.keys(categories).map((parent) => (
      <ListItem
        button="true"
        key={parent}
        onClick={() => onCategorySelect(parent)}
        onMouseEnter={() => onParentHover(parent)}
        selected={selectedParent === parent}
        sx={{
          borderRadius: "100px",
          "&:hover": { backgroundColor: "#655D5E" },
        }}
      >
        <ListItemText primary={parent} />
        {parent !== "All" && (
          <IconButton size="small">
            <ChevronRightOutlinedIcon
              fontSize="small"
              sx={{ color: "#F1F1F1" }}
            />
          </IconButton>
        )}
      </ListItem>
    ))}
  </List>
);
ParentCategoryList.propTypes = {
  categories: PropTypes.object.isRequired,
  selectedParent: PropTypes.string,
  onParentHover: PropTypes.func.isRequired,
  onCategorySelect: PropTypes.func.isRequired,
};
export default ParentCategoryList;
