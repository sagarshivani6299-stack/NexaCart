import { Outlet, Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <header className="flex items-center justify-between px-6 py-6 md:px-12">
        <Link to="/" className="text-2xl font-black">
          <span className="text-blue-400">Nexa</span>Cart
        </Link>

        <Link
          to="/"
          className="flex items-center gap-2 text-sm text-gray-400 transition hover:text-blue-400"
        >
          <FiArrowLeft />
          Back to Website
        </Link>
      </header>

      <Outlet />
    </div>
  );
};

export default AuthLayout;