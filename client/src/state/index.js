import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  user: null,
  token: null,
  plantProfiles: [],
  allUsers: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
    // setEditProfile: (state, action) => {
    //   state.user = action.payload.user;
    //   state.token = action.payload.token;
    // },
    setAllUsers: (state, action) => {
      state.allUsers = action.payload.allUsers;
    },
    setPlantProfiles: (state, action) => {
      state.plantProfiles = action.payload.plantProfiles;
    },
    setPlantProfile: (state, action) => {
      const updatedPlantProfiles = state.plantProfiles.map((plantProfiles) => {
        if (plantProfiles._id === action.payload.plantProfiles._id)
          return action.payload.plantProfiles;
        return plantProfiles;
      });
      state.plantProfiles = updatedPlantProfiles;
    },
  },
});

export const {
  setMode,
  setLogin,
  setLogout,
  setAllUsers,
  setPlantProfiles,
  setPlantProfile,
} = authSlice.actions;

export default authSlice.reducer;
