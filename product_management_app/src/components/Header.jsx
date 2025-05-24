import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center ">
      <h1 className="text-2xl font-bold ml-20">My Product Store</h1>
      <nav>
        <Link to="/" className="text-2xl font-bold mr-4 hover:underline">Trang chủ</Link>
      </nav>
    </header>
  );
}