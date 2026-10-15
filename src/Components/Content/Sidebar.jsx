import {
  NavLink,
} from "react-router-dom";

import {
  FiGrid,
  FiShoppingBag,
  FiPackage,
  FiUsers,
  FiBarChart2,
  FiUser,
  FiSettings,
  FiHome,
} from "react-icons/fi";

const Sidebar = () => {
  const menu = [
    {
      name: "Dashboard",
      icon: <FiGrid />,
      path: "/admin",
    },
    {
      name: "Products",
      icon: <FiShoppingBag />,
      path: "/admin/products",
    },
    {
      name: "Orders",
      icon: <FiPackage />,
      path: "/admin/orders",
    },
    {
      name: "Customers",
      icon: <FiUsers />,
      path: "/admin/customers",
    },
    {
      name: "Analytics",
      icon: <FiBarChart2 />,
      path: "/admin/analytics",
    },
    {
      name: "Profile",
      icon: <FiUser />,
      path: "/admin/profile",
    },
    {
      name: "Settings",
      icon: <FiSettings />,
      path: "/admin/settings",
    },
  ];

  return (
    <aside className="hidden min-h-screen w-64 flex-shrink-0 bg-slate-950 text-white lg:block">

      <div className="border-b border-slate-800 px-6 py-7">

        <h1 className="text-2xl font-black">
          <span className="text-blue-500">
            Nexa
          </span>
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
              end={
                item.path ===
                "/admin"
              }
              className={({
                isActive,
              }) =>
                `flex items-center gap-4 rounded-xl px-4 py-3 transition ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-gray-400 hover:bg-slate-900 hover:text-white"
                }`
              }
            >
              <span className="text-lg">
                {item.icon}
              </span>

              <span className="font-medium">
                {item.name}
              </span>
            </NavLink>
          ))}

        </div>

        <div className="mt-10 border-t border-slate-800 pt-5">

          <NavLink
            to="/"
            className="flex items-center gap-4 rounded-xl px-4 py-3 text-gray-400 hover:bg-slate-900 hover:text-white"
          >
            <FiHome />
            Back to Website
          </NavLink>

        </div>

      </nav>

    </aside>
  );
};

export default Sidebar;