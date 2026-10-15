import {
  useState,
} from "react";

import {
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";

import {
  FiMail,
  FiLock,
  FiEye,
  FiEyeOff,
  FiUser,
} from "react-icons/fi";

import { useAuth } from "../context/AuthContext";

const Login = () => {
  const {
    login,
  } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const [showPassword, setShowPassword] =
    useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    login({
      name: form.name,
      email: form.email,
    });

    const from =
      location.state?.from || "/";

    navigate(from, {
      replace: true,
    });
  };

  return (
    <section className="mx-auto grid min-h-[calc(100vh-88px)] max-w-7xl items-center gap-12 px-6 py-12 lg:grid-cols-2">

      <div className="hidden overflow-hidden rounded-3xl lg:block">

        <img
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&auto=format&fit=crop&q=85"
          alt="Shopping"
          className="h-[650px] w-full object-cover"
        />

      </div>

      <div className="mx-auto w-full max-w-md">

        <p className="font-semibold text-blue-400">
          WELCOME BACK
        </p>

        <h1 className="mt-3 text-4xl font-black text-white">
          Login to NexaCart
        </h1>

        <p className="mt-3 text-gray-400">
          Access your cart, wishlist and orders.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-5"
        >

          <div>
            <label className="mb-2 block text-sm text-gray-300">
              Name
            </label>

            <div className="flex items-center rounded-xl border border-slate-700 bg-slate-900 px-4">
              <FiUser className="text-gray-500" />

              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full bg-transparent px-3 py-4 text-white outline-none"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm text-gray-300">
              Email
            </label>

            <div className="flex items-center rounded-xl border border-slate-700 bg-slate-900 px-4">
              <FiMail className="text-gray-500" />

              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full bg-transparent px-3 py-4 text-white outline-none"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm text-gray-300">
              Password
            </label>

            <div className="flex items-center rounded-xl border border-slate-700 bg-slate-900 px-4">

              <FiLock className="text-gray-500" />

              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                name="password"
                required
                value={form.password}
                onChange={handleChange}
                placeholder="Enter password"
                className="w-full bg-transparent px-3 py-4 text-white outline-none"
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(
                    !showPassword
                  )
                }
              >
                {showPassword
                  ? <FiEyeOff />
                  : <FiEye />
                }
              </button>

            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 py-4 font-bold text-white transition hover:bg-blue-500"
          >
            Login
          </button>

        </form>

        <p className="mt-6 text-center text-gray-400">
          Don't have an account?{" "}

          <Link
            to="/register"
            className="font-semibold text-blue-400"
          >
            Register
          </Link>
        </p>

      </div>

    </section>
  );
};

export default Login;