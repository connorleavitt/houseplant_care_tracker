import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Slider,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

import { Formik, Field, Form } from "formik";
import * as yup from "yup";
import FlexBetween from "components/FlexBetween";
import Dropzone from "react-dropzone";
// import { DesktopDatePicker } from "@mui/x-date-pickers";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "@emotion/styled";

const plantProfileSchema = yup.object().shape({
  plantName: yup.string().required("required"),
  scientificName: yup.string().required("required"),
  dateAcquired: yup.string().required("required"),
  plantFamily: yup.string().required("required"),
  iGotItFrom: yup.string().required("required"),
  toxicity: yup.string().required("required"),
  water: yup.string().required("required"),
  light: yup.string().required("required"),
  soilType: yup.string().required("required"),
  humidity: yup.string().required("required"),
  idealTemp: yup.string().required("required"),
  fertilizationMethod: yup.string().required("required"),
  fertilizationFrequency: yup.string().required("required"),
  currentLocation: yup.string().required("required"),
  waterLevel: yup.string().required("required"),
  sunlightLevel: yup.string().required("required"),
  commonIssues: yup.string().required("required"),
  notes: yup.string().required("required"),
});

// const savedValuesPlantProfile = {
//   userId: "",
//   userFirstName: "",
//   userPicturePath: "",
//   plantName: "",
//   scientificName: "",
//   dateAcquired: "",
//   plantFamily: "",
//   iGotItFrom: "",
//   toxicity: "",
//   water: "",
//   light: "",
//   soilType: "",
//   humidity: "",
//   idealTemp: "",
//   fertilizationMethod: "",
//   fertilizationFrequency: "",
//   waterLevel: "",
//   sunlightLevel: "",
//   commonIssues: "",
//   notes: "",
//   picturePath: "",
// };

export default function PlantProfileForm() {
  const isNonMobileScreens = useMediaQuery("(min-width: 800px");

  const { _id } = useSelector((state) => state.user);

  const [error, setError] = useState(null);
  const { palette } = useTheme();
  const navigate = useNavigate();

  const newPlantProfileForm = async (values, onSubmitProps) => {
    const formData = new FormData();
    for (let value in values) {
      formData.append(value, values[value]);
    }
    formData.append("picturePath", values.picture.name);

    const savedUserResponse = await fetch(
      "http://localhost:3001/plant-profiles/create",
      {
        method: "POST",
        // headers: { "Content-Type": "application/json" },
        body: formData,
      }
    );
    // console.log(savedUserResponse);
    const savedPlantProfile = await savedUserResponse.json();
    onSubmitProps.resetForm();

    if (!savedUserResponse.ok) {
      setError(savedPlantProfile.error);
      console.log(error);
    }

    if (savedUserResponse.ok) {
      setError(null);
      console.log("New plant profile added", savedPlantProfile);
      navigate("/");
    }
  };

  const handleFormSubmit = async (values, onSubmitProps) => {
    await newPlantProfileForm(values, onSubmitProps);
  };

  const PrettoSlider = styled(Slider)({
    color: "#52af77",
    height: 8,
    "& .MuiSlider-track": {
      border: "none",
    },
    "& .MuiSlider-thumb": {
      height: 24,
      width: 24,
      backgroundColor: "#fff",
      border: "2px solid currentColor",
      "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
        boxShadow: "inherit",
      },
      "&:before": {
        display: "none",
      },
    },
    "& .MuiSlider-valueLabel": {
      lineHeight: 1.2,
      fontSize: 12,
      background: "unset",
      padding: 0,
      width: 32,
      height: 32,
      borderRadius: "50% 50% 50% 0%",
      backgroundColor: "#52af77",
      transformOrigin: "bottom left",
      transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
      "&:before": { display: "none" },
      "&.MuiSlider-valueLabelOpen": {
        transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
      },
      "& > *": {
        transform: "rotate(45deg)",
      },
    },
  });

  return (
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={{
        userId: _id,
        plantName: "",
        scientificName: "",
        dateAcquired: "",
        plantFamily: "",
        iGotItFrom: "",
        toxicity: "",
        water: "",
        light: "",
        soilType: "",
        humidity: "",
        idealTemp: "",
        fertilizationMethod: "",
        fertilizationFrequency: "",
        currentLocation: "Indoors",
        waterLevel: Number(3),
        sunlightLevel: Number(3),
        commonIssues: "",
        notes: "",
      }}

      // validationSchema={plantProfileSchema}
    >
      {({ values, isSubmitting, setFieldValue }) => (
        <Form>
          <pre>{JSON.stringify(values, null, 2)}</pre>

          <Box
            className="pp-card--container"
            display={isNonMobileScreens ? "grid" : "flex"}
            sx={{
              gridTemplateColumns: "repeat(2, 1fr)",
              gridTemplateRows: "auto",
              gridTemplateAreas: `"header header"
                                  "left right"
                                  "notes notes"
                                  "buttons buttons"`,
            }}
          >
            <Box sx={{ gridArea: "header" }}>
              <h2 className="pp-card--title">Create a new Plant Profile</h2>
            </Box>

            <Box className="pp-card--left-side" sx={{ gridArea: "left" }}>
              <Box
                border={`1px solid ${palette.neutral.medium}`}
                borderRadius="5px"
                p="1rem"
              >
                <Dropzone
                  acceptedFiles=".jpg,.jpeg,.png,.webp"
                  multiple={false}
                  onDrop={(acceptedFiles) =>
                    setFieldValue("picture", acceptedFiles[0])
                  }
                >
                  {({ getRootProps, getInputProps }) => (
                    <Box
                      {...getRootProps()}
                      border={`2px dashed ${palette.primary.main}`}
                      p="1rem"
                      sx={{ "&:hover": { cursor: "pointer" } }}
                    >
                      <input {...getInputProps()} />
                      {!values.picture ? (
                        <p>Add Picture Here</p>
                      ) : (
                        <FlexBetween>
                          <Typography>{values.picture.name}</Typography>
                          <EditOutlinedIcon />
                        </FlexBetween>
                      )}
                    </Box>
                  )}
                </Dropzone>
              </Box>
              <Field
                placeholder="commonIssues"
                name="commonIssues"
                type="input"
                as={TextField}
              />
            </Box>
            <Box
              className="pp-card--right-side"
              sx={{ gridArea: "right" }}
              display="flex"
              flexDirection="column"
              gap="30px"
            >
              <Box className="pp-card--general-info">
                <h4 className="pp-card--headers">GENERAL INFO</h4>
                <div className="pp-card--form-individual">
                  <div className="pp-card--form-label">PLANT NAME:</div>
                  <Field
                    placeholder="plant name"
                    name="plantName"
                    type="input"
                    as={TextField}
                  />
                </div>
                <div className="pp-card--form-individual">
                  <div className="pp-card--form-label">SCIENTIFIC NAME:</div>
                  <Field
                    placeholder="scientific name"
                    name="scientificName"
                    type="input"
                    as={TextField}
                  />
                </div>
                <div className="pp-card--form-individual">
                  <div className="pp-card--form-label">DATE ACQUIRED:</div>
                  <Field
                    placeholder="date acquired"
                    name="dateAcquired"
                    type="input"
                    as={TextField}
                  />
                </div>
                <div className="pp-card--form-individual">
                  <div className="pp-card--form-label">PLANT TYPE:</div>
                  <Field
                    placeholder="plantFamily"
                    name="plantFamily"
                    type="input"
                    as={TextField}
                  />
                </div>
                <div className="pp-card--form-individual">
                  <div className="pp-card--form-label">I GOT IT FROM:</div>
                  <Field
                    placeholder="iGotItFrom"
                    name="iGotItFrom"
                    type="input"
                    as={TextField}
                  />
                </div>
                <div className="pp-card--form-individual">
                  <div className="pp-card--form-label">TOXICITIY:</div>
                  <Field
                    placeholder="toxicity"
                    name="toxicity"
                    type="input"
                    as={TextField}
                  />
                </div>
              </Box>
              <Box className="pp-card--plant-care-needs">
                <h4 className="pp-card--headers">PLANT CARE NEEDS</h4>
                <div className="pp-card--form-individual">
                  <div className="pp-card--form-label">WATER:</div>
                  <Field
                    placeholder="water"
                    name="water"
                    type="input"
                    as={TextField}
                  />
                </div>
                <div className="pp-card--form-individual">
                  <div className="pp-card--form-label">LIGHT:</div>
                  <Field
                    placeholder="light"
                    name="light"
                    type="input"
                    as={TextField}
                  />
                </div>
                <div className="pp-card--form-individual">
                  <div className="pp-card--form-label">SOIL TYPE:</div>
                  <Field
                    placeholder="soilType"
                    name="soilType"
                    type="input"
                    as={TextField}
                  />
                </div>
                <div className="pp-card--form-individual">
                  <div className="pp-card--form-label">HUMIDITY:</div>
                  <Field
                    placeholder="humidity"
                    name="humidity"
                    type="input"
                    as={TextField}
                  />
                </div>
                <div className="pp-card--form-individual">
                  <div className="pp-card--form-label">IDEAL TEMP:</div>
                  <Field
                    placeholder="idealTemp"
                    name="idealTemp"
                    type="input"
                    as={TextField}
                  />
                </div>
              </Box>
              <Box className="pp-card--fertilization">
                <h4 className="pp-card--headers">FERTILIZATION</h4>
                <div className="pp-card--form-individual">
                  <div className="pp-card--form-label">METHOD:</div>
                  <Field
                    placeholder="fertilizationMethod"
                    name="fertilizationMethod"
                    type="input"
                    as={TextField}
                  />
                </div>
                <div className="pp-card--form-individual">
                  <div className="pp-card--form-label">FREQUENCY:</div>
                  <Field
                    placeholder="fertilizationFrequency"
                    name="fertilizationFrequency"
                    type="input"
                    as={TextField}
                  />
                </div>
              </Box>
              <Box className="pp-card--location">
                <FormControl className="pp-card--locations-container">
                  <FormLabel id="demo-radio-buttons-group-label">
                    <h4 className="pp-card--headers">CURRENT LOCATION</h4>
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="currentLocation-label"
                    defaultValue="Indoors"
                    name="currentLocation"
                    value={values.currentLocation.toString()}
                    onChange={(event) => {
                      setFieldValue(
                        "currentLocation",
                        event.currentTarget.value
                      );
                    }}
                  >
                    <FormControlLabel
                      value="Indoors"
                      control={<Radio />}
                      label="Indoors"
                    />
                    <FormControlLabel
                      value="Outdoors"
                      control={<Radio />}
                      label="Outdoors"
                    />
                    <FormControlLabel
                      value="Other"
                      control={<Radio />}
                      label="Other"
                    />
                  </RadioGroup>
                </FormControl>
              </Box>
              <Box className="pp-card--water">
                <h4 className="pp-card--headers">WATER</h4>
                <div className="pp-card--water-container">
                  <Typography gutterBottom>
                    Select the water level from 1 (low) to 5 (high)
                  </Typography>
                  <Typography gutterBottom>
                    Current Value: {values.waterLevel}
                  </Typography>
                  <PrettoSlider
                    className="pp-form--slider"
                    valueLabelDisplay="auto"
                    aria-label="pretto slider"
                    defaultValue={3}
                    min={1}
                    max={5}
                    name="waterLevel"
                    onChange={(event) => {
                      setFieldValue("waterLevel", event.target.value);
                    }}
                  />
                </div>
              </Box>
              <Box className="pp-card--sunlight">
                <h4 className="pp-card--headers">SUNLIGHT</h4>
                <div className="pp-card--sunlight-container">
                  <Typography gutterBottom>
                    Select the sunlight level from 1 (low) to 5 (high)
                  </Typography>
                  <Typography gutterBottom>
                    Current Value: {values.sunlightLevel}
                  </Typography>
                  <PrettoSlider
                    className="pp-form--slider"
                    valueLabelDisplay="auto"
                    aria-label="pretto slider"
                    defaultValue={3}
                    min={1}
                    max={5}
                    name="sunlightLevel"
                    onChange={(event) => {
                      setFieldValue("sunlightLevel", event.target.value);
                    }}
                  />
                </div>
              </Box>
            </Box>
            <Box
              className="pp-card--notes"
              sx={{ gridArea: "notes" }}
              display="flex"
              flexDirection="column"
            >
              <h4 className="pp-card--headers">NOTES</h4>
              <Field
                // className="textarea----test"
                placeholder="write your notes here..."
                name="notes"
                type="input"
                as={TextField}
              />
            </Box>
            {/* BUTTONS */}
            <Box sx={{ gridArea: "buttons" }} className="pp-form-buttons">
              <Button
                disabled={isSubmitting}
                type="submit"
                sx={{
                  m: "2rem 0",
                  p: "1rem",
                  backgroundColor: palette.primary.main,
                  color: palette.background.alt,
                  "&:hover": { color: palette.primary.main },
                }}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Form>
      )}
    </Formik>
  );
}
