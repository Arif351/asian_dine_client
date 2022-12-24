import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Biryani from '../FoodMenu/Biryani'
import Home from "../Home/Home";
import Pizza from "../FoodMenu/Pizza"
import Burger from "../FoodMenu/Burger"
import Juice from "../FoodMenu/Juice"
import Lunch from "../FoodMenu/Lunch"
import Dinner from "../FoodMenu/Dinner"
import News from "../Shared/News/News";
import About from "../Shared/About/About";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/Biryani',
                element: <Biryani></Biryani>
            },
            {
                path: '/Pizza',
                element: <Pizza></Pizza>
            },
            {
                path: '/Burger',
                element: <Burger></Burger>
            },
            {
                path: '/Juice',
                element: <Juice></Juice>
            },
            {
                path: '/Lunch',
                element: <Lunch></Lunch>
            },
            {
                path: '/Dinner',
                element: <Dinner></Dinner>
            },
            {
                path: '/news',
                element: <News></News>
            },
            {
                path: '/about',
                element: <About></About>
            }
        ]
    }
])