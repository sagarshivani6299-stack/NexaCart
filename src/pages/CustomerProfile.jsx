import {
  useState,
} from "react";

import {
  FiUser,
  FiMail,
  FiSave,
} from "react-icons/fi";

import { useAuth } from "../context/AuthContext";

const CustomerProfile = () => {
  const { user } = useAuth();

  const [form, setForm] = useState({
    name: user.name || "",
    email: user.email || "",
    phone: "",
    address: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem(
      `nexaProfile_${user.email}`,
      JSON.stringify(form)
    );

    alert("Profile saved.");
  };

  return (
    <section className="min-h-screen bg-slate-950 px-6 py-14 text-white">

      <div className="mx-auto max-w-3xl">

        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-600 text-3xl">
          <FiUser />
        </div>

        <h1 className="mt-6 text-4xl font-black">
          My Profile
        </h1>

        <p className="mt-2 text-gray-400">
          Manage your NexaCart account information.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-5 rounded-2xl border border-slate-800 bg-slate-900 p-7"
        >

          <Field
            icon={<FiUser />}
            label="Full Name"
            value={form.name}
            onChange={(e) =>
              setForm({
                ...form,
                name: e.target.value,
              })
            }
          />

          <Field
            icon={<FiMail />}
            label="Email"
            value={form.email}
            disabled
          />

          <Field
            label="Phone"
            value={form.phone}
            onChange={(e) =>
              setForm({
                ...form,
                phone: e.target.value,
              })
            }
          />

          <div>
            <label className="mb-2 block text-sm text-gray-400">
              Address
            </label>

            <textarea
              value={form.address}
              onChange={(e) =>
                setForm({
                  ...form,
                  address: e.target.value,
                })
              }
              rows="4"
              className="w-full rounded-xl border border-slate-700 bg-slate-950 p-4 outline-none focus:border-blue-500"
            />
          </div>

          <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-bold hover:bg-blue-500">
            <FiSave />
            Save Profile
          </button>

        </form>

      </div>

    </section>
  );
};

const Field = ({
  label,
  icon,
  ...props
}) => (
  <div>
    <label className="mb-2 block text-sm text-gray-400">
      {label}
    </label>

    <div className="flex items-center rounded-xl border border-slate-700 bg-slate-950 px-4">

      {icon && (
        <span className="text-gray-500">
          {icon}
        </span>
      )}

      <input
        {...props}
        className="w-full bg-transparent px-3 py-4 outline-none disabled:text-gray-500"
      />

    </div>
  </div>
);

export default CustomerProfile;