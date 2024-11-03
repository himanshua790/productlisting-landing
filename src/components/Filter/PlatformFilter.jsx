import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import { FilterContext } from "../../Context/FilterContext";

const platforms = [
  { name: "Chillout VR", imgSrc: "/icons/platforms/chillout_vr.png" },
  { name: "Cluster", imgSrc: "/icons/platforms/cluster.png" },
  { name: "NoseVR", imgSrc: "/icons/platforms/nosevr.png" },
  { name: "Resonite", imgSrc: "/icons/platforms/resonite.png" },
  { name: "Spatial", imgSrc: "/icons/platforms/spatial.png" },
  { name: "Virtual Cast", imgSrc: "/icons/platforms/virtual_cast.png" },
  { name: "VRChat (PCVR)", imgSrc: "/icons/platforms/vrchat_blue.png" },
  { name: "VRChat (Quest)", imgSrc: "/icons/platforms/vrchat_green.png" },
  { name: "Other" }, // Other option
];

const PlatformFilter = () => {
  const { tempPlatform, setTempPlatform } = useContext(FilterContext);

  const handleToggle = (platformName) => {
    setTempPlatform((prevPlatforms) =>
      prevPlatforms.includes(platformName)
        ? prevPlatforms.filter((item) => item !== platformName)
        : [...prevPlatforms, platformName]
    );
  };

  return (
    <Box
      sx={{
        margin: "24px",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
      }}
    >
      <Typography fontSize="18px">Platforms</Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "16px",
          width: "392px",
        }}
      >
        {platforms.map((platform, index) => (
          <Box
            key={index}
            onClick={() => handleToggle(platform.name)}
            sx={{
              width: "120px",
              height: "70px",
              padding: "18px 10px 12px",
              borderRadius: "8px",
              border: "1px solid #515151",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "flex-start",
              gap: "2px",
              opacity: tempPlatform.includes(platform.name) ? 1 : 0.5, // Highlight if selected
              cursor: "pointer",
            }}
          >
            {platform.imgSrc && (
              <img
                src={platform.imgSrc}
                alt={platform.name}
                style={{ height: "24px", width: "auto" }}
              />
            )}
            <Typography
              variant="caption"
              sx={{ textAlign: "left", width: "100%" }}
            >
              {platform.name}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default PlatformFilter;
