import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AboutUs from "../Pages/AboutUs/AboutUs";
import CareerPage from "../Pages/CareerPage/CareerPage";
import ClippingPath from "../Pages/ClippingPath/ClippingPath";
import ContactPage from "../Pages/ContactPage/ContactPage";
import ECommerceBusiness from "../Pages/ECommerceBusiness/ECommerceBusiness";
import FAQ from "../Pages/FAQ/FAQ";
import GrowingBrands from "../Pages/GrowingBrands/GrowingBrands";
import HomePage from "../Pages/HomePage/HomePage";
import Photographers from "../Pages/Photographers/Photographers";
import Process from "../Pages/Process/Process";
import StudioAndAgencies from "../Pages/StudioAndAgencies/StudioAndAgencies";
import Team from "../Pages/Team/Team";
import Testimonial from "../Pages/Testimonial/Testimonial";
import MultiClippingPath from "../Pages/MultiClippingPath/MultiClippingPath";
import GhostMannequine from "../Pages/GhostMannequine/GhostMannequine";
import PhotoRetouching from "../Pages/PhotoRetouching/PhotoRetouching";
import VectorConversion from "../Pages/VectorConversion/VectorConversion";
import Embroidery from "../Pages/Embroidery/Embroidery";
import Pricing from "../Pages/Pricing/Pricing";

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
            },
            {
                path: "/career", element: <CareerPage/>
            },
            {
                path: "/faq", element: <FAQ/>
            },
            {
                path: "/testimonial", element: <Testimonial/>
            },
            {
                path: "/photographers", element: <Photographers/>
            },
            {
                path: "/ecommerce", element: <ECommerceBusiness/>
            },
            {
                path: "/studioandagencies", element: <StudioAndAgencies/>
            },
            {
                path: "/growingbrands", element: <GrowingBrands/>
            },
            {
                path: "/process", element: <Process/>
            },
            {
                path: "/clippingpath", element: <ClippingPath/>
            },
            {
                path: "/multiclippingpath", element: <MultiClippingPath/>
            },
            {
                path: "/ghostmannequine", element: <GhostMannequine/>
            },
            {
                path: "/photoretouching", element: <PhotoRetouching/>
            },
            {
                path: "/vectorconversion", element: <VectorConversion/>
            },
            {
                path: "/embroidery", element: <Embroidery/>
            },
            {
                path: "/pricing", element: <Pricing/>
            }
        ] 
    }
])