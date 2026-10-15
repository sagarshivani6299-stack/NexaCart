import { useState } from "react";
import { Link } from "react-router-dom";

import {
  FiShoppingBag,
  FiHeart,
  FiStar,
  FiEye,
} from "react-icons/fi";

import {
  formatPrice,
} from "../../data/products";

import { useAuth } from "../../context/AuthContext";

import LoginRequiredModal from "./LoginRequiredModal";

const ProductCard = ({ product }) => {
  const { user } = useAuth();

  const [showLoginModal, setShowLoginModal] =
    useState(false);

  const addToCart = () => {
    if (!user) {
      setShowLoginModal(true);
      return;
    }

    const key = `nexaCart_${user.email}`;

    const cart = JSON.parse(
      localStorage.getItem(key) || "[]"
    );

    const existing = cart.find(
      (item) => item.id === product.id
    );

    const updatedCart = existing
      ? cart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        )
      : [
          ...cart,
          {
            ...product,
            quantity: 1,
          },
        ];

    localStorage.setItem(
      key,
      JSON.stringify(updatedCart)
    );

    window.dispatchEvent(
      new Event("cartUpdated")
    );
  };

  const addToWishlist = () => {
    if (!user) {
      setShowLoginModal(true);
      return;
    }

    const key = `nexaWishlist_${user.email}`;

    const wishlist = JSON.parse(
      localStorage.getItem(key) || "[]"
    );

    const exists = wishlist.some(
      (item) => item.id === product.id
    );

    if (!exists) {
      localStorage.setItem(
        key,
        JSON.stringify([
          ...wishlist,
          product,
        ])
      );

      window.dispatchEvent(
        new Event("wishlistUpdated")
      );
    }
  };

  return (
    <>
      <div className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-950/30">

        <div className="relative h-64 overflow-hidden bg-slate-800">

          <Link to={`/product/${product.id}`}>
            <img
              src={product.image}
              alt={product.name}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </Link>

          <span className="absolute left-4 top-4 rounded-full bg-blue-600 px-3 py-1 text-xs font-bold text-white">
            SALE
          </span>

          <button
            type="button"
            onClick={addToWishlist}
            className="absolute right-4 top-4 rounded-full bg-white p-3 text-slate-800 shadow-lg transition hover:text-red-500"
          >
            <FiHeart />
          </button>

          <Link
            to={`/product/${product.id}`}
            className="absolute bottom-4 right-4 rounded-full bg-slate-950/80 p-3 text-white opacity-0 backdrop-blur transition group-hover:opacity-100"
          >
            <FiEye />
          </Link>

        </div>

        <div className="p-5">

          <p className="text-xs font-semibold uppercase tracking-wider text-blue-400">
            {product.category}
          </p>

          <Link to={`/product/${product.id}`}>
            <h3 className="mt-2 text-lg font-bold text-white transition hover:text-blue-400">
              {product.name}
            </h3>
          </Link>

          <div className="mt-3 flex items-center gap-2">
            <FiStar className="fill-yellow-400 text-yellow-400" />

            <span className="text-sm text-gray-300">
              {product.rating}
            </span>
          </div>

          <div className="mt-5 flex items-center justify-between">

            <div>
              <p className="text-xl font-bold text-blue-400">
                {formatPrice(product.price)}
              </p>

              <p className="text-sm text-gray-500 line-through">
                {formatPrice(product.oldPrice)}
              </p>
            </div>

            <button
              type="button"
              onClick={addToCart}
              className="rounded-xl bg-blue-600 p-3 text-white transition hover:bg-blue-500"
            >
              <FiShoppingBag size={19} />
            </button>

          </div>

        </div>

      </div>

      <LoginRequiredModal
        open={showLoginModal}
        onClose={() =>
          setShowLoginModal(false)
        }
      />
    </>
  );
};

export default ProductCard;