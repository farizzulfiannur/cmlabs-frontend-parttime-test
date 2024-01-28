import axios from "axios";

export const getIngredientsList = () => {
    return axios
      .get(`${process.env.REACT_APP_BASEURL}/list.php?i=list`)
      .then((response) => {
        return response.data.meals;
      });
  };
  