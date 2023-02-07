import { useTheme } from "@emotion/react";
import { Box, useMediaQuery } from "@mui/material";
import React from "react";

export default function WateringPage() {
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  console.log(isNonMobileScreens);

  return (
    <Box>
      <Box>BLAH</Box>
    </Box>
  );
}
