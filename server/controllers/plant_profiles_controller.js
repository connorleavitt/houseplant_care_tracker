import PlantProfile from "../models/plant_profile.js";

// GET
export const getPlantProfiles = async (req, res) => {
  try {
    const plantProfiles = await PlantProfile.find();
    res.status(200).json(plantProfiles);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// POST
export const createPlantProfile = async (req, res) => {
  const profile = req.body;
  const newProfile = new PlantProfile(profile);
  try {
    await newProfile.save();
    res.status(201).json(newProfile);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
