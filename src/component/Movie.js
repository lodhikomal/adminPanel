import React from "react";
import Layout from "./Layout";
import "../style/movieStyle.css";

function Movie() {
  return (
    <Layout>
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
              <th>type</th>
            </tr>
          </thead>
          <tbody>
            <td></td>
          </tbody>
        </table>
      </div>
    </Layout>
  );
}

export default Movie;
