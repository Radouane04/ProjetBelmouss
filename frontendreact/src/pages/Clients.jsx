import React, { useState, useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/dropdown';

export default function Clients(Toggle) {
    const [clients, setClients] = useState([]);
    const [produits, setProduits] = useState([]);
    const [commentaires, setCommentaires] = useState([]);
    const [menuisiers, setMenuisiers] = useState([]);

    useEffect(() => {
        // Remplacez 'YOUR_API_URL' par l'URL réelle de votre API
        axios.get('http://127.0.0.1:8000/api/users')
            .then(response => {
                setClients(response.data);
            })
            .catch(error => console.error("There was an error fetching the clients!", error));
        
        axios.get('http://127.0.0.1:8000/api/bois')
            .then(response => {
                setProduits(response.data);
            })
            .catch(error => console.error("There was an error fetching the produits!", error));

        axios.get('http://127.0.0.1:8000/api/comments')
            .then(response => {
                setCommentaires(response.data);
            })
            .catch(error => console.error("There was an error fetching the commentaires!", error));
            axios.get('http://127.0.0.1:8000/api/menuisiers')
            .then(response => {
                setMenuisiers(response.data);
            })
            .catch(error => console.error("There was an error fetching the produits!", error));
    }, []);

    return (
        <div className='px-3'>
            <div className="container-fluid">
                <div className="row g-3 my-2">
                    <div className="col-md-3">
                        <div className="p-2 shadow-sm d-flex justify-content-around align-items-center rounded" style={{ width: '220px', backgroundColor: '#ccc' }}>
                            <div>
                                <h3 className="fs-2">{produits.length}</h3>
                                <p className="fs-5">Produits</p>
                            </div>
                            <i className="bi bi-cart-plus p-3 fs-1" style={{ color: '#5d0b0b' }}></i>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="p-2 shadow-sm d-flex justify-content-around align-items-center rounded" style={{ width: '220px', backgroundColor: '#ccc' }}>
                            <div>
                                <h3 className="fs-2">{clients.length}</h3>
                                <p className="fs-5">Clients</p>
                            </div>
                            <i className="bi bi-people-fill p-3 fs-1" style={{ color: '#5d0b0b' }}></i>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="p-2 shadow-sm d-flex justify-content-around align-items-center rounded" style={{ width: '220px', backgroundColor: '#ccc' }}>
                            <div>
                                <h3 className="fs-2">{menuisiers.length}</h3> {/* Vous pouvez mettre un autre état pour les commandes si nécessaire */}
                                <p className="fs-5">Menuisiers</p>
                            </div>
                            <i className="bi bi-chat-left-text p-3 fs-1" style={{ color: '#5d0b0b' }}></i>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="p-2 shadow-sm d-flex justify-content-around align-items-center rounded" style={{ width: '220px', backgroundColor: '#ccc' }}>
                            <div>
                                <h3 className="fs-2">{commentaires.length}</h3>
                                <p className="fs-5">Commentaires</p>
                            </div>
                            <i className="bi bi-question p-3 fs-1" style={{ color: '#5d0b0b' }}></i>
                        </div>
                    </div>
                </div>
            </div><br />

            <caption>Clients</caption>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nom</th>
                        <th scope="col">Email</th>
                        <th scope="col">Nombre de commentaires</th>
                    </tr>
                </thead>
                <tbody>
                    {clients.map((client, index) => (
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{client.name}</td>
                            <td>{client.email}</td>
                            <td>{client.nombreCommentaires}</td> {/* Assurez-vous que la propriété existe dans vos données */}
                        </tr>
                    ))}
                </tbody>
            </table>

            <caption>Produits</caption>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nom</th>
                        <th scope="col">Description</th>
                        <th scope="col">Prix</th>
                    </tr>
                </thead>
                <tbody>
                    {produits.map((produit, index) => (
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{produit.product_name}</td>
                            <td>{produit.description}</td>
                            <td>{produit.price}</td> {/* Assurez-vous que la propriété existe dans vos données */}
                        </tr>
                    ))}
                </tbody>
            </table>
            <caption>Menuisier</caption>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nom Complet</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {menuisiers.map((menuisier, index) => (
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{menuisier.nomComplet}</td>
                            <td>{menuisier.email}</td>
                            <td>{menuisier.phone}</td> {/* Assurez-vous que la propriété existe dans vos données */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
