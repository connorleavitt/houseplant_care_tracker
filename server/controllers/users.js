import User from "../models/User.js";

// READ
export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
// GET (READ) of all users

export const getAllUsers = async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// handle user UPDATE form (SAME PHOTO)
export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      { _id: id },
      {
        firstName,
        lastName,
      }
    );

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// handle user UPDATE form (NEW PHOTO)
export const updateUserNewPhoto = async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, picturePath } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      { _id: id },
      {
        firstName,
        lastName,
        picturePath,
      }
    );

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
