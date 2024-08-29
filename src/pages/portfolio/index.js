import React, { useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

export const Portfolio = () => {
  const [show, setShow] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = (img) => {
    setSelectedImage(img);
    setShow(true);
  };

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Certificates | {meta.title} </title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Certificates </h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
          {dataportfolio.map((data, i) => (
            <div key={i} className="po_item">
              <img src={data.img} alt="" />
              <div className="content">
                <p>{data.description}</p>
                <Button variant="info" onClick={() => handleShow(data.img)}>
                  View
                </Button>
              </div>
            </div>
          ))}
        </div>

        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Image View</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={selectedImage} alt="Full view" className="img-fluid" />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </HelmetProvider>
  );
};