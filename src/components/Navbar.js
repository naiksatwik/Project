"use strict";
import React from "react";
import propType from "prop-types";
import {Link} from 'react-router-dom'

export default function Navbar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}
      >
        <div >
           <a  className="container-fluid"  href="#">
           {props.title}
          </a> 
          {/* <Link className="container-fluid" to='/'></Link> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <a className="nav-link active" aria-current="page" href="#">
              
                </a> */}
                <Link className="nav-link active" aria-current="page" to="/about">{props.aboutS}</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  {props.link}
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {props.dd}
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled"></a>
              </li>
            </ul>
            <div
              className={`form-check form-switch text-${props.textColor}`}
            >
              <input
                className="form-check-input bg-se border-0"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.IfClick}
              />
              <label
                className="form-check-label t"
                for="flexSwitchCheckDefault"
              >
                {props.TextMode}
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: propType.string,
  aboutS: propType.string,
};

Navbar.defaultProps = {
  title: "Text Utils",
  aboutS: "About_Us",
  icon: "Search",
  link: "More link",
  dd: "hamburger Menu",
};
