import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setPlantProfiles } from "state";
import PlantProfileListWidget from "./PlantProfileListWidget";
import { Box } from "@mui/material";

const PlantProfilesHomeWidget = ({ userId, isProfile = false }) => {
  const dispatch = useDispatch();
  const plantProfiles = useSelector((state) => state.plantProfiles);
  const token = useSelector((state) => state.token);

  const getPlantProfiles = async () => {
    const response = await fetch("http://localhost:3001/plant-profiles/all", {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    dispatch(setPlantProfiles({ plantProfiles: data }));
  };

  useEffect(() => {
    getPlantProfiles();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Box>
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
          <PlantProfileListWidget
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

export default PlantProfilesHomeWidget;
