import { Box } from "@mui/material";
import React from "react";
import NavbarPage from "scenes/navbar/navbarPage";
import PlantProfileForm from "./plantProfileForm";

export default function UpdatePlantProfilePage() {
  return (
    <Box>
      <NavbarPage />
      <PlantProfileForm pageType={"edit"} />
    </Box>
  );
}
