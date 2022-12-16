import { Box, Button, useMediaQuery, useTheme } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import PlantProfileCardWidget from "./PlantProfileCardWidget";

const PreviousPlantProfileWidget = ({ plantProfileId, plantProfileUserId }) => {
  const navigate = useNavigate();

  const plantProfiles = useSelector((state) => state.plantProfiles);
  const allPlantProfiles = useSelector((state) => state.allPlantProfiles);
  const token = useSelector((state) => state.token);

  const isNonMobileScreens = useMediaQuery("(min-width: 800px");

  const { palette } = useTheme();
  const main = palette.neutral.main;
  // const primary = palette.primary.main;

  const { userId, id } = useParams();
  const { _id } = useSelector((state) => state.user);

  let newPlantProfileId;

  const returnPreviousPlantProfile = (allPlantProfiles) => {
    console.log(allPlantProfiles);
    for (let profile in allPlantProfiles) {
      // console.log(allPlantProfiles[profile]._id, id);
      if (allPlantProfiles[profile]._id === id) {
        console.log("match", profile);
        newPlantProfileId = profile - 1;
      } else {
        console.log("no match", profile);
      }
    }
    console.log(
      `/plant-profiles/${userId}/${allPlantProfiles[newPlantProfileId]._id}`
    );

    console.log(plantProfiles);

    navigate(
      `/plant-profiles/${userId}/${allPlantProfiles[newPlantProfileId]._id}`
    );

    return newPlantProfileId;
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      width="100%"
      mt="2rem"
      gap="2rem"
    >
      <Button
        className="spp--change-btns"
        sx={{ fontSize: "1.25rem" }}
        onClick={() => {
          // add logic for looping through all user plant profiles
          returnPreviousPlantProfile(allPlantProfiles);
        }}
      >
        <ArrowBackIcon sx={{ fontSize: "1.5rem" }} />
        Previous
      </Button>
      <Button className="spp--change-btns" sx={{ fontSize: "1.25rem" }}>
        Next
        <ArrowForwardIcon sx={{ fontSize: "1.5rem" }} />
      </Button>
      {plantProfiles.map(
        ({
          _id,
          userId,
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
          currentLocation,
          fertilizationMethod,
          fertilizationFrequency,
          waterLevel,
          sunlightLevel,
          commonIssues,
          notes,
        }) => (
          <PlantProfileCardWidget
            key={_id}
            plantProfileId={_id}
            plantProfileUserId={userId}
            userFirstName={userFirstName}
            plantName={plantName}
            scientificName={scientificName}
            picturePath={picturePath}
            userPicturePath={userPicturePath}
            dateAcquired={dateAcquired}
            plantFamily={plantFamily}
            iGotItFrom={iGotItFrom}
            toxicity={toxicity}
            water={water}
            light={light}
            soilType={soilType}
            humidity={humidity}
            idealTemp={idealTemp}
            fertilizationMethod={fertilizationMethod}
            fertilizationFrequency={fertilizationFrequency}
            currentLocation={currentLocation}
            waterLevel={waterLevel}
            sunlightLevel={sunlightLevel}
            commonIssues={commonIssues}
            notes={notes}
          />
        )
      )}
    </Box>
  );
};

export default PreviousPlantProfileWidget;
