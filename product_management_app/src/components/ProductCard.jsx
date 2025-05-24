import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../features/products/productSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    if (window.confirm('Bạn có chắc chắn muốn xóa sản phẩm này không?')) {
      dispatch(deleteProduct(product.id));
    }
  };


  return (
    <div className="border rounded p-4 shadow hover:shadow-md transition">
      {product.image && (
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-max object-cover mb-2"
        />
      )}
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-sm text-gray-600">{product.description}</p>
      <p className="font-bold text-blue-500 mt-1">{product.price}$</p>

      <div className="flex gap-2 mt-2">
        <Link
          to={`/product/${product.id}`}
          className="text-sm text-white bg-blue-600 px-3 py-1 rounded hover:bg-blue-700"
        >
          Chi tiết
        </Link>

        <Link
          to={`/edit/${product.id}`}
          className="text-sm text-white bg-yellow-500 px-3 py-1 rounded hover:bg-yellow-600"
        >
          Chỉnh sửa
        </Link>

        <button
          onClick={handleDelete}
          className="text-sm text-white bg-red-500 px-3 py-1 rounded hover:bg-yellow-600"
        >
          Xóa
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
