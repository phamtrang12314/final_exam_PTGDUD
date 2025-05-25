import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { TrashIcon } from '@heroicons/react/24/outline';

function Cart() {
  const { cartItems, removeFromCart, getTotalPrice } = useCart();
  const [showThankYou, setShowThankYou] = useState(false);

  const handleCheckout = () => {
    setShowThankYou(true);
    setTimeout(() => {
      setShowThankYou(false);
    }, 3000);
  };

  if (cartItems.length === 0) {
    return (
      <div className="max-w-4xl mx-auto mt-20 text-center py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Giỏ hàng trống</h2>
        <p className="text-gray-600 mb-8">Hãy thêm sách vào giỏ hàng của bạn</p>
        <Link
          to="/"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Tiếp tục mua sắm
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto mt-20">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Giỏ hàng của bạn</h1>
      
      {showThankYou && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          Cảm ơn bạn đã mua hàng!
        </div>
      )}

      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center border-b border-gray-200 p-6">
            <img
              src={item.image}
              alt={item.title}
              className="h-24 w-24 object-cover rounded"
            />
            <div className="flex-1 ml-6">
              <Link to={`/book/${item.id}`} className="text-lg font-semibold text-gray-900 hover:text-blue-600">
                {item.title}
              </Link>
              <p className="text-gray-600">Tác giả: {item.author}</p>
              <div className="flex items-center mt-2">
                <span className="text-gray-600">Số lượng: {item.quantity}</span>
                <span className="mx-2 text-gray-400">|</span>
                <span className="text-gray-900 font-bold">
                  {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.price * item.quantity)}
                </span>
              </div>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-600 hover:text-red-800 ml-6 p-2"
              title="Xóa khỏi giỏ hàng"
            >
              <TrashIcon className="h-6 w-6" />
            </button>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <span className="text-lg font-semibold text-gray-900">Tổng cộng:</span>
          <span className="text-2xl font-bold text-gray-900">
            {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(getTotalPrice())}
          </span>
        </div>
        <div className="flex space-x-4">
          <Link
            to="/"
            className="flex-1 px-6 py-3 text-center text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200"
          >
            Tiếp tục mua sắm
          </Link>
          <button
            onClick={handleCheckout}
            className="flex-1 px-6 py-3 text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Thanh toán
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart; 