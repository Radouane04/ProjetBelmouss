import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AfficherProduit = () => {
    const [bois, setBois] = useState([]);
    const [produitsEnBois, setProduitsEnBois] = useState([]);
    const [newBois, setNewBois] = useState({ description: '', price: '', product_name: '', stock: '', image: '' });
    const [newProduitEnBois, setNewProduitEnBois] = useState({ product_name: '', description: '', price: '', stock: '', image: '' });
    const [showNewFormBois, setShowNewFormBois] = useState(false);
    const [showNewFormProduit, setShowNewFormProduit] = useState(false);
    const [editingBois, setEditingBois] = useState(null);
    const [editingProduitEnBois, setEditingProduitEnBois] = useState(null);

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
        setShowNewFormBois(false);
    };

    const handleAddProduitEnBois = async () => {
        const response = await axios.post('http://127.0.0.1:8000/api/produits-en-bois', newProduitEnBois);
        setProduitsEnBois([...produitsEnBois, response.data]);
        setNewProduitEnBois({ product_name: '', description: '', price: '', stock: '', image: '' });
        setShowNewFormProduit(false);
    };

    const handleDeleteBois = async (id) => {
        await axios.delete(`http://127.0.0.1:8000/api/bois/${id}`);
        setBois(bois.filter(item => item.id !== id));
    };

    const handleDeleteProduitEnBois = async (id) => {
        await axios.delete(`http://127.0.0.1:8000/api/produits-en-bois/${id}`);
        setProduitsEnBois(produitsEnBois.filter(item => item.id !== id));
    };

    const handleUpdateBois = async (id) => {
        const updatedBois = bois.find(item => item.id === id);
        await axios.put(`http://127.0.0.1:8000/api/bois/${id}`, updatedBois);
        setBois(bois.map(item => item.id === id ? updatedBois : item));
        setEditingBois(null);
    };

    const handleUpdateProduitEnBois = async (id) => {
        const updatedProduitEnBois = produitsEnBois.find(item => item.id === id);
        await axios.put(`http://127.0.0.1:8000/api/produits-en-bois/${id}`, updatedProduitEnBois);
        setProduitsEnBois(produitsEnBois.map(item => item.id === id ? updatedProduitEnBois : item));
        setEditingProduitEnBois(null);
    };

    const handleEditBoisChange = (id, field, value) => {
        setBois(bois.map(item => item.id === id ? { ...item, [field]: value } : item));
    };

    const handleEditProduitEnBoisChange = (id, field, value) => {
        setProduitsEnBois(produitsEnBois.map(item => item.id === id ? { ...item, [field]: value } : item));
    };

    return (
        <div className="d-flex flex-row justify-content-between">
            <div>
                <h2>Bois</h2>
                <div className="card-container d-flex flex-column">
                    {bois.map(item => (
                        <div className="card mb-3" key={item.id}>
                            <form onSubmit={(e) => { e.preventDefault(); handleUpdateBois(item.id); }}>
                                <img src={item.image} className="card-img-top" alt={item.product_name} />
                                <div className="card-body">
                                    <input type="text" placeholder="Product Name" value={item.product_name} onChange={(e) => handleEditBoisChange(item.id, 'product_name', e.target.value)} className="form-control mb-2" />
                                    <input type="text" placeholder="Description" value={item.description} onChange={(e) => handleEditBoisChange(item.id, 'description', e.target.value)} className="form-control mb-2" />
                                    <input type="number" placeholder="Price" value={item.price} onChange={(e) => handleEditBoisChange(item.id, 'price', e.target.value)} className="form-control mb-2" />
                                    <input type="number" placeholder="Stock" value={item.stock} onChange={(e) => handleEditBoisChange(item.id, 'stock', e.target.value)} className="form-control mb-2" />
                                    <input type="text" placeholder="Image URL" value={item.image} onChange={(e) => handleEditBoisChange(item.id, 'image', e.target.value)} className="form-control mb-2" />
                                    <div className="d-flex justify-content-between">
                                        <button className="btn btn-primary" type="submit">Enregistrer</button>
                                        <button className="btn btn-danger" onClick={() => handleDeleteBois(item.id)}>Supprimer</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    ))}
                </div>
                <button className="btn btn-success" onClick={() => setShowNewFormBois(true)}>Ajouter Bois</button>
                {showNewFormBois && (
                    <form className="mb-3" onSubmit={(e) => { e.preventDefault(); handleAddBois(); }}>
                        <input type="text" placeholder="Product Name" value={newBois.product_name} onChange={(e) => setNewBois({ ...newBois, product_name: e.target.value })} className="form-control mb-2" />
                        <input type="text" placeholder="Description" value={newBois.description} onChange={(e) => setNewBois({ ...newBois, description: e.target.value })} className="form-control mb-2" />
                        <input type="number" placeholder="Price" value={newBois.price} onChange={(e) => setNewBois({ ...newBois, price: e.target.value })} className="form-control mb-2" />
                        <input type="number" placeholder="Stock" value={newBois.stock} onChange={(e) => setNewBois({ ...newBois, stock: e.target.value })} className="form-control mb-2" />
                        <input type="text" placeholder="Image URL" value={newBois.image} onChange={(e) => setNewBois({ ...newBois, image: e.target.value })} className="form-control mb-2" />
                        <button className="btn btn-primary" type="submit">Ajouter Bois</button>
                    </form>
                )}
            </div>
            <div>
                <h2>Produits en Bois</h2>
                <div className="card-container d-flex flex-column">
                    {produitsEnBois.map(item => (
                        <div className="card mb-3" key={item.id}>
                            <form onSubmit={(e) => { e.preventDefault(); handleUpdateProduitEnBois(item.id); }}>
                                <img src={item.image} className="card-img-top" alt={item.product_name} />
                                <div className="card-body">
                                    <input type="text" placeholder="Product Name" value={item.product_name} onChange={(e) => handleEditProduitEnBoisChange(item.id, 'product_name', e.target.value)} className="form-control mb-2" />
                                    <input type="text" placeholder="Description" value={item.description} onChange={(e) => handleEditProduitEnBoisChange(item.id, 'description', e.target.value)} className="form-control mb-2" />
                                    <input type="number" placeholder="Price" value={item.price} onChange={(e) => handleEditProduitEnBoisChange(item.id, 'price', e.target.value)} className="form-control mb-2" />
                                    <input type="number" placeholder="Stock" value={item.stock} onChange={(e) => handleEditProduitEnBoisChange(item.id, 'stock', e.target.value)} className="form-control mb-2" />
                                    <input type="text" placeholder="Image URL" value={item.image} onChange={(e) => handleEditProduitEnBoisChange(item.id, 'image', e.target.value)} className="form-control mb-2" />
                                    <div className="d-flex justify-content-between">
                                        <button className="btn btn-primary" type="submit">Enregistrer</button>
                                        <button className="btn btn-danger" onClick={() => handleDeleteProduitEnBois(item.id)}>Supprimer</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    ))}
                </div>
                <button className="btn btn-success" onClick={() => setShowNewFormProduit(true)}>Ajouter Produit en Bois</button>
                {showNewFormProduit && (
                    <form className="mb-3" onSubmit={(e) => { e.preventDefault(); handleAddProduitEnBois(); }}>
                        <input type="text" placeholder="Product Name" value={newProduitEnBois.product_name} onChange={(e) => setNewProduitEnBois({ ...newProduitEnBois, product_name: e.target.value })} className="form-control mb-2" />
                        <input type="text" placeholder="Description" value={newProduitEnBois.description} onChange={(e) => setNewProduitEnBois({ ...newProduitEnBois, description: e.target.value })} className="form-control mb-2" />
                        <input type="number" placeholder="Price" value={newProduitEnBois.price} onChange={(e) => setNewProduitEnBois({ ...newProduitEnBois, price: e.target.value })} className="form-control mb-2" />
                        <input type="number" placeholder="Stock" value={newProduitEnBois.stock} onChange={(e) => setNewProduitEnBois({ ...newProduitEnBois, stock: e.target.value })} className="form-control mb-2" />
                        <input type="text" placeholder="Image URL" value={newProduitEnBois.image} onChange={(e) => setNewProduitEnBois({ ...newProduitEnBois, image: e.target.value })} className="form-control mb-2" />
                        <button className="btn btn-primary" type="submit">Ajouter Produit en Bois</button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default AfficherProduit;
