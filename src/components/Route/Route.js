import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../Blog/Blog";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Home/Home/Home";
import ServiceDetails from "../Home/Services/ServiceDetails";
import Services from "../Home/Services/Services";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import PrivetRoute from "./PrivetRoute/PrivetRoute";

const route = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/services',
                element: <PrivetRoute><Services></Services></PrivetRoute>
            },
            {
                path: '/services/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),
                element: <PrivetRoute><ServiceDetails></ServiceDetails></PrivetRoute>
            }

        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }

])

export default route