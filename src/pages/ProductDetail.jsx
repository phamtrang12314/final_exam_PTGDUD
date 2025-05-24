import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import DeleteButton from '../components/DeleteButton';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: product, loading, error } = useFetch(`https://68318cf86205ab0d6c3cc119.mockapi.io/products/${id}`);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  if (!product) {
    return <div className="text-center">Không tìm thấy sản phẩm</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="h-48 w-full object-cover md:w-48"
              src={product.image}
              alt={product.name}
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/400x300';
              }}
            />
          </div>
          <div className="p-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">{product.name}</h1>
            <p className="text-xl text-blue-600 mb-4">${product.price}</p>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <div className="flex gap-4">
              <button
                onClick={() => navigate(-1)}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                Quay lại
              </button>
              <Link
                to="/"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Trang chủ
              </Link>
              <DeleteButton productId={id} onSuccess={() => navigate('/')} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail; 