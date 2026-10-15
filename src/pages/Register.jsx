import {
  useState,
} from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import {
  FiUser,
  FiMail,
  FiLock,
} from "react-icons/fi";

const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] =
    useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      form.password !==
      form.confirmPassword
    ) {
      setError(
        "Passwords do not match."
      );

      return;
    }

    const registeredUsers =
      JSON.parse(
        localStorage.getItem(
          "nexaRegisteredUsers"
        ) || "[]"
      );

    const alreadyExists =
      registeredUsers.some(
        (user) =>
          user.email === form.email
      );

    if (alreadyExists) {
      setError(
        "An account with this email already exists."
      );

      return;
    }

    const newUser = {
      name: form.name,
      email: form.email,
      password: form.password,
      role: "customer",
    };

    localStorage.setItem(
      "nexaRegisteredUsers",
      JSON.stringify([
        ...registeredUsers,
        newUser,
      ])
    );

    navigate("/login");
  };

  return (
    <section className="mx-auto grid min-h-[calc(100vh-88px)] max-w-7xl items-center gap-12 px-6 py-12 lg:grid-cols-2">

      <div className="hidden overflow-hidden rounded-3xl lg:block">
        <img
          src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=1200&auto=format&fit=crop&q=85"
          alt="NexaCart"
          className="h-[650px] w-full object-cover"
        />
      </div>

      <div className="mx-auto w-full max-w-md">

        <p className="font-semibold text-blue-400">
          CREATE ACCOUNT
        </p>

        <h1 className="mt-3 text-4xl font-black text-white">
          Join NexaCart
        </h1>

        <p className="mt-3 text-gray-400">
          Create an account to save your cart,
          wishlist and orders.
        </p>

        {error && (
          <div className="mt-5 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-400">
            {error}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-5"
        >

          <InputField
            icon={<FiUser />}
            type="text"
            name="name"
            placeholder="Full name"
            value={form.name}
            onChange={handleChange}
          />

          <InputField
            icon={<FiMail />}
            type="email"
            name="email"
            placeholder="Email address"
            value={form.email}
            onChange={handleChange}
          />

          <InputField
            icon={<FiLock />}
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />

          <InputField
            icon={<FiLock />}
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            value={form.confirmPassword}
            onChange={handleChange}
          />

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 py-4 font-bold text-white transition hover:bg-blue-500"
          >
            Create Account
          </button>

        </form>

        <p className="mt-6 text-center text-gray-400">
          Already have an account?{" "}

          <Link
            to="/login"
            className="font-semibold text-blue-400"
          >
            Login
          </Link>
        </p>

      </div>

    </section>
  );
};

const InputField = ({
  icon,
  ...props
}) => (
  <div className="flex items-center rounded-xl border border-slate-700 bg-slate-900 px-4">

    <span className="text-gray-500">
      {icon}
    </span>

    <input
      {...props}
      required
      className="w-full bg-transparent px-3 py-4 text-white outline-none"
    />

  </div>
);

export default Register;