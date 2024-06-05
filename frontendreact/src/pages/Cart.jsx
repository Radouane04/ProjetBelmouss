import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Receipt component
const Receipt = ({ orderId, total, date, productCount }) => (
  <div className="receipt">
<h1 style={{ color: 'green' }}>Votre commande est effectuée avec succès</h1>
    <h2> votre Reçu</h2>
    ------------------------------------------------------------------------------------------------------
    <p>Order ID: {orderId}</p>
    <p>Total: {total} €</p>
    <p>Date: {date}</p>
    <p>Product Count: {productCount}</p>
    <button className="btn btn-primary" onClick={() => window.print()}>Imprimer</button>
  </div>
);

// Main Cart component
export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [orderId, setOrderId] = useState(null);
  const [error, setError] = useState('');
  const [showReceipt, setShowReceipt] = useState(false);
  const [receiptDetails, setReceiptDetails] = useState({});

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/cart');
      setCartItems(response.data.cartItems);
      calculateTotal(response.data.cartItems);
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
    const total = items.reduce((acc, item) => acc + item.quantity * (item.type === 'produits_en_bois' ? item.produit_en_bois?.price || 0 : item.bois?.price || 0), 0);
    setTotal(total);
  };

  const validateCart = async () => {
    try {
      const formatDate = (date) => {
        const d = new Date(date);
        const pad = (n) => (n < 10 ? '0' + n : n);
    
        return `${d.getUTCFullYear()}-${pad(d.getUTCMonth() + 1)}-${pad(d.getUTCDate())} ${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())}:${pad(d.getUTCSeconds())}`;
      };
    
      const orderData = {
        user_id: 1, // Replace with actual user ID
        total_amount: total,
        product_count: cartItems.length,
        date: formatDate(new Date()),
        products: cartItems.map(item => ({
          id: item.id,
          type: item.type,
          quantity: item.quantity
        }))
      };
      const response = await axios.post('http://127.0.0.1:8000/api/commands', orderData);
      setOrderId(response.data.id);
      
      // Save receipt details
      setReceiptDetails({
        orderId: response.data.id,
        total: total,
        date: formatDate(new Date()),
        productCount: cartItems.length
      });
      
      setShowReceipt(true);
      setCartItems([]); // Clear the cart
      setTotal(0); // Reset the total
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
    <div className="container" style={{marginTop:'20px'}}>
      <h2 style={{margin:'20px', color:'#ab7442'}}>Votre Panier</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      {!showReceipt ? (
        <>
          <div className="row">
            {cartItems.map((item) => (
              <div className="col-md-4 mb-4" key={item.id}>
                <div className="card" style={{ width: '18rem', height:'480px' }}>
                  <div className="card-body">
                    {item.type === 'produits_en_bois' ? (
                      <>
                        <img src={item.produit_en_bois?.image} className="card-img-top" alt={item.produit_en_bois?.product_name} style={{maxHeight:'500px'}} />
                        <h5 className="card-title" style={{marginTop:'20px'}}>{item.produit_en_bois?.product_name}</h5>
                        <p className="card-text">{item.produit_en_bois?.price}Dh</p>
                        <label htmlFor="quantity">Nombre de produit</label>
                        <input
                          type="number"
                          className="form-control"
                          value={item.quantity}
                          onChange={(e) => handleQuantityChange(item, parseInt(e.target.value))}
                          onBlur={() => updateCartItem(item)}
                        />
                      </>
                    ) : (
                      <>
                        <img src={item.bois?.image} className="card-img-top" alt={item.bois?.product_name} style={{height:'250px'}} />
                        <h5 className="card-title" style={{marginTop:'20px'}}>{item.bois?.product_name}</h5>
                        <p className="card-text">{item.bois?.price} Dh</p>
                        <label htmlFor="quantity">Nombre de produit</label>
                        <input
                          type="number"
                          className="form-control"
                          value={item.quantity}
                          onChange={(e) => handleQuantityChange(item, parseInt(e.target.value))}
                          onBlur={() => updateCartItem(item)}
                        />
                      </>
                    )}
                    <button className="btn btn-danger mt-2" onClick={() => removeItem(item.id)}>Remove</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <h3>Total: {total} Dh</h3>
          <button className="btn btn-primary" onClick={validateCart}>Valider la commande</button>
        </>
      ) : (
        <Receipt 
          orderId={receiptDetails.orderId} 
          total={receiptDetails.total} 
          date={receiptDetails.date} 
          productCount={receiptDetails.productCount} 
        />
      )}
    </div>
  );
}
