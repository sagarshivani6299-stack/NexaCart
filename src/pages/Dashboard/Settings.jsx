import { useState } from "react";
import { FiBell, FiShield, FiMoon, FiSave } from "react-icons/fi";

const Settings = () => {
  const [settings, setSettings] = useState({
    notifications: true,
    emails: true,
    securityAlerts: true,
    darkMode: false,
  });

  const [saved, setSaved] = useState(false);

  const options = [
    {
      key: "notifications",
      title: "Push Notifications",
      description: "Receive updates about your store.",
      icon: FiBell,
    },
    {
      key: "emails",
      title: "Email Notifications",
      description: "Receive order and customer updates.",
      icon: FiBell,
    },
    {
      key: "securityAlerts",
      title: "Security Alerts",
      description: "Get notified about security activities.",
      icon: FiShield,
    },
    {
      key: "darkMode",
      title: "Dark Mode Preference",
      description: "Save your preferred appearance.",
      icon: FiMoon,
    },
  ];

  const handleSave = () => {
    localStorage.setItem("nexaSettings", JSON.stringify(settings));
    setSaved(true);
  };

  return (
    <div className="mx-auto max-w-5xl">

      <p className="font-semibold text-blue-600">
        PREFERENCES
      </p>

      <h1 className="mt-2 text-3xl font-black text-slate-900">
        Account Settings
      </h1>

      <p className="mt-2 text-gray-500">
        Customize your dashboard preferences.
      </p>

      <div className="mt-8 rounded-2xl bg-white p-8 shadow-sm">

        <h2 className="text-xl font-bold text-slate-900">
          General Preferences
        </h2>

        <div className="mt-7 divide-y divide-gray-100">

          {options.map(({ key, title, description, icon: Icon }) => (
            <div
              key={key}
              className="flex items-center justify-between gap-5 py-6"
            >

              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-xl text-blue-600">
                  <Icon />
                </div>

                <div>
                  <h3 className="font-semibold text-slate-800">
                    {title}
                  </h3>

                  <p className="mt-1 text-sm text-gray-400">
                    {description}
                  </p>
                </div>
              </div>

              <button
                type="button"
                role="switch"
                aria-checked={settings[key]}
                aria-label={title}
                onClick={() => {
                  setSettings({
                    ...settings,
                    [key]: !settings[key],
                  });

                  setSaved(false);
                }}
                className={`relative h-7 w-12 shrink-0 rounded-full transition ${
                  settings[key] ? "bg-blue-600" : "bg-gray-300"
                }`}
              >
                <span
                  className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow transition ${
                    settings[key] ? "left-6" : "left-1"
                  }`}
                />
              </button>
            </div>
          ))}
        </div>

        <button
          onClick={handleSave}
          className="mt-8 flex items-center gap-3 rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white hover:bg-blue-700"
        >
          <FiSave />
          Save Preferences
        </button>

        {saved && (
          <p className="mt-4 text-sm text-green-600">
            Preferences saved in localStorage.
          </p>
        )}

        <p className="mt-3 text-xs text-gray-400">
          These are demo preferences. They do not yet control real
          notifications or change the dashboard theme.
        </p>
      </div>
    </div>
  );
};

export default Settings;