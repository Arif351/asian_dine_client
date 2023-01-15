import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home";
import News from "../Shared/News/News";
import About from "../Shared/About/About";
import AllFoodLists from "../FoodMenu/AllFoodLists";
import BookingDate from "../Shared/BookingSection/BookingDate";
import BookForm from "../Shared/BookingSection/BookForm";
import Login from "../Authentication/Log/Login";
import Register from "../Authentication/Register/Register";
import Dashboard from "../Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import DashboardLayout from "../DashboardLayout/DashboardLayout";
import UsersBookingDetails from "../DashboardLayout/AllUsers/UsersBookingDetails";
import Users from "../DashboardLayout/AllUsers/Users";

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
                element: <UsersBookingDetails></UsersBookingDetails>
            },
            {
                path: '/AllUsers',
                element: <Users></Users>
            }
        ]
    }
])