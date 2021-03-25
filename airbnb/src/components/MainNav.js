import React, { Component } from "react";
import "../styles/MainNav.css";
import LanguageOutlinedIcon from "@material-ui/icons/LanguageOutlined";
import logo from "../assets/logo-2.png";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

class MainNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDesktop: false,
    };
    this.updatePredicate = this.updatePredicate.bind(this);
  }

  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  updatePredicate() {
    this.setState({ isDesktop: window.innerWidth > 1100 });
  }

  render() {
      
    const isDesktop = this.state.isDesktop;

    return (
      <div>
        {isDesktop ? (
          <div className="top-root">
            <div className="nav-container">
              <ul>
                <li className="logo-tab">
                  <a className="navbar-brand" to="#">
                    <img className="logo-2" src={logo} alt="airbnb" />
                  </a>{" "}
                </li>
                <li className="tab">Places to stay</li>
                <li className="tab">Experiences</li>
                <li className="tab">Online experiences</li>
                <li>
                  <button className="tab-2">Become a host</button>
                </li>
                <li className="menu-tab">
                  <MenuOutlinedIcon />
                  {/* <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select> */}
                  <p className="account-icon">
                    <AccountCircleIcon />
                  </p>
                </li>
                <li>
                  <button className="world">
                    <LanguageOutlinedIcon />
                  </button>
                </li>
              </ul>
            </div>
            <div className="outer">
              <div className="container">
                <ul style={{ padding: 0 }}>
                  <li className="head">
                    Location <br />
                    <p className="subhead">Where are you going?</p>
                  </li>
                  <li className="head">
                    Check in
                    <br />
                    <p className="subhead">Add dates</p>
                  </li>
                  <li className="head">
                    Check out
                    <br />
                    <p className="subhead">Add dates</p>
                  </li>
                  <li className="head" style={{ border: "none" }}>
                    Guests
                    <br />
                    <p className="subhead">Add guests</p>
                  </li>
                  <li>
                    <button className="search">
                      <SearchRoundedIcon />
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="main-root">
            <div className="form-group has-search">
              <span className="fa fa-search form-control-feedback"></span>
              <input
                type="text"
                className="form-control"
                placeholder="Where are you going?"
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default MainNav;
