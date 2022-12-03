import { Box, useMediaQuery } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import NavbarPage from "scenes/navbar/navbarPage";
import PlantProfilesHomeWidget from "scenes/widgets/PlantProfilesHomeWidget";
import UserWidget from "scenes/widgets/UserWidget";
// import Searchbar from "../../components/Searchbar";

export default function HomePage() {
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px");
  const { _id, picturePath } = useSelector((state) => state.user);
  // const { _id } = useSelector((state) => state.plantProfiles);

  return (
    <Box className="main">
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
          <h2 className="pp-list--title">Plant Profile List</h2>

          <PlantProfilesHomeWidget />
        </Box>
      </Box>
    </Box>
  );
}

// plant profiles list view
