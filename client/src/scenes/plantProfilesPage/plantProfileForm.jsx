import { useState } from "react";
import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import { Formik, Field, Form } from "formik";
import * as yup from "yup";
// import FlexBetween from "components/FlexBetween";
// import Dropzone from "react-dropzone";
// import { DesktopDatePicker } from "@mui/x-date-pickers";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

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
  const { _id } = useSelector((state) => state.user);

  const [error, setError] = useState(null);
  const { palette } = useTheme();
  const navigate = useNavigate();

  const newPlantProfileForm = async (values, onSubmitProps) => {
    console.log("new plant:", values);
    console.log("new plant:", JSON.stringify(values));

    const savedUserResponse = await fetch(
      "http://localhost:3001/plant-profiles/create",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
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
        waterLevel: "",
        sunlightLevel: "",
        commonIssues: "",
        notes: "",
        picturePath: "",
      }}

      // validationSchema={plantProfileSchema}
    >
      {({ values, isSubmitting }) => (
        <Form>
          <Box display="flex" width="50%" flexDirection="column" gap="30px">
            <pre>{JSON.stringify(values, null, 2)}</pre>
            <Field
              placeholder="plant name"
              name="plantName"
              type="input"
              as={TextField}
            />
            <Field
              placeholder="scientific name"
              name="scientificName"
              type="input"
              as={TextField}
            />
          </Box>

          {/* BUTTONS */}
          <Box>
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
        </Form>
      )}
    </Formik>
  );
}
