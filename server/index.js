import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import * as dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import plantProfileRoutes from "./routes/plant-profiles.js";
import { register } from "./controllers/auth.js";
import { createPlantProfile } from "./controllers/plant-profiles-controller.js";
import { verifyToken } from "./middleware/auth.js";
import User from "./models/User.js";
import PlantProfile from "./models/PlantProfile.js";
import { users, plantProfiles } from "./data/index.js";

// CONFIGURATIONS

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
const app = express();

app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, "public/assets"))); // local storage for images

// FILE STORAGE

const storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, "public/assets");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

// ROUTES WITH FILES
app.post("/auth/register", upload.single("picture"), register);
app.post(
  "/plant-profiles",
  verifyToken,
  upload.single("picture"),
  createPlantProfile
);

// ROUTES
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/plant-profiles", plantProfileRoutes);

// MONGOOSE SETUP

const PORT = process.env.PORT || 4000;
const CONNECTION_URL = process.env.MONGODB_CONNECTION_URL;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false, need to understand this a bit more - deprecated?
  })
  .then(() => app.listen(PORT, () => console.log(`Server running on ${PORT}`)))
  .catch((error) => console.log(error.message));

// module.exports = app;
