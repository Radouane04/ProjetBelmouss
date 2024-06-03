import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../pages/Nav";
import Footer from "../pages/Footer";

export default function Layout(){
    return(
        <div>
            <Nav/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}