import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import heroImg from "../../../images/hero-img.jpg";
import SingleCourse from "../Course/SingleCourse/SingleCourse";
import "./Home.css";

const Home = () => {
  const courses = useLoaderData();

  const topCourse = courses.slice(8, 12);

  return (
    <div>
      {/* Hero Section HTML Start */}

      <section className="hero mt-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <div className="hero-content">
                <h2>
                  <span>Coding Skill -</span> <br /> Learn coding like a Pro
                </h2>
                <p>
                  Welcome, this is Coding Skill an online Code Learning
                  Platform. Here you will find world-class coding course for
                  reasonable price and unlimited support.
                </p>
                <div className="get-started">
                  <Link to="/courses" className="btn btn-warning px-4 py-2">
                    Get Started
                  </Link>
                </div>
              </div>
            </Col>
            <Col md={6} className="mt-5 mt-md-0">
              <Image className="img-fluid" src={heroImg}></Image>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Hero Section HTML End */}

      {/* Top Selling section HTML Start */}

      <section>
        <Container>
          <div className="top-course my-5">
            <h2>Top Selling Course</h2>
            <div className="top-selling-wrapper">
              {topCourse.map((course) => (
                <SingleCourse key={course.id} course={course}></SingleCourse>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Top Selling section HTML End */}
    </div>
  );
};

export default Home;
