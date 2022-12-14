import express from "express";
import { verifyToken } from "../middleware/auth.js";
import {
  getAllPlantProfiles,
  getUserPlantProfiles,
  getSpecificUserPlantProfile,
  // createPlantProfile,
  deleteUserPlantProfile,
  updateUserPlantProfileCurrentPhoto,
} from "../controllers/plant-profiles-controller.js";

const router = express.Router();

// READ
router.get("/all", verifyToken, getAllPlantProfiles);
// router.get("/:userId/plant-profiles", verifyToken, getUserPlantProfiles);
router.get("/:userId/all", verifyToken, getUserPlantProfiles);
router.get("/:userId/:id", verifyToken, getSpecificUserPlantProfile);

// UPDATE
router.patch("/:userId/:id/edit", updateUserPlantProfileCurrentPhoto);

// POST
// router.post("/create", createPlantProfile);

// DELETE
router.delete("/:userId/:id", verifyToken, deleteUserPlantProfile);

export default router;
