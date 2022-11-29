import React from "react";
import AddNew from "../components/AddNew";
import PlantProfileCard from "../components/PlantProfileCard";
import Searchbar from "../components/Searchbar";

export default function PlantProfiles() {
  return (
    <div className="pp">
      <main className="pp-main">
        <h1 className="pp--title">Plant Profiles</h1>
        <Searchbar />
        <button>All</button>
        <button>Indoor</button>
        <button>Outdoor</button>
        <button>Other</button>
        <AddNew name={"Plant"} />
        <PlantProfileCard />
      </main>
    </div>
  );
}
