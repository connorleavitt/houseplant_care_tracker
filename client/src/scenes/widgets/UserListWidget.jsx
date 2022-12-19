import { Box, Typography, useTheme } from "@mui/material";
import UserImage from "components/UserImage";
import FlexBetween from "components/FlexBetween";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { setAllUsers } from "state";
import WidgetWrapper from "components/WidgetWrapper";

const UserListWidget = () => {
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.allUsers);
  const navigate = useNavigate();
  const token = useSelector((state) => state.token);
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  // const medium = palette.neutral.medium;
  // const main = palette.neutral.main;

  const getAllUsers = async () => {
    const response = await fetch("http://localhost:3001/users/", {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    dispatch(setAllUsers({ allUsers: data }));
  };

  useEffect(() => {
    getAllUsers();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (!allUsers) {
    return null;
  }

  return (
    <>
      <WidgetWrapper m="2rem 0">
        <h3 className="home--list-all-users">All Users</h3>
        {allUsers.map(({ _id, userId, firstName, lastName, picturePath }) => (
          <Box
            key={_id}
            p="0.25rem 0"
            display="flex"
            alignItems="center"
            mt="1rem"
          >
            <UserImage image={picturePath} size="30px" borderRadius="5px" />
            <Box pl="1rem">
              <Typography
                variant="h4"
                color={dark}
                fontWeight="500"
                sx={{
                  "&:hover": {
                    color: palette.secondary.dark,
                    cursor: "pointer",
                  },
                }}
              >
                {firstName} {lastName}
              </Typography>
            </Box>
          </Box>
        ))}
      </WidgetWrapper>
    </>
  );
};

export default UserListWidget;
