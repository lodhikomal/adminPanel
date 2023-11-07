import React from "react";
import Layout from "./Layout";
import "../style/movieStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
function Movie() {
  return (
    <Layout>
      <div className="table-btn ">
        <button type="submit" className="btn-add">
          Add
        </button>
      </div>
      <div className="table-heading">
        <div className="table-up">
          <h3>Movie Panel</h3>

          <input
            type="text"
            className="searchbar"
            placeholder="Search.."
          ></input>
        </div>
        <table className="table-container">
          <thead>
            <tr className="table-row">
              <th>Name</th>
              <th>movies.name</th>
              <th>Release date</th>
              <th>Type</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>bow</td>
              <td>23443</td>
              <td>23443</td>
              <td>23443</td>
              <td>
                <div className="action-container">
                  <FontAwesomeIcon
                    icon={faPenToSquare}
                    className="action-icon"
                  />
                  <FontAwesomeIcon icon={faTrash} className="action-icon" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Layout>
  );
}

export default Movie;
