import { useEffect, useState } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRandomPlantFact } from "state";

import { Box } from "@mui/material";

import RandomPlantFactImage from "components/RandomPlantFactImage";

export default function RandomPlantFactWidget() {
  const dispatch = useDispatch();
  const randomPlantFact = useSelector((state) => state.randomPlantFact);

  const key = process.env.REACT_APP_PERENUAL_API_KEY;
  const id = 15;
  const url = `http://perenual.com/api/species/details/${id}?key=${key}`;

  const searchPerenual = async () => {
    const res = await fetch(url, {
      method: "GET",
    });
    const data = await res.json();
    console.log(data);
    dispatch(setRandomPlantFact({ randomPlantFact: data }));
  };

  // const setNewFact = (data) => {
  //   const picture = data.default_image.thumbnail;
  //   setImgResult(picture);
  //   setFact(data);
  // };

  useEffect(() => {
    searchPerenual();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Box>
      <RandomPlantFactImage image={randomPlantFact.default_image.thumbnail} />
      <p>Common Name: {randomPlantFact.common_name}</p>
    </Box>
  );
}
