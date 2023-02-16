import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import WateringDayButton from "components/WateringDayButton";

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
    <WidgetWrapper m="1rem 0" height="400px" display="flex">
      <Box
        display={isNonMobileScreens ? "grid" : "flex"}
        flexBasis="25%"
        gridTemplateColumns="1fr 3fr"
        // className="home-pp-list--contianer"
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
            height="300px"
            alt="plant-profile"
            style={{ borderRadius: "0.5rem" }}
            src={`http://localhost:3001/assets/${picturePath}`}
          />
        </Box>
      </Box>
      <Box
        mt={isNonMobileScreens ? undefined : "2rem"}
        display="flex"
        flexBasis="60%"
        flexWrap="wrap"
        flex="0 1 100%"
      >
        <WateringDayButton day={1} />
        <WateringDayButton day={2} />
        <WateringDayButton day={3} />
        <WateringDayButton day={4} />
        <WateringDayButton day={5} />
        <WateringDayButton day={6} />
        <WateringDayButton day={7} />
        <WateringDayButton day={8} />
        <WateringDayButton day={9} />
        <WateringDayButton day={10} />
        <WateringDayButton day={11} />
        <WateringDayButton day={12} />
        <WateringDayButton day={13} />
        <WateringDayButton day={14} />
        <WateringDayButton day={15} />
        <WateringDayButton day={16} />
        <WateringDayButton day={17} />
        <WateringDayButton day={18} />
        <WateringDayButton day={19} />
        <WateringDayButton day={20} />
        <WateringDayButton day={21} />
        <WateringDayButton day={22} />
        <WateringDayButton day={23} />
        <WateringDayButton day={24} />
        <WateringDayButton day={25} />
        <WateringDayButton day={26} />
        <WateringDayButton day={27} />
        <WateringDayButton day={28} />
        <WateringDayButton day={29} />
        <WateringDayButton day={30} />
        <WateringDayButton day={31} />
      </Box>
    </WidgetWrapper>
  );
};

export default WateringPlantInfoWidget;
