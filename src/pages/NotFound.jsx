import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-6 text-center text-white">

      <h1 className="text-8xl font-black text-blue-500">
        404
      </h1>

      <h2 className="mt-6 text-3xl font-bold">
        Oops! Page Not Found
      </h2>

      <p className="mt-4 text-gray-400">
        The page you're looking for doesn't exist.
      </p>

      <Link
        to="/"
        className="mt-8 rounded-xl bg-blue-600 px-7 py-3 font-semibold hover:bg-blue-500"
      >
        Back To Home
      </Link>
    </div>
  );
};

export default NotFound;