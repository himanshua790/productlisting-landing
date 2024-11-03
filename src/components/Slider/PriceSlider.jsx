import { Slider, SliderThumb, styled } from "@mui/material";

export function ThumbComponent(props) {
  // eslint-disable-next-line react/prop-types
  const { children, ...other } = props;
  return <SliderThumb {...other}>{children}</SliderThumb>;
}

const PriceSlider = styled(Slider)(({ theme }) => ({
  color: "#CA323D",
  height: 2,
  padding: "13px 0",
  "& .MuiSlider-thumb": {
    height: 32,
    width: 32,
    backgroundColor: "#fff",
    border: "1px solid red",
    "&:hover": {
      boxShadow: "0 0 0 8px rgba(58, 133, 137, 0.16)",
    },
    "& .airbnb-bar": {
      height: 9,
      width: 1,
      backgroundColor: "currentColor",
      marginLeft: 1,
      marginRight: 1,
    },
  },
  "& .MuiSlider-track": {
    height: 3,
  },
  "& .MuiSlider-rail": {
    color: "#d8d8d8",
    opacity: 1,
    height: 3,
    ...theme.applyStyles("dark", {
      color: "#bfbfbf",
      opacity: undefined,
    }),
  },
}));
export default PriceSlider;
