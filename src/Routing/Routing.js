import { createBrowserRouter } from "react-router-dom";
import LoginLayout from "../layout/LoginLayout";
import Main from "../layout/Main";
import Error from "../pages/ErrorPage/Error";
import FAQ from "../pages/FAQ/FAQ";
// import HigherStudy from "../pages/Higher Study/HigherStudy";
import Home from "../pages/HomePage/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import ContactContainer from "../pages/Contact/ContactContainer";
import About from "../pages/About/About";
import Product_Service from "../pages/Product_Service/ProductService";
import ProductService from "../pages/Product_Service/ProductService";
// import ProtectedLogin from "../pages/ProtectedRoute/ProtectedLogin";
// import ProtectedRoute from "../pages/ProtectedRoute/ProtectedRoute";

// const {currentUser} = useContext(UserContext)



export const routing = createBrowserRouter([{
    path: '/', element: <Main />, children: [
        {
            path: '/', element: <Home />
        },
        {
            path: '/contact', element: <ContactContainer />
        },
        {
            path: '/about', element: <About />
        },
        {
            path: '/service_product', element: <ProductService />
        },
        {
            path: '/faq', element: <FAQ />,
            // loader: () => {
            //     // return fetch('http://localhost:4000/faqQuestions')
            // }
        },
        {
            path: '/login', element: <LoginLayout />, children: [
                {
                    path: 'signin', element: <Login />
                },
                {
                    path: 'signup', element: <Register />
                },
            ]
        },
    ],
    errorElement: <Error />
}])