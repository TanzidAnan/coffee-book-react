
import { createBrowserRouter } from "react-router-dom";
// import App from "../App";
import MainLayouts from "../layouts/MainLayouts";

const routes =createBrowserRouter([
    {
        path:'/',
        element:<MainLayouts></MainLayouts>
    }
])

export default routes