import React from "react";
import Layout from "./Layout";
import "../style/movieStyle.css";

function Movie() {
  return (
    <Layout>
      <div className="table-container">
        <table>
          <tbody>
            <thead>
              <tr>
                <th>Name</th>
                <th>movies.name</th>
                <th>Release date</th>
                <th>type</th>
              </tr>
            </thead>
          </tbody>
        </table>
      </div>
    </Layout>
  );
}

export default Movie;
