import { Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import NavbarPage from "scenes/navbar/navbarPage";
import UserWidget from "scenes/widgets/UserWidget";
import PlantProfileListItem from "../../components/PlantProfileListItem";
// import Searchbar from "../../components/Searchbar";

export default function HomePage() {
  const { _id, picturePath } = useSelector((state) => state.user);
  return (
    <Box className="main">
      <NavbarPage userId={_id} picturePath={picturePath} />
      <UserWidget userId={_id} picturePath={picturePath} />
      <h2 className="pp-list--title">Plant Profile List</h2>
      <PlantProfileListItem />
    </Box>
  );
}

// plant profiles list view
