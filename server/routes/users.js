import express from "express";
import { getUser, getUserPlantProfiles } from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

// READ
router.get("/:id", verifyToken, getUser);
// router.get("/:id/plant-profiles", verifyToken, getUserPlantProfiles);

// UPDATE

export default router;
