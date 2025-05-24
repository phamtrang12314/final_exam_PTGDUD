import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../features/products/productSlice';

const DeleteButton = ({ productId, onSuccess }) => {
  const dispatch = useDispatch();

  const handleDelete = async () => {
    if (window.confirm('Bạn có chắc chắn muốn xóa sản phẩm này?')) {
      try {
        await dispatch(deleteProduct(productId)).unwrap();
        if (onSuccess) {
          onSuccess();
        }
      } catch (err) {
        console.error('Failed to delete product:', err);
      }
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
    >
      Xóa
    </button>
  );
};

export default DeleteButton; 