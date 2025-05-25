function Books() {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Books</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Book cards will be added here */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-2">Sample Book</h2>
          <p className="text-gray-600">Sample description of the book.</p>
        </div>
      </div>
    </div>
  );
}

export default Books; 