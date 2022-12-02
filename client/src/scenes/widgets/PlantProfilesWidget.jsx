import WidgetWrapper from "components/WidgetWrapper";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setPlantProfiles } from "state";

const PlantProfilesWidget = ({ userId }) => {
  const dispatch = useDispatch();
  const plantProfiles = useSelector((state) => state.plantProfiles);
  const token = useSelector((state) => state.token);

  const getPlantProfiles = async () => {
    const response = await fetch("http://localhost:3001/plant-profiles", {
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
      getUserPosts();
    } else {
      getPosts();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <WidgetWrapper m="2rem 0">
      <img
        width="100%"
        height="auto"
        alt="post"
        style={{ borderRadius: "0.75rem", marginTop: "0.75rem" }}
        src={`http://localhost:3001/assets/${picturePath}`}
      />

      <Typography color={main} sx={{ mt: "1rem" }}>
        Plant: {plantName}
      </Typography>
    </WidgetWrapper>
  );
};

export default PlantProfilesWidget;
