import { createBrowserRouter } from "react-router-dom";
import Acceuil from "../pages/Acceuil";
import Login from "../pages/Login";
import Contact from "../pages/Contact";
import NotFound from "../pages/Notfound";
import Layout from "../Layout/Layout";
import Cart from "../pages/Cart";
import Inscrire from "../pages/Inscrire";
import AcheterProduit from "../pages/AcheterProduit";
import AcheterBois from "../pages/AcheterBois";
import ModelSpecial from "../pages/ModelSpecial";
import Description from "../pages/Description";
import Projet from "../pages/Projet";
import Admin from "../pages/Admin";
import MenuisierList from "../pages/MenuisierList";
export const router= createBrowserRouter([
        {
            element: <Layout/>,
            children:[
                { path:'/',
            element: <Acceuil/>
        },
        { path:'/login',
            element: <Login/>
        },
        { path:'/contact',
            element: <Contact/>
        },
        { path:'/AcheterBois',
            element: <AcheterBois/>
        },
        { path:'/AcheterProduit',
            element: <AcheterProduit/>
        },
        {
            path:'/panier',
            element:<Cart/>
        }
        ,
        {
            path:'/Projet',
            element:<Projet/>
        },
        {
            path:'/model-special',
            element:<ModelSpecial/>
        },
        {
            path:'/Description',
            element:<Description/>
        },
        {
            path:'/admin',
            element:<Admin/>
        },
        {
            path:'/menuisiers',
            element:<MenuisierList/>
        },
        {
            path:'/projet',
            element:<Projet/>
        }
            ]
        },
        { path:'*',
        element:<NotFound/>}
])