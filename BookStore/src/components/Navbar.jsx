import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

function Navbar() {
  const { getTotalItems } = useCart();
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900';
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-gray-800">BookStore</span>
            </Link>
          </div>
          <div className="flex items-center space-x-6">
            <Link to="/" className={`${isActive('/')} transition-colors duration-200`}>
              Trang chủ
            </Link>
            <Link to="/about" className={`${isActive('/about')} transition-colors duration-200`}>
              Về chúng tôi
            </Link>
            <Link to="/cart" className="relative group">
              <div className="flex items-center space-x-1 text-gray-600 hover:text-gray-900">
                <ShoppingCartIcon className="h-6 w-6" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {getTotalItems()}
                  </span>
                )}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 