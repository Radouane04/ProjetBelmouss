import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AfficherProduit = () => {
    const [bois, setBois] = useState([]);
    const [produitsEnBois, setProduitsEnBois] = useState([]);
    const [newBois, setNewBois] = useState({ description: '', price: '', product_name: '', stock: '', image: '' });
    const [newProduitEnBois, setNewProduitEnBois] = useState({ product_name: '', description: '', price: '', stock: '', image: '' });
    const [showNewFormBois, setShowNewFormBois] = useState(false);
    const [showNewFormProduit, setShowNewFormProduit] = useState(false);
    const [selectedBois, setSelectedBois] = useState(null);
    const [selectedProduitEnBois, setSelectedProduitEnBois] = useState(null);

    useEffect(() => {
        fetchBois();
        fetchProduitsEnBois();
    }, []);

    const fetchBois = async () => {
        const response = await axios.get('http://127.0.0.1:8000/api/bois');
        setBois(response.data);
    };

    const fetchProduitsEnBois = async () => {
        const response = await axios.get('http://127.0.0.1:8000/api/produits-en-bois');
        setProduitsEnBois(response.data);
    };

    const handleAddBois = async () => {
        const response = await axios.post('http://127.0.0.1:8000/api/bois', newBois);
        setBois([...bois, response.data]);
        setNewBois({ description: '', price: '', product_name: '', stock: '', image: '' });
    };

    const handleAddProduitEnBois = async () => {
        const response = await axios.post('http://127.0.0.1:8000/api/produits-en-bois', newProduitEnBois);
        setProduitsEnBois([...produitsEnBois, response.data]);
        setNewProduitEnBois({ product_name: '', description: '', price: '', stock: '', image: '' });
    };

    const handleDeleteBois = async (id) => {
        await axios.delete(`http://127.0.0.1:8000/api/bois/${id}`);
        setBois(bois.filter(item => item.id !== id));
    };

    const handleDeleteProduitEnBois = async (id) => {
        await axios.delete(`http://127.0.0.1:8000/api/produits-en-bois/${id}`);
        setProduitsEnBois(produitsEnBois.filter(item => item.id !== id));
    };

    const handleUpdateBois = async () => {
        if (!selectedBois) return;
        await axios.put(`http://127.0.0.1:8000/api/bois/${selectedBois.id}`, selectedBois);
        setBois(bois.map(item => item.id === selectedBois.id ? selectedBois : item));
        setSelectedBois(null);
    };

    const handleUpdateProduitEnBois = async () => {
        if (!selectedProduitEnBois) return;
        await axios.put(`http://127.0.0.1:8000/api/produits-en-bois/${selectedProduitEnBois.id}`, selectedProduitEnBois);
        setProduitsEnBois(produitsEnBois.map(item => item.id === selectedProduitEnBois.id ? selectedProduitEnBois : item));
        setSelectedProduitEnBois(null);
    };

    return (
        <div className="d-flex flex-row justify-content-between">
            <div>
                <h2>Bois</h2>
                <div className="card-container d-flex flex-row">
                    {bois.map(item => (
                        <div className="card" style={{ width: '18rem' }} key={item.id}>
                            <img src={item.image} className="card-img-top" alt={item.product_name} />
                            <div className="card-body">
                                <h5 className="card-title">{item.product_name}</h5>
                                <p className="card-text">{item.description}</p>
                                <p className="card-text">Price: {item.price}</p>
                                <p className="card-text">Stock: {item.stock}</p>
                                <button className="btn btn-danger" onClick={() => handleDeleteBois(item.id)}>Supprimer</button>
                                <button className="btn btn-primary" onClick={() => setSelectedBois(item)}>Modifier</button>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="btn btn-success" onClick={() => setShowNewFormBois(true)}>Ajouter Bois</button>
                {showNewFormBois && (
                    <div>
                        <input type="text" placeholder="Product Name" value={newBois.product_name} onChange={(e) => setNewBois({ ...newBois, product_name: e.target.value })} />
                        <input type="text" placeholder="Description" value={newBois.description} onChange={(e) => setNewBois({ ...newBois, description: e.target.value })} />
                        <input type="number" placeholder="Price" value={newBois.price} onChange={(e) => setNewBois({ ...newBois, price: e.target.value })} />
                        <input type="number" placeholder="Stock" value={newBois.stock} onChange={(e) => setNewBois({ ...newBois, stock: e.target.value })} />
                        <input type="text" placeholder="Image URL" value={newBois.image} onChange={(e) => setNewBois({ ...newBois, image: e.target.value })} />
                        <button className="btn btn-primary" onClick={handleAddBois}>Ajouter Bois</button>
                    </div>
                )}
            </div>
            <div>
                <h2>Produits en Bois</h2>
                <div className="card-container d-flex flex-row">
                    {produitsEnBois.map(item => (
                        <div className="card" style={{ width: '18rem' }} key={item.id}>
                            <img src={item.image} className="card-img-top" alt={item.product_name} />
                            <div className="card-body">
                                <h5 className="card-title">{item.product_name}</h5>
                                <p className="card-text">{item.description}</p>
                                <p className="card-text">Price: {item.price}</p>
                                <p className="card-text">Stock: {item.stock}</p>
                                <button className="btn btn-danger" onClick={() => handleDeleteProduitEnBois(item.id)}>Supprimer</button>
                                <button className="btn btn-primary" onClick={() => setSelectedProduitEnBois(item)}>Modifier</button>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="btn btn-success" onClick={() => setShowNewFormProduit(true)}>Ajouter Produit en Bois</button>
                {showNewFormProduit && (
                    <div>
                        <input type="text" placeholder="Product Name" value={newProduitEnBois.product_name} onChange={(e) => setNewProduitEnBois({ ...newProduitEnBois, product_name: e.target.value })} />
                        <input type="text" placeholder="Description" value={newProduitEnBois.description} onChange={(e) => setNewProduitEnBois({ ...newProduitEnBois, description: e.target.value })} />
                        <input type="number" placeholder="Price" value={newProduitEnBois.price} onChange={(e) => setNewProduitEnBois({ ...newProduitEnBois, price: e.target.value })} />
                        <input type="number" placeholder="Stock" value={newProduitEnBois.stock} onChange={(e) => setNewProduitEnBois({ ...newProduitEnBois, stock: e.target.value })} />
                        <input type="text" placeholder="Image URL" value={newProduitEnBois.image} onChange={(e) => setNewProduitEnBois({ ...newProduitEnBois, image: e.target.value })} />
                        <button className="btn btn-primary" onClick={handleAddProduitEnBois}>Ajouter Produit en Bois</button>
                    </div>
                )}
                {selectedProduitEnBois && (
                    <div>
                        <h2>Modifier Produit en Bois</h2>
                        <input type="text" placeholder="Product Name" value={selectedProduitEnBois.product_name} onChange={(e) => setSelectedProduitEnBois({ ...selectedProduitEnBois, product_name: e.target.value })} />
                        <input type="text" placeholder="Description" value={selectedProduitEnBois.description} onChange={(e) => setSelectedProduitEnBois({ ...selectedProduitEnBois, description: e.target.value })} />
                        <input type="number" placeholder="Price" value={selectedProduitEnBois.price} onChange={(e) => setSelectedProduitEnBois({ ...selectedProduitEnBois, price: e.target.value })} />
                        <input type="number" placeholder="Stock" value={selectedProduitEnBois.stock} onChange={(e) => setSelectedProduitEnBois({ ...selectedProduitEnBois, stock: e.target.value })} />
                        <input type="text" placeholder="Image URL" value={selectedProduitEnBois.image} onChange={(e) => setSelectedProduitEnBois({ ...selectedProduitEnBois, image: e.target.value })} />
                        <button className="btn btn-primary" onClick={handleUpdateProduitEnBois}>Enregistrer</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AfficherProduit;

