import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import books from '../data/books';

function BookDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const book = books.find(b => b.id === parseInt(id));

  if (!book) {
    navigate('/404');
    return null;
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="h-96 w-full object-cover md:w-96"
              src={book.image}
              alt={book.title}
            />
          </div>
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{book.title}</h1>
            <p className="text-gray-600 mb-4">By {book.author}</p>
            <p className="text-gray-700 mb-6">{book.description}</p>
            <p className="text-2xl font-bold text-gray-900 mb-6">
              {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(book.price)}
            </p>
            <button
              onClick={() => {
                addToCart(book);
                navigate('/cart');
              }}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
            >
              Thêm vào giỏ hàng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetail; 