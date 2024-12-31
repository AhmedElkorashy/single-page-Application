/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top ">
      <div className="container ">
        <NavLink
          className="navbar-brand text-white active fw-bolder fs-2 text-wrap"
          to=""
        >
          Start Framework
        </NavLink>
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
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-4">
            <li className="nav-item ">
              <NavLink
                className="nav-link fw-bold  text-white px-3"
                aria-current="page"
                to="about"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink
                className="nav-link fw-bold  text-white px-3"
                aria-current="page"
                to="portfolio"
              >
                Portfolio
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink
                className="nav-link fw-bold  text-white px-3"
                aria-current="page"
                to="contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
