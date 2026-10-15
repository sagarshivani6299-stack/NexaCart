import { useState } from "react";
import {
  NavLink,
  Link,
  useNavigate,
} from "react-router-dom";

import {
  FiShoppingCart,
  FiHeart,
  FiUser,
  FiMenu,
  FiX,
} from "react-icons/fi";

import { useAuth } from "../../context/AuthContext";
import LoginRequiredModal from "../Common/LoginRequiredModal";

const HomeNavbar = () => {
  const { user, logout } = useAuth();

  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] =
    useState(false);

  const [
    loginModalOpen,
    setLoginModalOpen,
  ] = useState(false);

  // =========================
  // WISHLIST CLICK
  // =========================

  const handleWishlist = () => {
    if (
      !user ||
      user.role !== "customer"
    ) {
      setLoginModalOpen(true);
      return;
    }

    navigate("/wishlist");
  };

  // =========================
  // CART CLICK
  // =========================

  const handleCart = () => {
    if (
      !user ||
      user.role !== "customer"
    ) {
      setLoginModalOpen(true);
      return;
    }

    navigate("/cart");
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const navClass = ({
    isActive,
  }) =>
    `transition ${
      isActive
        ? "text-blue-400"
        : "text-gray-300 hover:text-blue-400"
    }`;

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/95 backdrop-blur-xl">

        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

          {/* LOGO */}

          <Link
            to="/"
            className="text-2xl font-black text-white"
          >
            <span className="text-blue-400">
              Nexa
            </span>
            Cart
          </Link>

          {/* DESKTOP NAVIGATION */}

          <nav className="hidden items-center gap-8 md:flex">

            <NavLink
              to="/"
              className={navClass}
            >
              Home
            </NavLink>

            <NavLink
              to="/shop"
              className={navClass}
            >
              Shop
            </NavLink>

            <NavLink
              to="/about"
              className={navClass}
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              className={navClass}
            >
              Contact
            </NavLink>

          </nav>

          {/* RIGHT SIDE */}

          <div className="flex items-center gap-3">

            {/* ======================
                WISHLIST
                ALWAYS VISIBLE
            ======================= */}

            <button
              type="button"
              onClick={
                handleWishlist
              }
              className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-gray-300 transition hover:border-pink-500 hover:text-pink-400"
              title="Wishlist"
            >
              <FiHeart size={20} />
            </button>

            {/* ======================
                CART
                ALWAYS VISIBLE
            ======================= */}

            <button
              type="button"
              onClick={handleCart}
              className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-gray-300 transition hover:border-blue-500 hover:text-blue-400"
              title="Cart"
            >
              <FiShoppingCart
                size={20}
              />
            </button>

            {/* ======================
                LOGIN / ACCOUNT
            ======================= */}

            {!user ||
            user.role !==
              "customer" ? (

              <Link
                to="/login"
                className="hidden rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-500 sm:block"
              >
                Login
              </Link>

            ) : (

              <div className="group relative hidden sm:block">

                <button
                  type="button"
                  className="flex h-11 items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-4 text-gray-300 transition hover:border-blue-500"
                >
                  <FiUser />

                  {user.name}
                </button>

                {/* DROPDOWN */}

                <div className="invisible absolute right-0 top-full z-50 mt-2 w-52 translate-y-2 rounded-xl border border-slate-700 bg-slate-900 p-2 opacity-0 shadow-2xl transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">

                  <Link
                    to="/profile"
                    className="block rounded-lg px-4 py-3 text-sm text-gray-300 hover:bg-slate-800 hover:text-blue-400"
                  >
                    My Profile
                  </Link>

                  <Link
                    to="/orders"
                    className="block rounded-lg px-4 py-3 text-sm text-gray-300 hover:bg-slate-800 hover:text-blue-400"
                  >
                    My Orders
                  </Link>

                  <button
                    type="button"
                    onClick={
                      handleLogout
                    }
                    className="w-full rounded-lg px-4 py-3 text-left text-sm text-red-400 hover:bg-slate-800"
                  >
                    Logout
                  </button>

                </div>

              </div>

            )}

            {/* MOBILE MENU */}

            <button
              type="button"
              onClick={() =>
                setMenuOpen(
                  !menuOpen
                )
              }
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800 text-white md:hidden"
            >
              {menuOpen ? (
                <FiX size={22} />
              ) : (
                <FiMenu size={22} />
              )}
            </button>

          </div>

        </div>

        {/* MOBILE MENU */}

        {menuOpen && (

          <div className="border-t border-slate-800 bg-slate-950 px-6 py-5 md:hidden">

            <div className="flex flex-col gap-4">

              <NavLink
                to="/"
                onClick={() =>
                  setMenuOpen(false)
                }
                className={navClass}
              >
                Home
              </NavLink>

              <NavLink
                to="/shop"
                onClick={() =>
                  setMenuOpen(false)
                }
                className={navClass}
              >
                Shop
              </NavLink>

              <NavLink
                to="/about"
                onClick={() =>
                  setMenuOpen(false)
                }
                className={navClass}
              >
                About
              </NavLink>

              <NavLink
                to="/contact"
                onClick={() =>
                  setMenuOpen(false)
                }
                className={navClass}
              >
                Contact
              </NavLink>

              {!user ||
              user.role !==
                "customer" ? (

                <Link
                  to="/login"
                  onClick={() =>
                    setMenuOpen(false)
                  }
                  className="rounded-xl bg-blue-600 px-5 py-3 text-center font-semibold"
                >
                  Login
                </Link>

              ) : (

                <>
                  <Link
                    to="/profile"
                    onClick={() =>
                      setMenuOpen(false)
                    }
                    className="text-gray-300"
                  >
                    My Profile
                  </Link>

                  <Link
                    to="/orders"
                    onClick={() =>
                      setMenuOpen(false)
                    }
                    className="text-gray-300"
                  >
                    My Orders
                  </Link>

                  <button
                    type="button"
                    onClick={
                      handleLogout
                    }
                    className="text-left text-red-400"
                  >
                    Logout
                  </button>
                </>

              )}

            </div>

          </div>

        )}

      </header>

      {/* LOGIN REQUIRED POPUP */}

      <LoginRequiredModal
        open={loginModalOpen}
        onClose={() =>
          setLoginModalOpen(false)
        }
      />
    </>
  );
};

export default HomeNavbar;