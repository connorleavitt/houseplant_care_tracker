import React from "react";
import NavbarPage from "scenes/navbar/navbarPage";
import AddNew from "../../components/AddNew";
import PlantProfileCard from "../../components/PlantProfileCard";
import Searchbar from "../../components/Searchbar";

export default function PlantProfilesPage() {
  return (
    <div className="pp">
      <NavbarPage />
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
    </div>
  );
}
