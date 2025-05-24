import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../features/products/productSlice';
import ProductList from '../features/products/ProductList';
import { Link } from 'react-router-dom'; 

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Danh sách sản phẩm</h1>
        <Link
          to="/add"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          + Thêm sản phẩm
        </Link>
      </div>
      <ProductList />
      
    </div>
  );
};

export default Home;
