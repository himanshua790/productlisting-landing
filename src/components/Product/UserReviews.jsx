import React from "react";
import { Box, Typography, Divider } from "@mui/material";

const reviews = [
  { user: "John Doe", rating: 5, comment: "Excellent product, highly recommended!" },
  { user: "Jane Smith", rating: 4, comment: "Good value for the price." },
];

const UserReviews = () => {
  return (
    <Box sx={{ padding: "16px" }}>
      <Typography variant="h5" gutterBottom>
        User Reviews
      </Typography>
      {reviews.map((review, index) => (
        <Box key={index} sx={{ mb: 3 }}>
          <Typography variant="subtitle1" fontWeight="bold">
            {review.user} - {review.rating}★
          </Typography>
          <Typography variant="body2" color="textSecondary" gutterBottom>
            {review.comment}
          </Typography>
          {index < reviews.length - 1 && <Divider />}
        </Box>
      ))}
    </Box>
  );
};

export default UserReviews;
