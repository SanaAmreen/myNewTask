import React, { Component, useState } from "react";
import "./AdminDashBoard.css";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { Switch } from "react-router";
import { Redirect } from "react-router-dom";

import NavBar from "./NavBar.jsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsersCog,
  faUsers,

} from "@fortawesome/free-solid-svg-icons";


function Admin (props)  {
    return (
      <Router>
        {/* <Redirect to='/login'  /> */}

        <div id="outer-main-div">
          <div id="outer-nav">
            <NavBar />
          </div>

          <div id="main-non-nav">
            <div id="sidebar">
              <div id="sidebar-top-content" />
              <div id="main-title">
                <FontAwesomeIcon icon={faUsersCog} className="sidebar-icon" />
                Admin
              </div>
              <ul className="navbar-ul">
                <li>
                  <Link to="/admin/pim">
                    <FontAwesomeIcon icon={faUsers} className="sidebar-icon" /> 
                    PIM 
                  </Link> 
                </li>
                <li>
                  <Link to="/admin/leave">
                    <FontAwesomeIcon icon={faUsers} className="sidebar-icon" /> 
                    Leave
                  </Link> 
                </li>
                <li>
                  <Link to="/admin/time">
                    <FontAwesomeIcon
                      icon={faUsers}
                      className="sidebar-icon"
                    /> 
                    Time
                  </Link> 
                </li>
                <li>
                  <Link to="/admin/my-info">
                    <FontAwesomeIcon
                      icon={faUsers}
                      className="sidebar-icon"
                    /> 
                    MY Info
                  </Link> 
                </li>
                <li>
                  <Link to="/admin/dashboard">
                    <FontAwesomeIcon icon={faUsers} className="sidebar-icon" /> 
                    Dashboard 
                  </Link> 
                </li>
                <li>
                  <Link to="/admin/directoryr">
                    <FontAwesomeIcon icon={faUsers} className="sidebar-icon" /> 
                    Directory 
                  </Link> 
                </li>
                <li>
                  <Link to="/admin/maintainance">
                    <FontAwesomeIcon icon={faUsers} className="sidebar-icon" /> 
                    Maintainance 
                  </Link> 
                </li>
                <li>
                  <Link to="/admin/Buzz">
                    <FontAwesomeIcon icon={faUsers} className="sidebar-icon" /> 
                    Buzz 
                  </Link> 
                </li>
                
              </ul>
            </div>

          </div>
        </div>
      </Router>
    );
  }


export default Admin;
