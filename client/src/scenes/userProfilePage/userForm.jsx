import {
  Box,
  Button,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

import { Formik, Field, Form } from "formik";
import * as yup from "yup";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Dropzone from "react-dropzone";
import { useEffect, useState } from "react";
import { setUser } from "state";

import FlexBetween from "components/FlexBetween";

const userSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  picture: yup.string().required("required"),
});

export default function UserForm() {
  const isNonMobileScreens = useMediaQuery("(min-width: 800px)");
  const token = useSelector((state) => state.token);
  const [updatedUser, setUpdatedUser] = useState(null);

  const { palette } = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [editPhoto, setEditPhoto] = useState(false);

  const user = useSelector((state) => state.user);

  const initialValuesUser = {
    firstName: user.firstName,
    lastName: user.lastName,
    picture: user.picturePath,
  };

  const updateUserNewPhoto = async (values, onSubmitProps) => {
    const formData = new FormData();
    for (let value in values) {
      if (value === "picturePath") {
        delete values[value];
      } else {
        formData.append(value, values[value]);
      }
    }
    formData.append("picturePath", values.picture.name);
    console.log(JSON.stringify(values, null, 2));

    const response = await fetch(
      `http://localhost:3001/users/${user._id}/edit/new`,
      {
        method: "PATCH",
        body: formData,
      }
    );
    const updatedUser = await response.json();
    onSubmitProps.resetForm();

    if (!response.ok) {
      setError(updatedUser.error);
      console.log(error);
    }

    if (response.ok) {
      setError(null);
      navigate(`/user/account`);
    }
  };

  const updateUser = async (values, onSubmitProps) => {
    const response = await fetch(
      `http://localhost:3001/users/${user._id}/edit`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      }
    );
    const updatedUser = await response.json();
    onSubmitProps.resetForm();

    if (!response.ok) {
      setError(updatedUser.error);
      console.log(error);
    }

    if (response.ok) {
      setError(null);
      navigate(`/user/account`);
    }
  };

  const handleFormSubmit = async (values, onSubmitProps) => {
    if (values.picture !== undefined && values.picture !== user.picturePath) {
      console.log("using NEW PHOTO PATH");
      await updateUserNewPhoto(values, onSubmitProps);
    } else {
      console.log("using CURRENT PHOTO PATH");

      delete values.picturePath;
      await updateUser(values, onSubmitProps);
    }
  };
  return (
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={initialValuesUser}
      // validationSchema={userSchema}
    >
      {({
        values,
        errors,
        touched,
        isSubmitting,
        handleBlur,
        handleChange,
        setFieldValue,
      }) => (
        <Form>
          {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
          <Box
            m="1rem 2rem"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            {isNonMobileScreens ? (
              <Box sx={{ gridArea: "header", m: "2rem" }}>
                <h2 className="user-edit--title">Update your User Profile</h2>
              </Box>
            ) : (
              <Box sx={{ gridArea: "header" }} m="2rem 0">
                <h2 className="user-edit--title">Update your User Profile</h2>
              </Box>
            )}
            {isNonMobileScreens ? (
              <Box display="flex" flexDirection="column" gap="30px">
                <TextField
                  label="First Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.firstName}
                  name="firstName"
                  error={
                    Boolean(touched.firstName) && Boolean(errors.firstName)
                  }
                  helperText={touched.firstName && errors.firstName}
                />
                <TextField
                  label="Last Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.lastName}
                  name="lastName"
                  error={Boolean(touched.lastName) && Boolean(errors.lastName)}
                  helperText={touched.lastName && errors.lastName}
                />

                <Box sx={{ position: "relative" }}>
                  <img
                    width={isNonMobileScreens ? "300px" : "100%"}
                    height="auto"
                    alt="user"
                    style={{ borderRadius: "0.75rem", maxHeight: "400px" }}
                    src={`http://localhost:3001/assets/${user.picturePath}`}
                  />
                  <Field
                    name="picture"
                    type="hidden"
                    value={values.picturePath}
                  />
                  <Button
                    sx={{
                      m: "1rem",
                      p: "1rem",
                      width: "100px",
                      right: "0",
                      position: "absolute",
                      backgroundColor: palette.neutral.dark,
                      color: palette.background.default,
                      "&:hover": {
                        backgroundColor: palette.neutral.light,
                        color: palette.primary.dark,
                      },
                    }}
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
                                <Typography>{values.picture.name}</Typography>
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

                {/* BUTTONS */}
                <Button
                  disabled={isSubmitting}
                  type="submit"
                  // onClick={handleFormSubmit}
                  sx={{
                    m: "1rem",
                    p: "1rem",
                    width: "auto",
                    backgroundColor: palette.primary.main,
                    color: palette.background.alt,
                    "&:hover": { color: palette.primary.main },
                  }}
                >
                  Submit
                </Button>
              </Box>
            ) : (
              <Box display="flex" flexDirection="column" gap="30px">
                <TextField
                  label="First Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.firstName}
                  name="firstName"
                  error={
                    Boolean(touched.firstName) && Boolean(errors.firstName)
                  }
                  helperText={touched.firstName && errors.firstName}
                />
                <TextField
                  label="Last Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.lastName}
                  name="lastName"
                  error={Boolean(touched.lastName) && Boolean(errors.lastName)}
                  helperText={touched.lastName && errors.lastName}
                />

                <Box>
                  <img
                    width={isNonMobileScreens ? "300px" : "100%"}
                    height="auto"
                    alt="user"
                    style={{ borderRadius: "0.75rem", maxHeight: "400px" }}
                    src={`http://localhost:3001/assets/${user.picturePath}`}
                  />
                  <Field
                    name="picture"
                    type="hidden"
                    value={values.picturePath}
                  />
                  <Button
                    sx={{
                      m: "1rem",
                      p: "1rem",
                      width: "100px",
                      right: "2rem",
                      position: "absolute",
                      backgroundColor: palette.neutral.dark,
                      color: palette.background.default,
                      "&:hover": {
                        backgroundColor: palette.neutral.light,
                        color: palette.primary.dark,
                      },
                    }}
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
                                <Typography>{values.picture.name}</Typography>
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

                {/* BUTTONS */}
                <Button
                  disabled={isSubmitting}
                  type="submit"
                  // onClick={handleFormSubmit}
                  sx={{
                    m: "0 1rem",
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
            )}
          </Box>
        </Form>
      )}
    </Formik>
  );
}
