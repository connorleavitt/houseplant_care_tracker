import React from "react";
import CustomLink from "./CustomLink";

export default function Navbar({ toggle }) {
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
