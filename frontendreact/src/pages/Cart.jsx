import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [orderId, setOrderId] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/cart');
      console.log('Cart Items:', response.data.cartItems);
      const { cartItems } = response.data;
      setCartItems(cartItems);
      calculateTotal(cartItems);
    } catch (error) {
      console.error('Error fetching cart items:', error);
      setError('Error fetching cart items. Please try again later.');
    }
  };

  const handleQuantityChange = (item, quantity) => {
    const updatedCartItems = cartItems.map(cartItem =>
      cartItem.id === item.id ? { ...cartItem, quantity: quantity } : cartItem
    );
    setCartItems(updatedCartItems);
    calculateTotal(updatedCartItems);
  };

  const calculateTotal = (items) => {
    const total = items.reduce((acc, item) => acc + item.quantity * (item.type === 'produits_en_bois' ? item.produitEnBois?.price || 0 : item.bois?.price || 0), 0);
    setTotal(total);
  };

  const validateCart = async () => {
    try {
      const orderData = {
        user_id: 1, // Example user ID, you should replace it with actual user ID
        total_amount: total,
        product_count: cartItems.length,
        date: new Date().toISOString(),
      };

      const response = await axios.post('http://127.0.0.1:8000/api/orders', orderData);
      setOrderId(response.data.id);
    } catch (error) {
      console.error('Error placing order:', error);
      setError('Error placing order. Please try again later.');
    }
  };

  const updateCartItem = async (item) => {
    try {
      await axios.put(`http://127.0.0.1:8000/api/cart/${item.id}`, { quantity: item.quantity });
    } catch (error) {
      console.error('Error updating cart item:', error);
      setError('Error updating cart item. Please try again later.');
    }
  };

  const removeItem = async (itemId) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/cart/${itemId}`);
      const updatedCartItems = cartItems.filter(item => item.id !== itemId);
      setCartItems(updatedCartItems);
      calculateTotal(updatedCartItems);
    } catch (error) {
      console.error('Error removing item from cart:', error);
      setError('Error removing item from cart. Please try again later.');
    }
  };

  return (
    <div className="container">
      <h2>Votre Panier</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="row">
        {cartItems.map((item) => (
          <div className="col-md-4 mb-4" key={item.id}>
            <div className="card" style={{ width: '18rem' }}>
              <div className="card-body">
                {item.type === 'produits_en_bois' ? (
                  <React.Fragment>
                    <h5 className="card-title">{item.produitEnBois?.product_name || 'Product Name Not Available'}</h5>
                    <p className="card-text">{item.produitEnBois?.description || 'Description Not Available'}</p>
                    <p className="card-text">{item.produitEnBois?.price} €</p>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <h5 className="card-title">{item.bois?.product_name || 'Product Name Not Available'}</h5>
                    <p className="card-text">{item.bois?.description || 'Description Not Available'}</p>
                    <p className="card-text">{item.bois?.price} €</p>
                  </React.Fragment>
                )}
                <label htmlFor="">Nombre de produit</label>
                <input
                  type="number"
                  className="form-control"
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item, parseInt(e.target.value))}
                  onBlur={() => updateCartItem(item)}
                />
                <button className="btn btn-danger mt-2" onClick={() => removeItem(item.id)}>Remove</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h3>Total: {total} €</h3>
      {orderId && (
        <div className="receipt">
          <h3>Reçu de commande</h3>
          <p>ID de commande: {orderId}</p>
          {/* Afficher d'autres détails de la commande ici */}
        </div>
      )}
      <button className="btn btn-primary" onClick={validateCart}>Valider la commande</button>
    </div>
  );
}
