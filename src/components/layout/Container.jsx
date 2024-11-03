import { Box } from "@mui/material";
import PropTypes from "prop-types";

const Container = (props) => {
  return (
    <Box
      sx={{
        margin: "16px auto",
        gap: "24px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
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
