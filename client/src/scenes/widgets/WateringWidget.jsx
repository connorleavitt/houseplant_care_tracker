import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setPlantProfiles } from "state";
import WateringPlantInfoWidget from "./WateringPlantInfoWidget";

const WateringWidget = ({ userId, isProfile = false }) => {
  const dispatch = useDispatch();
  const plantProfiles = useSelector((state) => state.plantProfiles);

  const token = useSelector((state) => state.token);
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
    getUserPlantProfiles();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {plantProfiles.map(
        ({
          _id,
          picturePath,
          plantName,
          scientificName,
          water,
          light,
          waterLevel,
          sunlightLevel,
        }) => (
          <WateringPlantInfoWidget
            key={_id}
            plantProfileId={_id}
            plantProfileUserId={userId}
            plantName={plantName}
            scientificName={scientificName}
            picturePath={picturePath}
            water={water}
            light={light}
            waterLevel={waterLevel}
            sunlightLevel={sunlightLevel}
          />
        )
      )}
    </>
  );
};

export default WateringWidget;
