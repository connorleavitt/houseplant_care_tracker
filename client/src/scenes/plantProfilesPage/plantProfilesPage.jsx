import { Add } from "@mui/icons-material";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import NavbarPage from "scenes/navbar/navbarPage";
import PlantProfilesWidget from "scenes/widgets/PlantProfilesWidget";
import UserListWidget from "scenes/widgets/UserListWidget";
import UserWidget from "scenes/widgets/UserWidget";

export default function PlantProfilesPage() {
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px");
  const navigate = useNavigate();
  const { _id, picturePath } = useSelector((state) => state.user);

  return (
    <Box>
      <NavbarPage userId={_id} />

      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Box flexBasis={isNonMobileScreens ? "25%" : undefined}>
          <UserWidget userId={_id} picturePath={picturePath} />
          <UserListWidget />
        </Box>
        <Box
          flexBasis={isNonMobileScreens ? "70%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
          <FlexBetween className="add-new--container">
            <h3 className="pp-list--title">Your Plant Profiles</h3>
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
          </FlexBetween>
          <PlantProfilesWidget userId={_id} />
        </Box>
      </Box>
    </Box>
  );
}
