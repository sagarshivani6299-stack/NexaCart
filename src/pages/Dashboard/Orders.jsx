import { useState } from "react";
import { FiPackage, FiTruck, FiCheckCircle } from "react-icons/fi";

const initialOrders = [
  {
    id: "NX1024",
    customer: "Aarav Sharma",
    product: "Air Motion Sneakers",
    amount: 2499,
    date: "12 Oct 2026",
    status: "Delivered",
  },
  {
    id: "NX1025",
    customer: "Ananya Singh",
    product: "Luxury Watch",
    amount: 3999,
    date: "13 Oct 2026",
    status: "Processing",
  },
  {
    id: "NX1026",
    customer: "Rohan Verma",
    product: "Urban Backpack",
    amount: 1899,
    date: "13 Oct 2026",
    status: "Pending",
  },
];

const Orders = () => {
  const [orders, setOrders] = useState(initialOrders);
  const [filter, setFilter] = useState("All");

  const updateStatus = (id, status) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === id ? { ...order, status } : order
      )
    );
  };

  const filtered =
    filter === "All"
      ? orders
      : orders.filter((order) => order.status === filter);

  return (
    <div className="mx-auto max-w-7xl">

      <p className="font-semibold text-blue-600">
        ORDER MANAGEMENT
      </p>

      <h1 className="mt-2 text-3xl font-black text-slate-900">
        Customer Orders
      </h1>

      <p className="mt-2 text-gray-500">
        Track and manage your customer orders.
      </p>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {[
          {
            title: "Total Orders",
            value: orders.length,
            icon: FiPackage,
          },
          {
            title: "Processing",
            value: orders.filter((o) => o.status === "Processing").length,
            icon: FiTruck,
          },
          {
            title: "Delivered",
            value: orders.filter((o) => o.status === "Delivered").length,
            icon: FiCheckCircle,
          },
        ].map(({ title, value, icon: Icon }) => (
          <div
            key={title}
            className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
          >
            <Icon className="text-3xl text-blue-600" />

            <p className="mt-5 text-gray-500">{title}</p>

            <h2 className="mt-2 text-3xl font-black">{value}</h2>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">

        <div className="mb-7 flex flex-wrap gap-3">
          {["All", "Pending", "Processing", "Delivered"].map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`rounded-lg px-5 py-2.5 text-sm font-semibold ${
                filter === item
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-500 hover:bg-blue-50"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 text-sm text-gray-500">
              <tr>
                <th className="p-4">Order ID</th>
                <th className="p-4">Customer</th>
                <th className="p-4">Product</th>
                <th className="p-4">Amount</th>
                <th className="p-4">Date</th>
                <th className="p-4">Status</th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((order) => (
                <tr key={order.id} className="border-t border-gray-100">

                  <td className="p-4 font-semibold text-blue-600">
                    #{order.id}
                  </td>

                  <td className="p-4">{order.customer}</td>

                  <td className="p-4 text-gray-500">
                    {order.product}
                  </td>

                  <td className="p-4 font-semibold">
                    ₹{order.amount.toLocaleString("en-IN")}
                  </td>

                  <td className="p-4 text-gray-500">
                    {order.date}
                  </td>

                  <td className="p-4">
                    <select
                      value={order.status}
                      onChange={(e) =>
                        updateStatus(order.id, e.target.value)
                      }
                      className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm outline-none"
                    >
                      <option>Pending</option>
                      <option>Processing</option>
                      <option>Delivered</option>
                    </select>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>

          {!filtered.length && (
            <p className="py-10 text-center text-gray-500">
              No orders in this category.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Orders;