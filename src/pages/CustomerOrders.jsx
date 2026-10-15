import {
  FiPackage,
  FiCheckCircle,
  FiClock,
} from "react-icons/fi";

import {
  formatPrice,
} from "../data/products";

const orders = [
  {
    id: "NX1024",
    date: "12 Oct 2026",
    total: 4998,
    status: "Delivered",
    items: 2,
  },
  {
    id: "NX1025",
    date: "14 Oct 2026",
    total: 2999,
    status: "Processing",
    items: 1,
  },
];

const CustomerOrders = () => {
  return (
    <section className="min-h-screen bg-slate-950 px-6 py-14 text-white">

      <div className="mx-auto max-w-5xl">

        <h1 className="text-4xl font-black">
          My Orders
        </h1>

        <p className="mt-3 text-gray-400">
          Track and review your recent purchases.
        </p>

        <div className="mt-10 space-y-5">

          {orders.map((order) => (
            <div
              key={order.id}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
            >

              <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">

                <div className="flex items-center gap-4">

                  <div className="rounded-xl bg-blue-500/10 p-4 text-blue-400">
                    <FiPackage size={24} />
                  </div>

                  <div>
                    <p className="font-bold">
                      Order #{order.id}
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      {order.date}
                    </p>
                  </div>

                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Items
                  </p>

                  <p className="font-bold">
                    {order.items}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Total
                  </p>

                  <p className="font-bold text-blue-400">
                    {formatPrice(order.total)}
                  </p>
                </div>

                <div
                  className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ${
                    order.status ===
                    "Delivered"
                      ? "bg-green-500/10 text-green-400"
                      : "bg-yellow-500/10 text-yellow-400"
                  }`}
                >
                  {order.status ===
                  "Delivered"
                    ? <FiCheckCircle />
                    : <FiClock />
                  }

                  {order.status}
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default CustomerOrders;