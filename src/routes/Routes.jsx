import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import DashBoard from "../pages/DashBoard";
import ErrorPage from "../pages/ErrorPAge";
import TodaysTask from "../pages/TodaysTask";
import AboutUs from "../pages/AboutUs";
import LoginPage from "../pages/LoginPage";
import Register from "../pages/Register";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        errorElement:<ErrorPage/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: 'dashboard',
                element: <DashBoard/>
            },
            {
                path: 'todays-task',
                element: <TodaysTask/>
            },
            {
                path: 'about-us',
                element: <AboutUs/>
            },
            {
                path: 'login',
                element: <LoginPage/>
            },
            {
                path: 'register',
                element: <Register/>
            },
        ]
    },
]);
export default Routes;