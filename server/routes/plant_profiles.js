import express from "express";

import {
  getPlantProfiles,
  createPlantProfile,
} from "../controllers/plant_profiles_controller.js";

const router = express.Router();

router.get("/", getPlantProfiles);
router.post("/", createPlantProfile);

export default router;
