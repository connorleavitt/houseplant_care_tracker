import React, { useState } from "react";
import {
  IconButton,
  InputBase,
  Typography,
  Select,
  MenuItem,
  FormControl,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Box } from "@mui/system";

import { Search, DarkMode, LightMode, Menu, Close } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { setMode, setLogout } from "state";
import { useNavigate } from "react-router-dom";
import FlexBetween from "components/FlexBetween";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavbarPage({ userId, picturePath }) {
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  const theme = useTheme();
  const neutralLight = theme.palette.neutral.light;
  const dark = theme.palette.neutral.dark;
  const background = theme.palette.background.default;
  const primaryDark = theme.palette.primary.dark;
  const primaryMain = theme.palette.primary.main;
  const alt = theme.palette.background.alt;

  const fullName = `${user.firstName} ${user.lastName}`;

  return (
    <FlexBetween padding="1rem 6%" backgroundColor={alt} className="navbar">
      <FlexBetween gap="1.75rem">
        <Box sx={{ minWidth: "300px" }}>
          <Typography
            fontWeight="bold"
            fontSize="clamp(1rem, 1.5rem, 2rem)"
            color={primaryDark}
            onClick={() => navigate("/home")}
            sx={{
              "&:hover": {
                color: primaryMain,
                cursor: "pointer",
              },
            }}
          >
            Houseplant Care Tracker
          </Typography>
        </Box>
        {isNonMobileScreens && (
          <FlexBetween
            backgroundColor={neutralLight}
            borderRadius="9px"
            gap="1rem"
            padding="0.1rem 1rem"
          >
            <InputBase sx={{ minWidth: "100px" }} placeholder="Search..." />
            <IconButton>
              <Search />
            </IconButton>
          </FlexBetween>
        )}
      </FlexBetween>
      {/* DESKTOP NAV */}
      {isNonMobileScreens ? (
        <FlexBetween gap="1rem">
          <IconButton
            sx={{ fontSize: "25px", borderRadius: "5px" }}
            onClick={() => dispatch(setMode())}
          >
            {theme.palette.mode === "dark" ? (
              <DarkMode sx={{ fontSize: "25px" }} />
            ) : (
              <LightMode sx={{ color: dark, fontSize: "25px" }} />
            )}
            {theme.palette.mode === "dark" ? (
              <p className="text-underneath-icon-on-hover">THEME</p>
            ) : (
              <p className="text-underneath-icon-on-hover dark">THEME</p>
            )}
          </IconButton>
          <IconButton
            sx={{ fontSize: "25px", borderRadius: "5px" }}
            onClick={() => navigate(`/plant-profiles`)}
          >
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
          <IconButton
            sx={{ fontSize: "25px", borderRadius: "5px" }}
            onClick={() => navigate(`/watering`)}
          >
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
          <IconButton
            sx={{ fontSize: "25px", borderRadius: "5px" }}
            onClick={() => navigate(`/propagation`)}
          >
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
          <IconButton
            sx={{ fontSize: "25px", borderRadius: "5px" }}
            onClick={() => navigate(`/fertilization`)}
          >
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
          <FormControl variant="standard" value={fullName}>
            <Select
              value={fullName}
              sx={{
                backgroundColor: neutralLight,
                width: "fit-content",
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
              <MenuItem
                onClick={() => navigate("/user/account")}
                value={fullName}
              >
                <Typography fontSize="1rem">{fullName}</Typography>
              </MenuItem>
              <MenuItem onClick={() => dispatch(setLogout())}>
                <Typography fontSize="1rem">Log Out</Typography>
              </MenuItem>
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
            <IconButton
              sx={{ fontSize: "25px", borderRadius: "0px" }}
              onClick={() => navigate(`/plant-profiles`)}
            >
              <FontAwesomeIcon
                icon="fa-solid fa-leaf"
                className="navbar-icon"
              />
              <p className="nav-mobile-icon-text">Plant Profiles</p>
            </IconButton>
            <IconButton
              sx={{ fontSize: "25px", borderRadius: "0px" }}
              onClick={() => navigate(`/watering`)}
            >
              <FontAwesomeIcon
                className="navbar-icon"
                icon="fa-solid fa-fill-drip"
              />
              <p className="nav-mobile-icon-text">Watering</p>
            </IconButton>
            <IconButton
              sx={{ fontSize: "25px", borderRadius: "0px" }}
              onClick={() => navigate(`/propagation`)}
            >
              <FontAwesomeIcon
                icon="fa-solid fa-seedling"
                className="navbar-icon"
              />
              <p className="nav-mobile-icon-text">Propagation</p>
            </IconButton>
            <IconButton
              sx={{ fontSize: "25px", borderRadius: "0px" }}
              onClick={() => navigate(`/fertilization`)}
            >
              <FontAwesomeIcon
                icon="fa-solid fa-plant-wilt"
                className="navbar-icon"
              />
              <p className="nav-mobile-icon-text">Fertilization</p>
            </IconButton>

            <FormControl variant="standard" value={fullName}>
              <Select
                value={fullName}
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
                <MenuItem
                  value={fullName}
                  onClick={() => navigate("/user/account")}
                >
                  <Typography>{fullName}</Typography>
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
