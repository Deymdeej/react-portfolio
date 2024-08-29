import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { meta } from "../../content_option";

export const Resume = () => {
  return (
    <HelmetProvider>
      <Container>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title} | Resume</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="12" className="d-flex justify-content-center">
            <img
              src="/images/resume.png"
              alt="Resume"
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
