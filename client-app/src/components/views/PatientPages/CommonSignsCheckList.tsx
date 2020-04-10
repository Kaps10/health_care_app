import React from "react";
import {
  makeStyles,
  Theme,
  createStyles,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
  Container,
  Typography
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    formControl: {
      margin: theme.spacing(3),
    },
    normalLab:{
      margin: theme.spacing(2),
    }
  }),
);

export default function CommonSignsCheckList() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    RunnyNose: false,
    AbdominalPain: false,
    Cough: false,
    Congestion: false,
    ShortnessOfBreath: false,
    Wheezing: false,
    Headache: false,
    SinusPain: false,
    HighFever: false,
    Nausea: false,
  });

  const [detail, setdetail] = React.useState([{_id:"", disease: "", symptoms: [], description: "", tips: "" }]);


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };


  const handleChecklist = (e: any) => {
    let tsymptomList: string[] = [];
    Object.entries(state).map(([sym, yes]) => {
      if (yes)
        tsymptomList.push(sym.toString());
    });

    e.preventDefault();
    const res = fetch("http://localhost:8500/sendSymptomList", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(tsymptomList)
    });
    res
      .then(data => data.json())
      .then((data: any) => {
        if (data.msg === 1) {
          // console.log(data.dataArr);
          setdetail(data.dataArr);
          alert("Sympotm sent! Waiting for the result!");
        } else {
          alert(data.msg);
        }
      });
  }

  return (
    <div>
    <FormGroup row>

      <FormControlLabel
        control={<Checkbox checked={state.RunnyNose} onChange={handleChange} name="RunnyNose" />}
        label="Runny Nose"
      />
      <FormControlLabel
        control={<Checkbox checked={state.AbdominalPain} onChange={handleChange} name="AbdominalPain" />}
        label="Abdominal Pain"
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
      <FormControlLabel
        control={<Checkbox checked={state.Nausea} onChange={handleChange} name="Nausea" />}
        label="Nausea"
      />
      <Button variant="contained" color="secondary" onClick={handleChecklist} >
        Submit
      </Button>
     
      
      
    </FormGroup>
    <Container>
    {detail.length>0 &&detail.map((result) => (
      <div key={result._id} className={classes.formControl}>
       <Typography variant="h6" gutterBottom>
         {result.disease}
       </Typography>

       <Typography variant="subtitle1" gutterBottom>
         {result.symptoms.map((sym) => (
           <label className={classes.normalLab} key={sym}>{sym}</label>
         ))}
       </Typography>

       <Typography variant="body1" gutterBottom>
         {result.description}
       </Typography>
       <Typography variant="body2" gutterBottom>
         {result.tips}
       </Typography>
       </div>)
     )}
     </Container>
     </div>
  );
};
