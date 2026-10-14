import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
} from "recharts";

const revenueData = [
  { month: "Jan", revenue: 25000, orders: 120 },
  { month: "Feb", revenue: 38000, orders: 180 },
  { month: "Mar", revenue: 32000, orders: 150 },
  { month: "Apr", revenue: 52000, orders: 240 },
  { month: "May", revenue: 48000, orders: 220 },
  { month: "Jun", revenue: 68000, orders: 310 },
  { month: "Jul", revenue: 75000, orders: 360 },
];

const Analytics = () => {
  return (
    <div className="mx-auto max-w-7xl">

      <p className="font-semibold text-blue-600">
        BUSINESS INSIGHTS
      </p>

      <h1 className="mt-2 text-3xl font-black text-slate-900">
        Analytics Overview
      </h1>

      <p className="mt-2 text-gray-500">
        Understand your store performance through data.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">

        {[
          ["Total Revenue", "₹4,28,500", "+18.2%"],
          ["Total Orders", "1,248", "+12.5%"],
          ["Conversion Rate", "8.4%", "+3.8%"],
        ].map(([title, value, change]) => (
          <div
            key={title}
            className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm"
          >
            <p className="text-gray-500">{title}</p>

            <h2 className="mt-4 text-3xl font-black text-slate-900">
              {value}
            </h2>

            <p className="mt-3 text-sm font-semibold text-green-600">
              ↑ {change}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-7 xl:grid-cols-2">

        {/* REVENUE */}
        <div className="rounded-2xl bg-white p-7 shadow-sm">

          <h2 className="text-xl font-bold text-slate-900">
            Revenue Growth
          </h2>

          <p className="mt-2 text-sm text-gray-400">
            Monthly revenue overview
          </p>

          <div className="mt-8 h-80">

            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData}>

                <defs>
                  <linearGradient
                    id="revenueGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="5%"
                      stopColor="#2563eb"
                      stopOpacity={0.35}
                    />

                    <stop
                      offset="95%"
                      stopColor="#2563eb"
                      stopOpacity={0}
                    />
                  </linearGradient>
                </defs>

                <CartesianGrid strokeDasharray="3 3" />

                <XAxis dataKey="month" />

                <YAxis />

                <Tooltip />

                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="#2563eb"
                  strokeWidth={3}
                  fill="url(#revenueGradient)"
                />

              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* ORDERS */}
        <div className="rounded-2xl bg-white p-7 shadow-sm">

          <h2 className="text-xl font-bold text-slate-900">
            Order Performance
          </h2>

          <p className="mt-2 text-sm text-gray-400">
            Monthly orders overview
          </p>

          <div className="mt-8 h-80">

            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueData}>

                <CartesianGrid strokeDasharray="3 3" />

                <XAxis dataKey="month" />

                <YAxis />

                <Tooltip />

                <Bar
                  dataKey="orders"
                  fill="#2563eb"
                  radius={[8, 8, 0, 0]}
                />

              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="mt-7 rounded-2xl bg-slate-950 p-8 text-white">

        <p className="text-blue-400">STORE PERFORMANCE</p>

        <h2 className="mt-3 text-2xl font-bold">
          Your Store Is Growing!
        </h2>

        <p className="mt-4 max-w-2xl leading-7 text-gray-400">
          This dashboard demonstrates how visual analytics can
          help store administrators understand revenue,
          customer activity and order trends.
        </p>

        <p className="mt-4 text-xs text-gray-500">
          All chart values are sample data.
        </p>
      </div>
    </div>
  );
};

export default Analytics;