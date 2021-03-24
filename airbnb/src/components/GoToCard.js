import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import img1 from "../assets/bg-1.jpg";
import { Grid } from "@material-ui/core";
import { Col, Row } from "react-bootstrap";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "0 5% 10% 5%",
  },
  cardroot: {
    display: "flex",
    backgroundColor: "rgba(250, 250, 250, 0.5)"
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 151,
  },
}));

export default function GoToCard() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <Grid>
        <Row>
          <Col>
            <Card className={classes.cardroot}>
              <CardMedia
                className={classes.cover}
                image={img1}
                title="Live from space album cover"
              />
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography component="h5" variant="h5">
                    Gokarna
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    6.5-hour drive
                  </Typography>
                </CardContent>
              </div>
            </Card>
          </Col>
          <Col>
            <Card className={classes.cardroot}>
              <CardMedia
                className={classes.cover}
                image={img1}
                title="Live from space album cover"
              />
                            <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography component="h5" variant="h5">
                    Live From Space
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Mac Miller
                  </Typography>
                </CardContent>
              </div>
            </Card>
          </Col>
          <Col>
            <Card className={classes.cardroot}>
              <CardMedia
                className={classes.cover}
                image={img1}
                title="Live from space album cover"
              />
                            <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography component="h5" variant="h5">
                    Live From Space
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Mac Miller
                  </Typography>
                </CardContent>
              </div>
            </Card>
          </Col>
          <Col>
            <Card className={classes.cardroot}>
              <CardMedia
                className={classes.cover}
                image={img1}
                title="Live from space album cover"
              />
                            <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography component="h5" variant="h5">
                    Live From Space
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Mac Miller
                  </Typography>
                </CardContent>
              </div>
            </Card>
          </Col>
        </Row>
      </Grid>
    </div>
  );
}
