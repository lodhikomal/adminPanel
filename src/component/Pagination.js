// Pagination.js
import React from "react";
import "../style/paginationStyle.css";

const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className={`page-item ${number === currentPage ? "active" : ""}`}>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a onClick={(e) => { e.preventDefault(); paginate(number); }} href="#" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
