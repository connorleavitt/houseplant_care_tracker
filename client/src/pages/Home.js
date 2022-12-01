import React from "react";
import PlantProfileListItem from "../components/PlantProfileListItem";
import Searchbar from "../components/Searchbar";

export default function Home() {
  return (
    <div>
      <main className="main">
        <Searchbar />
        <h2 className="pp-list--title">Plant Profile List</h2>
        <PlantProfileListItem />
      </main>
    </div>
  );
}

// plant profiles list view
