import { Box, Button } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import NavbarPage from "scenes/navbar/navbarPage";
import SpecificPlantProfileWidget from "scenes/widgets/SpecificPlantProfileWidget";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { fontWeight } from "@mui/system";

export default function SpecificPlantProfilePage() {
  // const isNonMobileScreens = useMediaQuery("(min-width: 800px");
  const { _id } = useSelector((state) => state.user);

  return (
    <Box>
      <NavbarPage userId={_id} />
      <Box
        display="flex"
        justifyContent="center"
        width="100%"
        mt="2rem"
        gap="2rem"
      >
        <Button sx={{ fontSize: "1.5rem" }}>
          <ArrowBackIcon sx={{ fontSize: "1.75rem" }} />
          Previous
        </Button>
        <Button sx={{ fontSize: "1.5rem" }}>
          Next
          <ArrowForwardIcon sx={{ fontSize: "1.75rem" }} />
        </Button>
      </Box>
      <SpecificPlantProfileWidget userId={_id} />
    </Box>
  );
}
