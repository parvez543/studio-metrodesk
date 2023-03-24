import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AboutUs from "../Pages/AboutUs/AboutUs";
import ContactPage from "../Pages/ContactPage/ContactPage";
import HomePage from "../Pages/HomePage/HomePage";
import Team from "../Pages/Team/Team";

export const router = createBrowserRouter([
    {
        path: "/", element: <Main/>, children: [
            {
                path: "/", element: <HomePage/>
            },
            {
                path: "/contact", element: <ContactPage/>
            },
            {
                path: "/aboutus", element: <AboutUs/>
            },
            {
                path: "/meettheteam", element: <Team/>
            }
        ] 
    }
])