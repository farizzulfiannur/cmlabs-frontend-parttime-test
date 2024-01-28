import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import IngredientsList from './components/Ingredients/IngredientsList';
import IngredientDetail from './pages/IngredientDetail';
import Ingredients from './pages/Ingredients';
import MealsDetail from './pages/MealsDetail';
import css from './css/body.module.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Ingredients />
  },
  {
    path: '/meals/:strIngredients',
    element: <IngredientDetail />,
  },
  {
    path: '/meals/detail/:idMeal',
    element: <MealsDetail />,
  },
]);

function App() {
  return <div className={`${css.mycomponent}`}><RouterProvider router={router} /></div>;
    
}

export default App;
