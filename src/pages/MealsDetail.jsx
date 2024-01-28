import React, { useEffect, useState } from "react";
import NavbarComponent from "../components/NavbarComponent";
import { Container, Row } from "react-bootstrap";
import { getMealsDetail } from "../utils/useMealsDetail";
import { Link, useParams } from "react-router-dom";
import TitleComponent from "../components/MealsDetail/titleComponent";
import ImageComponent from "../components/MealsDetail/ImageComponent";
import DescriptionComponent from "../components/MealsDetail/descriptionComponent";
import EmbeddedComponent from "../components/MealsDetail/EmbeddedComponent";
import LoadingComponent from "../components/LoadingComponent";

const MealsDetail = () => {
  const { idMeal } = useParams();
  const [mealDetail, setMealDetail] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getMealsDetail(idMeal).then((response) => {
      const firstMeal = response[0];
      setMealDetail(firstMeal);
      setLoading(false);
    });
  }, []);

  const getEmbedUrl = (url) => {
    const videoId = url && url.split("v=")[1];
    return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
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
          <Link
            className="text-light"
            to="#"
            onClick={() => window.history.back()}
          >
            <span>Meals</span>
          </Link>
          <span> {`>`} </span>
          <span>Details</span>
        </div>
          <TitleComponent mealDetail={mealDetail} />
          <Row>
            <ImageComponent mealDetail={mealDetail} />
            <DescriptionComponent mealDetail={mealDetail} />
          </Row>
          <Row>
            <EmbeddedComponent
              mealDetail={mealDetail}
              getEmbedUrl={getEmbedUrl}
            />
          </Row>
        </Container>
      </div>
    );
  }
};

export default MealsDetail;
