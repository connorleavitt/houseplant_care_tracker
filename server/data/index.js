import mongoose from "mongoose";

const userIds = [new mongoose.Types.ObjectId(), new mongoose.Types.ObjectId()];

export const users = [
  {
    _id: userIds[0],
    firstName: "Johnny",
    lastName: "Rose",
    email: "johnny@rosevideo.com",
    password: "johnny_password",
    picturePath: "johnny.webp",
    createdAt: "2022-10-30",
    updatedAt: "2022-10-30",
    __v: 0,
  },
  {
    _id: userIds[1],
    firstName: "Moira",
    lastName: "Rose",
    email: "moira@rosevideo.com",
    password: "moira_password",
    picturePath: "moira.jpg",
    createdAt: "2022-11-05",
    updatedAt: "2022-11-05",
    __v: 0,
  },
];

export const plantProfiles = [
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[0],
    userFirstName: "Johnny",
    location: "Schitt's Creek, IDK",
    userPicturePath: "johnny.webp",
    plantName: "Monstera aka Swiss Cheese Plant",
    scientificName: "Monstera Deliciosa",
    dateAcquired: "2020-08-01",
    plantFamily: "Araceae",
    iGotItFrom: "Rose Apothecary",
    toxicity: "Medium",
    water: "yes",
    light: "yes",
    soilType: "soil-y",
    humidity: "sure, why not",
    idealTemp: "hot",
    fertilizationMethod: "n/a",
    fertilizationFrequency: "n/a",
    waterLevel: "4",
    sunlightLevel: "4",
    commonIssues: "it doesn't grow more holes!",
    notes: "seriously why doesn't it grow more holes!",
    picturePath: "monstera.jpg",
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[0],
    userFirstName: "Johnny",
    location: "Schitt's Creek, IDK",
    userPicturePath: "johnny.webp",
    plantName: "Aloe",
    scientificName: "Aloe Vera",
    dateAcquired: "2020-08-01",
    plantFamily: "Asphodelaceae",
    iGotItFrom: "Rose Apothecary",
    toxicity: "Low",
    water: "yes",
    light: "yes",
    soilType: "soil-y",
    humidity: "sure, why not",
    idealTemp: "hot",
    fertilizationMethod: "n/a",
    fertilizationFrequency: "n/a",
    waterLevel: "1",
    sunlightLevel: "5",
    commonIssues: "spikey!",
    notes: "can I use it if I hurt myself?",
    picturePath: "aloe.jpg",
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[0],
    userFirstName: "Johnny",
    location: "Schitt's Creek, IDK",
    userPicturePath: "johnny.webp",
    plantName: "Pilea aka Chinese Money Plant",
    scientificName: "Pilea peperomioides",
    dateAcquired: "2020-08-01",
    plantFamily: "Urticaceae",
    iGotItFrom: "Rose Apothecary",
    toxicity: "Low",
    water: "yes",
    light: "yes",
    soilType: "soil-y",
    humidity: "nah",
    idealTemp: "zone 11",
    fertilizationMethod: "n/a",
    fertilizationFrequency: "n/a",
    waterLevel: "3",
    sunlightLevel: "2",
    commonIssues: "insert common issue here",
    notes: "the leaves kind of look like a pancake",
    picturePath: "pilea.jpg",
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[1],
    userFirstName: "Moira",
    location: "Schitt's Creek, IDK",
    userPicturePath: "moira.jpg",
    plantName: "cactus",
    scientificName: "cactus",
    dateAcquired: "2012-02-16",
    plantFamily: "cactus",
    iGotItFrom: "Rose Apothecary",
    toxicity: "High",
    water: "not much",
    light: "yes",
    soilType: "soil-y",
    humidity: "sure",
    idealTemp: "hot",
    fertilizationMethod: "n/a",
    fertilizationFrequency: "n/a",
    waterLevel: "1",
    sunlightLevel: "5",
    commonIssues: "it hurts when I touch it",
    notes: "It doesn't grow much...?",
    picturePath: "cactus.jpg",
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[1],
    userFirstName: "Moira",
    location: "Schitt's Creek, IDK",
    userPicturePath: "moira.jpg",
    plantName: "calathea",
    scientificName: "calathea",
    dateAcquired: "2021-12-24",
    plantFamily: "calathea",
    iGotItFrom: "Rose Apothecary",
    toxicity: "High",
    water: "not much",
    light: "partial shade",
    soilType: "soil-y",
    humidity: "sure",
    idealTemp: "hot",
    fertilizationMethod: "n/a",
    fertilizationFrequency: "n/a",
    waterLevel: "3",
    sunlightLevel: "3",
    commonIssues: "really prefers filtered water - so picky!",
    notes: "looks pretty, very symmetrical",
    picturePath: "calathea.jpg",
  },
];
