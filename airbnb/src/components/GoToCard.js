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
import "../styles/GoToCard.css";

export default function GoToCard() {

  return (
    <div className="card-root">
      <Grid>
        <Row className="row">
          <Col>
            <img src={img1} className="cover" />
            <p style={{ margin: "12px 10px 0 0", fontWeight: "600" }}>
              Gokarna
            </p>
            <p style={{ margin: "0 10px 0 0" }}>6.5-hour drive</p>
          </Col>
          <Col>
            <img src={img1} className="cover" />
            <p style={{ margin: "12px 10px 0 0", fontWeight: "600" }}>Ooty</p>
            <p style={{ margin: "0 10px 0 0" }}>5-hour drive</p>
          </Col>
          <Col>
            <img src={img1} className="cover" />
            <p style={{ margin: "12px 10px 0 0", fontWeight: "600" }}>
              Kodaikanal
            </p>
            <p style={{ margin: "0 10px 0 0" }}>6.5-hour drive</p>
          </Col>
          <Col>
            <img src={img1} className="cover" />
            <p style={{ margin: "12px 10px 0 0", fontWeight: "600" }}>
              Kalpetta
            </p>
            <p style={{ margin: "0 10px 0 0" }}>5-hour drive</p>
          </Col>
        </Row>
        <Row className="row">
          <Col>
            <img src={img1} className="cover" />
            <p style={{ margin: "12px 10px 0 0", fontWeight: "600" }}>Munnar</p>
            <p style={{ margin: "0 10px 0 0" }}>7.5-hour drive</p>
          </Col>
          <Col>
            <img src={img1} className="cover" />
            <p style={{ margin: "12px 10px 0 0", fontWeight: "600" }}>
              Varkala
            </p>
            <p style={{ margin: "0 10px 0 0" }}>10-hour drive</p>
          </Col>
          <Col>
            <img src={img1} className="cover" />
            <p style={{ margin: "12px 10px 0 0", fontWeight: "600" }}>Hosur</p>
            <p style={{ margin: "0 10px 0 0" }}>45-minute drive</p>
          </Col>
          <Col>
            <img src={img1} className="cover" />
            <p style={{ margin: "12px 10px 0 0", fontWeight: "600" }}>Hampi</p>
            <p style={{ margin: "0 10px 0 0" }}>5-hour drive</p>
          </Col>
        </Row>
      </Grid>
    </div>
  );
}
