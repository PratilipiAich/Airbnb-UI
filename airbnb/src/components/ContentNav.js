import React, { Component } from 'react'
import '../styles/ContentNav.css'
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';

class ContentNav extends Component {
    render() {
        return (
            <div className="outer">
            <div className="container">      
                <ul style={{padding: 0}}>
                    <li className="head">Location <br/>
                    <p className="subhead">Where are you going?</p>
                    </li>
                    <li className="head">Check in
                    <br/>
                    <p className="subhead">Add dates</p></li>
                    <li className="head">Check out
                    <br/>
                    <p className="subhead">Add dates</p></li>
                    <li className="head" style={{border: "none"}}>Guests
                    <br/>
                    <p className="subhead">Add guests</p></li>
                    <li><button className="search"><SearchRoundedIcon /></button></li>
                </ul>     
                </div>
            </div>
        )
    }
}
export default ContentNav;