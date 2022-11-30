import mongoose from "mongoose";

const Schema = mongoose.Schema;

const PlantProfileSchema = new Schema({
  plant_name: { type: String, required: true, maxLength: 100 },
  scientific_name: { type: String, maxLength: 100 },
  date_acquired: { type: Date, required: true },
  plant_type: { type: String, maxLength: 50 },
  i_got_it_from: { type: String, required: true, maxLength: 100 },
  toxicity: { type: String, maxLength: 50 },
  water: { type: String, maxLength: 50 },
  light: { type: String, maxLength: 50 },
  soil_type: { type: String, maxLength: 50 },
  humidity: { type: String, maxLength: 50 },
  ideal_temp: { type: String, maxLength: 50 },
  fertilization_method: { type: String, maxLength: 50 },
  fertilization_frequency: { type: String, maxLength: 50 },
  water_level: { type: Number, default: 1, min: 1, max: 5 },
  sunlight_level: { type: Number, default: 1, min: 1, max: 5 },
  common_issues: { type: String, maxLength: 300 },
  notes: { type: String, maxLength: 500 },
  image: { type: String },
  date_created: { type: Date, defualt: new Date() },
  date_last_edited: { type: Date },
});

const PlantProfile = mongoose.model("PlantProfile", PlantProfileSchema);

export default PlantProfile;
