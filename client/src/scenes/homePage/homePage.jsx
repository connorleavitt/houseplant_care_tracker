import { Box } from "@mui/material";
import React from "react";
import NavbarPage from "scenes/navbar/navbarPage";
import PlantProfileListItem from "../../components/PlantProfileListItem";
// import Searchbar from "../../components/Searchbar";

export default function HomePage() {
  return (
    <div>
      <Box className="main">
        <NavbarPage />
        {/* <Searchbar /> */}
        <h2 className="pp-list--title">Plant Profile List</h2>
        <PlantProfileListItem />
      </Box>
    </div>
  );
}

// plant profiles list view
