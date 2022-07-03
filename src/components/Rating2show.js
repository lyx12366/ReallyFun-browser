import * as React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

export default function Rating2show({ value }) {
  return (
    <Stack spacing={0}>
      <Rating name="half-rating-read" value={value} precision={0.1} size="small" readOnly />
    </Stack>
  );
}
