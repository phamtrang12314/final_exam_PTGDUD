import React from 'react';
import { Link } from 'react-router-dom';
import DeleteButton from './DeleteButton';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
        onError={(e) => {
          e.target.src = 'https://via.placeholder.com/400x300';
        }}
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
        <p className="text-gray-600 mb-2">${product.price}</p>
        <p className="text-gray-500 mb-4 line-clamp-2">{product.description}</p>
        <div className="flex justify-between gap-2">
          <Link
            to={`/product/${product.id}`}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex-1 text-center"
          >
            Chi tiết
          </Link>
          <Link
            to={`/edit/${product.id}`}
            className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 flex-1 text-center"
          >
            Sửa
          </Link>
          <DeleteButton productId={product.id} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard; 