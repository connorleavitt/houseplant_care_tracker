import { Add } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import NavbarPage from "scenes/navbar/navbarPage";
import PlantProfilesWidget from "scenes/widgets/PlantProfilesWidget";

export default function PlantProfilesPage() {
  // const isNonMobileScreens = useMediaQuery("(min-width: 800px");
  const navigate = useNavigate();
  const { _id } = useSelector((state) => state.user);

  return (
    <Box>
      <NavbarPage userId={_id} />
      <Typography>See your plant profiles!</Typography>
      <Box className="add-new--container">
        <Button
          startIcon={<Add />}
          sx={{
            border: "2px solid black",
            backgroundColor: "#eea144",
            color: "#303030",
          }}
          onClick={() => navigate("/plant-profiles/create")}
        >
          CREATE NEW PLANT PROFILE
        </Button>
      </Box>
      <PlantProfilesWidget userId={_id} />
    </Box>
  );
}
