// AcheterBois.js
import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';

export default function AcheterBois() {
  const [bois, setBois] = useState([]);
  const { addToCart } = useContext(CartContext);
  const [message, setMessage] = useState('');
  const [messageVisible, setMessageVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8000/api/bois') // Assurez-vous que l'URL correspond à votre configuration
      .then(response => setBois(response.data))
      .catch(error => console.error('Error fetching data: ', error));
  }, []);

  const handleAddToCart = (item) => {
    const user_id = 1; // Replace with the actual logged-in user ID
    axios.post('http://127.0.0.1:8000/api/cart', {
      product_id: item.id,
      quantity: 1, // Assuming quantity 1 for simplicity
      user_id: user_id,
      type: 'bois', // Indicating the product type
    })
    .then(response => {
      addToCart(item); // Update the context if needed
      setMessage(`${item.type.toUpperCase()} ajouté à votre panier`);
      setMessageVisible(true);
      setTimeout(() => setMessageVisible(false), 5000);
    })
    .catch(error => {
      console.error('There was an error adding the product to the cart!', error);
    });
  };

  const buttonStyle = {
    background: 'radial-gradient(circle, #D78C3D, #4B2E20)',
    borderColor: '#8B4513',
    color: '#FFF',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '10px',
  };

  const headerImageStyle = {
    width: '20%',
    height: '70%',
    marginTop: '30px',
    marginBottom: '10px',
    objectFit: 'cover'
  };

  const footerImageStyle = {
    width: '100%',
    height: '10%',
    marginTop: '1px',
    objectFit: 'cover'
  };

  const headerContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: '20px',
    position: 'relative',
  };

  const searchContainerStyle = {
    position: 'absolute',
    left: '60%',
    top: '45px',
    display: 'flex',
    alignItems: 'center',
  };

  const searchInputStyle = {
    width: '300px',
    marginRight: '10px',
  };

  const filteredItems = bois.filter(item =>
    item.product_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container">
      {messageVisible && (
        <div className="alert alert-success mt-4" role="alert">
          {message}
        </div>
      )}
      <div style={headerContainerStyle}>
        <img src="/images/art3.jpg" alt="Header Image" style={headerImageStyle} />
        <div style={searchContainerStyle}>
          <input
            type="text"
            className="form-control"
            placeholder="Chercher un produit"
            style={searchInputStyle}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <input type="button" className="btn" value="Search" style={buttonStyle} />
        </div>
      </div>
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
      <div>
        <img src="/images/Rectangle 21.png" alt="Footer Image" style={footerImageStyle} />
      </div>
    </div>
  );
}
