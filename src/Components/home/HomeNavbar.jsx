import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import {
  FiShoppingBag,
  FiMenu,
  FiX,
  FiUser,
} from "react-icons/fi";

const HomeNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const updateCartCount = () => {
    const cart = JSON.parse(
      localStorage.getItem("nexaCart") || "[]"
    );

    const count = cart.reduce(
      (total, item) => total + item.quantity,
      0
    );

    setCartCount(count);
  };

  useEffect(() => {
    updateCartCount();

    window.addEventListener(
      "cartUpdated",
      updateCartCount
    );

    return () => {
      window.removeEventListener(
        "cartUpdated",
        updateCartCount
      );
    };
  }, []);

  const navStyle = ({ isActive }) =>
    `relative font-medium transition duration-300 ${
      isActive
        ? "text-blue-400"
        : "text-gray-300 hover:text-blue-400"
    }`;

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/95 backdrop-blur-xl">

      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* LOGO */}

        <Link
          to="/"
          onClick={closeMenu}
          className="flex items-center gap-2"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-400 text-white shadow-lg shadow-blue-600/20">
            <FiShoppingBag size={20} />
          </div>

          <h1 className="text-2xl font-black tracking-wide">
            <span className="text-blue-400">
              Nexa
            </span>

            <span className="text-white">
              Cart
            </span>
          </h1>
        </Link>


        {/* DESKTOP MENU */}

        <div className="hidden items-center gap-8 lg:flex">

          <NavLink
            to="/"
            className={navStyle}
          >
            Home
          </NavLink>

          <NavLink
            to="/shop"
            className={navStyle}
          >
            Shop
          </NavLink>

          <NavLink
            to="/about"
            className={navStyle}
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={navStyle}
          >
            Contact
          </NavLink>

          <NavLink
            to="/content"
            className={navStyle}
          >
            Dashboard
          </NavLink>

        </div>


        {/* RIGHT SIDE */}

        <div className="flex items-center gap-3">

          {/* CART */}

          <Link
            to="/cart"
            className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 bg-slate-900 text-gray-300 transition hover:border-blue-500 hover:text-blue-400"
          >
            <FiShoppingBag size={19} />

            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-blue-600 px-1 text-[10px] font-bold text-white">
                {cartCount}
              </span>
            )}
          </Link>


          {/* LOGIN */}

          <Link
            to="/login"
            className="hidden items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 font-semibold text-white shadow-lg shadow-blue-600/20 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-500 sm:flex"
          >
            <FiUser />
            Login
          </Link>


          {/* MOBILE BUTTON */}

          <button
            type="button"
            aria-label="Toggle navigation menu"
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 text-white lg:hidden"
          >
            {menuOpen ? (
              <FiX size={22} />
            ) : (
              <FiMenu size={22} />
            )}
          </button>

        </div>
      </nav>


      {/* MOBILE MENU */}

      {menuOpen && (
        <div className="border-t border-slate-800 bg-slate-950 px-6 py-6 lg:hidden">

          <div className="flex flex-col gap-5">

            <NavLink
              to="/"
              onClick={closeMenu}
              className={navStyle}
            >
              Home
            </NavLink>

            <NavLink
              to="/shop"
              onClick={closeMenu}
              className={navStyle}
            >
              Shop
            </NavLink>

            <NavLink
              to="/about"
              onClick={closeMenu}
              className={navStyle}
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              onClick={closeMenu}
              className={navStyle}
            >
              Contact
            </NavLink>

            <NavLink
              to="/content"
              onClick={closeMenu}
              className={navStyle}
            >
              Dashboard
            </NavLink>

            <Link
              to="/login"
              onClick={closeMenu}
              className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white sm:hidden"
            >
              <FiUser />
              Login
            </Link>

          </div>
        </div>
      )}

    </header>
  );
};

export default HomeNavbar;