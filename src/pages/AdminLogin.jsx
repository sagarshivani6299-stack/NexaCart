import {
  useState,
} from "react";

import {
  useLocation,
  useNavigate,
} from "react-router-dom";

import {
  FiShield,
  FiMail,
  FiLock,
} from "react-icons/fi";

import { useAuth } from "../context/AuthContext";

const AdminLogin = () => {
  const {
    adminLogin,
  } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] =
    useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // FRONTEND DEMO ONLY
    if (
      form.email ===
        "admin@nexacart.com" &&
      form.password === "admin123"
    ) {
      adminLogin({
        name: "NexaCart Admin",
        email: form.email,
      });

      const from =
        location.state?.from ||
        "/admin";

      navigate(from, {
        replace: true,
      });

      return;
    }

    setError(
      "Invalid admin email or password."
    );
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-5">

      <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">

        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white">
          <FiShield size={28} />
        </div>

        <div className="mt-6 text-center">

          <h1 className="text-3xl font-black text-white">
            NexaCart Admin
          </h1>

          <p className="mt-2 text-gray-400">
            Authorized personnel only
          </p>

        </div>

        {error && (
          <div className="mt-6 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-400">
            {error}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-5"
        >

          <div className="flex items-center rounded-xl border border-slate-700 bg-slate-950 px-4">
            <FiMail className="text-gray-500" />

            <input
              type="email"
              required
              placeholder="Admin email"
              value={form.email}
              onChange={(e) =>
                setForm({
                  ...form,
                  email: e.target.value,
                })
              }
              className="w-full bg-transparent px-3 py-4 text-white outline-none"
            />
          </div>

          <div className="flex items-center rounded-xl border border-slate-700 bg-slate-950 px-4">
            <FiLock className="text-gray-500" />

            <input
              type="password"
              required
              placeholder="Password"
              value={form.password}
              onChange={(e) =>
                setForm({
                  ...form,
                  password: e.target.value,
                })
              }
              className="w-full bg-transparent px-3 py-4 text-white outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 py-4 font-bold text-white transition hover:bg-blue-500"
          >
            Secure Login
          </button>

        </form>

        <div className="mt-6 rounded-xl bg-slate-950 p-4 text-sm text-gray-500">
          Demo Admin: admin@nexacart.com /
          admin123
        </div>

      </div>

    </div>
  );
};

export default AdminLogin;