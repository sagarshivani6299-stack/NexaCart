import {
  useEffect,
  useState,
} from "react";

import { Link } from "react-router-dom";

import {
  FiHeart,
  FiTrash2,
  FiShoppingBag,
} from "react-icons/fi";

import {
  formatPrice,
} from "../data/products";

import { useAuth } from "../context/AuthContext";

const Wishlist = () => {
  const { user } = useAuth();

  const [wishlist, setWishlist] =
    useState([]);

  const wishlistKey =
    `nexaWishlist_${user.email}`;

  const cartKey =
    `nexaCart_${user.email}`;

  useEffect(() => {
    const saved = JSON.parse(
      localStorage.getItem(
        wishlistKey
      ) || "[]"
    );

    setWishlist(saved);
  }, [wishlistKey]);

  const removeItem = (id) => {
    const updated =
      wishlist.filter(
        (item) =>
          item.id !== id
      );

    setWishlist(updated);

    localStorage.setItem(
      wishlistKey,
      JSON.stringify(updated)
    );

    window.dispatchEvent(
      new Event("wishlistUpdated")
    );
  };

  const moveToCart = (product) => {
    const cart = JSON.parse(
      localStorage.getItem(
        cartKey
      ) || "[]"
    );

    const exists = cart.find(
      (item) =>
        item.id === product.id
    );

    const updated = exists
      ? cart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity:
                  item.quantity + 1,
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
      cartKey,
      JSON.stringify(updated)
    );

    window.dispatchEvent(
      new Event("cartUpdated")
    );

    removeItem(product.id);
  };

  return (
    <section className="min-h-screen bg-slate-950 px-6 py-14 text-white">

      <div className="mx-auto max-w-7xl">

        <h1 className="text-4xl font-black">
          My Wishlist
        </h1>

        <p className="mt-3 text-gray-400">
          Products saved by {user.name}.
        </p>

        {wishlist.length === 0 ? (
          <div className="py-24 text-center">

            <FiHeart
              size={65}
              className="mx-auto text-blue-400"
            />

            <h2 className="mt-5 text-2xl font-bold">
              Your wishlist is empty
            </h2>

            <Link
              to="/shop"
              className="mt-7 inline-block rounded-xl bg-blue-600 px-7 py-3 font-bold"
            >
              Explore Products
            </Link>

          </div>
        ) : (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {wishlist.map((product) => (
              <div
                key={product.id}
                className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900"
              >

                <img
                  src={product.image}
                  alt={product.name}
                  className="h-64 w-full object-cover"
                />

                <div className="p-5">

                  <h2 className="text-lg font-bold">
                    {product.name}
                  </h2>

                  <p className="mt-2 font-bold text-blue-400">
                    {formatPrice(
                      product.price
                    )}
                  </p>

                  <div className="mt-5 flex gap-3">

                    <button
                      onClick={() =>
                        moveToCart(product)
                      }
                      className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 font-semibold"
                    >
                      <FiShoppingBag />
                      Add to Cart
                    </button>

                    <button
                      onClick={() =>
                        removeItem(
                          product.id
                        )
                      }
                      className="rounded-xl border border-red-500/30 p-3 text-red-400"
                    >
                      <FiTrash2 />
                    </button>

                  </div>

                </div>

              </div>
            ))}

          </div>
        )}

      </div>

    </section>
  );
};

export default Wishlist;