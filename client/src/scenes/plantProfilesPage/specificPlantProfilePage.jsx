import { Box, Button, useMediaQuery } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import NavbarPage from "scenes/navbar/navbarPage";
import SpecificPlantProfileWidget from "scenes/widgets/SpecificPlantProfileWidget";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function SpecificPlantProfilePage() {
  const isNonMobileScreens = useMediaQuery("(min-width: 800px");
  const { _id } = useSelector((state) => state.user);

  return (
    <Box>
      <NavbarPage userId={_id} />
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        width="100%"
        // gap="2rem"
      >
        {isNonMobileScreens ? (
          <>
            <Box
              display="flex"
              justifyContent="center"
              width="50%"
              mt="2rem"
              gap="2rem"
            >
              <Button className="spp--change-btns" sx={{ fontSize: "1.25rem" }}>
                <ArrowBackIcon sx={{ fontSize: "1.5rem" }} />
                Previous
              </Button>
              <Button className="spp--change-btns" sx={{ fontSize: "1.25rem" }}>
                Next
                <ArrowForwardIcon sx={{ fontSize: "1.5rem" }} />
              </Button>
            </Box>
            <SpecificPlantProfileWidget userId={_id} />
          </>
        ) : (
          <>
            <Box
              display="flex"
              justifyContent="center"
              width="100%"
              mt="2rem"
              gap="2rem"
            >
              <Button className="spp--change-btns" sx={{ fontSize: "1.25rem" }}>
                <ArrowBackIcon sx={{ fontSize: "1.5rem" }} />
                Previous
              </Button>
              <Button className="spp--change-btns" sx={{ fontSize: "1.25rem" }}>
                Next
                <ArrowForwardIcon sx={{ fontSize: "1.5rem" }} />
              </Button>
            </Box>
            <SpecificPlantProfileWidget userId={_id} />
          </>
        )}
      </Box>
    </Box>
  );
}
