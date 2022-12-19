// import WidgetWrapper from "components/WidgetWrapper";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setAllPlantProfiles, setPlantProfiles } from "state";
import PlantProfileCardWidget from "./PlantProfileCardWidget";
import { useNavigate, useParams } from "react-router";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useTheme } from "@emotion/react";

const SpecificPlantProfileWidget = ({ isProfile = false }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = useTheme();
  const neutralLight = theme.palette.neutral.light;
  const dark = theme.palette.neutral.dark;
  const background = theme.palette.background.default;
  const primaryDark = theme.palette.primary.dark;
  const secondaryDark = theme.palette.secondary.dark;
  const secondaryMain = theme.palette.secondary.main;
  const secondaryLight = theme.palette.secondary.light;
  const primaryMain = theme.palette.primary.main;
  const alt = theme.palette.background.alt;

  const plantProfiles = useSelector((state) => state.plantProfiles);
  const allPlantProfiles = useSelector((state) => state.allPlantProfiles);
  const token = useSelector((state) => state.token);
  const { userId, id } = useParams();
  const { _id } = useSelector((state) => state.user);
  const isNonMobileScreens = useMediaQuery("(min-width:800px)");

  const [error, setError] = useState(null);
  const [deletionConfirmation, setDeletionConfirmation] = useState(false);
  // console.log(
  //   `requested user: ${userId} requested plant: ${id} logged in user: ${_id}`
  // );

  const getUserPlantProfiles = async () => {
    const response = await fetch(
      `http://localhost:3001/plant-profiles/${userId}/all`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    const data = await response.json();
    dispatch(setAllPlantProfiles({ allPlantProfiles: data }));
  };

  const returnPreviousPlantProfile = () => {
    let newPlantProfileId;
    for (let profile in allPlantProfiles) {
      console.log(allPlantProfiles[profile]._id, id);
      if (allPlantProfiles[profile]._id === id) {
        console.log("match", profile);
        newPlantProfileId = Number(profile) - 1;
        if (newPlantProfileId < 0)
          newPlantProfileId = allPlantProfiles.length - 1;
        console.log("at end", newPlantProfileId);
      } else {
        console.log("no match", profile);
      }
    }

    console.log(
      `/plant-profiles/${userId}/${allPlantProfiles[newPlantProfileId]._id}`
    );

    navigate(
      `/plant-profiles/${userId}/${allPlantProfiles[newPlantProfileId]._id}`
    );
    return window.location.reload();
  };

  const returnNextPlantProfile = () => {
    let newPlantProfileId;
    for (let profile in allPlantProfiles) {
      // console.log(allPlantProfiles[profile]._id, id);
      if (allPlantProfiles[profile]._id === id) {
        console.log("match", profile);
        newPlantProfileId = 1 + Number(profile);
        if (newPlantProfileId >= allPlantProfiles.length) newPlantProfileId = 0;
      } else {
        console.log("no match", profile);
      }
    }
    // console.log(
    //   `/plant-profiles/${userId}/${allPlantProfiles[newPlantProfileId]._id}`
    // );

    navigate(
      `/plant-profiles/${userId}/${allPlantProfiles[newPlantProfileId]._id}`
    );
    return window.location.reload();
  };

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
    getUserPlantProfiles();
    getSpecificUserPlantProfile();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleDelete = async () => {
    const response = await fetch(
      `http://localhost:3001/plant-profiles/${userId}/${id}`,
      {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    const data = await response.json();

    if (!response.ok) {
      setError(data.error);
      console.log(error);
    }
    if (response.ok) {
      setError(null);
      console.log("plant profile delete", data);
      navigate("/plant-profiles");
    }
  };

  if (userId !== _id) {
    return (
      <Box m="2rem" display="flex" flexDirection="column" alignItems="center">
        <h3>This is not your plant!</h3>
        <p>To view your own plant profiles, navigate to Plant Profiles!</p>
      </Box>
    );
  }
  return (
    <>
      {isNonMobileScreens ? (
        // DESKTOP
        <>
          <Box display={deletionConfirmation ? "none" : "flex"}>
            <Box
              display="flex"
              flexDirection="column"
              // justifyContent="center"
              alignItems="center"
              width="100%"
            >
              <Box
                display="flex"
                justifyContent="center"
                // width="100%"
                mt="2rem"
                gap="2rem"
              >
                <Button
                  className="spp--change-btns"
                  sx={{
                    fontSize: "1.25rem",
                    "&:hover": {
                      color: primaryDark,
                      cursor: "pointer",
                    },
                  }}
                  onClick={returnPreviousPlantProfile}
                >
                  <ArrowBackIcon sx={{ fontSize: "1.5rem" }} />
                  Previous
                </Button>
                <Button
                  className="spp--change-btns"
                  sx={{
                    fontSize: "1.25rem",
                    "&:hover": {
                      color: primaryDark,
                      cursor: "pointer",
                    },
                  }}
                  onClick={returnNextPlantProfile}
                >
                  Next
                  <ArrowForwardIcon sx={{ fontSize: "1.5rem" }} />
                </Button>
                <Button
                  className="spp--update-btn"
                  sx={{
                    fontSize: "1.25rem",
                    color: alt,
                    backgroundColor: primaryMain,
                    "&:hover": {
                      color: primaryDark,
                      cursor: "pointer",
                    },
                  }}
                  onClick={() => navigate(`edit`)}
                >
                  Update
                  <EditIcon sx={{ fontSize: "1.5rem" }} />
                </Button>
                <Button
                  className="spp--delete-btn"
                  sx={{
                    fontSize: "1.25rem",
                    color: dark,
                    backgroundColor: background,
                    border: `2px solid ${dark}`,
                    "&:hover": {
                      backgroundColor: secondaryLight,
                      cursor: "pointer",
                    },
                  }}
                  onClick={() => setDeletionConfirmation(true)}
                >
                  Delete
                  <DeleteForeverIcon sx={{ fontSize: "1.5rem" }} />
                </Button>
              </Box>
              <Box width="80%">
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
            </Box>
          </Box>
          <Box
            display={deletionConfirmation ? "flex" : "none"}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            m="10rem auto"
            width="500px"
            border="5px solid gray"
            borderRadius="10px"
            p="1rem"
          >
            <Typography p="1rem" fontSize="1.5rem" width="100%">
              Are you sure you want to delete this plant profile?
            </Typography>
            <Typography p="0 1rem 1rem 1rem" fontSize="1rem" width="100%">
              Once it is deleted, it will be gone forever!
            </Typography>
            <Box
              display="flex"
              justifyContent="space-around"
              width="100%"
              m="1rem 0"
            >
              <Button
                className="spp--update-btn"
                sx={{ fontSize: "1.25rem" }}
                onClick={() => setDeletionConfirmation(false)}
              >
                CANCEL
              </Button>
              <Button
                className="spp--delete-btn"
                sx={{
                  fontSize: "1.25rem",
                  color: dark,
                  backgroundColor: background,
                  border: `2px solid ${dark}`,
                  "&:hover": {
                    backgroundColor: secondaryLight,
                    cursor: "pointer",
                  },
                }}
                onClick={handleDelete}
              >
                DELETE
                <DeleteForeverIcon sx={{ fontSize: "1.5rem" }} />
              </Button>
            </Box>
          </Box>
        </>
      ) : (
        // MOBILE
        <>
          <Box display={deletionConfirmation ? "none" : ""}>
            <Box
              display="flex"
              justifyContent="center"
              width="100%"
              mt="2rem"
              gap="2rem"
            >
              <Button
                className="spp--change-btns"
                sx={{
                  fontSize: "1.25rem",
                  "&:hover": {
                    color: primaryDark,
                    cursor: "pointer",
                  },
                }}
                onClick={returnPreviousPlantProfile}
              >
                <ArrowBackIcon sx={{ fontSize: "1.5rem" }} />
                Previous
              </Button>
              <Button
                className="spp--change-btns"
                sx={{
                  fontSize: "1.25rem",
                  "&:hover": {
                    color: primaryDark,
                    cursor: "pointer",
                  },
                }}
                onClick={returnNextPlantProfile}
              >
                Next
                <ArrowForwardIcon sx={{ fontSize: "1.5rem" }} />
              </Button>
            </Box>
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
            <Box
              display="flex"
              justifyContent="center"
              width="100%"
              m="2rem 0"
              gap="2rem"
            >
              <Button
                className="spp--update-btn"
                sx={{
                  fontSize: "1.25rem",
                  color: alt,
                  backgroundColor: primaryMain,
                  "&:hover": {
                    color: primaryDark,
                    cursor: "pointer",
                  },
                }}
                onClick={() => navigate(`edit`)}
              >
                Update
                <EditIcon sx={{ fontSize: "1.5rem" }} />
              </Button>
              <Button
                className="spp--delete-btn"
                sx={{
                  fontSize: "1.25rem",
                  color: dark,
                  backgroundColor: background,
                  border: `2px solid ${dark}`,
                  "&:hover": {
                    backgroundColor: secondaryLight,
                    cursor: "pointer",
                  },
                }}
                onClick={() => setDeletionConfirmation(true)}
              >
                Delete
                <DeleteForeverIcon sx={{ fontSize: "1.5rem" }} />
              </Button>
            </Box>
          </Box>
          <Box
            display={deletionConfirmation ? "flex" : "none"}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            m="10rem auto"
            width="90%"
            border="5px solid gray"
            borderRadius="10px"
            p="1rem"
          >
            <Typography p="1rem" fontSize="1.5rem" width="100%">
              Are you sure you want to delete this plant profile?
            </Typography>
            <Typography p="0 1rem 1rem 1rem" fontSize="1rem" width="100%">
              Once it is deleted, it will be gone forever!
            </Typography>
            <Box
              display="flex"
              justifyContent="space-around"
              width="100%"
              m="1rem 0"
            >
              <Button
                className="spp--update-btn"
                sx={{ fontSize: "1.25rem" }}
                onClick={() => setDeletionConfirmation(false)}
              >
                CANCEL
              </Button>
              <Button
                className="spp--delete-btn"
                sx={{
                  fontSize: "1.25rem",
                  color: dark,
                  backgroundColor: background,
                  border: `2px solid ${dark}`,
                  "&:hover": {
                    backgroundColor: secondaryLight,
                    cursor: "pointer",
                  },
                }}
                onClick={handleDelete}
              >
                DELETE
                <DeleteForeverIcon sx={{ fontSize: "1.5rem" }} />
              </Button>
            </Box>
          </Box>
        </>
      )}
    </>
  );
};

export default SpecificPlantProfileWidget;
