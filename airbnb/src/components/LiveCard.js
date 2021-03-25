import React, { Component } from 'react'
import { Grid } from "@material-ui/core";
import { Col, Row } from "react-bootstrap";
import img1 from "../assets/bg-1.jpg";

import '../styles/LiveCard.css'
class LiveCard extends Component {
    render() {
        return (
            <div className="root">
            <h1 className="live-head">Live anywhere</h1>
            <Grid>
                <Row>
                    <Col className="column">
                    <img src={img1} className="image"/>
                    <p className="title">Entire homes</p>
                    </Col>
                    <Col>
                    <img src={img1} className="image"/>
                    <p className="title">Cabins and cottages</p>
                    </Col>
                    <Col>
                    <img src={img1} className="image"/>
                    <p className="title">Unique stays</p>
                    </Col>
                    <Col>
                    <img src={img1} className="image"/>
                    <p className="title">Pets welcome</p>
                    </Col>
                </Row>
            </Grid>
            </div>
        )
    }
}
export default LiveCard