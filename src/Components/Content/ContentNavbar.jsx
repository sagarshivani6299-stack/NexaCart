import { Link } from "react-router-dom";

const ContentNavbar = () => {
  return (
    <header className="sticky top-0 z-40 flex h-20 items-center justify-between border-b border-gray-200 bg-white px-7">

      <div>
        <p className="text-sm text-gray-400">Workspace</p>
        <h2 className="text-xl font-bold text-slate-900">
          NexaCart Admin
        </h2>
      </div>

      <div className="flex items-center gap-5">

        <div className="hidden lg:block">
          <input
            type="text"
            placeholder="Search anything..."
            className="w-64 rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5
                       outline-none transition focus:border-blue-500 focus:ring-2
                       focus:ring-blue-100"
          />
        </div>

        <button className="relative rounded-xl bg-gray-100 p-3 hover:bg-gray-200">
          🔔
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
        </button>

        <Link
          to="/"
          className="hidden rounded-xl border border-gray-200 px-4 py-2.5
                     font-medium text-gray-600 transition hover:border-blue-500
                     hover:text-blue-600 md:block"
        >
          View Website
        </Link>

        <div className="flex items-center gap-3 border-l border-gray-200 pl-5">

          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 font-bold text-white">
            S
          </div>

          <div className="hidden md:block">
            <p className="font-semibold text-slate-900">
              Shivani
            </p>
            <p className="text-xs text-gray-400">
              Administrator
            </p>
          </div>

        </div>
      </div>
    </header>
  );
};

export default ContentNavbar;