import React from "react";
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Sidebar(){
    const location = useLocation();
    
    return (
        <div className=" sidebar p-1 col-5">
        <div className="m-2 d-flex align-items-center" style={{display:'flex'}}>
            <span className="brand-name fs-4" style={{ fontFamily: "serif", color: '#ab7442' , width:'100px'}}>Art </span>
            <span className="brand-name fs-4" style={{ fontFamily: "serif", color: '#ab7442' , width:'100px'}}> Menuiseir</span>
        </div>
        <hr className="text-dark col-4" />
        <div className="list-group list-group-flush">
            <a style={{display:'flex'}} className={`list-group-item py-2 my-1 ${location.pathname === '/dashboard' ? 'active' : ''}`}>
                <i className="bi bi-speedometer2 fs-5 me-3"></i>
                <span className="fs-5">Dashboard</span>
            </a>
            <Link  style={{display:'flex'}} to='/Client' className={`list-group-item py-2 ${location.pathname === '/clients' ? 'active' : ''}`}>
                <i className="bi bi-people-fill fs-4 me-2"></i>
                <span className="fs-5">Client</span>
            </Link>
            <Link to='/menuisiers' style={{display:'flex'}} className={`list-group-item py-3 ${location.pathname === '/menuisiers' ? 'active' : ''}`}>
                <i className="bi bi-hammer fs-4 me-1"></i>
                <span className="fs-5">Menuisiers</span>
            </Link>
            <Link to='/produits' style={{display:'flex'}} className={`list-group-item py-2 ${location.pathname === '/produits' ? 'active' : ''}`}>
                <i className="bi bi-table fs-4 me-2"></i>
                <span className="fs-5">Produits</span>
            </Link>
            <Link to='/commandes' style={{display:'flex'}} className={`list-group-item py-2 ${location.pathname === '/commandes' ? 'active' : ''}`}>
                <i className="bi bi-chat-left-text fs-4 me-2"></i>
                <span className="fs-5">Commandes</span>
            </Link>
            <Link to='/rendez-vous-menuisier' style={{display:'flex'}} className={`list-group-item py-2 ${location.pathname === '/rendez-vous-menuisier' ? 'active' : ''}`}>
                <i className="bi bi-gear-fill fs-4 me-2"></i>
                <span className="fs-5">Rendez-vous</span>
            </Link>
        </div>
        
        
    </div>
    )
}