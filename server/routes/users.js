import express from "express";
import { getAllUsers, getUser, updateUser } from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

// READ
router.get("/:id", verifyToken, getUser);
// router.get("/:id/plant-profiles", verifyToken, getUserPlantProfiles);
router.get("/", verifyToken, getAllUsers);

// UPDATE
router.patch("/:id/edit", updateUser);

export default router;
