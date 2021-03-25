import React, { Component } from 'react'
import '../styles/MainNav.css'
import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined';
import logo from "../assets/logo-2.png";
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

class MainNav extends Component {
    render() {
        return (
            <div className="top-root">
            <div className="nav-container">  
                <ul style={{padding: 0}}>
                <li className="logo-tab"><a className="navbar-brand" to="#">
        <img
        className="logo-2"
          src={logo}
          alt="airbnb"
          
        />
      </a>    </li>
                    <li className="tab">Places to stay
                    </li>
                    <li className="tab">Experiences</li>
                    <li className="tab">Online experiences</li>
                    <li ><button className="tab-2">Become a host</button></li>
                    <li className="menu-tab"><MenuOutlinedIcon/>
                    <p className="account-icon"><AccountCircleIcon/></p>
                    </li>
                    <li><button className="world"><LanguageOutlinedIcon /></button></li>
                    
                    
                    </ul>
                    </div>
            </div>
        )
    }
}

export default MainNav