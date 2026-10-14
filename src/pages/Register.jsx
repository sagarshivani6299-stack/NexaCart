import { Link, useNavigate } from "react-router-dom";
import { FiUser, FiMail, FiLock, FiArrowRight } from "react-icons/fi";

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <div className="mx-auto flex min-h-[80vh] max-w-7xl items-center gap-16 px-6 py-16 lg:grid lg:grid-cols-2">

      <div className="hidden lg:block">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1000&auto=format&fit=crop&q=85"
          alt="Shopping collection"
          className="h-[600px] w-full rounded-3xl object-cover"
        />
      </div>

      <div className="w-full">
        <p className="font-semibold tracking-widest text-blue-400">
          JOIN NEXACART
        </p>

        <h1 className="mt-4 text-4xl font-black">
          Create Your Account
        </h1>

        <p className="mt-4 text-gray-400">
          Join us and discover a better shopping experience.
        </p>

        <form onSubmit={handleSubmit} className="mt-9 space-y-5">

          {[
            {
              label: "Full Name",
              type: "text",
              placeholder: "Your full name",
              icon: FiUser,
            },
            {
              label: "Email Address",
              type: "email",
              placeholder: "you@example.com",
              icon: FiMail,
            },
            {
              label: "Password",
              type: "password",
              placeholder: "Create password",
              icon: FiLock,
            },
          ].map(({ label, type, placeholder, icon: Icon }) => (
            <div key={label}>
              <label className="mb-2 block text-sm text-gray-300">
                {label}
              </label>

              <div className="relative">
                <Icon className="absolute left-4 top-4 text-gray-500" />

                <input
                  required
                  type={type}
                  placeholder={placeholder}
                  className="w-full rounded-xl border border-slate-700 bg-slate-900 py-4 pl-12 pr-4 outline-none focus:border-blue-500"
                />
              </div>
            </div>
          ))}

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 py-4 font-bold transition hover:bg-blue-500"
          >
            Create Account
            <FiArrowRight />
          </button>
        </form>

        <p className="mt-7 text-center text-gray-400">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-400">
            Sign In
          </Link>
        </p>

        <p className="mt-5 text-center text-xs text-gray-500">
          Demo registration — account details are not saved.
        </p>
      </div>
    </div>
  );
};

export default Register;