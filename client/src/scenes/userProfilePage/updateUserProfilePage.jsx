import { Box } from "@mui/material";
import React from "react";
import NavbarPage from "scenes/navbar/navbarPage";
import UserForm from "./userForm";

export default function UpdateUserProfilePage() {
  return (
    <Box>
      <NavbarPage />
      <UserForm />
    </Box>
  );
}
