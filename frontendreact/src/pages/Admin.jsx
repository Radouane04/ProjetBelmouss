import React from 'react';
import { Link } from 'react-router-dom';


export default function Admin(){
    return (
        <div className="bg-white sidebar p-1 col-2">
            
            <div className="m-2">
            <img src='./dash.png' alt=''/> 
                <span className="brand-name fs-4" style={{fontFamily:"serif", color:'#ab7442'}}>Art Menauiseir</span>
            </div>
            <hr className="text-dark"/>
            <div className="list-group list-group-flush">
                <a className="list-group-item py-2 my-1">
                    <i className="bi bi-speedometer2  fs-5 me-3"></i>
                    <span className="fs-5">Dashboard</span>
                </a>
                <a className="list-group-item py-2" href="client">
                    <i className="bi bi-people-fill fs-4 me-2"></i>
                    <span className="fs-5">Clients</span>
                </a>
               <Link to='/menuisiers'> <a className="list-group-item py-2 my-1" href="menuisier">
                    <i className="bi bi-hammer fs-4 me-2"></i>
                    <span className="fs-5">Menuisiers</span>
                </a></Link>
                <a className="list-group-item py-2" href="produit">
                    <i className="bi bi-table fs-4 me-2"></i>
                    <span className="fs-5">Produits</span>
                </a>
                
                <a className="list-group-item py-2" href="cammande">
                    <i className="bi bi-chat-left-text fs-4 me-2"></i>
                    <span className="fs-5">Cammandes</span>
                </a>
                <a className="list-group-item py-2" href="commantaires">
                    <i className="bi bi-question fs-7 me-2"></i>
                    <span className="fs-5">Commantaires</span>
                </a>
                <a className="list-group-item py-2" href="parametre">
                    <i className="bi bi-gear-fill fs-4 me-2"></i>
                    <span  className="fs-5">Rendez-vous menuisier</span>
                </a>
                <a className="list-group-item py-2" href="deconnexion">
                    <i className="bi bi-box-arrow-in-right fs-4 me-2"></i>
                    <span  className="fs-5">Deconnexion</span>
                </a>
            </div>
      </div>
)
}