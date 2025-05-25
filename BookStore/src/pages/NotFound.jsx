import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        <h1 className="text-9xl font-bold text-blue-600 mb-4">404</h1>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Trang không tồn tại</h2>
          <p className="text-gray-600">
            Xin lỗi, trang bạn đang tìm kiếm không tồn tại hoặc đã được di chuyển.
          </p>
        </div>
        <div className="space-y-4">
          <p className="text-gray-600">
            Bạn có thể thử một trong những liên kết sau:
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Về trang chủ
            </Link>
            <Link
              to="/cart"
              className="inline-block bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Giỏ hàng của bạn
            </Link>
            <Link
              to="/about"
              className="inline-block bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Về chúng tôi
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound; 