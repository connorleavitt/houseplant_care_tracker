import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";

import WidgetWrapper from "components/WidgetWrapper";

const PlantProfileListWidget = ({
  plantProfileId,
  plantProfileUserId,
  userFirstName,
  plantName,
  picturePath,
  userPicturePath,
}) => {
  // const dispatch = useDispatch();
  // const plantProfiles = useSelector((state) => state.plantProfiles);
  // const token = useSelector((state) => state.token);

  const { palette } = useTheme();
  const main = palette.neutral.main;
  const primary = palette.primary.main;

  const isNonMobileScreens = useMediaQuery("(min-width: 800px");

  return (
    <WidgetWrapper m="2rem 0">
      <Box
        display={isNonMobileScreens ? "grid" : "flex"}
        gridTemplateColumns="1fr 3fr"
        className="home-pp-list--contianer"
      >
        <Box>
          <img
            className="home-pp-list--img"
            width="100%"
            height="100%"
            alt="plant-profile"
            style={{ borderRadius: "0.75rem" }}
            src={`http://localhost:3001/assets/${picturePath}`}
          />
        </Box>
        <Box
          p="1rem"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Box display="flex">
            <Typography
              color={main}
              fontSize="1.5rem"
              width="fit-content"
              pr="1rem"
            >
              Plant Name:
            </Typography>
            <Typography color={main} fontSize="1.5rem" fontWeight="600">
              {plantName}
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
                fontSize="1.2rem"
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
