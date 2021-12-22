import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

function ToppingOption({ name, imagePath, updateItemCount }) {
  const handleChange = (event) => {
    const itemCount = event.target.checked ? 1 : 0;
    updateItemCount(name, itemCount);
  };
  return (
    <Col xs={12} sm={6} md={4} lg={3} style={{ textAlign: "center" }}>
      <img
        style={{ width: "75%" }}
        src={`http://localhost:3030/${imagePath}`}
        alt={name}
      />
      <Form.Group controlId={`${name}-count`}>
        <Form.Label>{name}</Form.Label>
        <Col>
          <Form.Check
            type="checkbox"
            defaultChecked={false}
            role="checkbox"
            onChange={handleChange}
          ></Form.Check>
        </Col>
      </Form.Group>
    </Col>
  );
}

export default ToppingOption;
