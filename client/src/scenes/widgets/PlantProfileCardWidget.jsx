import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import moment from "moment";

const PlantProfileCardWidget = ({
  plantProfileId,
  plantProfileUserId,
  userFirstName,
  userPicturePath,
  picturePath,
  plantName,
  scientificName,
  dateAcquired,
  plantFamily,
  iGotItFrom,
  toxicity,
  water,
  light,
  soilType,
  humidity,
  idealTemp,
  fertilizationMethod,
  fertilizationFrequency,
  currentLocation,
  waterLevel,
  sunlightLevel,
  commonIssues,
  notes,
}) => {
  // const dispatch = useDispatch();
  // const plantProfiles = useSelector((state) => state.plantProfiles);
  // const token = useSelector((state) => state.token);

  const isNonMobileScreens = useMediaQuery("(min-width: 800px");

  const { palette } = useTheme();
  const main = palette.neutral.main;
  const primary = palette.primary.main;

  return (
    <Box
      className="pp-card--container"
      display={isNonMobileScreens ? "grid" : "flex"}
      sx={{
        gridTemplateColumns: "repeat(2, 1fr)",
        gridTemplateRows: "auto",
        gridTemplateAreas: `"header header"
                                  "left right"
                                  "notes notes"
                                  "buttons buttons"`,
      }}
    >
      <Box sx={{ gridArea: "header" }}>
        <h2 className="pp-card--title">Plant Profile</h2>
      </Box>
      {plantProfileId}
      <Box className="pp-card--left-side" sx={{ gridArea: "left" }}>
        <Box className="pp-card--img" borderRadius="5px" p="1rem">
          <img
            width="auto"
            height="100%"
            alt="plant-profile"
            style={{ borderRadius: "0.75rem" }}
            src={`http://localhost:3001/assets/${picturePath}`}
          />
        </Box>
        <Box className="pp-card--common-issues">
          <h4 className="pp-card--headers">COMMON ISSUES</h4>
          <div className="textarea----test">{commonIssues}</div>
        </Box>
      </Box>
      <Box
        className="pp-card--right-side"
        sx={{ gridArea: "right" }}
        display="flex"
        flexDirection="column"
        gap="30px"
      >
        <Box className="pp-card--general-info">
          <h4 className="pp-card--headers">GENERAL INFO</h4>
          <div className="pp-card--form-individual">
            <div className="pp-card--form-label">PLANT NAME:</div>
            <Typography color={main} fontSize="1.5rem" fontWeight="600">
              {plantName}
            </Typography>
          </div>
          <div className="pp-card--form-individual">
            <div className="pp-card--form-label">SCIENTIFIC NAME:</div>
            <Typography color={main} fontSize="1.5rem" fontWeight="600">
              {scientificName}
            </Typography>
          </div>
          <div className="pp-card--form-individual">
            <div className="pp-card--form-label">DATE ACQUIRED:</div>
            <Typography color={main} fontSize="1.5rem" fontWeight="600">
              {moment(dateAcquired).format("MMM Do (YYYY)")}
            </Typography>
          </div>
          <div className="pp-card--form-individual">
            <div className="pp-card--form-label">PLANT TYPE:</div>
            <Typography color={main} fontSize="1.5rem" fontWeight="600">
              {plantFamily}
            </Typography>
          </div>
          <div className="pp-card--form-individual">
            <div className="pp-card--form-label">I GOT IT FROM:</div>
            <Typography color={main} fontSize="1.5rem" fontWeight="600">
              {iGotItFrom}
            </Typography>
          </div>
          <div className="pp-card--form-individual">
            <div className="pp-card--form-label">TOXICITIY:</div>
            <Typography color={main} fontSize="1.5rem" fontWeight="600">
              {toxicity}
            </Typography>
          </div>
        </Box>
        <Box className="pp-card--plant-care-needs">
          <h4 className="pp-card--headers">PLANT CARE NEEDS</h4>
          <div className="pp-card--form-individual">
            <div className="pp-card--form-label">WATER:</div>
            <Typography color={main} fontSize="1.5rem" fontWeight="600">
              {water}
            </Typography>
          </div>
          <div className="pp-card--form-individual">
            <div className="pp-card--form-label">LIGHT:</div>
            <Typography color={main} fontSize="1.5rem" fontWeight="600">
              {light}
            </Typography>
          </div>
          <div className="pp-card--form-individual">
            <div className="pp-card--form-label">SOIL TYPE:</div>
            <Typography color={main} fontSize="1.5rem" fontWeight="600">
              {soilType}
            </Typography>
          </div>
          <div className="pp-card--form-individual">
            <div className="pp-card--form-label">HUMIDITY:</div>
            <Typography color={main} fontSize="1.5rem" fontWeight="600">
              {humidity}
            </Typography>
          </div>
          <div className="pp-card--form-individual">
            <div className="pp-card--form-label">IDEAL TEMP:</div>
            <Typography color={main} fontSize="1.5rem" fontWeight="600">
              {idealTemp}
            </Typography>
          </div>
        </Box>
        <Box className="pp-card--fertilization">
          <h4 className="pp-card--headers">FERTILIZATION</h4>
          <div className="pp-card--form-individual">
            <div className="pp-card--form-label">METHOD:</div>
            <Typography color={main} fontSize="1.5rem" fontWeight="600">
              {fertilizationMethod}
            </Typography>
          </div>
          <div className="pp-card--form-individual">
            <div className="pp-card--form-label">FREQUENCY:</div>
            <Typography color={main} fontSize="1.5rem" fontWeight="600">
              {fertilizationFrequency}
            </Typography>
          </div>
        </Box>
        <Box className="pp-card--location">
          <h4 className="pp-card--headers">CURRENT LOCATION</h4>
          <div className="pp-card--locations-container">
            <div className="pp-card--location-item">
              Currently located <strong>{currentLocation}</strong>
            </div>
          </div>
        </Box>
        <Box className="pp-card--water">
          <h4 className="pp-card--headers">WATER</h4>
          <div className="pp-card--water-container">
            <Typography>Plant's desired water level: {waterLevel}</Typography>
          </div>
        </Box>
        <Box className="pp-card--sunlight">
          <h4 className="pp-card--headers">SUNLIGHT</h4>
          <div className="pp-card--sunlight-container">
            <Typography>
              Plant's desired sunlight level: {sunlightLevel}
            </Typography>
          </div>
        </Box>
      </Box>
      <Box
        className="pp-card--notes"
        sx={{ gridArea: "notes" }}
        display="flex"
        flexDirection="column"
      >
        <h4 className="pp-card--headers">NOTES</h4>
        <div className="textarea----test">{notes}</div>
      </Box>
    </Box>
  );
};

export default PlantProfileCardWidget;
