import { NavLink } from "react-router-dom";

const Sidebar = () => {

  const menu = [
    { name: "Dashboard", icon: "▦", path: "/content" },
    { name: "Products", icon: "🛍", path: "/content/products" },
    { name: "Orders", icon: "📦", path: "/content/orders" },
    { name: "Customers", icon: "👥", path: "/content/customers" },
    { name: "Analytics", icon: "📊", path: "/content/analytics" },
    { name: "Profile", icon: "👤", path: "/content/profile" },
    { name: "Settings", icon: "⚙", path: "/content/settings" },
  ];

  return (
    <aside className="hidden min-h-screen w-64 flex-shrink-0 bg-slate-950 text-white lg:block">

      <div className="border-b border-slate-800 px-6 py-7">
        <h1 className="text-2xl font-black">
          <span className="text-blue-500">Nexa</span>
          Cart
        </h1>

        <p className="mt-1 text-xs text-gray-500">
          ADMIN WORKSPACE
        </p>
      </div>

      <nav className="p-4">

        <p className="mb-3 px-4 text-xs font-semibold uppercase tracking-widest text-gray-600">
          Menu
        </p>

        <div className="space-y-2">

          {menu.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/content"}
              className={({ isActive }) =>
                `flex items-center gap-4 rounded-xl px-4 py-3 transition duration-200 ${
                  isActive
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-900/30"
                    : "text-gray-400 hover:bg-slate-900 hover:text-white"
                }`
              }
            >
              <span className="text-lg">{item.icon}</span>

              <span className="font-medium">
                {item.name}
              </span>
            </NavLink>
          ))}

        </div>

        <div className="mt-10 border-t border-slate-800 pt-5">

          <NavLink
            to="/"
            className="flex items-center gap-4 rounded-xl px-4 py-3 text-gray-400 transition hover:bg-slate-900 hover:text-white"
          >
            <span>←</span>
            Back to Website
          </NavLink>

        </div>

      </nav>
    </aside>
  );
};

export default Sidebar;