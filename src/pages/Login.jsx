import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/content");
  };

  return (
    <div className="grid min-h-[calc(100vh-88px)] lg:grid-cols-2">

      {/* IMAGE */}
      <div className="relative hidden overflow-hidden lg:block">

        <img
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&auto=format&fit=crop&q=85"
          alt="Fashion shopping"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

        <div className="absolute bottom-16 left-12 right-12">
          <span className="rounded-full bg-blue-600/30 px-5 py-2 text-sm text-blue-200 backdrop-blur">
            NEXACART EXPERIENCE
          </span>

          <h2 className="mt-6 text-5xl font-black leading-tight">
            Your Style.
            <br />
            Your World.
          </h2>

          <p className="mt-5 max-w-md text-lg text-gray-300">
            Discover a smarter way to shop and manage your
            favorite products.
          </p>
        </div>
      </div>

      {/* FORM */}
      <div className="flex items-center justify-center px-6 py-16">

        <div className="w-full max-w-md">

          <p className="font-semibold uppercase tracking-widest text-blue-400">
            WELCOME BACK
          </p>

          <h1 className="mt-4 text-4xl font-black">
            Sign In To NexaCart
          </h1>

          <p className="mt-4 text-gray-400">
            Enter your details to access your account.
          </p>

          <form onSubmit={handleSubmit} className="mt-10 space-y-6">

            <div>
              <label className="mb-2 block text-sm text-gray-300">
                Email Address
              </label>

              <div className="relative">
                <FiMail className="absolute left-4 top-4 text-gray-500" />

                <input
                  required
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-slate-700 bg-slate-900 py-4 pl-12 pr-4 outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm text-gray-300">
                Password
              </label>

              <div className="relative">
                <FiLock className="absolute left-4 top-4 text-gray-500" />

                <input
                  required
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  className="w-full rounded-xl border border-slate-700 bg-slate-900 py-4 pl-12 pr-12 outline-none focus:border-blue-500"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-4 text-gray-400"
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-400">
                <input type="checkbox" />
                Remember me
              </label>

              <span className="text-blue-400">
                Forgot Password?
              </span>
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-blue-600 py-4 font-bold transition hover:bg-blue-500"
            >
              Sign In →
            </button>
          </form>

          <p className="mt-8 text-center text-gray-400">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-semibold text-blue-400"
            >
              Create Account
            </Link>
          </p>

          <p className="mt-6 text-center text-xs text-gray-500">
            Demo login — no real authentication is performed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;