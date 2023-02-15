import { Box } from "@mui/material";

const RandomPlantFactImage = ({
  image,
  size = "100px",
  borderRadius = "5px",
}) => {
  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius }}
        width={size}
        height={size}
        alt={image}
        src={image}
      />
    </Box>
  );
};

export default RandomPlantFactImage;
