import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";

import WidgetWrapper from "components/WidgetWrapper";
import { useNavigate } from "react-router";

const PlantProfileListWidget = ({
  plantProfileId,
  plantProfileUserId,
  userFirstName,
  plantName,
  picturePath,
  userPicturePath,
  currentLocation,
  iGotItFrom,
}) => {
  // const dispatch = useDispatch();
  // const plantProfiles = useSelector((state) => state.plantProfiles);
  // const token = useSelector((state) => state.token);

  const { palette } = useTheme();
  const main = palette.neutral.main;
  // const primary = palette.primary.main;
  const navigate = useNavigate();

  const isNonMobileScreens = useMediaQuery("(min-width: 800px");
  const hasCurrentLocation = () => {
    if (currentLocation === undefined) {
      return "n/a";
    } else return currentLocation;
  };

  return (
    <WidgetWrapper m="2rem">
      <Box
        display={isNonMobileScreens ? "grid" : "flex"}
        gridTemplateColumns="1fr 3fr"
        className="home-pp-list--contianer"
        onClick={() =>
          navigate(`/plant-profiles/${plantProfileUserId}/${plantProfileId}`)
        }
        sx={{
          cursor: "pointer",
          backgroundColor: "#f9f9f9",
          borderRadius: "10px",
          "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
            backgroundColor: `${palette.primary.light}`,
          },
        }}
      >
        <Box>
          <img
            className="home-pp-list--img"
            width="100%"
            height="100%"
            alt="plant-profile"
            style={{ borderRadius: "0.5rem" }}
            src={`http://localhost:3001/assets/${picturePath}`}
          />
        </Box>
        <Box
          p="1rem"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Box
            display="flex"
            alignItems="flex-end"
            p={isNonMobileScreens ? "0 1rem 0 0" : "0.5rem 1rem 0.5rem 0"}
          >
            <Typography
              color={main}
              width={isNonMobileScreens ? "max-content" : "min-content"}
              pr="1rem"
              fontSize={isNonMobileScreens ? "1.5rem" : "1rem"}
            >
              Plant Name:
            </Typography>

            <Typography
              color={main}
              fontWeight="600"
              width="max-content"
              fontSize={isNonMobileScreens ? "1.5rem" : "1rem"}
            >
              {plantName}
            </Typography>
          </Box>

          <Box
            display="flex"
            alignItems="flex-end"
            p={isNonMobileScreens ? "0 1rem 0 0" : "0.5rem 1rem 0.5rem 0"}
          >
            <Typography
              color={main}
              pr="1rem"
              fontSize={isNonMobileScreens ? "1.5rem" : "1rem"}
              width={isNonMobileScreens ? "max-content" : "min-content"}
            >
              Bought from:
            </Typography>

            <Typography
              color={main}
              fontWeight="600"
              width="max-content"
              fontSize={isNonMobileScreens ? "1.5rem" : "1rem"}
            >
              {iGotItFrom}
            </Typography>
          </Box>
          <Box
            display="flex"
            alignItems="flex-end"
            p={isNonMobileScreens ? "0 1rem 0 0" : "0.5rem 1rem 0.5rem 0"}
          >
            <Typography
              color={main}
              width={isNonMobileScreens ? "max-content" : "min-content"}
              pr="1rem"
              fontSize={isNonMobileScreens ? "1.5rem" : "1rem"}
            >
              Currently located:
            </Typography>
            <Typography
              color={main}
              fontWeight="600"
              width="max-content"
              fontSize={isNonMobileScreens ? "1.5rem" : "1rem"}
            >
              {hasCurrentLocation(currentLocation)}
            </Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <img
              width="50px"
              height="50px"
              alt="plant-profile"
              style={{ objectFit: "cover", borderRadius: "50%" }}
              src={`http://localhost:3001/assets/${userPicturePath}`}
            />
            <Box display="flex" alignItems="center">
              <Typography
                className="home-pp-list--text"
                color={main}
                p="0 0.5rem 0 1rem"
                fontSize={isNonMobileScreens ? "1.2rem" : "1rem"}
              >
                This is {userFirstName}'s plant!
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </WidgetWrapper>
  );
};

export default PlantProfileListWidget;
