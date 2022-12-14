import PlantProfile from "../models/PlantProfile.js";
import User from "../models/User.js";

// GET (READ) of all user's pps
export const getAllPlantProfiles = async (req, res) => {
  try {
    const plantProfile = await PlantProfile.find();
    res.status(200).json(plantProfile);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// GET (READ) of all user's pps
export const getUserPlantProfiles = async (req, res) => {
  try {
    const { userId } = req.params;
    const plantProfile = await PlantProfile.find({ userId });
    res.status(200).json(plantProfile);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// GET (READ) of specific pp
export const getSpecificUserPlantProfile = async (req, res) => {
  try {
    const { userId, id } = req.params;
    //check these values
    // console.log(req.params);
    const plantProfile = await PlantProfile.find({ userId, _id: id });
    // console.log(plantProfile);
    res.status(200).json(plantProfile);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// POST (CREATE) new pp
export const createPlantProfile = async (req, res) => {
  try {
    console.log("body", req.body);

    const {
      userId,
      plantName,
      scientificName,
      dateAcquired,
      plantFamily,
      iGotItFrom,
      toxicity,
      water,
      light,
      soilType,
      humidity,
      idealTemp,
      fertilizationMethod,
      fertilizationFrequency,
      currentLocation,
      waterLevel,
      sunlightLevel,
      commonIssues,
      notes,
      picturePath,
    } = req.body;
    const user = await User.findById(userId);

    const newPlantProfile = new PlantProfile({
      userId,
      userFirstName: user.firstName,
      userPicturePath: user.picturePath,
      plantName,
      scientificName,
      dateAcquired,
      plantFamily,
      iGotItFrom,
      toxicity,
      water,
      light,
      soilType,
      humidity,
      idealTemp,
      fertilizationMethod,
      fertilizationFrequency,
      currentLocation,
      waterLevel,
      sunlightLevel,
      commonIssues,
      notes,
      picturePath,
    });
    await newPlantProfile.save();
    const plantProfile = await PlantProfile.find();

    res.status(201).json(plantProfile);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// handle specific pp UPDATE form on POST.
export const postUpdateFormForUserPlantProfile = async (req, res) => {
  try {
    const { userId, id } = req.params;
    const {
      plantName,
      scientificName,
      dateAcquired,
      plantType,
      iGotItFrom,
      toxicity,
      water,
      light,
      soilType,
      humidity,
      idealTemp,
      fertilizationMethod,
      fertilizationFrequency,
      waterLevel,
      sunlightLevel,
      commonIssues,
      notes,
      picturePath,
    } = req.body;
    const updatedPlantProfile = await PlantProfile.findByIdAndUpdate({ id });

    res.status(200).json(updatedPlantProfile);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// ^^need to figure out futher
//  1:31:33 in video
