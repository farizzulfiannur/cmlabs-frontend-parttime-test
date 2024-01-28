import axios from "axios";

export const getMealsDetail = (value) => {
  return axios
    .get(`${process.env.REACT_APP_BASEURL}/lookup.php?i=${value}`)
    .then((response) => {
    //   console.log(response.data.meals);
    return response.data.meals;
    });
};
