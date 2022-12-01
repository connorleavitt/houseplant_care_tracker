import React from "react";
import ProfileListItem from "../components/ProfileListItem";
import Searchbar from "../components/Searchbar";

export default function Home() {
  return (
    <div>
      <main className="main">
        <Searchbar />
        <h2 className="pp-list--title">Plant Profile List</h2>
        <ProfileListItem />
      </main>
    </div>
  );
}

// plant profiles list view
