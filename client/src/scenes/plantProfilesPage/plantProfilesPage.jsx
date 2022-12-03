import { Box, useMediaQuery } from "@mui/material";
import React from "react";
import NavbarPage from "scenes/navbar/navbarPage";
import PlantProfilesWidget from "scenes/widgets/PlantProfilesWidget";
import AddNew from "../../components/AddNew";
import PlantProfileCard from "../../components/PlantProfileCard";
import Searchbar from "../../components/Searchbar";

export default function PlantProfilesPage() {
  const isNonMobileScreens = useMediaQuery("(min-width: 800px");

  return (
    <Box>
      <NavbarPage />

      <Box mt={isNonMobileScreens ? undefined : "2rem"}>
        <h2 className="pp-list--title">Plant Profile List</h2>

        <PlantProfilesWidget />
      </Box>

      <main className="pp-main">
        <h1 className="pp--title">Plant Profiles</h1>
        <Searchbar />
        <div className="pp--filters-new">
          <div className="pp--filtering">
            <button className="pp--filter-item">All</button>
            <button className="pp--filter-item">Indoor</button>
            <button className="pp--filter-item">Outdoor</button>
            <button className="pp--filter-item">Other</button>
          </div>
          <AddNew name={"Plant"} />
        </div>

        <PlantProfileCard />
      </main>
    </Box>
  );
}
