import React from "react";
import { Col } from "react-bootstrap";

const descriptionComponent = (props) => {

  const { mealDetail } = props
  return (
    <Col md={6}>
      <h3> Intructions </h3>
      <p style={{ textAlign: "justify" }} className="mb-3">
        {mealDetail.strInstructions}
      </p>

      <h3> Recipes </h3>
      <ul>
        {Array.from({ length: 20 }, (_, index) => index + 1).map(
          (ingredientIndex) => {
            const ingredient = mealDetail[`strIngredient${ingredientIndex}`];
            return ingredient && <li key={ingredientIndex}>{ingredient}</li>;
          }
        )}
      </ul>
    </Col>
  );
};

export default descriptionComponent;
