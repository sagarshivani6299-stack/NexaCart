import { Link } from "react-router-dom";

import {
  FiX,
  FiUser,
  FiShoppingBag,
} from "react-icons/fi";

const LoginRequiredModal = ({
  open,
  onClose,
}) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-5 backdrop-blur-sm">

      <div className="relative w-full max-w-md rounded-3xl border border-slate-700 bg-slate-900 p-8 text-center text-white shadow-2xl">

        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-5 text-gray-400 transition hover:text-white"
        >
          <FiX size={22} />
        </button>

        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
          <FiShoppingBag size={28} />
        </div>

        <h2 className="mt-6 text-2xl font-black">
          Login Required
        </h2>

        <p className="mt-3 leading-7 text-gray-400">
          Please login or create an account to
          save products to your cart or wishlist.
        </p>

        <div className="mt-8 grid grid-cols-2 gap-4">

          <Link
            to="/login"
            onClick={onClose}
            className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 font-semibold transition hover:bg-blue-500"
          >
            <FiUser />
            Login
          </Link>

          <Link
            to="/register"
            onClick={onClose}
            className="rounded-xl border border-slate-600 px-4 py-3 font-semibold transition hover:border-blue-500 hover:text-blue-400"
          >
            Register
          </Link>

        </div>

        <button
          type="button"
          onClick={onClose}
          className="mt-6 text-sm text-gray-500 transition hover:text-white"
        >
          Continue Shopping
        </button>

      </div>

    </div>
  );
};

export default LoginRequiredModal;