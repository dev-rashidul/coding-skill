import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import './Course.css';
import SingleCourse from "./SingleCourse/SingleCourse";

const Course = () => {
  const courses = useLoaderData();

  return (
    <div>
      <section className="courses-coontainer mt-5">
        <Container>
          <Row>
            <Col lg={4} xxl={3}>
              <div className="courses-name-wrapper">
                <h3>Our Courses</h3>
                <div>
                  {courses.map((courseName) => (
                    <Link to={`/course/${courseName.id}`} key={courseName.id}>
                      {courseName.name}
                    </Link>
                  ))}
                </div>
              </div>
            </Col>
            <Col lg={8} xxl={9} className="mt-5 mt-lg-0">
              <div className="courses">
                {courses.map((course) => (
                  <SingleCourse key={course.id} course={course}></SingleCourse>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Course;
