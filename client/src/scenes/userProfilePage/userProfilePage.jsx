import React from "react";
import {
  Box,
  Button,
  Typography,
  // useMediaQuery,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setLogout } from "state";
import NavbarPage from "scenes/navbar/navbarPage";
import UserWidget from "scenes/widgets/UserWidget";
import FlexBetween from "components/FlexBetween";

export default function UserProfilePage() {
  const [user, setUser] = useState(null);
  const { userId } = useParams();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  // const isNonMobileScreens = useMediaQuery("(min-width: 800px)");

  const theme = useTheme();
  const neutralMedium = theme.palette.neutral.medium;
  const dark = theme.palette.neutral.dark;
  const background = theme.palette.background.default;
  const primaryDark = theme.palette.primary.dark;
  const primaryMain = theme.palette.primary.main;
  // const alt = theme.palette.background.alt;

  const getUser = async () => {
    const res = await fetch(`http://localhost:3001/users/${userId}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    setUser(data);
  };

  useEffect(() => {
    getUser();
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  if (!user) return null;

  return (
    <Box>
      <NavbarPage userId={userId} />
      <Box m="2rem" display="flex" flexDirection="column" alignItems="center">
        <UserWidget userId={userId} picturePath={user.picturePath} />
        <FlexBetween>
          <Button
            // onClick={() => dispatch(setEditProfile())}
            sx={{
              m: "1rem",
              borderRadius: "5px",
              backgroundColor: primaryMain,
              color: dark,
              // borderColor: "red",
              "&:hover": {
                color: background,
                backgroundColor: primaryDark,
                cursor: "pointer",
              },
            }}
          >
            <Typography fontSize="1rem">Edit Profile</Typography>
          </Button>
          <Button
            onClick={() => dispatch(setLogout())}
            sx={{
              m: "1rem",
              borderRadius: "5px",
              backgroundColor: dark,
              color: background,
              // borderColor: "red",
              "&:hover": {
                color: dark,
                backgroundColor: neutralMedium,
                cursor: "pointer",
              },
            }}
          >
            <Typography fontSize="1rem">Log Out</Typography>
          </Button>
        </FlexBetween>
      </Box>
    </Box>
  );
}
