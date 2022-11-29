import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function PlantProfileCard() {
  return (
    <div className="pp-card--container">
      <h2 className="pp-card--title">Plant Profile - TITLE</h2>
      <div className="pp-card--left-side">
        <div className="pp-card--img">IMG HERE</div>
        <div className="pp-card--common-issues">
          <h4 className="pp-card--headers">COMMON ISSUES</h4>
          <textarea className="textarea----test"></textarea>
        </div>
      </div>
      <div className="pp-card--right-side">
        <div className="pp-card--general-info">
          <h4 className="pp-card--headers">GENERAL INFO</h4>

          <div className="pp-card--form-individual">
            <div className="pp-card--form-label">PLANT NAME:</div>
            <div className="pp-card--form-input">USER INPUT</div>
          </div>
          <div className="pp-card--form-individual">
            <div className="pp-card--form-label">SCIENTIFIC NAME:</div>
            <div className="pp-card--form-input">Example aka Example 1</div>
          </div>
          <div className="pp-card--form-individual">
            <div className="pp-card--form-label">DATE ACQUIRED:</div>
            <div className="pp-card--form-input">Example 2</div>
          </div>
          <div className="pp-card--form-individual">
            <div className="pp-card--form-label">PLANT TYPE:</div>
            <div className="pp-card--form-input">Example 2</div>
          </div>
          <div className="pp-card--form-individual">
            <div className="pp-card--form-label">I GOT IT FROM:</div>
            <div className="pp-card--form-input">Example 2</div>
          </div>
          <div className="pp-card--form-individual">
            <div className="pp-card--form-label">TOXICITIY:</div>
            <div className="pp-card--form-input">Example 2</div>
          </div>
        </div>
        <div className="pp-card--plant-care-needs">
          <h4 className="pp-card--headers">PLANT CARE NEEDS</h4>
        </div>
        <div className="pp-card--fertilization">
          <h4 className="pp-card--headers">FERTILIZATION</h4>
        </div>
        <div className="pp-card--location">
          <h4 className="pp-card--headers">CURRENT LOCATION</h4>
          <div className="pp-card--location-item">INDOOR</div>
          <div className="pp-card--location-item">OUTDOOR</div>
          <div className="pp-card--location-item">OTHER</div>
        </div>
        <div className="pp-card--water">
          <FontAwesomeIcon icon="fa-solid fa-droplet" />
          <FontAwesomeIcon icon="fa-solid fa-droplet" />
          <FontAwesomeIcon icon="fa-solid fa-droplet" />
          <FontAwesomeIcon icon="fa-solid fa-droplet" />
          <FontAwesomeIcon icon="fa-solid fa-droplet" />
        </div>
        <div className="pp-card--sunlight">
          <FontAwesomeIcon icon="fa-solid fa-sun" />
          <FontAwesomeIcon icon="fa-solid fa-sun" />
          <FontAwesomeIcon icon="fa-solid fa-sun" />
          <FontAwesomeIcon icon="fa-solid fa-sun" />
          <FontAwesomeIcon icon="fa-solid fa-sun" />
        </div>
      </div>
      <div className="pp-card--notes">
        <h4 className="pp-card--headers">NOTES</h4>
        <textarea className="textarea----test"></textarea>
      </div>
    </div>
  );
}
