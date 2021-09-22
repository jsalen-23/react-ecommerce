import { useEffect, useState } from 'react';
import axios from 'axios';
import initialState from '../initialState';

const API = process.env.API;

const useInitialState = () => {
  const [state, setState] = useState(initialState);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState(null);

  useEffect(() => {
    setLoading(true);
    const getProducts = async () => {
      try {
        const response = await axios.get(
          category ? `${API}/category/${category}` : API
        );
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        console.error(error.status, error.message);
      }
    };
    getProducts();
  }, [category]);

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };

  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((item) => item.id !== payload.id),
    });
  };

  const addBuyer = (payload) => {
    setState({
      ...state,
      buyer: [...state.buyer, payload],
    });
  };

  const addNewOrder = (payload) => {
    setState({
      ...state,
      orders: [...state.orders, payload],
    });
  };

  const changeCategory = (payload) => {
    setCategory(payload);
  };

  return {
    state,
    products,
    loading,
    error,
    addBuyer,
    addNewOrder,
    addToCart,
    removeFromCart,
    changeCategory,
    category,
  };
};

export default useInitialState;