import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import HomePage from "../pages/Home/HomePage/HomePage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";


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
]);