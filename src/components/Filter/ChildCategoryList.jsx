import React from "react";
import PropTypes from "prop-types";
import { List, ListItem, ListItemText } from "@mui/material";

// ChildCategoryList Component
const ChildCategoryList = ({
  selectedParent,
  categories,
  onCategorySelect,
}) => (
  <List sx={{ width: "50%", padding: "0px" }}>
    {selectedParent &&
      categories[selectedParent].map((child) => (
        <ListItem
          button
          key={child.key}
          onClick={() => onCategorySelect(selectedParent, child.key)}
          sx={{
            borderRadius: "100px",
            "&:hover": { backgroundColor: "#655D5E" },
          }}
        >
          <ListItemText primary={child.label} />
        </ListItem>
      ))}
  </List>
);

ChildCategoryList.propTypes = {
  selectedParent: PropTypes.string,
  categories: PropTypes.object.isRequired,
  onCategorySelect: PropTypes.func.isRequired,
};

export default ChildCategoryList;
