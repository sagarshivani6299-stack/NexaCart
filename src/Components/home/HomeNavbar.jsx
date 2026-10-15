import { useEffect, useState } from "react";

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
  // CART + WISHLIST COUNT
  // =========================

  const [cartCount, setCartCount] =
    useState(0);

  const [
    wishlistCount,
    setWishlistCount,
  ] = useState(0);

  // =========================
  // UPDATE COUNTS
  // =========================

  useEffect(() => {
    const updateCounts = () => {
      // Customer login nahi hai
      if (
        !user ||
        user.role !== "customer"
      ) {
        setCartCount(0);
        setWishlistCount(0);
        return;
      }

      // User specific keys
      const cartKey =
        `nexaCart_${user.email}`;

      const wishlistKey =
        `nexaWishlist_${user.email}`;

      // Cart data
      const cart =
        JSON.parse(
          localStorage.getItem(
            cartKey
          )
        ) || [];

      // Wishlist data
      const wishlist =
        JSON.parse(
          localStorage.getItem(
            wishlistKey
          )
        ) || [];

      // IMPORTANT:
      // Unique products count
      // quantity count nahi
      setCartCount(cart.length);

      // Wishlist unique products
      setWishlistCount(
        wishlist.length
      );
    };

    // First load par
    updateCounts();

    // ProductCard se cart update
    window.addEventListener(
      "cartUpdated",
      updateCounts
    );

    // ProductCard se wishlist update
    window.addEventListener(
      "wishlistUpdated",
      updateCounts
    );

    return () => {
      window.removeEventListener(
        "cartUpdated",
        updateCounts
      );

      window.removeEventListener(
        "wishlistUpdated",
        updateCounts
      );
    };
  }, [user]);

  // =========================
  // CART CLICK
  // =========================

  const handleCart = () => {
    // Login nahi hai
    if (
      !user ||
      user.role !== "customer"
    ) {
      setLoginModalOpen(true);
      return;
    }

    navigate("/cart");
  };

  // =========================
  // WISHLIST CLICK
  // =========================

  const handleWishlist = () => {
    // Login nahi hai
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
  // LOGOUT
  // =========================

  const handleLogout = () => {
    logout();

    setCartCount(0);
    setWishlistCount(0);

    setMenuOpen(false);

    navigate("/");
  };

  // =========================
  // NAVLINK STYLE
  // =========================

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

          {/* =====================
              LOGO
          ====================== */}

          <Link
            to="/"
            className="text-2xl font-black text-white"
          >
            <span className="text-blue-400">
              Nexa
            </span>
            Cart
          </Link>

          {/* =====================
              DESKTOP NAV
          ====================== */}

          <nav className="hidden items-center gap-8 md:flex">

            <NavLink
              to="/"
              end
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

          {/* =====================
              RIGHT SIDE
          ====================== */}

          <div className="flex items-center gap-3">

            {/* =====================
                WISHLIST
                ALWAYS VISIBLE
            ====================== */}

            <button
              type="button"
              onClick={
                handleWishlist
              }
              className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-gray-300 transition hover:border-red-500 hover:text-red-400"
              title="Wishlist"
            >
              <FiHeart size={20} />

              {/* WISHLIST COUNT */}

              {wishlistCount > 0 && (
                <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-xs font-bold text-white">
                  {wishlistCount}
                </span>
              )}

            </button>

            {/* =====================
                CART
                ALWAYS VISIBLE
            ====================== */}

            <button
              type="button"
              onClick={handleCart}
              className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-gray-300 transition hover:border-blue-500 hover:text-blue-400"
              title="Cart"
            >
              <FiShoppingCart
                size={20}
              />

              {/* CART COUNT */}

              {cartCount > 0 && (
                <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-blue-600 px-1 text-xs font-bold text-white">
                  {cartCount}
                </span>
              )}

            </button>

            {/* =====================
                LOGIN / USER
            ====================== */}

            {!user ||
            user.role !==
              "customer" ? (

              // NOT LOGGED IN

              <Link
                to="/login"
                className="hidden rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-500 sm:block"
              >
                Login
              </Link>

            ) : (

              // LOGGED IN

              <div className="group relative hidden sm:block">

                {/* USER BUTTON */}

                <button
                  type="button"
                  className="flex h-11 items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-4 text-gray-300 transition hover:border-blue-500 hover:text-blue-400"
                >
                  <FiUser />

                  <span className="max-w-[100px] truncate">
                    {user.name}
                  </span>
                </button>

                {/* =====================
                    ACCOUNT DROPDOWN
                ====================== */}

                <div className="invisible absolute right-0 top-full z-50 mt-2 w-52 translate-y-2 rounded-xl border border-slate-700 bg-slate-900 p-2 opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">

                  <Link
                    to="/profile"
                    className="block rounded-lg px-4 py-3 text-sm text-gray-300 transition hover:bg-slate-800 hover:text-blue-400"
                  >
                    My Profile
                  </Link>

                  <Link
                    to="/orders"
                    className="block rounded-lg px-4 py-3 text-sm text-gray-300 transition hover:bg-slate-800 hover:text-blue-400"
                  >
                    My Orders
                  </Link>

                  <button
                    type="button"
                    onClick={
                      handleWishlist
                    }
                    className="block w-full rounded-lg px-4 py-3 text-left text-sm text-gray-300 transition hover:bg-slate-800 hover:text-red-400"
                  >
                    Wishlist
                    {wishlistCount > 0 &&
                      ` (${wishlistCount})`}
                  </button>

                  <button
                    type="button"
                    onClick={
                      handleCart
                    }
                    className="block w-full rounded-lg px-4 py-3 text-left text-sm text-gray-300 transition hover:bg-slate-800 hover:text-blue-400"
                  >
                    Cart
                    {cartCount > 0 &&
                      ` (${cartCount})`}
                  </button>

                  <div className="my-1 border-t border-slate-800" />

                  <button
                    type="button"
                    onClick={
                      handleLogout
                    }
                    className="w-full rounded-lg px-4 py-3 text-left text-sm text-red-400 transition hover:bg-slate-800"
                  >
                    Logout
                  </button>

                </div>

              </div>

            )}

            {/* =====================
                MOBILE BUTTON
            ====================== */}

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

        {/* =====================
            MOBILE MENU
        ====================== */}

        {menuOpen && (

          <div className="border-t border-slate-800 bg-slate-950 px-6 py-5 md:hidden">

            <div className="flex flex-col gap-4">

              <NavLink
                to="/"
                end
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

              {/* =====================
                  LOGIN MOBILE
              ====================== */}

              {!user ||
              user.role !==
                "customer" ? (

                <Link
                  to="/login"
                  onClick={() =>
                    setMenuOpen(false)
                  }
                  className="rounded-xl bg-blue-600 px-5 py-3 text-center font-semibold text-white"
                >
                  Login
                </Link>

              ) : (

                <>
                  {/* USER INFO */}

                  <div className="border-t border-slate-800 pt-4">

                    <p className="text-xs text-gray-500">
                      Signed in as
                    </p>

                    <p className="mt-1 font-semibold text-white">
                      {user.name}
                    </p>

                  </div>

                  {/* PROFILE */}

                  <Link
                    to="/profile"
                    onClick={() =>
                      setMenuOpen(false)
                    }
                    className="text-gray-300 transition hover:text-blue-400"
                  >
                    My Profile
                  </Link>

                  {/* ORDERS */}

                  <Link
                    to="/orders"
                    onClick={() =>
                      setMenuOpen(false)
                    }
                    className="text-gray-300 transition hover:text-blue-400"
                  >
                    My Orders
                  </Link>

                  {/* WISHLIST */}

                  <button
                    type="button"
                    onClick={() => {
                      handleWishlist();
                      setMenuOpen(false);
                    }}
                    className="text-left text-gray-300 transition hover:text-red-400"
                  >
                    Wishlist
                    {wishlistCount > 0 &&
                      ` (${wishlistCount})`}
                  </button>

                  {/* CART */}

                  <button
                    type="button"
                    onClick={() => {
                      handleCart();
                      setMenuOpen(false);
                    }}
                    className="text-left text-gray-300 transition hover:text-blue-400"
                  >
                    Cart
                    {cartCount > 0 &&
                      ` (${cartCount})`}
                  </button>

                  {/* LOGOUT */}

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

      {/* =========================
          LOGIN REQUIRED POPUP
      ========================== */}

      <LoginRequiredModal
        open={
          loginModalOpen
        }
        onClose={() =>
          setLoginModalOpen(false)
        }
      />
    </>
  );
};

export default HomeNavbar;