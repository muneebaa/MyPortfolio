import React, { useState, useEffect } from "react";
import "./style.css";
import { HashLink as Link } from "react-router-hash-link";

const Pagination = ({ totalPages, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    onPageChange(currentPage);
  }, [currentPage, onPageChange]);

  const handlePreviousClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleClick = (page) => {
    setCurrentPage(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <p
          key={i}
          className={`${currentPage === i ? "active" : null} pagination_number`}
        >
          <div onClick={() => handleClick(i)}>{i}</div>
        </p>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="pagination">
      <div className="pagination_inner">
        <Link to="#project" smooth>
          <div className="nav-arrow" onClick={handlePreviousClick}>
            {"<"}
          </div>
        </Link>

        <div className="pagination_numbers">{renderPageNumbers()}</div>
        <Link to="#project" smooth>
          <div className="nav-arrow" onClick={handleNextClick}>
            {">"}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Pagination;
