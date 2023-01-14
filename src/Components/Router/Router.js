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
import AllFoodLists from "../FoodMenu/AllFoodLists";
import EachFoodDetails from "../FoodMenu/EachFoodDetails";
import BookingDate from "../Shared/BookingSection/BookingDate";
import BookForm from "../Shared/BookingSection/BookForm";
import Login from "../Authentication/Log/Login";
import Register from "../Authentication/Register/Register";
import Dashboard from "../Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Payment from "../Dashboard/Payment/Payment";
import DashboardLayout from "../DashboardLayout/DashboardLayout";

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
                path: '/foodList/:id',
                element: <AllFoodLists></AllFoodLists>
            },
            // {
            //     path: '/foodList/:id',
            //     element: <Pizza></Pizza>
            // },
            // {
            //     path: '/foodList/:id',
            //     element: <Burger></Burger>
            // },
            // {
            //     path: '/foodList/:id',
            //     element: <Juice></Juice>
            // },
            // {
            //     path: '/foodList/:id',
            //     element: <Lunch></Lunch>
            // },
            // {
            //     path: '/foodList/:id',
            //     element: <Dinner></Dinner>
            // },
            {
                path: '/news',
                element: <News></News>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/Booking-Date",
                element: <BookingDate></BookingDate>
            },
            {
                path: "/Book-Form",
                element: <BookForm></BookForm>
            }
        ]
    },
    {
        path: "/Dashboard",
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/Dashboard',
                element: <Dashboard></Dashboard>
            }
        ]
    }
])