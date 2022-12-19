import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import FormatColorFillIcon from "@mui/icons-material/FormatColorFill";
import NaturePeopleIcon from "@mui/icons-material/NaturePeople";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import HomeIcon from "@mui/icons-material/Home";
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

  const theme = useTheme();
  const neutralLight = theme.palette.neutral.light;
  const dark = theme.palette.neutral.dark;
  const main = theme.palette.neutral.main;
  const background = theme.palette.background.default;
  const primaryDark = theme.palette.primary.dark;
  const secondaryDark = theme.palette.secondary.dark;
  const secondaryMain = theme.palette.secondary.main;
  const waterLight = theme.palette.water.light;
  const waterDark = theme.palette.water.dark;
  const sunlightLight = theme.palette.sunlight.light;
  const sunlightDark = theme.palette.sunlight.dark;
  const primaryMain = theme.palette.primary.main;
  const alt = theme.palette.background.alt;

  return (
    <Box
    // display="flex" justifyContent="center"
    >
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
          // backgroundColor: alt,
        }}
        gap={isNonMobileScreens ? "2rem" : "0"}
        p="1rem"
        m="2rem 0"
        borderRadius="5px"
        border={isNonMobileScreens ? `4px solid ${secondaryDark}` : `0`}
      >
        {isNonMobileScreens ? (
          <Box sx={{ gridArea: "header" }} ml="3rem">
            <Typography
              className="pp-card--title"
              fontWeight="bold"
              fontSize="3.5rem"
              sx={{
                color: secondaryMain,
              }}
            >
              Plant Profile
            </Typography>
          </Box>
        ) : (
          <Box sx={{ gridArea: "header" }}>
            <Typography
              className="pp-card--title"
              fontWeight="bold"
              fontSize="2.5rem"
              sx={{
                color: secondaryMain,
              }}
            >
              Plant Profile
            </Typography>
          </Box>
        )}
        <Box className="pp-card--left-side" sx={{ gridArea: "left" }}>
          <Box className="pp-card--img" borderRadius="5px" p="1rem">
            <img
              width={isNonMobileScreens ? "300px" : "100%"}
              height="auto"
              alt="plant-profile"
              style={{ borderRadius: "0.75rem", maxHeight: "400px" }}
              src={`http://localhost:3001/assets/${picturePath}`}
            />
          </Box>

          <Box className="pp-card--location" m="1rem 0">
            <h4 className="pp-card--headers">CURRENT LOCATION</h4>
            <Box
              className="pp-card--locations-container"
              display="flex"
              justifyContent="space-around"
              alignItems="center"
            >
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                width="80px"
              >
                <HomeIcon
                  sx={{
                    opacity: `${currentLocation === "Indoors" ? "1" : ".3"}`,
                    fontSize: `${isNonMobileScreens ? "40px" : "30px"}`,
                  }}
                />
                <Typography
                  className="pp-card--location-item"
                  fontWeight="bold"
                  sx={{
                    opacity: `${currentLocation === "Indoors" ? "1" : ".3"}`,
                  }}
                  // fontSize="1.1rem"
                >
                  INDOORS
                </Typography>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                width="80px"
              >
                <NaturePeopleIcon
                  sx={{
                    opacity: `${currentLocation === "Outdoors" ? "1" : ".3"}`,
                    fontSize: `${isNonMobileScreens ? "40px" : "30px"}`,
                  }}
                />
                <Typography
                  className="pp-card--location-item"
                  fontWeight="bold"
                  sx={{
                    opacity: `${currentLocation === "Outdoors" ? "1" : ".3"}`,
                  }}
                  // fontSize="1.1rem"
                >
                  OUTDOORS
                </Typography>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                width="80px"
              >
                <HelpCenterIcon
                  sx={{
                    opacity: `${currentLocation === "Other" ? "1" : ".3"}`,
                    fontSize: `${isNonMobileScreens ? "40px" : "30px"}`,
                  }}
                />
                <Typography
                  className="pp-card--location-item"
                  fontWeight="bold"
                  sx={{
                    opacity: `${currentLocation === "Other" ? "1" : ".3"}`,
                  }}
                  // fontSize="1.1rem"
                >
                  OTHER
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            className="pp-card--water"
            sx={{
              backgroundColor: waterLight,
              border: `2px solid ${waterDark}`,
            }}
            borderRadius="10px"
            m="1rem 0"
          >
            <h4 className="pp-card--headers">WATER</h4>
            <Box className="pp-card--water-container">
              <Box
                display="flex"
                justifyContent="space-around"
                alignItems="center"
              >
                <Box display="flex" alignItems="center">
                  <FormatColorFillIcon
                    sx={{
                      opacity: `${waterLevel >= 1 ? "1" : ".3"}`,
                      fontSize: `${isNonMobileScreens ? "40px" : "30px"}`,
                    }}
                  />
                </Box>
                <Box display="flex" alignItems="center">
                  <FormatColorFillIcon
                    sx={{
                      opacity: `${waterLevel >= 2 ? "1" : ".3"}`,
                      fontSize: `${isNonMobileScreens ? "40px" : "30px"}`,
                    }}
                  />
                </Box>
                <Box display="flex" alignItems="center">
                  <FormatColorFillIcon
                    sx={{
                      opacity: `${waterLevel >= 3 ? "1" : ".3"}`,
                      fontSize: `${isNonMobileScreens ? "40px" : "30px"}`,
                    }}
                  />
                </Box>
                <Box display="flex" alignItems="center">
                  <FormatColorFillIcon
                    sx={{
                      opacity: `${waterLevel >= 4 ? "1" : ".3"}`,
                      fontSize: `${isNonMobileScreens ? "40px" : "30px"}`,
                    }}
                  />
                </Box>
                <Box display="flex" alignItems="center">
                  <FormatColorFillIcon
                    sx={{
                      opacity: `${waterLevel >= 5 ? "1" : ".3"}`,
                      fontSize: `${isNonMobileScreens ? "40px" : "30px"}`,
                    }}
                  />
                </Box>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="flex-end"
                m="1rem 1rem .5rem 1rem"
              >
                <Typography>Plant's desired watering:</Typography>
                <Typography
                  sx={{
                    fontSize: `${isNonMobileScreens ? "1.25rem" : "1.1rem"}`,
                  }}
                  pl="0.5rem"
                  fontWeight="bold"
                >
                  LEVEL {waterLevel}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            className="pp-card--sunlight"
            sx={{
              backgroundColor: sunlightLight,
              border: `2px solid ${sunlightDark}`,
            }}
            borderRadius="10px"
            m="1rem 0"
          >
            <h4 className="pp-card--headers">SUNLIGHT</h4>
            <Box className="pp-card--sunlight-container">
              <Box
                display="flex"
                justifyContent="space-around"
                alignItems="center"
              >
                <Box display="flex" alignItems="center">
                  <WbSunnyIcon
                    sx={{
                      opacity: `${sunlightLevel >= 1 ? "1" : ".3"}`,
                      fontSize: `${isNonMobileScreens ? "40px" : "30px"}`,
                    }}
                  />
                </Box>
                <Box display="flex" alignItems="center">
                  <WbSunnyIcon
                    sx={{
                      opacity: `${sunlightLevel >= 2 ? "1" : ".3"}`,
                      fontSize: `${isNonMobileScreens ? "40px" : "30px"}`,
                    }}
                  />
                </Box>
                <Box display="flex" alignItems="center">
                  <WbSunnyIcon
                    sx={{
                      opacity: `${sunlightLevel >= 3 ? "1" : ".3"}`,
                      fontSize: `${isNonMobileScreens ? "40px" : "30px"}`,
                    }}
                  />
                </Box>
                <Box display="flex" alignItems="center">
                  <WbSunnyIcon
                    sx={{
                      opacity: `${sunlightLevel >= 4 ? "1" : ".3"}`,
                      fontSize: `${isNonMobileScreens ? "40px" : "30px"}`,
                    }}
                  />
                </Box>
                <Box display="flex" alignItems="center">
                  <WbSunnyIcon
                    sx={{
                      opacity: `${sunlightLevel >= 5 ? "1" : ".3"}`,
                      fontSize: `${isNonMobileScreens ? "40px" : "30px"}`,
                    }}
                  />
                </Box>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="flex-end"
                m="1rem 1rem .5rem 1rem"
              >
                <Typography>Plant's desired sunlight:</Typography>
                <Typography
                  sx={{
                    fontSize: `${isNonMobileScreens ? "1.25rem" : "1.1rem"}`,
                  }}
                  pl="0.5rem"
                  fontWeight="bold"
                >
                  LEVEL {sunlightLevel}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          className="pp-card--right-side"
          sx={{ gridArea: "right" }}
          display="flex"
          flexDirection="column"
        >
          <Box
            border="3px solid black"
            p="0 1rem .5rem 1rem"
            m="0"
            borderRadius="10px"
          >
            <Box className="pp-card--general-info">
              <h4 className="pp-card--headers">GENERAL INFO</h4>
              <div className="pp-card--form-individual">
                <div className="pp-card--form-label">PLANT NAME:</div>
                <Typography color={main} fontSize="1.2rem" fontWeight="600">
                  {plantName}
                </Typography>
              </div>
              <div className="pp-card--form-individual">
                <div className="pp-card--form-label">SCIENTIFIC NAME:</div>
                <Typography color={main} fontSize="1.2rem" fontWeight="600">
                  {scientificName}
                </Typography>
              </div>
              <div className="pp-card--form-individual">
                <div className="pp-card--form-label">PLANT FAMILY:</div>
                <Typography color={main} fontSize="1.2rem" fontWeight="600">
                  {plantFamily}
                </Typography>
              </div>
              <div className="pp-card--form-individual">
                <div className="pp-card--form-label">DATE ACQUIRED:</div>
                <Typography color={main} fontSize="1.2rem" fontWeight="600">
                  {moment(dateAcquired).format("MMM Do (YYYY)")}
                </Typography>
              </div>

              <div className="pp-card--form-individual">
                <div className="pp-card--form-label">I GOT IT FROM:</div>
                <Typography color={main} fontSize="1.2rem" fontWeight="600">
                  {iGotItFrom}
                </Typography>
              </div>
              <div className="pp-card--form-individual">
                <div className="pp-card--form-label">TOXICITIY:</div>
                <Typography color={main} fontSize="1.2rem" fontWeight="600">
                  {toxicity}
                </Typography>
              </div>
            </Box>
            <Box className="pp-card--plant-care-needs">
              <h4 className="pp-card--headers">PLANT CARE NEEDS</h4>
              <div className="pp-card--form-individual">
                <div className="pp-card--form-label">WATER:</div>
                <Typography color={main} fontSize="1.2rem" fontWeight="600">
                  {water}
                </Typography>
              </div>
              <div className="pp-card--form-individual">
                <div className="pp-card--form-label">LIGHT:</div>
                <Typography color={main} fontSize="1.2rem" fontWeight="600">
                  {light}
                </Typography>
              </div>
              <div className="pp-card--form-individual">
                <div className="pp-card--form-label">SOIL TYPE:</div>
                <Typography color={main} fontSize="1.2rem" fontWeight="600">
                  {soilType}
                </Typography>
              </div>
              <div className="pp-card--form-individual">
                <div className="pp-card--form-label">HUMIDITY:</div>
                <Typography color={main} fontSize="1.2rem" fontWeight="600">
                  {humidity}
                </Typography>
              </div>
              <div className="pp-card--form-individual">
                <div className="pp-card--form-label">IDEAL TEMP:</div>
                <Typography color={main} fontSize="1.2rem" fontWeight="600">
                  {idealTemp}
                </Typography>
              </div>
            </Box>
            <Box className="pp-card--fertilization">
              <h4 className="pp-card--headers">FERTILIZATION</h4>
              <div className="pp-card--form-individual">
                <div className="pp-card--form-label">METHOD:</div>
                <Typography color={main} fontSize="1.2rem" fontWeight="600">
                  {fertilizationMethod}
                </Typography>
              </div>
              <div className="pp-card--form-individual">
                <div className="pp-card--form-label">FREQUENCY:</div>
                <Typography color={main} fontSize="1.2rem" fontWeight="600">
                  {fertilizationFrequency}
                </Typography>
              </div>
            </Box>
          </Box>
          <Box
            className="pp-card--common-issues"
            m="1rem 0"
            sx={{
              backgroundColor: alt,
              border: `2px solid ${dark}`,
            }}
          >
            <Typography
              className="pp-card--headers"
              fontWeight="bold"
              fontSize="1rem"
              sx={{
                color: alt,
                backgroundColor: dark,
              }}
            >
              COMMON ISSUES
            </Typography>
            <Box className="pp-common-issues--textarea" fontSize="1.1rem">
              {commonIssues}
            </Box>
          </Box>
        </Box>
        <Box
          className="pp-card--notes"
          sx={{
            gridArea: "notes",
            backgroundColor: dark,
          }}
          display="flex"
          flexDirection="column"
        >
          <Typography
            className="pp-card--headers"
            fontWeight="bold"
            fontSize="1.35rem"
            sx={{
              color: alt,
            }}
          >
            NOTES
          </Typography>
          <Box
            className="pp-notes--textarea"
            fontSize="1.1rem"
            sx={{
              color: alt,
            }}
          >
            {notes}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PlantProfileCardWidget;
