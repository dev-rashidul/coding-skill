import React from "react";
import { Accordion } from "react-bootstrap";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="blog">
      <div className="blog-wrapper my-5">
        <h3>Blog</h3>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>1. What is cors?</Accordion.Header>
            <Accordion.Body>
              Cross-Origin Resource Sharing (CORS) is an HTTP-header based
              mechanism that allows a server to indicate any origins (domain,
              scheme, or port) other than its own from which a browser should
              permit loading resources. An example of a cross-origin request:
              the front-end JavaScript code served from https://domain-a.com
              uses XMLHttpRequest to make a request for
              https://domain-b.com/data.json. For security reasons, browsers
              restrict cross-origin HTTP requests initiated from scripts. For
              example, XMLHttpRequest and the Fetch API follow the same-origin
              policy. This means that a web application using those APIs can
              only request resources from the same origin the application was
              loaded from unless the response from other origins includes the
              right CORS headers.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>2. Why are you using firebase?</Accordion.Header>
            <Accordion.Body>
              Firebase is a Realtime Database, collaborative applications by
              allowing secure access to the database directly from client-side
              code. We can host webiste for free and easily. Data is persisted
              locally, and even while offline, realtime events continue to fire,
              giving the end user a responsive experience. The Realtime Database
              is a NoSQL database and as such has different optimizations and
              functionality compared to a relational database. The Realtime
              Database API is designed to only allow operations that can be
              executed quickly. This enables you to build a great realtime
              experience that can serve millions of users without compromising
              on responsiveness. Because of this, it is important to think about
              how users need to access your data and then structure it
              accordingly.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              3. How does the private route work?
            </Accordion.Header>
            <Accordion.Body>
              Private Routes in React Router (also called Protected Routes)
              require a user being authorized to visit a route. So if a user is
              not authorized for a specific page, they cannot access it. The
              most common example is authentication in a React application where
              a user can only access the protected pages when they are
              authorized (which means in this case being authenticated).
              Authorization goes beyond authentication though. For example, a
              user can also have roles and permissions which give a user access
              to specific areas of the application.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              4. What is Node? How does Node work?
            </Accordion.Header>
            <Accordion.Body>
              Node.js is an open-source, cross-platform, back-end JavaScript
              runtime environment that runs on a JavaScript Engine (i.e. V8
              engine) and executes JavaScript code outside a web browser, which
              was designed to build scalable network applications. It is a used
              as backend service where javascript works on the server-side of
              the application. This way javascript is used on both frontend and
              backend. Node.js runs on chrome v8 engine which converts
              javascript code into machine code, it is highly scalable,
              lightweight, fast, and data-intensive. <br />
              Working of Node.js: Node.js accepts the request from the clients
              and sends the response, while working with the request node.js
              handles them with a single thread. To operate I/O operations or
              requests node.js use the concept of threads. Thread is a sequence
              of instructions that the server needs to perform. It runs parallel
              on the server to provide the information to multiple clients.
              Node.js is an event loop single-threaded language. It can handle
              concurrent requests with a single thread without blocking it for
              one request.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

export default Blog;
