import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import AppContext from "../../context/AppContext";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(10),
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

export default function MotivationalTips() {
  const classes = useStyles();
  // need to use the global value
  const appContext: any = React.useContext(AppContext);
  const [motivationalTips, setMotivationalTips] = React.useState("");

  const handleSubmit = (e: any) => {
    // e.preventDefault();
    // const res = fetch("http://localhost:8500/signup", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(userInfoData)
    // });
    // res
    //   .then(data => data.json())
    //   .then((data: any) => {
    //     if (data.msg === 1) {
    //       appContext.handleGoToLoginPage();
    //     } else {
    //       alert(data.msg);
    //     }
    //   });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5" className={classes.typography}>
          Enter Daily Motivational Tips
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                multiline
                rows="10"
                id="motivationalTips"
                label="Motivational Tips"
                name="motivationalTips"
                value={motivationalTips}
                onChange={(event: any) => {
                  setMotivationalTips(event.target.value);
                }}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Submit
          </Button>
        </form>
      </div>
      <Box mt={5}></Box>
    </Container>
  );
}
