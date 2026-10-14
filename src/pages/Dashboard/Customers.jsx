import { useState } from "react";
import { FiSearch, FiUsers, FiMail } from "react-icons/fi";

const customers = [
  {
    id: 1,
    name: "Aarav Sharma",
    email: "aarav@example.com",
    orders: 12,
    spent: "₹24,500",
    status: "Active",
  },
  {
    id: 2,
    name: "Ananya Singh",
    email: "ananya@example.com",
    orders: 8,
    spent: "₹18,900",
    status: "Active",
  },
  {
    id: 3,
    name: "Rohan Verma",
    email: "rohan@example.com",
    orders: 5,
    spent: "₹9,800",
    status: "Inactive",
  },
  {
    id: 4,
    name: "Priya Kumari",
    email: "priya@example.com",
    orders: 15,
    spent: "₹32,600",
    status: "Active",
  },
];

const Customers = () => {
  const [search, setSearch] = useState("");

  const filtered = customers.filter((customer) =>
    customer.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="mx-auto max-w-7xl">

      <p className="font-semibold text-blue-600">CUSTOMERS</p>

      <h1 className="mt-2 text-3xl font-black text-slate-900">
        Customer Management
      </h1>

      <p className="mt-2 text-gray-500">
        View customer profiles and purchase history.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">

        <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 p-7 text-white">
          <FiUsers size={30} />
          <p className="mt-6 text-blue-100">Total Customers</p>
          <h2 className="mt-2 text-4xl font-black">3,842</h2>
        </div>

        <div className="rounded-2xl bg-white p-7 shadow-sm">
          <p className="text-gray-500">Active Customers</p>
          <h2 className="mt-5 text-4xl font-black text-slate-900">
            2,946
          </h2>
        </div>

        <div className="rounded-2xl bg-white p-7 shadow-sm">
          <p className="text-gray-500">New This Month</p>
          <h2 className="mt-5 text-4xl font-black text-slate-900">
            248
          </h2>
        </div>
      </div>

      <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm">

        <div className="relative mb-8 max-w-md">
          <FiSearch className="absolute left-4 top-4 text-gray-400" />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search customers..."
            className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 outline-none focus:border-blue-500"
          />
        </div>

        <div className="grid gap-5 md:grid-cols-2">

          {filtered.map((customer) => (
            <div
              key={customer.id}
              className="rounded-2xl border border-gray-100 p-6 transition hover:border-blue-200 hover:shadow-lg"
            >
              <div className="flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-xl font-bold text-blue-600">
                  {customer.name.charAt(0)}
                </div>

                <div>
                  <h3 className="font-bold text-slate-900">
                    {customer.name}
                  </h3>

                  <p className="mt-1 flex items-center gap-2 text-sm text-gray-500">
                    <FiMail />
                    {customer.email}
                  </p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3 border-t border-gray-100 pt-5">

                <div>
                  <p className="text-xs text-gray-400">Orders</p>
                  <p className="mt-2 font-bold">{customer.orders}</p>
                </div>

                <div>
                  <p className="text-xs text-gray-400">Spent</p>
                  <p className="mt-2 font-bold">{customer.spent}</p>
                </div>

                <div>
                  <p className="text-xs text-gray-400">Status</p>

                  <p
                    className={`mt-2 text-sm font-semibold ${
                      customer.status === "Active"
                        ? "text-green-600"
                        : "text-gray-400"
                    }`}
                  >
                    {customer.status}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {!filtered.length && (
          <p className="py-10 text-center text-gray-500">
            No customers found.
          </p>
        )}
      </div>
    </div>
  );
};

export default Customers;