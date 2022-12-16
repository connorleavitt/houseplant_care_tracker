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
// import { useParams } from "react-router-dom";
import { setLogout, setUser } from "state";
import NavbarPage from "scenes/navbar/navbarPage";
import UserWidget from "scenes/widgets/UserWidget";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

import FlexBetween from "components/FlexBetween";
import { useNavigate } from "react-router";

export default function UserProfilePage() {
  const [currentUser, setCurrentUser] = useState(null);
  const { _id, picturePath } = useSelector((state) => state.user);
  const navigate = useNavigate();

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
    const res = await fetch(`http://localhost:3001/users/${_id}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    setCurrentUser(data);
    console.log(data);
    dispatch(
      setUser({
        user: data,
      })
    );
  };

  useEffect(() => {
    getUser();
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  if (!currentUser) return null;

  return (
    <Box>
      <NavbarPage userId={_id} />
      <Box m="2rem" display="flex" flexDirection="column" alignItems="center">
        {/* <UserWidget userId={userId} picturePath={user.picturePath} /> */}
        <UserWidget userId={_id} picturePath={picturePath} />
        <FlexBetween>
          <Button
            onClick={() => navigate(`edit`)}
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
            <Typography fontSize="1rem">
              <EditOutlinedIcon />
              Edit Profile
            </Typography>
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
