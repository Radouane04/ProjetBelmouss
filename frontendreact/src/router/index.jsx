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
import MenuisierList from "../Admin/Menuisiers/MenuisierList"; 
import AjouterMenuisier from "../Admin/Menuisiers/AjouterMenuisier";
import AfficherProduit from   "../Admin/Produit/AfficherProduit.jsx";
import Client from "../Admin/Client.jsx";
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
            path:'/Inscrire',
               element:<Inscrire/>
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
            path:'/projet',
            element:<Projet/>
        }
            ]
        },
        {
            path:'/Client',
            element:<Client/>
        },
        {
            path:'/menuisiers',
            element:<MenuisierList/>
        },
        {
            path:'/produits',
            element:<AfficherProduit/>
        },
        {
            path:'/AjouterMenuisier',
            element:<AjouterMenuisier/>
        },
        { path:'*',
        element:<NotFound/>}
])