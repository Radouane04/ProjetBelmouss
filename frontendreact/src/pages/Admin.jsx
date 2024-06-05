import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Admin() {
    const location = useLocation();

    return (
        <div className="bg-white sidebar p-1 col-2" style={{ minHeight: '100vh' }}>
            <div className="m-2 d-flex align-items-center">
                <img src='./dash.png' alt='' style={{ width: '40px', marginRight: '10px' }} />
                <span className="brand-name fs-4 w-90px" style={{ fontFamily: "serif", color: '#ab7442' ,width:'90px'}}>Art Menuiseir</span>
            </div>
            <hr className="text-dark" />
            <div className="list-group list-group-flush">
                <a className={`list-group-item py-2 my-1 ${location.pathname === '/dashboard' ? 'active' : ''}`}>
                    <i className="bi bi-speedometer2 fs-5 me-3"></i>
                    <span className="fs-5">Dashboard</span>
                </a>
                <Link to='/clients' className={`list-group-item py-2 ${location.pathname === '/clients' ? 'active' : ''}`}>
                    <i className="bi bi-people-fill fs-4 me-2"></i>
                    <span className="fs-5">Clients</span>
                </Link>
                <Link to='/menuisiers' className={`list-group-item py-2 ${location.pathname === '/menuisiers' ? 'active' : ''}`}>
                    <i className="bi bi-hammer fs-4 me-2"></i>
                    <span className="fs-5">Menuisiers</span>
                </Link>
                <Link to='/produits' className={`list-group-item py-2 ${location.pathname === '/produits' ? 'active' : ''}`}>
                    <i className="bi bi-table fs-4 me-2"></i>
                    <span className="fs-5">Produits</span>
                </Link>
                <Link to='/commandes' className={`list-group-item py-2 ${location.pathname === '/commandes' ? 'active' : ''}`}>
                    <i className="bi bi-chat-left-text fs-4 me-2"></i>
                    <span className="fs-5">Commandes</span>
                </Link>
                <Link to='/commentaires' className={`list-group-item py-2 ${location.pathname === '/commentaires' ? 'active' : ''}`}>
                    <i className="bi bi-question fs-7 me-2"></i>
                    <span className="fs-5">Commentaires</span>
                </Link>
                <Link to='/rendez-vous-menuisier' className={`list-group-item py-2 ${location.pathname === '/rendez-vous-menuisier' ? 'active' : ''}`}>
                    <i className="bi bi-gear-fill fs-4 me-2"></i>
                    <span className="fs-5">Rendez-vous menuisier</span>
                </Link>
                <Link to='/deconnexion' className={`list-group-item py-2 ${location.pathname === '/deconnexion' ? 'active' : ''}`}>
                    <i className="bi bi-box-arrow-in-right fs-4 me-2"></i>
                    <span className="fs-5">Déconnexion</span>
                </Link>
            </div>
            
            
        </div>
    )
}
