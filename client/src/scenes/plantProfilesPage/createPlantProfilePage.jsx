import { Box } from "@mui/material";
import React from "react";
import NavbarPage from "scenes/navbar/navbarPage";
import PlantProfileForm from "./plantProfileForm";

export default function CreatePlantProfilePage() {
  // const isNonMobileScreens = useMediaQuery("(min-width: 800px");

  return (
    <Box>
      <NavbarPage />
      <PlantProfileForm pageType={"create"} />
    </Box>
  );
}
