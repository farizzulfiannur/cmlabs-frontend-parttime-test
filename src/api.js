import axios from "axios";

// export const getIngredientsList =  async() => {
//     const ingredients = await axios.get(`${process.env.REACT_APP_BASEURL}/list.php?i=list`);
//     // console.log({ingredientsList: ingredients})
//     return ingredients.data.meals;
// }

export const getIngredientsList = () => {
  return axios
    .get(`${process.env.REACT_APP_BASEURL}/list.php?i=list`)
    .then((response) => {
      return response.data.meals;
    });
};

// export const searchIngredients = (searchValue) => {
//   return axios.get(`www.themealdb.com/api/json/v1/1/filter.php?i=${searchValue}`).then((response) => {
//     return response.data.meals;
//   })
// }

// export const searchIngredients = async(searchValue) => {
//   const search = await axios.get(searchValue);
//   console.log(searchValue);
// }

export const searchIngredients = async(searchValue) => {
  const search = await axios.get(`www.themealdb.com/api/json/v1/1/filter.php?i=${searchValue}`);
  return search.data.meals;
}

// export const searchIngredients = () => {
//   return axios.get(`www.themealdb.com/api/json/v1/1/filter.php?i=${query}`).then(() => {
//     console.log(ingredients: response);
//   })
// }
