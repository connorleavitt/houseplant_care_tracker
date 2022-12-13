// import WidgetWrapper from "components/WidgetWrapper";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setPlantProfiles } from "state";
import PlantProfileCardWidget from "./PlantProfileCardWidget";
import { useNavigate, useParams } from "react-router";
import { Box } from "@mui/material";

const SpecificPlantProfileWidget = ({ isProfile = false }) => {
  const dispatch = useDispatch();
  const plantProfiles = useSelector((state) => state.plantProfiles);
  const token = useSelector((state) => state.token);
  const { userId, id } = useParams();
  const { _id } = useSelector((state) => state.user);
  const navigate = useNavigate();

  console.log(
    `requested user: ${userId} requested plant: ${id} logged in user: ${_id}`
  );

  const getSpecificUserPlantProfile = async () => {
    const response = await fetch(
      `http://localhost:3001/plant-profiles/${userId}/${id}`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    const data = await response.json();
    dispatch(setPlantProfiles({ plantProfiles: data }));
  };

  useEffect(() => {
    getSpecificUserPlantProfile();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  if (userId !== _id) {
    return (
      <Box>
        <h3>This is not your plant!</h3>
        <p>To view your own plant profiles, navigate to Plant Profiles!</p>
      </Box>
    );
  }
  return (
    <>
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
    </>
  );
};

export default SpecificPlantProfileWidget;
