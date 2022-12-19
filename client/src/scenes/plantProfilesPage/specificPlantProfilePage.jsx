import { Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import NavbarPage from "scenes/navbar/navbarPage";
import SpecificPlantProfileWidget from "scenes/widgets/SpecificPlantProfileWidget";

export default function SpecificPlantProfilePage() {
  const { _id } = useSelector((state) => state.user);

  return (
    <Box>
      <NavbarPage userId={_id} />
      {/* <PreviousPlantProfileWidget /> */}
      <SpecificPlantProfileWidget userId={_id} />
    </Box>
  );
}
