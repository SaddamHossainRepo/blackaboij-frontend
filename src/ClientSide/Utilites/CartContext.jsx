// CartContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import { Toaster, toast } from 'sonner';


const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {
  // const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [fav, setFav] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);

    const storedFav = JSON.parse(localStorage.getItem('fav')) || [];
    setFav(storedFav);
  }, []);


  const addToCart = (product) => {
     
    // Check if the product with the same mainId, size, and color already exists
    const isDuplicate = cart.some(
      (cartProduct) =>
        cartProduct.mainId === product.mainId &&
        cartProduct.size === product.size &&
        cartProduct.color === product.color
    );

    if (isDuplicate) {
      // Display a message or handle duplicate case accordingly
      toast.warning(`${product.name} is already in the cart`);
      return;
    }

    // If not a duplicate, add the product to the cart
    const newCart = [...cart, product];
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
    toast.success(`${product.name} is added to the cart`);
  };



  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('cart');
  };

  const addToFav = (product) => {
    // Check if the product with the same mainId already exists
    const isDuplicate = fav.some((favProduct) => favProduct.mainId === product.mainId);

    if (isDuplicate) {
      // Display a message or handle duplicate case accordingly
      toast.warning(`${product.name} is already in favorites`);
      return;
    }

    // If not a duplicate, add the product to favorites
    const newFav = [...fav, product];
    setFav(newFav);
    localStorage.setItem('fav', JSON.stringify(newFav));
    toast.success(`${product.name} is added to favorites`);
  };


  const removeFromFav = (productId) => {
    const updatedFav = fav.filter((item) => item.id !== productId);
    setFav(updatedFav);
    localStorage.setItem('fav', JSON.stringify(updatedFav));
  };

  const clearFav = () => {
    setFav([]);
    localStorage.removeItem('fav');
  };

  // token recived and token setLocalStorage 
  const tokenSet =(token) => {
    // Set the token in local storage with the key 'token'
    localStorage.setItem('token', token);
  }

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, fav, addToFav, removeFromFav, clearFav , tokenSet }}
    >
      <Toaster />
      {children}
    </CartContext.Provider>
  );
};
