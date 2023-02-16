import { useTheme } from "@emotion/react";
import { Box, Button } from "@mui/material";
import { useState } from "react";

const WateringDayButton = ({ day }) => {
  const theme = useTheme();
  const neutralLight = theme.palette.neutral.light;
  const dark = theme.palette.neutral.dark;
  const main = theme.palette.neutral.main;
  const background = theme.palette.background.default;
  const primaryDark = theme.palette.primary.dark;
  const secondaryDark = theme.palette.secondary.dark;
  const secondaryMain = theme.palette.secondary.main;
  const waterLight = theme.palette.water.light;
  const waterDark = theme.palette.water.dark;
  const sunlightLight = theme.palette.sunlight.light;
  const sunlightDark = theme.palette.sunlight.dark;
  const primaryMain = theme.palette.primary.main;
  const alt = theme.palette.background.alt;

  const [isClicked, setIsClicked] = useState(false);

  return (
    <Box m="1rem 0" display="flex">
      <Button
        sx={{
          p: "1rem",
          backgroundColor: `${isClicked ? waterDark : waterLight}`,
          border: `2px solid ${secondaryMain}`,
          color: `${isClicked ? waterLight : waterDark}`,
          "&:hover": { color: waterLight, backgroundColor: waterDark },
        }}
        onClick={() => setIsClicked(true)}
      >
        {day}
      </Button>
    </Box>
  );
};

export default WateringDayButton;
