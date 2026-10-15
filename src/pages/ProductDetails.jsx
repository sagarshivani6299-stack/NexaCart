import {
  useState,
} from "react";

import {
  Link,
  useParams,
} from "react-router-dom";

import {
  FiArrowLeft,
  FiHeart,
  FiShoppingBag,
  FiStar,
} from "react-icons/fi";

import {
  products,
  formatPrice,
} from "../data/products";

import { useAuth } from "../context/AuthContext";

import LoginRequiredModal from "../Components/Common/LoginRequiredModal";

const ProductDetails = () => {
  const { id } = useParams();

  const { user } = useAuth();

  const [showModal, setShowModal] =
    useState(false);

  const [quantity, setQuantity] =
    useState(1);

  const product = products.find(
    (item) =>
      item.id === Number(id)
  );

  if (!product) {
    return (
      <div className="min-h-screen bg-slate-950 px-6 py-20 text-center text-white">
        Product not found.
      </div>
    );
  }

  const addToCart = () => {
    if (!user) {
      setShowModal(true);
      return;
    }

    const key =
      `nexaCart_${user.email}`;

    const cart = JSON.parse(
      localStorage.getItem(key) || "[]"
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
                  item.quantity +
                  quantity,
              }
            : item
        )
      : [
          ...cart,
          {
            ...product,
            quantity,
          },
        ];

    localStorage.setItem(
      key,
      JSON.stringify(updated)
    );

    window.dispatchEvent(
      new Event("cartUpdated")
    );
  };

  const addWishlist = () => {
    if (!user) {
      setShowModal(true);
      return;
    }

    const key =
      `nexaWishlist_${user.email}`;

    const wishlist = JSON.parse(
      localStorage.getItem(key) || "[]"
    );

    if (
      !wishlist.some(
        (item) =>
          item.id === product.id
      )
    ) {
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
      <section className="min-h-screen bg-slate-950 px-6 py-14 text-white">

        <div className="mx-auto max-w-7xl">

          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-blue-400"
          >
            <FiArrowLeft />
            Back to Shop
          </Link>

          <div className="mt-8 grid gap-12 lg:grid-cols-2">

            <div className="overflow-hidden rounded-3xl bg-slate-900">
              <img
                src={product.image}
                alt={product.name}
                className="h-[550px] w-full object-cover"
              />
            </div>

            <div className="flex flex-col justify-center">

              <p className="font-semibold uppercase tracking-wider text-blue-400">
                {product.category}
              </p>

              <h1 className="mt-4 text-4xl font-black md:text-5xl">
                {product.name}
              </h1>

              <div className="mt-5 flex items-center gap-2">

                <FiStar className="fill-yellow-400 text-yellow-400" />

                <span>
                  {product.rating}
                </span>

              </div>

              <div className="mt-6 flex items-center gap-4">

                <span className="text-3xl font-black text-blue-400">
                  {formatPrice(
                    product.price
                  )}
                </span>

                <span className="text-xl text-gray-500 line-through">
                  {formatPrice(
                    product.oldPrice
                  )}
                </span>

              </div>

              <p className="mt-6 leading-7 text-gray-400">
                Premium quality product designed
                for comfort, style and everyday
                use.
              </p>

              <div className="mt-8">

                <p className="mb-3 font-semibold">
                  Quantity
                </p>

                <div className="flex w-fit items-center overflow-hidden rounded-xl border border-slate-700">

                  <button
                    onClick={() =>
                      setQuantity(
                        Math.max(
                          1,
                          quantity - 1
                        )
                      )
                    }
                    className="px-5 py-3"
                  >
                    -
                  </button>

                  <span className="px-5">
                    {quantity}
                  </span>

                  <button
                    onClick={() =>
                      setQuantity(
                        quantity + 1
                      )
                    }
                    className="px-5 py-3"
                  >
                    +
                  </button>

                </div>

              </div>

              <div className="mt-8 flex gap-4">

                <button
                  onClick={addToCart}
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 py-4 font-bold hover:bg-blue-500"
                >
                  <FiShoppingBag />
                  Add To Cart
                </button>

                <button
                  onClick={addWishlist}
                  className="rounded-xl border border-slate-700 px-5 text-gray-300 hover:border-red-400 hover:text-red-400"
                >
                  <FiHeart size={22} />
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>

      <LoginRequiredModal
        open={showModal}
        onClose={() =>
          setShowModal(false)
        }
      />
    </>
  );
};

export default ProductDetails;