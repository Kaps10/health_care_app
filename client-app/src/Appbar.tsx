import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import AppContext from "./context/AppContext";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    }
  })
);

export default function ButtonAppBar() {
  const classes = useStyles();
  const appContext: any = React.useContext(AppContext);
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Comp308-Project
          </Typography>
          {appContext.isSignedin ? (
            <Button
              color="inherit"
              onClick={appContext.handleLogoutToLoginPage}
            >
              Logout
            </Button>
          ) : (
            <></>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
