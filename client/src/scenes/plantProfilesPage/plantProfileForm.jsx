import { useEffect, useState } from "react";
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
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "@emotion/styled";
import { setPlantProfiles } from "state";

// const plantProfileSchema = yup.object().shape({
//   plantName: yup.string().required("required"),
//   scientificName: yup.string().required("required"),
//   dateAcquired: yup.string().required("required"),
//   plantFamily: yup.string().required("required"),
//   iGotItFrom: yup.string().required("required"),
//   toxicity: yup.string().required("required"),
//   water: yup.string().required("required"),
//   light: yup.string().required("required"),
//   soilType: yup.string().required("required"),
//   humidity: yup.string().required("required"),
//   idealTemp: yup.string().required("required"),
//   fertilizationMethod: yup.string().required("required"),
//   fertilizationFrequency: yup.string().required("required"),
//   currentLocation: yup.string().required("required"),
//   waterLevel: yup.string().required("required"),
//   sunlightLevel: yup.string().required("required"),
//   commonIssues: yup.string().required("required"),
//   notes: yup.string().required("required"),
// });

export default function PlantProfileForm({ pageType }) {
  const isNonMobileScreens = useMediaQuery("(min-width: 800px)");
  const { _id } = useSelector((state) => state.user);
  // const token = useSelector((state) => state.token);
  const plantProfiles = useSelector((state) => state.plantProfiles);
  const [error, setError] = useState(null);
  const [editPhoto, setEditPhoto] = useState(false);
  const { palette } = useTheme();
  const navigate = useNavigate();
  const { userId, id } = useParams();
  const isCreate = pageType === "create";
  const isEdit = pageType === "edit";

  // console.log(pageType, userId, id);

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
      navigate("/plant-profiles");
    }
  };

  const updatePlantProfileFormWithNewPhoto = async (values, onSubmitProps) => {
    const formData = new FormData();
    for (let value in values) {
      if (value === "picturePath") {
        delete values[value];
      } else {
        formData.append(value, values[value]);
      }
    }
    formData.append("picturePath", values.picture.name);

    const savedUpdatedUserResponse = await fetch(
      `http://localhost:3001/plant-profiles/${userId}/${id}/edit/new`,
      {
        method: "PATCH",
        // headers: { "Content-Type": "application/json" },
        body: formData,
      }
    );
    console.log(savedUpdatedUserResponse);
    const savedUpdatedPlantProfile = await savedUpdatedUserResponse.json();
    onSubmitProps.resetForm();

    if (!savedUpdatedUserResponse.ok) {
      setError(savedUpdatedPlantProfile.error);
      console.log(error);
    }

    if (savedUpdatedUserResponse.ok) {
      setError(null);
      console.log("Plant profile updated:", savedUpdatedPlantProfile);
      navigate(`/plant-profiles/${userId}/${id}`);
    }
  };

  const updatePlantProfileFormWithCurrentPhoto = async (
    values,
    onSubmitProps
  ) => {
    // const formData = new FormData();
    // for (let value in values) {
    //   if (value === "picturePath") {
    //     delete values[value];
    //   } else {
    //     formData.append(value, values[value]);
    //   }
    // }
    // console.log(formData);
    // delete values.picturePath;
    const savedUpdatedUserResponse = await fetch(
      `http://localhost:3001/plant-profiles/${userId}/${id}/edit`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      }
    );
    console.log(savedUpdatedUserResponse);
    const savedUpdatedPlantProfile = await savedUpdatedUserResponse.json();
    onSubmitProps.resetForm();

    if (!savedUpdatedUserResponse.ok) {
      setError(savedUpdatedPlantProfile.error);
      console.log(error);
    }

    if (savedUpdatedUserResponse.ok) {
      setError(null);
      console.log("Plant profile updated:", savedUpdatedPlantProfile);
      navigate(`/plant-profiles/${userId}/${id}`);
    }
  };

  const handleFormSubmit = async (values, onSubmitProps) => {
    // await newPlantProfileForm(values, onSubmitProps);
    if (isCreate) await newPlantProfileForm(values, onSubmitProps);
    if (isEdit) {
      if (
        values.picture !== undefined &&
        values.picture.name !== plantProfiles[0].picturePath
      ) {
        console.log(
          "NEW PHOTO",
          plantProfiles[0].picturePath,
          values.picture.name
        );
        await updatePlantProfileFormWithNewPhoto(values, onSubmitProps);
      } else {
        console.log("CURRENT PHOTO", plantProfiles[0].picturePath);
        delete values.picturePath;
        console.log(values);
        await updatePlantProfileFormWithCurrentPhoto(values, onSubmitProps);
      }
    }
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

  const savedValuesPlantProfile = {
    userId: userId,
    plantName: plantProfiles[0].plantName,
    scientificName: plantProfiles[0].scientificName,
    dateAcquired: plantProfiles[0].dateAcquired,
    plantFamily: plantProfiles[0].plantFamily,
    iGotItFrom: plantProfiles[0].iGotItFrom,
    toxicity: plantProfiles[0].toxicity,
    water: plantProfiles[0].water,
    light: plantProfiles[0].light,
    soilType: plantProfiles[0].soilType,
    humidity: plantProfiles[0].humidity,
    idealTemp: plantProfiles[0].idealTemp,
    fertilizationMethod: plantProfiles[0].fertilizationMethod,
    fertilizationFrequency: plantProfiles[0].fertilizationFrequency,
    currentLocation: plantProfiles[0].currentLocation,
    waterLevel: plantProfiles[0].waterLevel,
    sunlightLevel: plantProfiles[0].sunlightLevel,
    commonIssues: plantProfiles[0].commonIssues,
    notes: plantProfiles[0].notes,
    picturePath: plantProfiles[0].picturePath,
  };

  const initialValuesPlantProfile = {
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
  };

  return (
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={
        isEdit ? savedValuesPlantProfile : initialValuesPlantProfile
      }
      enableReinitialize

      // validationSchema={plantProfileSchema}
    >
      {({ values, isSubmitting, setFieldValue }) => (
        <Form>
          <pre>{JSON.stringify(values, null, 2)}</pre>

          <Box
            className="pp-card--container"
            display={isNonMobileScreens ? "grid" : "flex"}
            sx={{
              gridTemplateColumns: "3fr 5fr",
              gridTemplateRows: "auto",
              gridTemplateAreas: `"header header"
                                  "left right"
                                  "issues issues"
                                  "notes notes"
                                  "buttons buttons"`,
              gap: "1rem",
              margin: `${isNonMobileScreens ? "2rem 15rem" : "0"}`,
            }}
          >
            {isNonMobileScreens ? (
              <Box sx={{ gridArea: "header", m: "1rem", mb: "0" }}>
                <h2 className="pp-card--title">Create a new Plant Profile</h2>
              </Box>
            ) : (
              <Box sx={{ gridArea: "header" }} mb="1rem">
                <h2 className="pp-card--title">Create a new Plant Profile</h2>
              </Box>
            )}

            <Box
              className="pp-card--left-side"
              sx={{ gridArea: "left" }}
              display="flex"
              flexDirection="column"
              alignItems="center"
              // justifyContent="space-around"
              gap="3rem"
              m="1rem"
              pt={isNonMobileScreens ? "3.5rem" : "0"}
            >
              <Box
                border={`1px solid ${palette.neutral.medium}`}
                borderRadius="5px"
                p="1rem"
                sx={{ minWidth: "100%", maxWidth: "500px" }}
              >
                {isCreate ? (
                  <>
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
                          textAlign="center"
                          sx={{
                            "&:hover": { cursor: "pointer" },
                          }}
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
                  </>
                ) : (
                  <>
                    <Box>
                      <img
                        width={isNonMobileScreens ? "300px" : "100%"}
                        height="auto"
                        alt="plant-profile"
                        style={{ borderRadius: "0.75rem", maxHeight: "400px" }}
                        src={`http://localhost:3001/assets/${plantProfiles[0].picturePath}`}
                      />
                      <Field
                        name="picture"
                        type="input"
                        disabled
                        value={values.picturePath}
                        as={TextField}
                        // sx={{ width: "100%" }}
                      />
                      <Button
                        onClick={() => {
                          setEditPhoto(true);
                        }}
                      >
                        Edit
                      </Button>
                      {editPhoto ? (
                        <>
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
                                textAlign="center"
                                sx={{
                                  "&:hover": { cursor: "pointer" },
                                }}
                              >
                                <input {...getInputProps()} />
                                {!values.picture ? (
                                  <p>Add Picture Here</p>
                                ) : (
                                  <FlexBetween>
                                    <Typography>
                                      {values.picture.name}
                                    </Typography>
                                    <EditOutlinedIcon />
                                  </FlexBetween>
                                )}
                              </Box>
                            )}
                          </Dropzone>
                        </>
                      ) : (
                        <></>
                      )}
                    </Box>
                  </>
                )}
              </Box>
              <Box
                className="pp-card--location"
                sx={{ width: "100%" }}
                display="flex"
                justifyContent="center"
              >
                <FormControl className="pp-card--locations-container">
                  <FormLabel id="demo-radio-buttons-group-label">
                    <h4 className="pp-card--headers">CURRENT LOCATION</h4>
                  </FormLabel>
                  <Typography className="pp-form--level-subtext">
                    What is the current location of this plant?
                  </Typography>
                  <RadioGroup
                    aria-labelledby="currentLocation-label"
                    defaultValue="Indoors"
                    name="currentLocation"
                    value={values.currentLocation}
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
              <Box className="pp-card--water" sx={{ width: "100%" }}>
                <h4 className="pp-card--headers">WATER</h4>
                <div className="pp-card--water-container form">
                  <Typography gutterBottom className="pp-form--subtext">
                    Select the water level from 1 (low) to 5 (high)
                  </Typography>

                  <PrettoSlider
                    sx={{ m: "1rem" }}
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
                  <Typography className="pp-form--level-subtext">
                    Current Value: <strong>{values.waterLevel}</strong>
                  </Typography>
                </div>
              </Box>
              <Box className="pp-card--sunlight" sx={{ width: "100%" }}>
                <h4 className="pp-card--headers">SUNLIGHT</h4>
                <div className="pp-card--sunlight-container form">
                  <Typography gutterBottom className="pp-form--subtext">
                    Select the sunlight level from 1 (low) to 5 (high)
                  </Typography>

                  <PrettoSlider
                    sx={{ m: "1rem" }}
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
                  <Typography className="pp-form--level-subtext">
                    Current Value: <strong>{values.sunlightLevel}</strong>
                  </Typography>
                </div>
              </Box>
            </Box>
            <Box
              className="pp-card--right-side"
              sx={{ gridArea: "right" }}
              display="flex"
              flexDirection="column"
              gap="1rem"
              m="1rem"
            >
              <Box className="pp-card--general-info">
                <h4 className="pp-card--headers">GENERAL INFO</h4>
                <div className="pp-card--form-individual">
                  <div className="pp-card--form-label">PLANT NAME:</div>
                  <Field
                    placeholder="What is this plant's name?"
                    name="plantName"
                    type="input"
                    as={TextField}
                    sx={{ width: "100%" }}
                  />
                </div>
                <div className="pp-card--form-individual">
                  <div className="pp-card--form-label">SCIENTIFIC NAME:</div>
                  <Field
                    placeholder="What is the scientific name for this plant?"
                    name="scientificName"
                    type="input"
                    as={TextField}
                    sx={{ width: "100%" }}
                  />
                </div>
                <div className="pp-card--form-individual">
                  <div className="pp-card--form-label">PLANT TYPE:</div>
                  <Field
                    placeholder="What is this plant's family (scientific classification)?"
                    name="plantFamily"
                    type="input"
                    as={TextField}
                    sx={{ width: "100%" }}
                  />
                </div>
                <div className="pp-card--form-individual">
                  <div className="pp-card--form-label">DATE ACQUIRED:</div>
                  <Field
                    placeholder="When did you acquire this plant?"
                    name="dateAcquired"
                    type="input"
                    as={TextField}
                    sx={{ width: "100%" }}
                  />
                </div>

                <div className="pp-card--form-individual">
                  <div className="pp-card--form-label">I GOT IT FROM:</div>
                  <Field
                    placeholder="Where did you get this plant?"
                    name="iGotItFrom"
                    type="input"
                    as={TextField}
                    sx={{ width: "100%" }}
                  />
                </div>
                <div className="pp-card--form-individual">
                  <div className="pp-card--form-label">TOXICITIY:</div>
                  <Field
                    placeholder="Is this plant toxic?"
                    name="toxicity"
                    type="input"
                    as={TextField}
                    sx={{ width: "100%" }}
                  />
                </div>
              </Box>
              <Box className="pp-card--plant-care-needs">
                <h4 className="pp-card--headers">PLANT CARE NEEDS</h4>
                <div className="pp-card--form-individual">
                  <div className="pp-card--form-label">WATER:</div>
                  <Field
                    placeholder="What are the general watering requirements?"
                    name="water"
                    type="input"
                    as={TextField}
                    sx={{ width: "100%" }}
                  />
                </div>
                <div className="pp-card--form-individual">
                  <div className="pp-card--form-label">LIGHT:</div>
                  <Field
                    placeholder="What are the general light requirements?"
                    name="light"
                    type="input"
                    as={TextField}
                    sx={{ width: "100%" }}
                  />
                </div>
                <div className="pp-card--form-individual">
                  <div className="pp-card--form-label">SOIL TYPE:</div>
                  <Field
                    placeholder="What is the current soil mixture in this pot?"
                    name="soilType"
                    type="input"
                    as={TextField}
                    sx={{ width: "100%" }}
                  />
                </div>
                <div className="pp-card--form-individual">
                  <div className="pp-card--form-label">HUMIDITY:</div>
                  <Field
                    placeholder="Does this plant like humidity?"
                    name="humidity"
                    type="input"
                    as={TextField}
                    sx={{ width: "100%" }}
                  />
                </div>
                <div className="pp-card--form-individual">
                  <div className="pp-card--form-label">IDEAL TEMP:</div>
                  <Field
                    placeholder="What is the ideal temp range? (Ex: 60-75°F)"
                    name="idealTemp"
                    type="input"
                    as={TextField}
                    sx={{ width: "100%" }}
                  />
                </div>
              </Box>
              <Box className="pp-card--fertilization">
                <h4 className="pp-card--headers">FERTILIZATION</h4>
                <div className="pp-card--form-individual">
                  <div className="pp-card--form-label">METHOD:</div>
                  <Field
                    placeholder="What does this plant require for fertilization?"
                    name="fertilizationMethod"
                    type="input"
                    as={TextField}
                    sx={{ width: "100%" }}
                  />
                </div>
                <div className="pp-card--form-individual">
                  <div className="pp-card--form-label">FREQUENCY:</div>
                  <Field
                    placeholder="How often does this plant require fertilization?"
                    name="fertilizationFrequency"
                    type="input"
                    as={TextField}
                    sx={{ width: "100%" }}
                  />
                </div>
              </Box>
            </Box>
            <Box
              className="pp-card--common-issues"
              sx={{ gridArea: "issues" }}
              display="flex"
              flexDirection="column"
            >
              <h4 className="pp-card--headers">COMMON ISSUES</h4>
              <Field
                name="commonIssues"
                placeholder="Type in your common issues..."
                label="COMMON ISSUES"
                type="input"
                as={TextField}
              />
            </Box>
            <Box
              className="pp-card--notes"
              sx={{ gridArea: "notes" }}
              display="flex"
              flexDirection="column"
            >
              <h4 className="pp-card--headers">NOTES</h4>
              <Field
                name="notes"
                placeholder="Type in your notes..."
                label="NOTES"
                type="input"
                as={TextField}
              />
            </Box>
            {/* BUTTONS */}
            <Box
              sx={{ gridArea: "buttons" }}
              className="pp-form-buttons"
              display="flex"
              // flexDirection="column"
              // alignContent="flex-end"
              justifyContent="space-between"
            >
              <Button
                type="button"
                sx={{
                  m: "1rem",
                  p: "1rem",
                  backgroundColor: palette.primary.light,
                  color: palette.background.dark,
                  "&:hover": { color: palette.primary.main },
                }}
              >
                Clear Fields
              </Button>
              <Button
                disabled={isSubmitting}
                type="submit"
                sx={{
                  m: "1rem",
                  p: "1rem",
                  width: `${isNonMobileScreens ? "200px" : "auto"}`,
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
