const ContentDetails = () => {
  const activities = [
    {
      title: "New product added",
      description: "Classic Sneakers added to Men's collection.",
      time: "10 minutes ago",
      icon: "🛍️",
    },
    {
      title: "Order completed",
      description: "Order #NX1024 has been successfully delivered.",
      time: "45 minutes ago",
      icon: "📦",
    },
    {
      title: "New customer registered",
      description: "A new customer created an account on NexaCart.",
      time: "2 hours ago",
      icon: "👤",
    },
    {
      title: "Inventory updated",
      description: "Premium Watch stock updated from 12 to 25 units.",
      time: "4 hours ago",
      icon: "📊",
    },
  ];

  const contentStats = [
    {
      title: "Published",
      value: "248",
      description: "Live products",
      icon: "✓",
    },
    {
      title: "Draft",
      value: "32",
      description: "Waiting for review",
      icon: "✎",
    },
    {
      title: "Categories",
      value: "18",
      description: "Active categories",
      icon: "▦",
    },
    {
      title: "Total Views",
      value: "48.2K",
      description: "This month",
      icon: "◉",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl">

      {/* ================= HEADER ================= */}

      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Content Management
          </p>

          <h1 className="mt-2 text-3xl font-bold text-slate-900">
            Content Details
          </h1>

          <p className="mt-2 max-w-2xl text-gray-500">
            Manage your store content, monitor publishing activity
            and review recent updates from one place.
          </p>
        </div>

        <button
          className="w-fit rounded-xl bg-blue-600 px-5 py-3
                     font-semibold text-white shadow-lg shadow-blue-200
                     transition duration-300 hover:-translate-y-0.5
                     hover:bg-blue-700"
        >
          + Create Content
        </button>

      </div>


      {/* ================= STATS ================= */}

      <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

        {contentStats.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-gray-100 bg-white
                       p-6 shadow-sm transition duration-300
                       hover:-translate-y-1 hover:shadow-lg"
          >

            <div
              className="flex h-12 w-12 items-center justify-center
                         rounded-xl bg-blue-50 text-xl
                         font-bold text-blue-600"
            >
              {item.icon}
            </div>

            <p className="mt-5 text-sm text-gray-500">
              {item.title}
            </p>

            <h2 className="mt-1 text-3xl font-bold text-slate-900">
              {item.value}
            </h2>

            <p className="mt-2 text-xs text-gray-400">
              {item.description}
            </p>

          </div>
        ))}

      </div>


      {/* ================= MAIN SECTION ================= */}

      <div className="mt-7 grid gap-7 xl:grid-cols-3">

        {/* RECENT ACTIVITY */}

        <div
          className="rounded-2xl border border-gray-100
                     bg-white shadow-sm xl:col-span-2"
        >

          <div className="border-b border-gray-100 p-6">

            <h2 className="text-xl font-bold text-slate-900">
              Recent Content Activity
            </h2>

            <p className="mt-1 text-sm text-gray-400">
              Latest changes made to your NexaCart store.
            </p>

          </div>


          <div className="p-6">

            {activities.map((activity, index) => (
              <div
                key={activity.title}
                className={`flex gap-5 py-5 ${
                  index !== activities.length - 1
                    ? "border-b border-gray-100"
                    : ""
                }`}
              >

                <div
                  className="flex h-12 w-12 flex-shrink-0
                             items-center justify-center rounded-xl
                             bg-blue-50 text-xl"
                >
                  {activity.icon}
                </div>

                <div className="flex-1">

                  <div
                    className="flex flex-col justify-between
                               gap-1 sm:flex-row"
                  >

                    <h3 className="font-semibold text-slate-800">
                      {activity.title}
                    </h3>

                    <span className="text-xs text-gray-400">
                      {activity.time}
                    </span>

                  </div>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    {activity.description}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>


        {/* CONTENT HEALTH */}

        <div
          className="rounded-2xl bg-slate-950
                     p-7 text-white shadow-xl"
        >

          <p className="text-sm font-semibold uppercase tracking-wider text-blue-400">
            Content Health
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            Store Quality
          </h2>

          <p className="mt-2 text-sm leading-6 text-gray-400">
            Your content is performing well. Complete the
            remaining tasks to improve your store quality.
          </p>


          {/* SCORE */}

          <div className="my-8 flex justify-center">

            <div
              className="flex h-40 w-40 flex-col
                         items-center justify-center rounded-full
                         border-[12px] border-blue-500
                         bg-slate-900"
            >

              <span className="text-4xl font-bold">
                86%
              </span>

              <span className="mt-1 text-xs text-gray-400">
                Health Score
              </span>

            </div>

          </div>


          <div className="space-y-5">

            <Progress
              title="Product Information"
              value="94%"
              width="94%"
            />

            <Progress
              title="Product Images"
              value="88%"
              width="88%"
            />

            <Progress
              title="SEO Content"
              value="76%"
              width="76%"
            />

            <Progress
              title="Descriptions"
              value="82%"
              width="82%"
            />

          </div>

        </div>

      </div>


      {/* ================= FEATURED CONTENT ================= */}

      <div className="mt-7">

        <div className="mb-5">

          <h2 className="text-2xl font-bold text-slate-900">
            Featured Content
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Recently updated products and collections.
          </p>

        </div>


        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          <ContentCard
            image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80"
            title="Classic Sneakers"
            category="Footwear"
            status="Published"
          />

          <ContentCard
            image="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80"
            title="Premium Watch"
            category="Accessories"
            status="Published"
          />

          <ContentCard
            image="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80"
            title="Urban Backpack"
            category="Bags"
            status="Draft"
          />

        </div>

      </div>

    </div>
  );
};



const Progress = ({ title, value, width }) => {
  return (
    <div>

      <div className="mb-2 flex justify-between text-sm">

        <span className="text-gray-400">
          {title}
        </span>

        <span className="font-semibold">
          {value}
        </span>

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



const ContentCard = ({
  image,
  title,
  category,
  status,
}) => {

  return (
    <div
      className="group overflow-hidden rounded-2xl
                 border border-gray-100 bg-white
                 shadow-sm transition duration-300
                 hover:-translate-y-1 hover:shadow-xl"
    >

      <div className="h-52 overflow-hidden">

        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover
                     transition duration-500
                     group-hover:scale-105"
        />

      </div>

      <div className="p-5">

        <div className="flex items-start justify-between">

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
              {category}
            </p>

            <h3 className="mt-2 text-lg font-bold text-slate-900">
              {title}
            </h3>
          </div>

          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${
              status === "Published"
                ? "bg-green-50 text-green-600"
                : "bg-yellow-50 text-yellow-600"
            }`}
          >
            {status}
          </span>

        </div>

        <div className="mt-5 flex gap-3">

          <button
            className="flex-1 rounded-lg bg-blue-600
                       px-4 py-2 text-sm font-semibold
                       text-white transition hover:bg-blue-700"
          >
            Edit
          </button>

          <button
            className="rounded-lg border border-gray-200
                       px-4 py-2 text-sm font-semibold
                       text-gray-600 transition
                       hover:border-blue-500 hover:text-blue-600"
          >
            View
          </button>

        </div>

      </div>

    </div>
  );
};

export default ContentDetails;