import React from "react";
import { Col } from "react-bootstrap";

const ImageComponent = (props) => {

    const { mealDetail } = props
  return (
    <Col md={6}>
      <img
        src={`${mealDetail.strMealThumb}`}
        alt=""
        style={{ width: "100%", height: "500px", borderRadius: "50px" }}
      />
    </Col>
  );
};

export default ImageComponent;
