import React from "react";
import "../style/AdminPlannerStyle.css";
import adminLogo from "../assets/image/favicon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { faListUl } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function AdminPlanner() {
  const [active, setActive] = useState(null);

  const handleClick = (btnId) => setActive(btnId);
  return (
    <div>
      <div className="admin-container">
        <div className="admin-menu">
          <div className="admin-logo">
            <img src={adminLogo} alt="logo" className="logo-img"></img>
            <h3 className="logo-text">Disney+hotstar</h3>
          </div>
          <div className="button-container">
            <NavLink to={"/"} className="navlink">
              <button
                type="button"
                className={`movie-btn ${!active == 1 ? "active" : ""}`}
                onClick={() => handleClick(1)}
              >
                <FontAwesomeIcon icon={faVideo} className="icon" />
                <span className="movie-text"> Movies </span>
              </button>
            </NavLink>
            <NavLink to={"/category"} className="navlink">
              <button
                type="button"
                className={`movie-btn ${!active == 2 ? "active" : ""}`}
                onClick={() => handleClick(2)}
              >
                <FontAwesomeIcon icon={faListUl} className="icon" />
                <span className="movie-text">Category</span>
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPlanner;
