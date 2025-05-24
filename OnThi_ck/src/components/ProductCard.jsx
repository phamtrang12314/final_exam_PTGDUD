import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../features/products/productSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleDelete = async () => {
    if (window.confirm('Bạn có chắc chắn muốn xóa sản phẩm này?')) {
      try {
        await dispatch(deleteProduct(product.id)).unwrap();
      } catch (error) {
        console.error('Failed to delete product:', error);
        alert('Có lỗi xảy ra khi xóa sản phẩm');
      }
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden relative">
      {product.image && (
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-gray-600 mt-1">
          ${Number(product.price).toFixed(2)}
        </p>
        <p className="text-gray-500 mt-2 text-sm line-clamp-2">
          {product.description}
        </p>
        <div className="mt-4 flex justify-between items-center">
          <Link
            to={`/product/${product.id}`}
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Chi tiết
          </Link>
          <div className="flex space-x-2">
            <Link
              to={`/edit/${product.id}`}
              className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
            >
              Chỉnh sửa
            </Link>
            <button
              onClick={handleDelete}
              className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
            >
              Xóa
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard; 