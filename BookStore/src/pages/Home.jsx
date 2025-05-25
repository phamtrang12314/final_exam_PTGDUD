import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import books from '../data/books';

function Home() {
  const { addToCart } = useCart();

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Welcome to BookStore</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <div key={book.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={book.image} alt={book.title} className="w-full h-64 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{book.title}</h2>
              <p className="text-gray-600 mb-2">By {book.author}</p>
              <p className="text-lg font-bold text-gray-900 mb-4">
                {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(book.price)}
              </p>
              <div className="flex justify-between">
                <Link
                  to={`/book/${book.id}`}
                  className="text-blue-600 hover:text-blue-800"
                >
                  Xem chi tiết
                </Link>
                <button
                  onClick={() => addToCart(book)}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Thêm vào giỏ
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home; 