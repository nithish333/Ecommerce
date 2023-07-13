import React from "react";
import "./Ratings.css";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
const Ratings = ({ ratings }) => {
  return (
    <div className="star">
      <span>
        {ratings > 1 ? (
          <FaStar />
        ) : ratings >= 0.5 ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </span>

      <span>
        {ratings > 2 ? (
          <FaStar />
        ) : ratings >= 1.5 ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </span>

      <span>
        {ratings > 3 ? (
          <FaStar />
        ) : ratings >= 2.5 ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </span>

      <span>
        {ratings > 4 ? (
          <FaStar />
        ) : ratings >= 3.5 ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </span>

      <span>
        {ratings > 5 ? (
          <FaStar />
        ) : ratings >= 4.5 ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </span>
    </div>
  );
};

export default Ratings;
