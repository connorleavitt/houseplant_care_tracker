import React, { useState } from "react";
import {
  Box,
  IconButton,
  InputBase,
  Typography,
  Select,
  MenuItem,
  FormControl,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Search, DarkMode, LightMode, Menu, Close } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { setMode, setLogout } from "state";
import { useNavigate } from "react-router-dom";
import FlexBetween from "components/FlexBetween";

// import CustomLink from "../../components/CustomLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavbarPage({ toggle }) {
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px");

  const theme = useTheme();
  const neutralLight = theme.palette.neutral.light;
  const dark = theme.palette.neutral.dark;
  const background = theme.palette.background.default;
  const primaryLight = theme.palette.primary.light;
  const alt = theme.palette.background.alt;

  // const fullName = `${user.firstName} ${user.lastName}`;

  return (
    <FlexBetween padding="1rem 6%" backgroundColor={alt} className="navbar">
      <FlexBetween gap="1.75rem">
        <Typography
          fontWeight="bold"
          fontSize="clamp(1rem, 2rem, 2.25rem)"
          color="primary"
          onClick={() => navigate("/home")}
          sx={{
            "&:hover": {
              color: primaryLight,
              cursor: "pointer",
            },
          }}
        >
          Houseplant Care Tracker
        </Typography>
        {isNonMobileScreens && (
          <FlexBetween
            backgroundColor={neutralLight}
            borderRadius="9px"
            gap="3rem"
            padding="0.1rem 1.5rem"
          >
            <InputBase placeholder="Search..." />
            <IconButton>
              <Search />
            </IconButton>
          </FlexBetween>
        )}
      </FlexBetween>
      {/* DESKTOP NAV */}
      {isNonMobileScreens ? (
        <FlexBetween gap="2rem">
          <IconButton
            sx={{ fontSize: "25px", borderRadius: "5px" }}
            onClick={() => dispatch(setMode())}
          >
            {theme.palette.mode === "dark" ? (
              <DarkMode sx={{ fontSize: "25px" }} />
            ) : (
              <LightMode sx={{ color: dark, fontSize: "25px" }} />
            )}
          </IconButton>
          <IconButton sx={{ fontSize: "25px", borderRadius: "5px" }}>
            {theme.palette.mode === "dark" ? (
              <FontAwesomeIcon
                icon="fa-solid fa-leaf"
                className="navbar-icon"
              />
            ) : (
              <FontAwesomeIcon
                icon="fa-solid fa-leaf"
                className="navbar-icon dark"
              />
            )}
            {theme.palette.mode === "dark" ? (
              <p className="text-underneath-icon-on-hover">PLANT PROFILES</p>
            ) : (
              <p className="text-underneath-icon-on-hover dark">
                PLANT PROFILES
              </p>
            )}
          </IconButton>
          <IconButton sx={{ fontSize: "25px", borderRadius: "5px" }}>
            {theme.palette.mode === "dark" ? (
              <FontAwesomeIcon
                icon="fa-solid fa-fill-drip"
                className="navbar-icon"
              />
            ) : (
              <FontAwesomeIcon
                icon="fa-solid fa-fill-drip"
                className="navbar-icon dark"
              />
            )}
            {theme.palette.mode === "dark" ? (
              <p className="text-underneath-icon-on-hover">WATERING</p>
            ) : (
              <p className="text-underneath-icon-on-hover dark">WATERING</p>
            )}
          </IconButton>
          <IconButton sx={{ fontSize: "25px", borderRadius: "5px" }}>
            {theme.palette.mode === "dark" ? (
              <FontAwesomeIcon
                icon="fa-solid fa-seedling"
                className="navbar-icon"
              />
            ) : (
              <FontAwesomeIcon
                icon="fa-solid fa-seedling"
                className="navbar-icon dark"
              />
            )}
            {theme.palette.mode === "dark" ? (
              <p className="text-underneath-icon-on-hover">PROPAGATION</p>
            ) : (
              <p className="text-underneath-icon-on-hover dark">PROPAGATION</p>
            )}
          </IconButton>
          <IconButton sx={{ fontSize: "25px", borderRadius: "5px" }}>
            {theme.palette.mode === "dark" ? (
              <FontAwesomeIcon
                icon="fa-solid fa-plant-wilt"
                className="navbar-icon"
              />
            ) : (
              <FontAwesomeIcon
                icon="fa-solid fa-plant-wilt"
                className="navbar-icon dark"
              />
            )}
            {theme.palette.mode === "dark" ? (
              <p className="text-underneath-icon-on-hover">FERTILIZATION</p>
            ) : (
              <p className="text-underneath-icon-on-hover dark">
                FERTILIZATION
              </p>
            )}
          </IconButton>
          {/* <FormControl variant="standard" value={fullName}> */}
          <FormControl variant="standard" value="REPLACE NAME">
            <Select
              // value={fullName}
              value="REPLACE NAME"
              sx={{
                backgroundColor: neutralLight,
                width: "150px",
                borderRadius: "0.25rem",
                p: "0.25rem 1rem",
                "& .MuiSvgIcon-root:": {
                  pr: "0.25rem",
                  width: "3rem",
                },
                "& .MuiSelect-select:focus": {
                  backgroundColor: neutralLight,
                },
              }}
              input={<InputBase />}
            >
              <MenuItem value="REPLACE NAME">
                <Typography>
                  {/* {fullName} */}
                  REPLACE NAME
                </Typography>
              </MenuItem>
              <MenuItem onClick={() => dispatch(setLogout())}>Log Out</MenuItem>
            </Select>
          </FormControl>
        </FlexBetween>
      ) : (
        <IconButton
          onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
        >
          <Menu />
        </IconButton>
      )}
      {/* MOBILE NAV */}
      {!isNonMobileScreens && isMobileMenuToggled && (
        <Box
          position="fixed"
          right="0"
          bottom="0"
          height="100%"
          zIndex="10"
          maxWidth="300px"
          minWidth="200px"
          backgroundColor={background}
        >
          {/* CLOSE ICON */}
          <Box display="flex" justifyContent="flex-end" p="1rem 1.4rem">
            <IconButton
              onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
            >
              <Close />
            </IconButton>
          </Box>
          {/* MENU ITEMS */}
          <div className="nav-mobile-container">
            <IconButton sx={{ fontSize: "25px", borderRadius: "0px" }}>
              <FontAwesomeIcon
                icon="fa-solid fa-leaf"
                className="navbar-icon"
              />
              <p className="nav-mobile-icon-text">Plant Profiles</p>
            </IconButton>
            <IconButton sx={{ fontSize: "25px", borderRadius: "0px" }}>
              <FontAwesomeIcon
                icon="fa-solid fa-fill-drip"
                className="navbar-icon"
              />
              <p className="nav-mobile-icon-text">Watering</p>
            </IconButton>
            <IconButton sx={{ fontSize: "25px", borderRadius: "0px" }}>
              <FontAwesomeIcon
                icon="fa-solid fa-seedling"
                className="navbar-icon"
              />
              <p className="nav-mobile-icon-text">Propagation</p>
            </IconButton>
            <IconButton sx={{ fontSize: "25px", borderRadius: "0px" }}>
              <FontAwesomeIcon
                icon="fa-solid fa-plant-wilt"
                className="navbar-icon"
              />
              <p className="nav-mobile-icon-text">Fertilization</p>
            </IconButton>

            {/* <FormControl variant="standard" value={fullName}> */}
            <FormControl variant="standard" value="REPLACE NAME">
              <Select
                // value={fullName}
                value="REPLACE NAME"
                sx={{
                  backgroundColor: neutralLight,
                  width: "150px",
                  borderRadius: "0.25rem",
                  p: "0.25rem 1rem",
                  "& .MuiSvgIcon-root:": {
                    pr: "0.25rem",
                    width: "3rem",
                  },
                  "& .MuiSelect-select:focus": {
                    backgroundColor: neutralLight,
                  },
                }}
                input={<InputBase />}
              >
                <MenuItem value="REPLACE NAME">
                  <Typography>
                    {/* {fullName} */}
                    REPLACE NAME
                  </Typography>
                </MenuItem>
                <MenuItem onClick={() => dispatch(setLogout())}>
                  Log Out
                </MenuItem>
              </Select>
            </FormControl>
            <IconButton
              sx={{ fontSize: "25px", borderRadius: "0px" }}
              onClick={() => dispatch(setMode())}
            >
              {theme.palette.mode === "dark" ? (
                <DarkMode sx={{ fontSize: "25px" }} />
              ) : (
                <LightMode sx={{ color: dark, fontSize: "25px" }} />
              )}
              <p className="nav-mobile-icon-text">Theme</p>
            </IconButton>
          </div>
        </Box>
      )}
    </FlexBetween>
  );
}
