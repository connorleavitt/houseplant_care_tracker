import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Input from "./Input";

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
            <Input
              // onChange={(e) => onChange(e)}
              type="text"
              name="position"
              placeholder="input"
              // value="INPUT"
            />{" "}
          </div>
          <div className="pp-card--form-individual">
            <div className="pp-card--form-label">SCIENTIFIC NAME:</div>
            <Input
              // onChange={(e) => onChange(e)}
              type="text"
              name="position"
              placeholder="input"
              // value="INPUT"
            />{" "}
          </div>
          <div className="pp-card--form-individual">
            <div className="pp-card--form-label">DATE ACQUIRED:</div>
            <Input
              // onChange={(e) => onChange(e)}
              type="text"
              name="position"
              placeholder="input"
              // value="INPUT"
            />
          </div>
          <div className="pp-card--form-individual">
            <div className="pp-card--form-label">PLANT TYPE:</div>
            <Input
              // onChange={(e) => onChange(e)}
              type="text"
              name="position"
              placeholder="input"
              // value="INPUT"
            />
          </div>
          <div className="pp-card--form-individual">
            <div className="pp-card--form-label">I GOT IT FROM:</div>
            <Input
              // onChange={(e) => onChange(e)}
              type="text"
              name="position"
              placeholder="input"
              // value="INPUT"
            />
          </div>
          <div className="pp-card--form-individual">
            <div className="pp-card--form-label">TOXICITIY:</div>
            <Input
              // onChange={(e) => onChange(e)}
              type="text"
              name="position"
              placeholder="input"
              // value="INPUT"
            />
          </div>
        </div>
        <div className="pp-card--plant-care-needs">
          <h4 className="pp-card--headers">PLANT CARE NEEDS</h4>
          <div className="pp-card--form-individual">
            <div className="pp-card--form-label">WATER:</div>
            <Input
              // onChange={(e) => onChange(e)}
              type="text"
              name="position"
              placeholder="input"
              // value="INPUT"
            />
          </div>
          <div className="pp-card--form-individual">
            <div className="pp-card--form-label">LIGHT:</div>
            <Input
              // onChange={(e) => onChange(e)}
              type="text"
              name="position"
              placeholder="input"
              // value="INPUT"
            />
          </div>
          <div className="pp-card--form-individual">
            <div className="pp-card--form-label">SOIL TYPE:</div>
            <Input
              // onChange={(e) => onChange(e)}
              type="text"
              name="position"
              placeholder="input"
              // value="INPUT"
            />
          </div>
          <div className="pp-card--form-individual">
            <div className="pp-card--form-label">HUMIDITY:</div>
            <Input
              // onChange={(e) => onChange(e)}
              type="text"
              name="position"
              placeholder="input"
              // value="INPUT"
            />
          </div>
          <div className="pp-card--form-individual">
            <div className="pp-card--form-label">IDEAL TEMP:</div>
            <Input
              // onChange={(e) => onChange(e)}
              type="text"
              name="position"
              placeholder="input"
              // value="INPUT"
            />
          </div>
        </div>
        <div className="pp-card--fertilization">
          <h4 className="pp-card--headers">FERTILIZATION</h4>
          <div className="pp-card--form-individual">
            <div className="pp-card--form-label">METHOD:</div>
            <Input
              // onChange={(e) => onChange(e)}
              type="text"
              name="position"
              placeholder="input"
              // value="INPUT"
            />
          </div>
          <div className="pp-card--form-individual">
            <div className="pp-card--form-label">FREQUENCY:</div>
            <Input
              // onChange={(e) => onChange(e)}
              type="text"
              name="position"
              placeholder="input"
              // value="INPUT"
            />
          </div>
        </div>
        <div className="pp-card--location">
          <h4 className="pp-card--headers">CURRENT LOCATION</h4>
          <div className="pp-card--locations-container">
            <div className="pp-card--location-item">Indoors</div>
            <div className="pp-card--location-item">Outdoors</div>
            <div className="pp-card--location-item">Other</div>
          </div>
        </div>
        <div className="pp-card--water">
          <h4 className="pp-card--headers">WATER</h4>
          <div className="pp-card--water-container">
            <FontAwesomeIcon
              icon="fa-solid fa-droplet"
              className="pp-card--icon-water"
            />
            <FontAwesomeIcon
              icon="fa-solid fa-droplet"
              className="pp-card--icon-water"
            />
            <FontAwesomeIcon
              icon="fa-solid fa-droplet"
              className="pp-card--icon-water"
            />
            <FontAwesomeIcon
              icon="fa-solid fa-droplet"
              className="pp-card--icon-water"
            />
            <FontAwesomeIcon
              icon="fa-solid fa-droplet"
              className="pp-card--icon-water"
            />
          </div>
        </div>
        <div className="pp-card--sunlight">
          <h4 className="pp-card--headers">SUNLIGHT</h4>
          <div className="pp-card--sunlight-container">
            <FontAwesomeIcon
              icon="fa-solid fa-sun"
              className="pp-card--icon-sunlight"
            />
            <FontAwesomeIcon
              icon="fa-solid fa-sun"
              className="pp-card--icon-sunlight"
            />
            <FontAwesomeIcon
              icon="fa-solid fa-sun"
              className="pp-card--icon-sunlight"
            />
            <FontAwesomeIcon
              icon="fa-solid fa-sun"
              className="pp-card--icon-sunlight"
            />
            <FontAwesomeIcon
              icon="fa-solid fa-sun"
              className="pp-card--icon-sunlight"
            />
          </div>
        </div>
      </div>
      <div className="pp-card--notes">
        <h4 className="pp-card--headers">NOTES</h4>
        <textarea className="textarea----test"></textarea>
      </div>
    </div>
  );
}
