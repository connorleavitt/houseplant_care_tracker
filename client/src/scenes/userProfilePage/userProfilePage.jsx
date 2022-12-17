import React from "react";
import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLogout, setUser } from "state";
import NavbarPage from "scenes/navbar/navbarPage";
import UserWidget from "scenes/widgets/UserWidget";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { useNavigate } from "react-router";
import moment from "moment";

export default function UserProfilePage() {
  const [currentUser, setCurrentUser] = useState(null);
  const { _id, picturePath } = useSelector((state) => state.user);
  const plantProfiles = useSelector((state) => state.plantProfiles);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const isNonMobileScreens = useMediaQuery("(min-width: 800px)");

  const theme = useTheme();
  const neutralLight = theme.palette.neutral.light;
  const dark = theme.palette.neutral.dark;
  const background = theme.palette.background.default;
  const primaryDark = theme.palette.primary.dark;
  const widgetColor = theme.palette.background.alt;

  const getUser = async () => {
    const res = await fetch(`http://localhost:3001/users/${_id}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    setCurrentUser(data);
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

  function getAge(dateString) {
    var today = new Date();
    var createdAt = new Date(dateString);
    var time = today.getTime() - createdAt.getTime();
    let days = time / (1000 * 3600 * 24);
    let result = days.toFixed(0);
    return result;
  }

  return (
    <Box>
      <NavbarPage userId={_id} />
      <Box display="flex">
        {isNonMobileScreens ? (
          <>
            <Box
              m="2rem"
              p="0 2rem"
              display="flex"
              flexDirection="column"
              alignItems="center"
              flexBasis={isNonMobileScreens ? "30%" : undefined}
            >
              <UserWidget userId={_id} picturePath={picturePath} />
              <Box
                mt="1rem"
                p="0"
                borderRadius="10px"
                backgroundColor={widgetColor}
                display="flex"
                flexDirection="column"
                alignItems="flex-end"
                sx={{ width: "100%" }}
              >
                <Box
                  m="1rem"
                  p="0"
                  gap="1rem"
                  display="flex"
                  flexDirection="column"
                  alignItems="flex-end"
                  width="calc(100% - 2rem)"
                >
                  <Box
                    m="0"
                    p="0"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Typography>Created On:</Typography>
                    <Typography sx={{ ml: "1rem", width: "150px" }}>
                      <strong>
                        {moment(currentUser.createdAt).format("MMM Do (YYYY)")}
                      </strong>
                    </Typography>
                  </Box>
                  <Box
                    m="0"
                    p="0"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Typography>Account Age:</Typography>
                    <Typography sx={{ ml: "1rem", width: "150px" }}>
                      <strong>{getAge(currentUser.createdAt)} days old</strong>
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                mb="1rem"
                sx={{ width: "100%" }}
              >
                <Button
                  fullWidth
                  onClick={() => navigate(`edit`)}
                  sx={{
                    m: "1rem",
                    p: "0.25rem 0.5rem",
                    borderRadius: "5px",
                    color: dark,
                    border: `2px dashed ${primaryDark}`,
                    "&:hover": {
                      color: background,
                      backgroundColor: primaryDark,
                      cursor: "pointer",
                    },
                  }}
                >
                  <EditOutlinedIcon sx={{ mr: "1rem" }} />
                  <Typography fontSize="1rem">Edit Profile</Typography>
                </Button>
                <Button
                  fullWidth
                  onClick={() => dispatch(setLogout())}
                  sx={{
                    m: "0",
                    p: "0.25rem 0.5rem",
                    borderRadius: "5px",
                    color: dark,
                    border: `2px solid ${dark}`,
                    "&:hover": {
                      color: background,
                      backgroundColor: dark,
                      cursor: "pointer",
                    },
                  }}
                >
                  <Typography fontSize="1rem">Log Out</Typography>
                </Button>
              </Box>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              m="2rem"
              ml="0"
              flexBasis={isNonMobileScreens ? "70%" : undefined}
            >
              <Box
                display="flex"
                flexDirection="column"
                m="0"
                p="1rem"
                width="calc(100% - 4rem)"
                backgroundColor={neutralLight}
                borderRadius="10px"
              >
                <Typography sx={{ fontSize: "3rem" }}>STATS</Typography>

                <Box display="flex" alignItems="center">
                  <Typography sx={{ fontSize: "1rem" }}>
                    Number of Plant Profiles:
                  </Typography>
                  <Typography sx={{ fontSize: "2rem", ml: "2rem" }}>
                    {plantProfiles.length}
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <Typography sx={{ fontSize: "1rem" }}>
                    Number of Plant Profiles:
                  </Typography>
                  <Typography sx={{ fontSize: "2rem", ml: "2rem" }}>
                    {plantProfiles.length}
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <Typography sx={{ fontSize: "1rem" }}>
                    Number of Plant Profiles:
                  </Typography>
                  <Typography sx={{ fontSize: "2rem", ml: "2rem" }}>
                    {plantProfiles.length}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </>
        ) : (
          <Box display="flex" flexDirection="column" sx={{ width: "100%" }}>
            <Box
              m="2rem"
              p="0 2rem"
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <UserWidget userId={_id} picturePath={picturePath} />
              <Box
                mt="1rem"
                p="0"
                borderRadius="10px"
                backgroundColor={widgetColor}
                display="flex"
                flexDirection="column"
                alignItems="flex-end"
                sx={{ width: "100%" }}
              >
                <Box
                  m="1rem"
                  p="0"
                  gap="1rem"
                  display="flex"
                  flexDirection="column"
                  alignItems="flex-end"
                  width="calc(100% - 2rem)"
                >
                  <Box
                    m="0"
                    p="0"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Typography>Created On:</Typography>
                    <Typography sx={{ ml: "1rem", width: "150px" }}>
                      <strong>
                        {moment(currentUser.createdAt).format("MMM Do (YYYY)")}
                      </strong>
                    </Typography>
                  </Box>
                  <Box
                    m="0"
                    p="0"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Typography>Account Age:</Typography>
                    <Typography sx={{ ml: "1rem", width: "150px" }}>
                      <strong>{getAge(currentUser.createdAt)} days old</strong>
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                mb="1rem"
                sx={{ width: "100%" }}
              >
                <Button
                  fullWidth
                  onClick={() => navigate(`edit`)}
                  sx={{
                    m: "1rem",
                    p: "0.25rem 0.5rem",
                    borderRadius: "5px",
                    color: dark,
                    border: `2px dashed ${primaryDark}`,
                    "&:hover": {
                      color: background,
                      backgroundColor: primaryDark,
                      cursor: "pointer",
                    },
                  }}
                >
                  <EditOutlinedIcon sx={{ mr: "1rem" }} />
                  <Typography fontSize="1rem">Edit Profile</Typography>
                </Button>
                <Button
                  fullWidth
                  onClick={() => dispatch(setLogout())}
                  sx={{
                    m: "0",
                    p: "0.25rem 0.5rem",
                    borderRadius: "5px",
                    color: dark,
                    border: `2px solid ${dark}`,
                    "&:hover": {
                      color: background,
                      backgroundColor: dark,
                      cursor: "pointer",
                    },
                  }}
                >
                  <Typography fontSize="1rem">Log Out</Typography>
                </Button>
              </Box>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              m="2rem"
            >
              <Box
                display="flex"
                flexDirection="column"
                m="0"
                p="1rem"
                width="calc(100% - 4rem)"
                backgroundColor={neutralLight}
                borderRadius="10px"
              >
                <Typography sx={{ fontSize: "3rem" }}>STATS</Typography>

                <Box display="flex" alignItems="center">
                  <Typography sx={{ fontSize: "1rem" }}>
                    Number of Plant Profiles:
                  </Typography>
                  <Typography sx={{ fontSize: "2rem", ml: "2rem" }}>
                    {plantProfiles.length}
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <Typography sx={{ fontSize: "1rem" }}>
                    Number of Plant Profiles:
                  </Typography>
                  <Typography sx={{ fontSize: "2rem", ml: "2rem" }}>
                    {plantProfiles.length}
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <Typography sx={{ fontSize: "1rem" }}>
                    Number of Plant Profiles:
                  </Typography>
                  <Typography sx={{ fontSize: "2rem", ml: "2rem" }}>
                    {plantProfiles.length}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
}
