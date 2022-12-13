// import WidgetWrapper from "components/WidgetWrapper";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setPlantProfiles } from "state";
import PlantProfileCardWidget from "./PlantProfileCardWidget";
import { useParams } from "react-router";

const SpecificPlantProfileWidget = ({ isProfile = false }) => {
  const dispatch = useDispatch();
  const plantProfiles = useSelector((state) => state.plantProfiles);
  const token = useSelector((state) => state.token);
  const { userId, id } = useParams();
  const { _id } = useSelector((state) => state.user);

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
    console.log(data);
    dispatch(setPlantProfiles({ plantProfiles: data }));
  };

  useEffect(() => {
    getSpecificUserPlantProfile();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (userId !== _id) {
    console.log("Nope", userId, _id);
    return <h3>Not your plant!</h3>;
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
