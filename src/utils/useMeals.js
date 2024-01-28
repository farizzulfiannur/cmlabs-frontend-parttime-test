import axios from "axios";

export const getMealsList = (value) => {
    return axios
      .get(`${process.env.REACT_APP_BASEURL}/filter.php?i=${value}`)
      .then((response) => {
        // console.log(response);
        return response.data.meals;
      });
  };