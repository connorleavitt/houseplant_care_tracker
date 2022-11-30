import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function PlantProfileListItem() {
  return (
    <div className="pp-list--container">
      <FontAwesomeIcon icon="fa-solid fa-leaf" />
      <div className="pp-list--name">NAME</div>
      <div className="pp-list--name">INFO HERE INFO HERE INFO HERE</div>
      <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />
      <FontAwesomeIcon icon="fa-solid fa-trash" />
    </div>
  );
}
