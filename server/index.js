import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import * as dotenv from "dotenv";

import plantProfileRoutes from "./routes/plant_profiles.js";

dotenv.config();
const app = express();

app.use("/plant_profiles", plantProfileRoutes);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URL = process.env.MONGODB_CONNECTION_URL;
const PORT = process.env.PORT || 4000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false, need to understand this a bit more - deprecated?
  })
  .then(() => app.listen(PORT, () => console.log(`Server running on ${PORT}`)))
  .catch((error) => console.log(error.message));

// module.exports = app;
