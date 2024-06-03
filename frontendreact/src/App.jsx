import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/index.jsx";
import { CartProvider } from "./pages/CartContext.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <CartProvider>
    <RouterProvider router={router}/>
    </CartProvider>
    </>
  );
}

export default App;