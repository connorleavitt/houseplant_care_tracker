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

  const getUserPlantProfiles = async () => {
    const response = await fetch(
      `http://localhost:3001/plant-profiles/${userId}/all`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    const data = await response.json();
    dispatch(setPlantProfiles({ plantProfiles: data }));
  };

  useEffect(() => {
    if (isProfile) {
      getUserPlantProfiles();
    } else {
      getPlantProfiles();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  // console.log(isProfile);
  return (
    <Box>
      {plantProfiles.map(
        ({
          _id,
          userId,
          userFirstName,
          plantName,
          picturePath,
          userPicturePath,
          currentLocation,
          iGotItFrom,
        }) => (
          <PlantProfileListWidget
            key={_id}
            plantProfileId={_id}
            plantProfileUserId={userId}
            userFirstName={userFirstName}
            plantName={plantName}
            picturePath={picturePath}
            userPicturePath={userPicturePath}
            currentLocation={currentLocation}
            iGotItFrom={iGotItFrom}
          />
        )
      )}
    </Box>
  );
};

export default PlantProfilesHomeWidget;
