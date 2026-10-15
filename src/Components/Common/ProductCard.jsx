import {
  useEffect,
  useState,
} from "react";

import {
  Link,
} from "react-router-dom";

import {
  FiHeart,
  FiShoppingCart,
  FiStar,
  FiEye,
} from "react-icons/fi";

import {
  useAuth,
} from "../../context/AuthContext";

import LoginRequiredModal from "./LoginRequiredModal";

import {
  formatPrice,
} from "../../data/products";

const ProductCard = ({ product }) => {
  const { user } = useAuth();

  // =========================
  // STATES
  // =========================

  const [
    loginModalOpen,
    setLoginModalOpen,
  ] = useState(false);

  const [
    isWishlisted,
    setIsWishlisted,
  ] = useState(false);

  // =========================
  // CHECK WISHLIST
  // =========================

  useEffect(() => {
    // Login nahi hai
    if (
      !user ||
      user.role !== "customer"
    ) {
      setIsWishlisted(false);
      return;
    }

    const wishlistKey =
      `nexaWishlist_${user.email}`;

    const wishlist =
      JSON.parse(
        localStorage.getItem(
          wishlistKey
        )
      ) || [];

    const exists =
      wishlist.some(
        (item) =>
          item.id === product.id
      );

    setIsWishlisted(exists);

  }, [
    user,
    product.id,
  ]);

  // =========================
  // ADD TO CART
  // =========================

  const handleAddToCart = () => {
    // User login nahi hai
    if (
      !user ||
      user.role !== "customer"
    ) {
      setLoginModalOpen(true);
      return;
    }

    const cartKey =
      `nexaCart_${user.email}`;

    const cart =
      JSON.parse(
        localStorage.getItem(
          cartKey
        )
      ) || [];

    // Check same product
    const existingProduct =
      cart.find(
        (item) =>
          item.id === product.id
      );

    let updatedCart;

    if (existingProduct) {
      // Same product already hai
      // To quantity increase karo

      updatedCart =
        cart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity:
                  (item.quantity ||
                    1) + 1,
              }
            : item
        );
    } else {
      // New product
      // quantity 1 ke saath add

      updatedCart = [
        ...cart,
        {
          ...product,
          quantity: 1,
        },
      ];
    }

    // Save cart
    localStorage.setItem(
      cartKey,
      JSON.stringify(
        updatedCart
      )
    );

    // Navbar ko update batao
    window.dispatchEvent(
      new Event(
        "cartUpdated"
      )
    );
  };

  // =========================
  // ADD / REMOVE WISHLIST
  // =========================

  const handleWishlist = () => {
    // User login nahi hai
    if (
      !user ||
      user.role !== "customer"
    ) {
      setLoginModalOpen(true);
      return;
    }

    const wishlistKey =
      `nexaWishlist_${user.email}`;

    const wishlist =
      JSON.parse(
        localStorage.getItem(
          wishlistKey
        )
      ) || [];

    const alreadyExists =
      wishlist.some(
        (item) =>
          item.id === product.id
      );

    let updatedWishlist;

    // =========================
    // ALREADY WISHLISTED
    // REMOVE
    // =========================

    if (alreadyExists) {
      updatedWishlist =
        wishlist.filter(
          (item) =>
            item.id !== product.id
        );

      setIsWishlisted(false);
    }

    // =========================
    // NOT WISHLISTED
    // ADD
    // =========================

    else {
      updatedWishlist = [
        ...wishlist,
        product,
      ];

      setIsWishlisted(true);
    }

    // Save Wishlist
    localStorage.setItem(
      wishlistKey,
      JSON.stringify(
        updatedWishlist
      )
    );

    // Navbar wishlist count update
    window.dispatchEvent(
      new Event(
        "wishlistUpdated"
      )
    );
  };

  // =========================
  // DISCOUNT
  // =========================

  const discount =
    product.oldPrice &&
    product.price
      ? Math.round(
          ((product.oldPrice -
            product.price) /
            product.oldPrice) *
            100
        )
      : 0;

  return (
    <>
      <article className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 transition duration-300 hover:-translate-y-2 hover:border-slate-700 hover:shadow-2xl hover:shadow-blue-950/30">

        {/* =========================
            IMAGE AREA
        ========================== */}

        <div className="relative overflow-hidden bg-slate-800">

          <Link
            to={`/product/${product.id}`}
          >
            <img
              src={product.image}
              alt={product.name}
              loading="lazy"
              className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
            />
          </Link>

          {/* IMAGE OVERLAY */}

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />

          {/* =========================
              DISCOUNT BADGE
          ========================== */}

          {discount > 0 && (
            <span className="absolute left-4 top-4 rounded-full bg-blue-600 px-3 py-1.5 text-xs font-bold text-white shadow-lg">
              {discount}% OFF
            </span>
          )}

          {/* =========================
              WISHLIST BUTTON
          ========================== */}

          <button
            type="button"
            onClick={
              handleWishlist
            }
            className={`absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border backdrop-blur-md transition duration-300 ${
              isWishlisted
                ? "border-red-500 bg-red-500 text-white"
                : "border-white/20 bg-slate-950/70 text-white hover:border-red-500 hover:bg-red-500 hover:text-white"
            }`}
            title={
              isWishlisted
                ? "Remove from Wishlist"
                : "Add to Wishlist"
            }
          >
            <FiHeart
              size={20}
              className={
                isWishlisted
                  ? "fill-current"
                  : ""
              }
            />
          </button>

          {/* =========================
              QUICK VIEW
          ========================== */}

          <Link
            to={`/product/${product.id}`}
            className="absolute bottom-4 right-4 flex h-11 w-11 translate-y-5 items-center justify-center rounded-full border border-white/20 bg-slate-950/80 text-white opacity-0 backdrop-blur-md transition duration-300 hover:bg-blue-600 group-hover:translate-y-0 group-hover:opacity-100"
            title="View Product"
          >
            <FiEye size={19} />
          </Link>

        </div>

        {/* =========================
            PRODUCT INFORMATION
        ========================== */}

        <div className="p-5">

          {/* CATEGORY */}

          <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-400">
            {product.category}
          </p>

          {/* PRODUCT NAME */}

          <Link
            to={`/product/${product.id}`}
          >
            <h3 className="mt-2 line-clamp-1 text-lg font-bold text-white transition hover:text-blue-400">
              {product.name}
            </h3>
          </Link>

          {/* =========================
              RATING
          ========================== */}

          <div className="mt-3 flex items-center gap-2">

            <div className="flex items-center gap-1 text-yellow-400">
              <FiStar
                className="fill-current"
              />

              <span className="text-sm font-bold">
                {product.rating}
              </span>
            </div>

            <span className="text-xs text-gray-600">
              |
            </span>

            <span className="text-xs text-gray-500">
              {product.stock} in stock
            </span>

          </div>

          {/* =========================
              PRICE
          ========================== */}

          <div className="mt-5 flex items-end gap-3">

            <span className="text-2xl font-black text-white">
              {formatPrice(
                product.price
              )}
            </span>

            {product.oldPrice && (
              <span className="pb-1 text-sm text-gray-500 line-through">
                {formatPrice(
                  product.oldPrice
                )}
              </span>
            )}

          </div>

          {/* =========================
              ADD TO CART
          ========================== */}

          <button
            type="button"
            onClick={
              handleAddToCart
            }
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 font-bold text-white transition duration-300 hover:bg-blue-500 active:scale-[0.98]"
          >
            <FiShoppingCart
              size={19}
            />

            Add to Cart
          </button>

        </div>

      </article>

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

export default ProductCard;