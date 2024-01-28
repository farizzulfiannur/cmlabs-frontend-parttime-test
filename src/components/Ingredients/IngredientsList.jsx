import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import css from '../../css/card.module.css'

const IngredientsList = (props) => {

  const { ingredient } = props; 

  return (
    <Col key={ingredient.idIngredient} lg="3" md="4" sm={12}>
      <Link to={`/meals/${ingredient.strIngredient}`}>
        <Card className={`${css.customCard} mb-2`}>
          <Card.Img
            src="assets/img/ingredients.webp"
            alt="Ingredient Image"
            className={css.cardImage}
          />
          <div className={`${css.overlay}`}></div>
          <Card.ImgOverlay className="d-flex align-items-center justify-content-center">
            <Card.Title className={`text-white text-center`}>
              {ingredient.strIngredient}
            </Card.Title>
          </Card.ImgOverlay>
        </Card>
      </Link>
    </Col>
  );
};

export default IngredientsList;
