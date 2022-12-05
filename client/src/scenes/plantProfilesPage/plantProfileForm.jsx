import { useState } from "react";
import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import FlexBetween from "components/FlexBetween";
import Dropzone from "react-dropzone";
// import { DesktopDatePicker } from "@mui/x-date-pickers";
import { useNavigate } from "react-router-dom";
import e from "express";
// import { useDispatch } from "react-redux";

const plantProfileSchema = yup.object().shape({
  userId: yup.string().required("required"),
  userFirstName: yup.string().required("required"),
  userPicturePath: yup.string().required("required"),
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
  waterLevel: yup.string().required("required"),
  sunlightLevel: yup.string().required("required"),
  commonIssues: yup.string().required("required"),
  notes: yup.string().required("required"),
});

const initialValuesNewPlantProfile = {
  userId: "",
  userFirstName: "",
  userPicturePath: "",
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
  waterLevel: "",
  sunlightLevel: "",
  commonIssues: "",
  notes: "",
  picturePath: "",
};

const savedValuesPlantProfile = {
  userId: "",
  userFirstName: "",
  userPicturePath: "",
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
  waterLevel: "",
  sunlightLevel: "",
  commonIssues: "",
  notes: "",
  picturePath: "",
};

export default function PlantProfileForm() {
  const [formValues, setFormValues] = useState(null);
  const { palette } = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const newPlantProfileForm = async (values, onSubmitProps) => {
    // allows us to send form with image data
    const formData = new FormData();
    for (let value in values) {
      formData.append(value, values[value]);
    }
    formData.append("picturePath", values.picture.name);

    const savedUserResponse = await fetch(
      "http://localhost:3001/plant-profiles/create",
      {
        method: "POST",
        body: formData,
      }
    );
    const savedPlantProfile = await savedUserResponse.json();
    onSubmitProps.resetForm();

    if (savedPlantProfile) {
      navigate("/home");
    }
  };

  const handleFormSubmit = async (values, onSubmitProps) => {
    await newPlantProfileForm(values, onSubmitProps);
  };
  return (
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={formValues || initialValuesNewPlantProfile}
      validationSchema={plantProfileSchema}
      enableReinitialize
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
        setFieldValue,
        resetForm,
      }) => (
        <form onSubmit={handleSubmit}>
          <Box display="flex" width="50%" flexDirection="column" gap="30px">
            <TextField
              label="Plant Name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.plantName}
              name="plantName"
              error={Boolean(touched.plantName) && Boolean(errors.plantName)}
              helperText={touched.plantName && errors.plantName}
            />
            <TextField
              label="Scientific Name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.scientificName}
              name="scientificName"
              error={
                Boolean(touched.scientificName) &&
                Boolean(errors.scientificName)
              }
              helperText={touched.scientificName && errors.scientificName}
            />
            {/* <DesktopDatePicker
              label="Date desktop"
              onBlur={handleBlur}
              inputFormat="MM/DD/YYYY"
              value={values.dateAcquired}
              onChange={(values) => {
                setFieldValue("dueDate", values);
              }}
              error={
                Boolean(touched.dateAcquired) && Boolean(errors.dateAcquired)
              }
              renderInput={(params) => <TextField {...params} />}
            /> */}
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
                    {!values.picturePath ? (
                      <p>Add Picture of Plant Here</p>
                    ) : (
                      <FlexBetween>
                        <Typography>{values.picturePath.name}</Typography>
                      </FlexBetween>
                    )}
                  </Box>
                )}
              </Dropzone>
            </Box>
          </Box>

          {/* BUTTONS */}
          <Box>
            <Button
              type="submit"
              sx={{
                m: "2rem 0",
                p: "1rem",
                backgroundColor: palette.primary.main,
                color: palette.background.alt,
                "&:hover": { color: palette.primary.main },
              }}
            >
              Submit New
            </Button>
            <Button
              type="button"
              onClick={() => setFormValues(savedValuesPlantProfile)}
              sx={{
                m: "2rem 0",
                p: "1rem",
                backgroundColor: palette.primary.main,
                color: palette.background.alt,
                "&:hover": { color: palette.primary.main },
              }}
            >
              Load Saved Data
            </Button>
          </Box>
        </form>
      )}
    </Formik>
  );
}
