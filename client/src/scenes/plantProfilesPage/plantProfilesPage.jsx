import { Box, Button } from "@mui/material";
import PlantProfileCard from "components/PlantProfileCard";
import React from "react";
import { useNavigate } from "react-router";
import NavbarPage from "scenes/navbar/navbarPage";

export default function PlantProfilesPage() {
  // const isNonMobileScreens = useMediaQuery("(min-width: 800px");
  const navigate = useNavigate();

  return (
    <Box>
      <NavbarPage />
      <Button onClick={() => navigate("/plant-profiles/create")}>
        CREATE NEW PLANT PROFILE
      </Button>
      <PlantProfileCard />
    </Box>
  );
}
