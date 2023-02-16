import { useTheme } from "@emotion/react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import WateringDayButton from "components/WateringDayButton";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import NavbarPage from "scenes/navbar/navbarPage";
import UserWidget from "scenes/widgets/UserWidget";
import WateringPlantInfoWidget from "scenes/widgets/WateringPlantInfoWidget";
import WateringWidget from "scenes/widgets/WateringWidget";

export default function WateringPage() {
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const navigate = useNavigate();
  const { _id, picturePath } = useSelector((state) => state.user);
  const theme = useTheme();
  const primaryMain = theme.palette.primary.main;
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
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography
            className="pp-list--title"
            fontWeight="bold"
            fontSize="3rem"
            textAlign="center"
            sx={{
              color: primaryMain,
            }}
          >
            Watering Schedule
          </Typography>
        </Box>
      </Box>
      <Box m="5rem" border="5px solid red">
        <Box
          p="2rem"
          backgroundColor="gray"
          display="flex"
          flexDirection="column"
        >
          <WateringWidget userId={_id} />
        </Box>
      </Box>
    </Box>
  );
}
