import express from "express";

import {
  getPlantProfiles,
  createPlantProfile,
} from "../controllers/plant-profiles-controller.js";

const router = express.Router();

router.get("/", getPlantProfiles);
router.post("/", createPlantProfile);

export default router;
