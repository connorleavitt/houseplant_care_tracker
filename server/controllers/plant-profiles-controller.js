import PlantProfile from "../models/PlantProfile.js";

// GET
export const getPlantProfile = async (req, res) => {
  try {
    const PlantProfile = await PlantProfile.find();
    res.status(200).json(PlantProfile);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// POST
export const createPlantProfile = async (req, res) => {
  const plantProfile = req.body;
  const newPlantProfile = new PlantProfile(PlantProfile);
  try {
    await newPlantProfile.save();
    res.status(201).json(newPlantProfile);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
