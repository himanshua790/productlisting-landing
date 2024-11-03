import React, { useState, useEffect } from "react";
import { Box, Card, CardMedia, CardContent, Typography } from "@mui/material";
import SwipeableViews from "react-swipeable-views";

const trendingReel = [
  { image: "public/reel/sample1.jpg", title: "Trending 1" },
  { image: "public/reel/sample2.jpg", title: "Trending 2" },
  { image: "public/reel/sample3.jpg", title: "Trending 3" },
  { image: "public/reel/sample4.jpg", title: "Trending 4" },
];

const TrendingReel = () => {
  const [currentReelIndex, setCurrentReelIndex] = useState(0);

  useEffect(() => {
    const autoScroll = setInterval(() => {
      setCurrentReelIndex((prevIndex) =>
        prevIndex === trendingReel.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(autoScroll);
  }, []);

  return (
    <Box sx={{ height: "500px", overflow: "hidden", paddingRight: "16px" }}>
      <Typography variant="h6" sx={{ mb: 1 }}>
        Trending Now
      </Typography>
      <SwipeableViews
        index={currentReelIndex}
        onChangeIndex={(index) => setCurrentReelIndex(index)}
        axis="y"
        enableMouseEvents
      >
        {trendingReel.map((item, index) => (
          <Card key={index} sx={{ mb: 2 }}>
            <CardMedia
              component="img"
              image={item.image}
              alt={item.title}
              sx={{ aspectRatio: "9 / 16", width: "100%", height: "auto" }}
            />
            <CardContent>
              <Typography variant="body2">{item.title}</Typography>
            </CardContent>
          </Card>
        ))}
      </SwipeableViews>
    </Box>
  );
};

export default TrendingReel;
