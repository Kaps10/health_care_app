import React,{useEffect}from "react";
import {
  Paper,
  Grid,
  makeStyles,
  
} from "@material-ui/core";
import VideoPlayer from '../../video/VideoPlayer';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    maxLines:6,
    height:280,
    maxWidth:400,
    color: theme.palette.text.secondary,
  },
}));

export default function MotiVideoGame() {
  const classes = useStyles();
  const [Videos,setVideos] = React.useState([{title:"",url:"",details:""}]);

  useEffect(() => {
    retrieveVideos();
  }, []);

  const retrieveVideos = () => {
    const res = fetch("http://localhost:8500/retrieveVideos", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    res
      .then((data) => data.json())
      .then((data: any) => {
        console.log(data);
        if (data.msg === 1) {
          console.log(data.dataArr[0]);
          setVideos(data.dataArr);
        } else {
          alert(data.msg);
        }
      });
  };


  function FormRow() {
    return (
      <React.Fragment>
        {
          Videos.map(video =>(
              <Grid item xs={"auto"}>
                <Paper className={classes.paper}>
                  <label><h3>{video.title}</h3></label>
                    <VideoPlayer Url={video.url}/>
                  <label > {video.details}</label>
                </Paper>
              </Grid>
          ))
        }
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container >
        <Grid container item xs={"auto"} spacing={10}>
          <FormRow  />
        </Grid>
      </Grid>
    </div>
  );
}
