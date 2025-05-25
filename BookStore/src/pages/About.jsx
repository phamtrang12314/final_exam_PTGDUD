function About() {
  return (
    <div className="max-w-4xl mx-auto mt-20">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Về Chúng Tôi</h1>
      
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Giới thiệu</h2>
          <p className="text-gray-600 leading-relaxed">
            BookStore là một trong những cửa hàng sách trực tuyến hàng đầu, cung cấp đa dạng các loại sách từ văn học, kinh tế, 
            đến sách thiếu nhi và giáo khoa. Chúng tôi cam kết mang đến cho độc giả những cuốn sách chất lượng với giá cả hợp lý nhất.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Sứ mệnh</h2>
          <p className="text-gray-600 leading-relaxed">
            Sứ mệnh của chúng tôi là thúc đẩy văn hóa đọc trong cộng đồng, giúp mọi người dễ dàng tiếp cận với kho tàng tri thức 
            của nhân loại thông qua những cuốn sách giá trị.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Dịch vụ của chúng tôi</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Đa dạng sách các thể loại</li>
            <li>Giao hàng nhanh chóng toàn quốc</li>
            <li>Đổi trả miễn phí trong 7 ngày</li>
            <li>Tư vấn chọn sách chuyên nghiệp</li>
            <li>Chương trình khuyến mãi hấp dẫn</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Liên hệ</h2>
          <div className="text-gray-600">
            <p>Địa chỉ: 123 Đường Sách, Quận 1, TP.HCM</p>
            <p>Email: contact@bookstore.com</p>
            <p>Điện thoại: (028) 1234 5678</p>
            <p>Thời gian làm việc: 8:00 - 22:00 (Thứ 2 - Chủ nhật)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About; 