import React, { createContext, useCallback, useEffect, useMemo, useState } from 'react';
import axios from 'axios';

export const StorefrontDataContext = createContext({
  products: [],
  categories: [],
  loading: false,
  error: '',
  refreshStorefrontData: async () => {},
  getProductById: () => undefined,
});

function StorefrontDataProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [hasLoadedOnce, setHasLoadedOnce] = useState(false);

  const loadData = useCallback(async () => {
    // Avoid firing duplicate requests if one is already in flight
    if (loading) {
      return;
    }

    setLoading(true);
    try {
      const [categoriesResponse, productsResponse] = await Promise.all([
        axios.get('https://fakestoreapi.com/products/categories'),
        axios.get('https://fakestoreapi.com/products'),
      ]);

      setCategories(categoriesResponse.data ?? []);
      setProducts(productsResponse.data ?? []);
      setError('');
    } catch (err) {
      // Only surface the error to consumers if this is the initial fetch.
      if (!hasLoadedOnce) {
        setError('We were unable to reach the store right now. Please refresh to try again.');
      }
    } finally {
      setHasLoadedOnce(true);
      setLoading(false);
    }
  }, [hasLoadedOnce, loading]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const getProductById = useCallback(
    (productId) => products.find((product) => String(product?.id) === String(productId)),
    [products],
  );

  const value = useMemo(
    () => ({
      products,
      categories,
      loading,
      error,
      refreshStorefrontData: loadData,
      getProductById,
    }),
    [products, categories, loading, error, loadData, getProductById],
  );

  return (
    <StorefrontDataContext.Provider value={value}>
      {children}
    </StorefrontDataContext.Provider>
  );
}

export default StorefrontDataProvider;
