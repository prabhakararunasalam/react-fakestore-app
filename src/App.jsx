import { useState } from "react";
import "./App.css";
import ProductCard from "./components/ProductCard";
import CartModal from "./components/CartModal";
import Navbar from "./components/Navbar";

function App() {
  const [CartItems, setCartItems] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const addToCart = (product) => {
    if (CartItems.find((item) => item.id === product.id)) {
      alert("Item already added to the cart");
    } else {
      setCartItems([...CartItems, product]);
      console.log(CartItems);
    }
  };
  const removeCartItem = (productId) => {
    setCartItems(CartItems.filter((item) => item.id !== productId));
  };
  return (
    <>
      <Navbar cartCount={CartItems.length} setModalOpen={setModalOpen} />
      <ProductCard addToCart={addToCart} />
      {isModalOpen && (
        <CartModal
          CartItems={CartItems}
          removeCartItem={removeCartItem}
          setModalOpen={setModalOpen}
        />
      )}
    </>
  );
}

export default App;
