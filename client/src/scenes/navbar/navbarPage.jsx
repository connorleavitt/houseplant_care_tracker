import React from "react";
import CustomLink from "../../components/CustomLink";

export default function NavbarPage({ toggle }) {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <CustomLink toggle={toggle} to="/home">
          Home
        </CustomLink>
        <CustomLink toggle={toggle} to="/plant-profiles">
          Plant Profiles
        </CustomLink>
      </ul>
    </nav>
  );
}
