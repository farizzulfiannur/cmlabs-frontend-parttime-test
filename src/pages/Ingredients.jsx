import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import NavbarComponent from "../components/NavbarComponent";
import IngredientsList from "../components/Ingredients/IngredientsList";
import IngredientsSearch from "../components/Ingredients/IngredientsSearch";
import { getIngredientsList } from "../utils/useIngredients";
import LoadingComponent from "../components/LoadingComponent";

const Ingredients = () => {
  const [ingredientsMeal, setingredientsMeal] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getIngredientsList().then((response) => {
      setingredientsMeal(response);
      setLoading(false);
    });
  }, []);

  const searchQuery = (event) => {
    setSearch(event.target.value);
  };

  if (loading) {
    return(
      <div>
        <LoadingComponent />;
      </div>
    );
  } 
  else {
    return (
      <div>
        <NavbarComponent />
        <Container>
          <h1 className="text-center font-weight-bold mb-5"> Taste dishes with typical variations </h1>
          <IngredientsSearch searchQuery={searchQuery} />
          <Row>
            {ingredientsMeal && ingredientsMeal
              .filter((ingredient) => {
                return ingredient.strIngredient
                  .toLowerCase()
                  .includes(search.toLowerCase());
              })
              .map((ingredient) => (
                <IngredientsList ingredient={ingredient} />
              ))}
          </Row>
        </Container>
      </div>
    );
  }
};

export default Ingredients;
