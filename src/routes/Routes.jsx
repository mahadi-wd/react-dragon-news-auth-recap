import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import News from "../pages/news/News";
import PrivetRoute from "./privetRoute/PrivetRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>, 
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('news.json')
                
            },
            {
                path: '/news/:id',
                element: <PrivetRoute><News></News></PrivetRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Registration></Registration>
            }
           
        ]
    }    
]);

export default router;