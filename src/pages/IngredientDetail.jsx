import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getMealsList } from "../utils/useMeals";
import { Container, Row, Spinner } from "react-bootstrap";
import MealsList from "../components/IngredientsDetail/MealsList";
import MealsSearch from "../components/IngredientsDetail/MealsSearch";
import NavbarComponent from "../components/NavbarComponent";
import LoadingComponent from "../components/LoadingComponent";

const IngredientDetail = () => {
  const [mealList, setMealList] = useState([]);
  const { strIngredients } = useParams();
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getMealsList(strIngredients).then((response) => {
      setMealList(response);
      setLoading(false);
    });
    // getMealsList(strIngredients);
  }, []);

  const searchQuery = (event) => {
    setSearch(event.target.value);
  };

  if (loading) {
    return (
      <div>
        <LoadingComponent />
      </div>
    );
  } else {
    return (
      <div>
        <NavbarComponent />
        <Container>
          <div className="mb-3">
          <Link
            className="text-light"
            to="/">
            <span>Ingredients</span>
          </Link>
            <span> {`>`} </span>
            <span>Meals</span>
          </div>
          <MealsSearch searchQuery={searchQuery} />
          <Row>
            {mealList &&
              mealList
                .filter((meal) => {
                  return meal.strMeal
                    .toLowerCase()
                    .includes(search.toLowerCase());
                })
                .map((meal) => <MealsList meal={meal} />)}
          </Row>
        </Container>
      </div>
    );
  }
};

export default IngredientDetail;
