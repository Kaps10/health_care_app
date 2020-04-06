import React from "react";
import { makeStyles,
   Theme, 
   createStyles,
   FormLabel,
   FormControl,
   FormGroup,
   FormControlLabel,
   FormHelperText,
   Checkbox
   } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    formControl: {
      margin: theme.spacing(3),
    },
  }),
);

export default function CommonSignsCheckList() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    RunnyNose: false,
    Sorethroat: false,
    Cough: false,
    Congestion:false,
    ShortnessOfBreath:false,
    Wheezing:false,
    Headache:false,
    SinusPain:false,
    HighFever:false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };


  return (
    <FormGroup row>


      <FormControlLabel
        control={<Checkbox checked={state.RunnyNose} onChange={handleChange} name="RunnyNose" />}
        label="Runny Nose"
      />
        <FormControlLabel
        control={<Checkbox checked={state.Sorethroat} onChange={handleChange} name="SoreThroat" />}
        label="Sore Throat"
      />
        <FormControlLabel
        control={<Checkbox checked={state.Cough} onChange={handleChange} name="Cough" />}
        label="Cough"
      />
        <FormControlLabel
        control={<Checkbox checked={state.ShortnessOfBreath} onChange={handleChange} name="ShortnessOfBreath" />}
        label="Shortness Of Breath"
      />
        <FormControlLabel
        control={<Checkbox checked={state.Wheezing} onChange={handleChange} name="Wheezing" />}
        label="Wheezing"
      />
        <FormControlLabel
        control={<Checkbox checked={state.Headache} onChange={handleChange} name="Headache" />}
        label="Headache"
      />
        <FormControlLabel
        control={<Checkbox checked={state.SinusPain} onChange={handleChange} name="SinusPain" />}
        label="Sinus Pain"
      />
        <FormControlLabel
        control={<Checkbox checked={state.HighFever} onChange={handleChange} name="HighFever" />}
        label="High Fever"
      />
     
    </FormGroup>
  );
}

