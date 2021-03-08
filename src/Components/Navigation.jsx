import React from "react";
import { Link, withRouter } from "react-router-dom";
import logo from '../image/logo.png';

function Navigation(props) {
  return (
    <div className="navigation">
      <nav class="navbar navbar-expand-lg fixed-top py-3">
        <div class="container">
            <a href="/" class="navbar-brand text-uppercase font-weight-bold"><img src={logo}></img></a>
            <div id="navbarSupportedContent" class="collapse navbar-collapse ">
            <ul class="navbar-nav ml-auto">
              <li
                class={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/">
                  Home
                  <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/about" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/contact" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div class="empty">
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);