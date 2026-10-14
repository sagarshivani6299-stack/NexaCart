import { useState } from "react";
import { FiUser, FiMail, FiMapPin, FiSave } from "react-icons/fi";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "Shivani",
    email: "admin@nexacart.example",
    role: "Administrator",
    location: "India",
    bio: "Frontend Developer | React & Tailwind CSS",
  });

  const [saved, setSaved] = useState(false);

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });

    setSaved(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("nexaProfile", JSON.stringify(profile));
    setSaved(true);
  };

  return (
    <div className="mx-auto max-w-5xl">

      <p className="font-semibold text-blue-600">MY ACCOUNT</p>

      <h1 className="mt-2 text-3xl font-black text-slate-900">
        Profile Settings
      </h1>

      <p className="mt-2 text-gray-500">
        Manage your personal information.
      </p>

      <div className="mt-8 overflow-hidden rounded-2xl bg-white shadow-sm">

        <div className="h-40 bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-400" />

        <div className="px-8 pb-10">

          <div className="-mt-12 flex items-end gap-5">

            <div className="flex h-24 w-24 items-center justify-center rounded-2xl border-4 border-white bg-slate-950 text-4xl font-bold text-white">
              S
            </div>

            <div className="pb-2">
              <h2 className="text-2xl font-bold text-slate-900">
                {profile.name}
              </h2>

              <p className="text-gray-500">{profile.role}</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="mt-10">

            <div className="grid gap-6 md:grid-cols-2">

              {[
                {
                  name: "name",
                  label: "Full Name",
                  icon: FiUser,
                },
                {
                  name: "email",
                  label: "Email Address",
                  icon: FiMail,
                },
                {
                  name: "location",
                  label: "Location",
                  icon: FiMapPin,
                },
                {
                  name: "role",
                  label: "Role",
                  icon: FiUser,
                },
              ].map(({ name, label, icon: Icon }) => (
                <div key={name}>
                  <label className="mb-2 block text-sm font-semibold text-gray-600">
                    {label}
                  </label>

                  <div className="relative">
                    <Icon className="absolute left-4 top-4 text-gray-400" />

                    <input
                      name={name}
                      value={profile[name]}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 outline-none focus:border-blue-500"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <label className="mb-2 block text-sm font-semibold text-gray-600">
                Bio
              </label>

              <textarea
                name="bio"
                value={profile.bio}
                onChange={handleChange}
                rows="4"
                className="w-full rounded-xl border border-gray-200 bg-gray-50 p-4 outline-none focus:border-blue-500"
              />
            </div>

            <button
              type="submit"
              className="mt-7 flex items-center gap-3 rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white hover:bg-blue-700"
            >
              <FiSave />
              Save Changes
            </button>

            {saved && (
              <p className="mt-4 text-sm text-green-600">
                Profile saved locally.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;