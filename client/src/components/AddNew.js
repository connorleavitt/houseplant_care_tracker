import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function AddNew({ name }) {
  return (
    <div className="add-new--container">
      <button className="add-new--btn">
        <FontAwesomeIcon icon="fa-solid fa-plus" /> Add {name}
      </button>
    </div>
  );
}
