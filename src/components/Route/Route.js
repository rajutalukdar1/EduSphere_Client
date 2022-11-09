import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AddServices from "../AddServices/AddServices";
import Blog from "../Blog/Blog";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Home/Home/Home";
import ServiceDetails from "../Home/Services/ServiceDetails";
import Services from "../Home/Services/Services";
import Login from "../Login/Login";
import MyReview from "../MyReview/MyReview";
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
                path: '/myReview',
                element: <PrivetRoute><MyReview></MyReview></PrivetRoute>
            },
            {
                path: '/addServices',
                element: <PrivetRoute><AddServices></AddServices></PrivetRoute>
            },
            {
                path: '/services/:id',
                loader: ({ params }) => fetch(`https://assignment-no-11-server.vercel.app/services/${params.id}`),
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