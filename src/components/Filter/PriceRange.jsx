import { Box, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { FilterContext } from "../../Context/FilterContext";
import PriceSlider, { ThumbComponent } from "../Slider/PriceSlider";
const minDistance = 10;
const minSliderValue = 10;
const maxSliderValue = 100;

export const PriceRange = () => {
  const { tempPriceRange, setTempPriceRange } = useContext(FilterContext);
  const [value, setValue] = useState([tempPriceRange[0], tempPriceRange[1]]);

  useEffect(() => {
    // Sync local slider state with tempPriceRange from context
    setValue([tempPriceRange[0], tempPriceRange[1]]);
  }, [tempPriceRange]);

  const handleChange = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) return;

    let [minValue, maxValue] = newValue;

    if (maxValue - minValue < minDistance) {
      if (activeThumb === 0) {
        minValue = Math.max(minSliderValue, maxValue - minDistance);
      } else {
        maxValue = Math.min(maxSliderValue, minValue + minDistance);
      }
    }

    setValue([minValue, maxValue]); // Update local slider state
  };

  const handleChangeCommitted = (event, newValue) => {
    // Update temporary range in context only on mouseup
    if (Array.isArray(newValue)) {
      setTempPriceRange(newValue);
    }
  };

  const formatValue = (val) =>
    val === maxSliderValue ? `${val}+` : val.toFixed(2);

  return (
    <Box
      sx={{
        margin: "24px",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
      }}
    >
      <Typography fontSize="18px">Price Range</Typography>
      <PriceSlider
        slots={{ thumb: ThumbComponent }}
        getAriaLabel={(index) =>
          index === 0 ? "Minimum price" : "Maximum price"
        }
        value={value}
        onChange={handleChange} // Handle dragging events
        onChangeCommitted={handleChangeCommitted} // Handle mouseup event
        valueLabelDisplay="auto"
        getAriaValueText={(val) => val.toString()}
        disableSwap
        min={minSliderValue}
        max={maxSliderValue}
      />

      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <Typography variant="caption">Minimum</Typography>
          <Box
            sx={{
              width: "6rem",
              height: "3rem",
              borderRadius: "100px",
              border: "1px solid #515151",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
            }}
          >
            <Typography variant="body2">$</Typography>
            <Typography variant="body2">{formatValue(value[0])}</Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <Typography variant="caption">Maximum</Typography>
          <Box
            sx={{
              width: "6rem",
              height: "3rem",
              borderRadius: "100px",
              border: "1px solid #515151",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
            }}
          >
            <Typography variant="body2">$</Typography>
            <Typography variant="body2">{formatValue(value[1])}</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
