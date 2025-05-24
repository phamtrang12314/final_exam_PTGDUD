import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../features/products/productSlice';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    price: '',
    description: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await dispatch(addProduct(form)).unwrap();
      alert('Thêm sản phẩm thành công'); 
      navigate('/');
    } catch (error) {
      alert('Thêm sản phẩm thất bại');
    }
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-white bg-gray-500 px-3 py-1 rounded hover:bg-gray-600"
      >
        ← Quay lại
      </button>
      <h1 className="text-2xl font-bold mb-4">Thêm sản phẩm mới</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Tên sản phẩm</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Giá</label>
          <input
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Mô tả</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Thêm sản phẩm
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
