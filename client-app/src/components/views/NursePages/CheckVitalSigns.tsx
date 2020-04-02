import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
//import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import AppContext from "../../../context/AppContext";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(2),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200
  },
  typography: {
    marginBottom: theme.spacing(2)
  }
}));

export default function CheckVitalSigns() {
  const appContext: any = React.useContext(AppContext);
  const [vitalSigns, setVitalSigns] = React.useState({

    vitalSignsarray: []
  });

  useEffect(() => {
    retrieveVitalSigns();
  }, []);

  const retrieveVitalSigns = () => {
    console.log("123")
    const res = fetch("http://localhost:8500/retrieveVitalSigns", {
     
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ userId: appContext.getUserData._id })
    });
    res
      .then(data => data.json())
      .then((data: any) => {
        console.log(data);
        if (data.msg == 1) {
          setVitalSigns({ 
            vitalSignsarray: data,
           });
        } else {
          alert(data.msg);
        }
      });
  };

 return (

<p> {vitalSigns.vitalSignsarray} </p>

)
}
