import { useTheme } from "@emotion/react";
import { Add } from "@mui/icons-material";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import NavbarPage from "scenes/navbar/navbarPage";
import PlantProfilesWidget from "scenes/widgets/PlantProfilesWidget";
import UserWidget from "scenes/widgets/UserWidget";

export default function PlantProfilesPage() {
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px");
  const navigate = useNavigate();
  const { _id, picturePath } = useSelector((state) => state.user);
  const theme = useTheme();
  const secondaryMain = theme.palette.secondary.main;

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
        </Box>
        <Box
          flexBasis={isNonMobileScreens ? "70%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
          {isNonMobileScreens ? (
            <FlexBetween className="add-new--container">
              <Typography
                className="pp-list--title"
                fontWeight="bold"
                fontSize="2.5rem"
                sx={{
                  color: secondaryMain,
                }}
              >
                Your Plant Profiles
              </Typography>
              <Button
                startIcon={<Add />}
                sx={{
                  border: "2px solid black",
                  backgroundColor: { secondaryMain },
                  color: { secondaryMain },
                }}
                onClick={() => navigate("/plant-profiles/create")}
              >
                CREATE NEW PLANT PROFILE
              </Button>
            </FlexBetween>
          ) : (
            <Box
              className="add-new--container"
              display="flex"
              flexDirection="column"
              gap="1rem"
            >
              <Typography
                className="pp-list--title"
                fontWeight="bold"
                fontSize="1.5rem"
                sx={{
                  color: secondaryMain,
                }}
              >
                Your Plant Profiles
              </Typography>
              <Button
                startIcon={<Add />}
                sx={{
                  border: "2px solid black",
                  backgroundColor: { secondaryMain },
                  color: { secondaryMain },
                }}
                onClick={() => navigate("/plant-profiles/create")}
              >
                CREATE NEW PLANT PROFILE
              </Button>
            </Box>
          )}

          <PlantProfilesWidget userId={_id} />
        </Box>
      </Box>
    </Box>
  );
}
