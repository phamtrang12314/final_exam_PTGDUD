import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: product, loading, error } = useFetch(`https://68318cf86205ab0d6c3cc119.mockapi.io/products/${id}`);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-600 p-4">
        Error: {error}
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-center text-gray-600 p-4">
        Không tìm thấy sản phẩm
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="md:flex">
          {product.image && (
            <div className="md:flex-shrink-0">
              <img
                className="h-48 w-full object-cover md:w-48"
                src={product.image}
                alt={product.name}
              />
            </div>
          )}
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Mã sản phẩm: {product.id}
            </div>
            <h1 className="mt-2 text-2xl font-bold text-gray-900">
              {product.name}
            </h1>
            <p className="mt-2 text-xl text-gray-600">
              ${Number(product.price).toFixed(2)}
            </p>
            <p className="mt-4 text-gray-500">
              {product.description}
            </p>
            <div className="mt-6 flex space-x-3">
              <button
                onClick={() => navigate(-1)}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
              >
                Quay lại
              </button>
              <button
                onClick={() => navigate(`/edit/${product.id}`)}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Chỉnh sửa
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail; 