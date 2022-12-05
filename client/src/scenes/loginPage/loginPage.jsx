import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import LoginForm from "./loginForm";

export default function LoginPage() {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 800px)");
  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography fontWeight="bold" fontSize="32px" color="primary">
          Houseplant Care Tracker
        </Typography>
      </Box>
      <Box
        width={isNonMobileScreens ? "30%" : "80%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
          Welcome to Houseplant Care Tracker, the app to help organize you plant
          care system!
        </Typography>
        <LoginForm />
      </Box>
    </Box>
  );
}
