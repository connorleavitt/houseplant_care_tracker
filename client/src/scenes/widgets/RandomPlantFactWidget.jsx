import { useEffect, useState } from "react";
import React from "react";

import { Box } from "@mui/material";

export default function RandomPlantFactWidget() {
  const key = process.env.REACT_APP_PERENUAL_API_KEY;
  const ID = 1;
  const url = `http://perenual.com/api/species/details/${ID}?key=${key}`;

  const [imgResult, setImgResult] = useState();

  const setFact = (data) => {
    const picture = data.default_image.thumbnail;
    setImgResult(picture);
  };

  const searchPerenual = async () => {
    const res = await fetch(url, {
      method: "GET",
    });
    // console.log(res);
    const data = await res.json();
    setFact(data);
  };

  useEffect(() => {
    searchPerenual();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Box>
      <img src={imgResult} alt="blah" />
    </Box>
  );
}
