import { Box } from "@mui/material";
import PropTypes from "prop-types";

const Container = (props) => {
  return (
    <Box
      sx={{
        padding: "16px 80px",
        gap: "24px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {props?.children}
    </Box>
  );
};
Container.propTypes = {
  children: PropTypes.node, // Defines children as a valid prop of any renderable content
};
export default Container;
