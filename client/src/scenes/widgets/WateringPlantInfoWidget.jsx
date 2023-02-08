import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";

import WidgetWrapper from "components/WidgetWrapper";
import { useNavigate } from "react-router";

const WateringPlantInfoWidget = ({
  plantProfileId,
  plantProfileUserId,
  picturePath,
  plantName,
  scientificName,
  water,
  light,
  waterLevel,
  sunlightLevel,
}) => {
  const { palette } = useTheme();
  const main = palette.neutral.main;
  // const primary = palette.primary.main;
  const navigate = useNavigate();

  const isNonMobileScreens = useMediaQuery("(min-width: 800px");

  return (
    <WidgetWrapper m="2rem 0">
      <Box
        display={isNonMobileScreens ? "grid" : "flex"}
        gridTemplateColumns="1fr 3fr"
        className="home-pp-list--contianer"
        onClick={() =>
          navigate(`/plant-profiles/${plantProfileUserId}/${plantProfileId}`)
        }
        sx={{
          cursor: "pointer",
          backgroundColor: `${palette.background.default}`,
          borderRadius: "10px",
          "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
            backgroundColor: `${palette.secondary.light}`,
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
      </Box>
    </WidgetWrapper>
  );
};

export default WateringPlantInfoWidget;
