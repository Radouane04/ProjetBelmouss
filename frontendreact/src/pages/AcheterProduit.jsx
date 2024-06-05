// AcheterProduit.js
import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';

export default function AcheterProduit() {
  const { addToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState('');
  const [messageVisible, setMessageVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the products!', error);
      });
  }, []);

  const buttonStyle = {
    background: 'radial-gradient(circle, #D78C3D, #4B2E20)',
    borderColor: '#735028',
    color: 'white'
  };

  const handleAddToCart = (item) => {
    const user_id = 1; // Replace with the actual logged-in user ID
    axios.post('http://127.0.0.1:8000/api/cart', {
      product_id: item.id,
      quantity: 1, // Assuming quantity 1 for simplicity
      user_id: user_id,
      type: 'produits_en_bois', // Indicating the product type
    })
    .then(response => {
      addToCart(item); // Update the context if needed
      setMessage(`${item.product_name} ajouté à votre panier`);
      setMessageVisible(true);
      setTimeout(() => setMessageVisible(false), 5000);
    })
    .catch(error => {
      console.error('There was an error adding the product to the cart!', error);
    });
  };

  const filteredItems = products.filter(item =>
    item.product_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container">
      <br />
      <br />
      <div className="d-flex">
        <input
          type="text"
          className="form-control"
          placeholder="Chercher un produit"
          style={{ width: '500px' }}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="d-flex justify-content-end mt-2">
        <Link to="/model-special" className="btn" style={buttonStyle}>Créer votre design spécial</Link>
      </div>

      {messageVisible && (
        <div className="alert alert-success mt-4" role="alert">
          {message}
        </div>
      )}

      <br /><br /><br />
      <div className="row container">
        {filteredItems.map((item) => (
          <div className="col-md-4 mb-4" key={item.id}>
            <div className="card" style={{ width: '18rem', height: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <img src={item.image} className="card-img-top" alt={item.product_name} />
              <div className="card-body">
                <h5 className="card-title">{item.product_name}</h5>
                <p className="card-text">{item.description}</p>
                <p className="card-text">{item.price} €</p>
                <button
                  className="btn"
                  style={buttonStyle}
                  onClick={() => handleAddToCart(item)}
                >
                  Ajouter au panier
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <br />
              <br />
              <br />
              <br />
    </div>

  );
}
