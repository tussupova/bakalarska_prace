import React, { useState } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardActionArea from "@material-ui/core/CardActionArea";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    justifyContent: "space-evenly",
  },
  imageStyle: {
    width: "100%",
    paddingTop: theme.spacing(8),
  },
  getStartButton: {
    margin: theme.spacing(5),
    height: theme.spacing(5),
  },

  actualitiesGrid: {
    flexDirection: "column",
  },
  articlesGrid: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  root: {
    maxWidth: theme.spacing(52),
    marginBottom: theme.spacing(3),
    //for phone
    [theme.breakpoints.down("xs")]: {
      maxWidth: theme.spacing(35),
    },
  },
  media: {
    height: 140,
  },
}));
export default function Home() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  return (
    <>
      <Grid
        container
        alignItems="center"
        justify="center"
        className={classes.mainGrid}
      >
        <Grid item xs={8} lg={4} md={4} sm={4}>
          <img src={"./imageForHomePage.png"} className={classes.imageStyle} />
        </Grid>
        <Grid item xs={8} lg={4} md={4} sm={4}>
          <Typography>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing
          </Typography>
          <Grid container alignItems="center" justify="center">
            <Button
              color="primary"
              variant="contained"
              className={classes.getStartButton}
            >
              <Typography>
                <h3>Get Started </h3>
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        alignItems="center"
        justify="center"
        className={classes.actualitiesGrid}
      >
        <Grid item>
          <Typography>
            <h2>Actualities</h2>
          </Typography>
        </Grid>
        <Grid
          container
          alignItems="center"
          justify="center"
          className={classes.articlesGrid}
        >
          <Grid item>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="./act1.jpg"
                  title="Lorem Ipsum is simply "
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Lorem Ipsum
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="./act2.jpg"
                  title="Lorem Ipsum is simply "
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Lorem Ipsum
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="./act3.jpg"
                  title="Lorem Ipsum is simply "
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Lorem Ipsum
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
