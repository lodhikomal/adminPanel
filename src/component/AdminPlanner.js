import React from "react";
import "../style/AdminPlannerStyle.css";
import adminLogo from "../assets/image/favicon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { faListUl } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function AdminPlanner() {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => setToggle(!toggle);

  return (
    <div className={`admin-menu ${toggle ? "menu-open" : ""}`}>
      {/* <div className="admin-menu"> */}
      <div className="admin-container">
        <div className="admin-logo">
          <img src={adminLogo} alt="logo" className="logo-img"></img>
          <h3 className="logo-text">Disney+hotstar</h3>
        </div>

        <div className="menu-icon-bars">
          {toggle ? (
            <FontAwesomeIcon
              icon={faXmark}
              className="menu-icon-cancel"
              onClick={handleClick}
            />
          ) : (
            <FontAwesomeIcon
              icon={faBars}
              className="menu-icon-btn"
              onClick={handleClick}
            />
          )}
        </div>
      </div>
      {/* <div className="button-container"> */}
      <div className={`button-container ${toggle ? "show" : ""}`}>
        <div>
          <NavLink to={"/movie"} className="navlink">
            <button type="button" className="movie-btn">
              <FontAwesomeIcon icon={faVideo} className="icon" />
              <span className="movie-text"> Movies </span>
            </button>
          </NavLink>
          <NavLink to={"/category"} className="navlink">
            <button type="button" className="movie-btn">
              <FontAwesomeIcon icon={faListUl} className="icon" />
              <span className="movie-text">Category</span>
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default AdminPlanner;
