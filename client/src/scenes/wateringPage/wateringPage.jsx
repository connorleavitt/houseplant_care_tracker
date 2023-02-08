import { useTheme } from "@emotion/react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import WateringDayButton from "components/WateringDayButton";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import NavbarPage from "scenes/navbar/navbarPage";
import UserWidget from "scenes/widgets/UserWidget";
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
        <Box p="2rem" backgroundColor="gray" display="flex">
          <Box display="flex">hfhf</Box>
          <Box mt={isNonMobileScreens ? undefined : "2rem"} display="flex">
            <WateringDayButton day={1} />
            <WateringDayButton day={2} />
            <WateringDayButton day={3} />
            <WateringDayButton day={4} />
            <WateringDayButton day={5} />
            <WateringDayButton day={6} />
            <WateringDayButton day={7} />
            <WateringDayButton day={8} />
            <WateringDayButton day={9} />
            <WateringDayButton day={10} />
            <WateringDayButton day={11} />
            <WateringDayButton day={12} />
            <WateringDayButton day={13} />
            <WateringDayButton day={14} />
            <WateringDayButton day={15} />
            <WateringDayButton day={16} />
            <WateringDayButton day={17} />
            <WateringDayButton day={18} />
            <WateringDayButton day={19} />
            <WateringDayButton day={20} />
            <WateringDayButton day={21} />
            <WateringDayButton day={22} />
            <WateringDayButton day={23} />
            <WateringDayButton day={24} />
            <WateringDayButton day={25} />
            <WateringDayButton day={26} />
            <WateringDayButton day={27} />
            <WateringDayButton day={28} />
            <WateringDayButton day={29} />
            <WateringDayButton day={30} />
            <WateringDayButton day={31} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
