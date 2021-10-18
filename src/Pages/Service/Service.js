
import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Service.css"

const Service = (props) => {
  // destructuring
    const{ id, courseName, img, fee, language, creator, details}=props.service;
    return (
        
      <Col>
      {/* start card */}
      <Card className="card">
        <Card.Img className="cardImage" variant="top" src={img} />
        <Card.Body>
          <Card.Title className="cardTitle">{courseName}</Card.Title>
          <h3 className="text-danger fw-bold">${fee}</h3>
          <hr></hr>
          <div className="d-flex justify-content-between">
            <p className="bg-info fw-bold px-4  rounded-pill text-white">{creator}</p>
            <p className="bg-info fw-bold px-4  rounded-pill text-white">{language}</p>
          </div>
          
          <Card.Text className="cardDetails">
            {details}
          </Card.Text>
          <Link to={`/service-details/${id}`} >
            <Button className="w-100 fw-bold" variant="success">Details</Button>
          </Link>
          
        </Card.Body>
      </Card>
    </Col>
        
    );
};

export default Service;