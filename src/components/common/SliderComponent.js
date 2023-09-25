import React, { Fragment } from "react";
import Slider from "@mui/material/Slider";
import { Stack, Typography } from "@mui/material";

const SliderComponent = ({ defaultValue, min, max, step, onChange, value ,label,unit ,amount}) => {
  return (
    <Stack my={.4}>
      <Stack gap={1}>
        <Typography variant="subtitle1">{label}</Typography>
        <Typography variant="h5">{unit} {amount}</Typography>
      </Stack>
      <Slider
        defaultValue={defaultValue}
        min={min}
        max={max}
        aria-label="Default"
        valueLabelDisplay="auto"
        marks
        step={step}
        onChange={onChange}
        value={value}
      />
      <Stack direction="row" justifyContent='space-between'>
        <Typography color="text.secondary">{unit} {min}</Typography>
        <Typography color="text.secondary">{unit} {max}</Typography>
      </Stack>
    </Stack>
  );
};

// const SliderComponent = ({props}) => {
//   return (

//     <Slider defaultValue={props.defaultValue} min={props.min} max={props.max} aria-label="Default" valueLabelDisplay="auto" />
//     )
//   }
export default SliderComponent;
