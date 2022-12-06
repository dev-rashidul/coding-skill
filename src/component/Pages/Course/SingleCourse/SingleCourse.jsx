import React from "react";
import { Image } from "react-bootstrap";
import { FaStar, FaUserAlt, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./SingleCourse.css";

const SingleCourse = ({ course }) => {
  const { id, name, desc, image, instructor, students, price, ratings } =
    course;

  return (
    <div className="course-card">
      <div className="course-card-img position-relative">
        <Image className="img-fulid" src={image}></Image>
        <div className="course-price">
          <span>${price}</span>
        </div>
      </div>
      <div className="course-card-content">
        <h3>{name?.slice(0, 30)}...</h3>
        <p>{desc?.slice(0, 50)}...</p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="course-info">
            <h6>
              <FaUserAlt></FaUserAlt> {instructor}
            </h6>
            <p>
              <FaUsers></FaUsers>
              <span className="ps-2">{students}</span>
            </p>
            <span>
              <FaStar></FaStar> <span className="ps-2">{ratings}</span>
            </span>
          </div>
          <div className="course-details-btn">
            <Link to={`/course/${id}`}>Course Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCourse;
