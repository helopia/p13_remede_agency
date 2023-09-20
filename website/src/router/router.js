import {createBrowserRouter} from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../pages/Home";
import User from "../pages/User";




export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Home/>,
                // loader: Userloader,
            },
            {
                path: "/user",
                element: <User/>,
                // loader: logementsloader,
            },

        ],
    },
]);
