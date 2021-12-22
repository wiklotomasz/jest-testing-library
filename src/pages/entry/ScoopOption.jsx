import React from "react";
import Col from "react-bootstrap/Col";

function ScoopOption(props) {
  const { name, imagePath } = props;
  return (
    <Col xs={12} sm={6} md={4} lg={3} style={{ textAlign: "center" }}>
      <img
        style={{ width: "75%" }}
        src={`http://localhost:3030/${imagePath}`}
        alt={name}
      />
    </Col>
  );
}

export default ScoopOption;
