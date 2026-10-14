const Content = () => {

  const stats = [
    {
      title: "Total Revenue",
      value: "₹4,28,500",
      change: "+18.2%",
      icon: "₹",
    },
    {
      title: "Total Orders",
      value: "1,248",
      change: "+12.5%",
      icon: "📦",
    },
    {
      title: "Customers",
      value: "3,842",
      change: "+8.4%",
      icon: "👥",
    },
    {
      title: "Products",
      value: "526",
      change: "+5.2%",
      icon: "🛍",
    },
  ];

  const orders = [
    {
      id: "#NX1024",
      customer: "Aarav Sharma",
      product: "Classic Sneakers",
      price: "₹2,499",
      status: "Delivered",
    },
    {
      id: "#NX1025",
      customer: "Ananya Singh",
      product: "Premium Watch",
      price: "₹3,999",
      status: "Processing",
    },
    {
      id: "#NX1026",
      customer: "Rohan Verma",
      product: "Urban Backpack",
      price: "₹1,899",
      status: "Delivered",
    },
    {
      id: "#NX1027",
      customer: "Priya Kumari",
      product: "Headphones",
      price: "₹2,999",
      status: "Pending",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl">

      {/* HEADER */}

      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">

        <div>
          <p className="text-sm font-medium text-blue-600">
            DASHBOARD OVERVIEW
          </p>

          <h1 className="mt-1 text-3xl font-bold text-slate-900">
            Welcome back, Shivani 👋
          </h1>

          <p className="mt-2 text-gray-500">
            Here's what's happening with your store today.
          </p>
        </div>

        <button className="w-fit rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700">
          + Add Product
        </button>

      </div>


      {/* STATS */}

      <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

        {stats.map((stat) => (
          <div
            key={stat.title}
            className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm
                       transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >

            <div className="flex items-start justify-between">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-xl font-bold text-blue-600">
                {stat.icon}
              </div>

              <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-600">
                {stat.change}
              </span>

            </div>

            <p className="mt-5 text-sm text-gray-500">
              {stat.title}
            </p>

            <h2 className="mt-1 text-2xl font-bold text-slate-900">
              {stat.value}
            </h2>

            <p className="mt-2 text-xs text-gray-400">
              Compared to last month
            </p>

          </div>
        ))}

      </div>


      {/* CHART + SUMMARY */}

      <div className="mt-7 grid gap-6 xl:grid-cols-3">

        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm xl:col-span-2">

          <div className="flex items-center justify-between">

            <div>
              <h2 className="text-xl font-bold text-slate-900">
                Sales Overview
              </h2>

              <p className="mt-1 text-sm text-gray-400">
                Monthly revenue performance
              </p>
            </div>

            <select className="rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none">
              <option>Last 6 months</option>
              <option>Last year</option>
            </select>

          </div>

          {/* Fake chart */}

          <div className="mt-10 flex h-64 items-end justify-between gap-4">

            {[35, 55, 42, 75, 58, 88, 67, 95, 70, 82, 90, 100].map(
              (height, index) => (
                <div
                  key={index}
                  className="group flex h-full flex-1 items-end"
                >
                  <div
                    style={{ height: `${height}%` }}
                    className="w-full rounded-t-lg bg-gradient-to-t from-blue-600 to-cyan-400 transition duration-300 group-hover:opacity-75"
                  />
                </div>
              )
            )}

          </div>

          <div className="mt-3 flex justify-between text-xs text-gray-400">
            <span>Jan</span>
            <span>Mar</span>
            <span>May</span>
            <span>Jul</span>
            <span>Sep</span>
            <span>Dec</span>
          </div>

        </div>


        {/* SUMMARY */}

        <div className="rounded-2xl bg-slate-950 p-7 text-white shadow-xl">

          <p className="text-sm text-blue-400">
            PERFORMANCE
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            Store Summary
          </h2>

          <div className="mt-8 space-y-6">

            <Summary
              name="Conversion Rate"
              value="8.4%"
              width="84%"
            />

            <Summary
              name="Customer Retention"
              value="72%"
              width="72%"
            />

            <Summary
              name="Order Completion"
              value="91%"
              width="91%"
            />

          </div>

          <div className="mt-9 rounded-xl bg-slate-900 p-5">

            <p className="text-sm text-gray-400">
              Monthly Target
            </p>

            <p className="mt-2 text-3xl font-bold">
              82%
            </p>

            <p className="mt-2 text-xs text-green-400">
              ↑ 12% from last month
            </p>

          </div>

        </div>

      </div>


      {/* RECENT ORDERS */}

      <div className="mt-7 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">

        <div className="flex items-center justify-between border-b border-gray-100 p-6">

          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Recent Orders
            </h2>

            <p className="mt-1 text-sm text-gray-400">
              Latest customer orders
            </p>
          </div>

          <button className="font-semibold text-blue-600 hover:text-blue-700">
            View All →
          </button>

        </div>

        <div className="overflow-x-auto">

          <table className="w-full text-left">

            <thead className="bg-gray-50 text-xs uppercase text-gray-400">
              <tr>
                <th className="px-6 py-4">Order</th>
                <th className="px-6 py-4">Customer</th>
                <th className="px-6 py-4">Product</th>
                <th className="px-6 py-4">Amount</th>
                <th className="px-6 py-4">Status</th>
              </tr>
            </thead>

            <tbody>

              {orders.map((order) => (
                <tr
                  key={order.id}
                  className="border-t border-gray-100 transition hover:bg-gray-50"
                >

                  <td className="px-6 py-5 font-semibold text-blue-600">
                    {order.id}
                  </td>

                  <td className="px-6 py-5 font-medium text-slate-700">
                    {order.customer}
                  </td>

                  <td className="px-6 py-5 text-gray-500">
                    {order.product}
                  </td>

                  <td className="px-6 py-5 font-semibold text-slate-800">
                    {order.price}
                  </td>

                  <td className="px-6 py-5">
                    <Status status={order.status} />
                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
};


const Summary = ({ name, value, width }) => {
  return (
    <div>

      <div className="mb-2 flex justify-between text-sm">
        <span className="text-gray-400">{name}</span>
        <span>{value}</span>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-slate-800">
        <div
          style={{ width }}
          className="h-full rounded-full bg-blue-500"
        />
      </div>

    </div>
  );
};


const Status = ({ status }) => {

  const style =
    status === "Delivered"
      ? "bg-green-50 text-green-600"
      : status === "Processing"
      ? "bg-blue-50 text-blue-600"
      : "bg-yellow-50 text-yellow-600";

  return (
    <span
      className={`rounded-full px-3 py-1.5 text-xs font-semibold ${style}`}
    >
      {status}
    </span>
  );
};

export default Content;