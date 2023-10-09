import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/home";
import Explore from "../pages/explore";
import Notifications from "../pages/notifications";
import MainLayout from "../layouts/main";
import NotFound from "../pages/notfound";


const routes= createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/> ,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: "explore",
                element: <Explore/>
            },
            {
                path: "notifications",
                element: <Notifications/>
            },
            {
                //error page
                path: "*",
                element: <NotFound/>
            }
        ]
    }
])

export default routes;