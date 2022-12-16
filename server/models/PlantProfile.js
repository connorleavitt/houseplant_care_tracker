import mongoose from "mongoose";

const Schema = mongoose.Schema;

const PlantProfileSchema = new Schema(
  {
    userId: { type: String },
    userFirstName: { type: String },
    userPicturePath: { type: String },
    plantName: { type: String, maxLength: 100 },
    scientificName: { type: String, maxLength: 100 },
    plantFamily: { type: String },
    dateAcquired: { type: Date },
    iGotItFrom: { type: String, maxLength: 100 },
    toxicity: { type: String, maxLength: 50 },
    water: { type: String, maxLength: 200 },
    light: { type: String, maxLength: 200 },
    soilType: { type: String, maxLength: 200 },
    humidity: { type: String, maxLength: 50 },
    idealTemp: { type: String, maxLength: 50 },
    fertilizationMethod: { type: String, maxLength: 50 },
    fertilizationFrequency: { type: String, maxLength: 50 },
    currentLocation: { type: String },
    waterLevel: { type: Number, default: 1, min: 1, max: 5 },
    sunlightLevel: { type: Number, default: 1, min: 1, max: 5 },
    commonIssues: { type: String, maxLength: 1000 },
    notes: { type: String, maxLength: 500 },
    picturePath: { type: String },
  },
  { timestamps: true }
);

// PlantProfileSchema.virtual("url").get(function () {
//   return `/plant-profiles/${this.userId}/${this._id}`;
// });

const PlantProfile = mongoose.model("PlantProfile", PlantProfileSchema);

export default PlantProfile;
