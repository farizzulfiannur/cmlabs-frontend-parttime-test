import React from "react";
import { Link } from "react-router-dom";
import { Card, Col } from "react-bootstrap";
import css from "../../css/card.module.css";

const MealsList = (props) => {

  const { meal } = props

  return (
    <Col key={meal.idMeal} md="3" sm="12">
      <Link to={`/meals/detail/${meal.idMeal}`}>
        <Card className={`${css.customCard} mb-2`}>
          <Card.Img
            src={`${meal.strMealThumb}`}
            alt="Ingredient Image"
            className={css.cardImage}
          />
          <div className={`${css.overlay}`}></div>
          <Card.ImgOverlay className="d-flex align-items-center justify-content-center">
            <Card.Title className={`text-white text-center`}>
              {meal.strMeal}
            </Card.Title>
          </Card.ImgOverlay>
        </Card>
      </Link>
    </Col>
  );
};

export default MealsList;
