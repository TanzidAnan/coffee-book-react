
import { createBrowserRouter } from "react-router-dom";
// import App from "../App";
import MainLayouts from "../layouts/MainLayouts";
import Coffess from "../Pages/Coffess";
import DashBoard from "../Pages/DashBoard";
import Home from "../Pages/Home";
import CoffeeCard from "../Compontents/CoffeeCard";
import Coffie from "../Coffie";

const routes =createBrowserRouter([
    {
        path:'/',
        element:<MainLayouts></MainLayouts>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:() => fetch('./categories.json'),
                children:[
                    {
                        path:'/',
                        element:<CoffeeCard></CoffeeCard>,
                        loader:() => fetch('../coffees.json')
                    },
                    {
                        path:'/categorie/:category',
                        element:<CoffeeCard></CoffeeCard>,
                        loader:() => fetch('../coffees.json')
                    },
                ]
            },
            {
                path:'/coffees',
                element:<Coffess></Coffess>,
                loader:() => fetch('../coffees.json')
            },
            {
                path:'/coffee/:id',
                element:<Coffie></Coffie>,
                loader:() => fetch('../coffees.json')
            },
            {
                path:'/dashboard',
                element:<DashBoard></DashBoard>
            }
        ]
    }
])

export default routes