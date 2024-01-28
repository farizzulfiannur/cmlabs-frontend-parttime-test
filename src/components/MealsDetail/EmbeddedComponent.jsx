import React from "react";
import { Col } from "react-bootstrap";

const EmbeddedComponent = (props) => {
  const { mealDetail, getEmbedUrl } = props
  return (
    <div>
      <Col md={12} className="mt-3 mb-3">
        <h3> Youtube Content </h3>
      </Col>
      <Col md={12}>
        {mealDetail.strYoutube && (
          <iframe
            width="100%"
            height="540px"
            src={getEmbedUrl(mealDetail.strYoutube)}
            title="YouTube video player"
            className="mb-5"
          ></iframe>
        )}
      </Col>
    </div>
  );
};

export default EmbeddedComponent;
