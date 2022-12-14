import { Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import NavbarPage from "scenes/navbar/navbarPage";
import SpecificPlantProfileWidget from "scenes/widgets/SpecificPlantProfileWidget";

export default function SpecificPlantProfilePage() {
  // const isNonMobileScreens = useMediaQuery("(min-width: 800px");
  const { _id } = useSelector((state) => state.user);

  return (
    <Box>
      <NavbarPage userId={_id} />
      <SpecificPlantProfileWidget userId={_id} />
    </Box>
  );
}
