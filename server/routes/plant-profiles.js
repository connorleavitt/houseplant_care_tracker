import express from "express";
import { verifyToken } from "../middleware/auth.js";
import {
  getAllPlantProfiles,
  getUserPlantProfiles,
  getSpecificUserPlantProfile,
  // createPlantProfile,
  postUpdateFormForUserPlantProfile,
} from "../controllers/plant-profiles-controller.js";

const router = express.Router();

// READ
router.get("/all", verifyToken, getAllPlantProfiles);
// router.get("/:userId/plant-profiles", verifyToken, getUserPlantProfiles);
router.get("/:userId/all", verifyToken, getUserPlantProfiles);
router.get("/:userId/:id", verifyToken, getSpecificUserPlantProfile);

// UPDATE
router.patch("/:userId/:id", verifyToken, postUpdateFormForUserPlantProfile);

// POST
// router.post("/create", createPlantProfile);

export default router;
