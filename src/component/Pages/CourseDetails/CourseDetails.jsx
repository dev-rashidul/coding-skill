import React from "react";
import { Image } from "react-bootstrap";
import { FaStar, FaUserAlt, FaUsers } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import "./CourseDetails.css";

const CourseDetails = () => {
  const courseDetails = useLoaderData();

  const { id, name, desc, image, instructor, students, price, ratings } =
    courseDetails;

  return (
    <div className="course-details-wrapper">
      <h2><span>Course :</span> {name}</h2>
      <div className="course-details-card">
        <div className="course-card-img position-relative">
          <Image className="img-fulid" src={image}></Image>
          <div className="course-price">
            <span>${price}</span>
          </div>
        </div>
        <div className="course-card-content">
          <h3>{name}</h3>
          <p>{desc}</p>
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
              <Link className="px-3" to={`/checkout/${id}`}>
                Enroll Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
