import React from 'react';
import { Accordion } from 'react-bootstrap';
import './Faq.css';

const Faq = () => {
    return (
        <div className="faq">
      <div className="faq-wrapper my-5">
        <h3>FAQ</h3>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>1. Why I should purchase your course?</Accordion.Header>
            <Accordion.Body>
              You should purchase our course because we are providing world-class course in easy/simple way. Also after complete our course you will learn fundamentals strongly and you will get a certificate after complete this?
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>2. How I purchase your course?</Accordion.Header>
            <Accordion.Body>
              After login you will go to the course page and click on the course details button then go to checkout after that you have to payment then you can continue course any time.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              3. Is it online course or offline?
            </Accordion.Header>
            <Accordion.Body>
              It is offline course that meanse recorded video you can watch any time and you will get lifetime access.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              4. How you provide support after purchase?
            </Accordion.Header>
            <Accordion.Body>
              After purchase our course Instructor will add you in a private group there has a lot of telented person they will try to help you a certain time.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>
              5. What is your refund Policy?
            </Accordion.Header>
            <Accordion.Body>
              Our refund policy is : After purchasing the course if you think it's not for you so, you will get refund within 7 days.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
    );
};

export default Faq;