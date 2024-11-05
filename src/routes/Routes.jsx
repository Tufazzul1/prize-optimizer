import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import HomePage from "../pages/Home/HomePage/HomePage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Dashboard from "../layout/Dashboard";
import Competitor from "../pages/DashboardPages/Competitor";
import Trends from "../pages/DashboardPages/Trends";
import History from "../pages/DashboardPages/History";
import Setting from "../pages/DashboardPages/Setting";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <HomePage></HomePage>
            },

        ],
    },
    {
        path: "/login",
        element: <Login></Login>
    },
    {
        path: "/signup",
        element: <SignUp></SignUp>
    },
    {
        path : 'dashboard',
        element : <Dashboard></Dashboard>,
        children : [
            {
                index : true,
                element : <Competitor></Competitor>
            },
            {
                path : "market-trends",
                element : <Trends></Trends>
            },
            {
                path : "change-history",
                element : <History></History>
            },
            {
                path : "store-setting",
                element : <Setting></Setting>
            },
        ]
    }
]);