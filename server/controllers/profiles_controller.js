import Profile from "../models/profile.js";

// GET
export const getProfiles = async (req, res) => {
  try {
    const Profiles = await Profile.find();
    res.status(200).json(Profiles);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// POST
export const createProfile = async (req, res) => {
  const profile = req.body;
  const newProfile = new Profile(profile);
  try {
    await newProfile.save();
    res.status(201).json(newProfile);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
