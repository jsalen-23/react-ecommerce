import { useEffect, useState } from 'react';
import axios from 'axios';

const API = process.env.API;

const useGetSingleProduct = (id) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    const getProduct = async () => {
      try {
        const response = await axios.get(`${API}/${id}`);
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        console.error(error.status, error.message);
        setLoading(false);
      }
    };
    getProduct();
  }, []);

  return [product, loading, error];
};

export default useGetSingleProduct;
