import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  user: null,
  token: null,
  plantProfiles: [],
  allPlantProfiles: [],
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
    setUser: (state, action) => {
      state.user = action.payload.user;
    },
    setAllUsers: (state, action) => {
      state.allUsers = action.payload.allUsers;
    },
    setPlantProfiles: (state, action) => {
      state.plantProfiles = action.payload.plantProfiles;
    },
    setAllPlantProfiles: (state, action) => {
      state.allPlantProfiles = action.payload.allPlantProfiles;
    },
    setPlantProfile: (state, action) => {
      const updatedPlantProfiles = state.plantProfiles.map((plantProfiles) => {
        if (plantProfiles._id === action.payload.plantProfiles._id)
          return action.payload.plantProfiles;
        return plantProfiles;
      });
      state.plantProfiles = updatedPlantProfiles;
    },
    setRandomPlantFact: (state, action) => {
      state.randomPlantFact = action.payload.randomPlantFact;
    },
  },
});

export const {
  setMode,
  setLogin,
  setLogout,
  setUser,
  setAllUsers,
  setPlantProfiles,
  setAllPlantProfiles,
  setPlantProfile,
  setRandomPlantFact,
} = authSlice.actions;

export default authSlice.reducer;
