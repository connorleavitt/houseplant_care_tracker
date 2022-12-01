import express from "express";
import { verifyToken } from "../middleware/auth.js";
import {
  getUserPlantProfiles,
  getSpecificUserPlantProfile,
} from "../controllers/plant-profiles-controller.js";

const router = express.Router();

// READ

// router.get("/:userId/plant-profiles", verifyToken, getUserPlantProfiles);
router.get("/:userId/all", verifyToken, getUserPlantProfiles);
router.get("/:userId/:id", verifyToken, getSpecificUserPlantProfile);

// UPDATE
// router.patch('/:')

export default router;
