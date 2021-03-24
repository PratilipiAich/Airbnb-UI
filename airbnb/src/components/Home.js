import { Button } from '@material-ui/core';
import React, { Component } from 'react'
import '../styles/Home.css'


class Home extends Component {
    render() {
        return (
            <div>
            <div className="text-container">           
              <p className="heading">Go Near</p>
              </div>
                <button  className="btn">Explore nearby stays</button>
              {/* <Button variant="contained" className="button">Default</Button> */}
            </div>
            
        )
    }
}
export default Home;