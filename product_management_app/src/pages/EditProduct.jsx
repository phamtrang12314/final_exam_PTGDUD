import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateProduct, fetchProducts } from '../features/products/productSlice';

const EditProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const product = useSelector((state) =>
    state.products.products.find((p) => p.id === id)
  );

  const [form, setForm] = useState({
    name: '',
    price: '',
    description: '',
  });

  useEffect(() => {
    if (!product) {
      dispatch(fetchProducts());
    } else {
      setForm({
        name: product.name,
        price: product.price,
        description: product.description,
      });
    }
  }, [dispatch, product]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(updateProduct({ id, data: form })).unwrap();
      alert('Cập nhật sản phẩm thành công');
      navigate('/');
    } catch (error) {
      alert('Cập nhật thất bại');
    }
  };

  if (!product) return <div>Đang tải sản phẩm...</div>;

  return (
    <div className="p-4 max-w-xl mx-auto">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-white bg-gray-500 px-3 py-1 rounded hover:bg-gray-600"
      >
        ← Quay lại
      </button>
      <h1 className="text-2xl font-bold mb-4">Chỉnh sửa sản phẩm</h1>
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
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Cập nhật sản phẩm
        </button>
      </form>
    </div>
  );
};

export default EditProduct;
