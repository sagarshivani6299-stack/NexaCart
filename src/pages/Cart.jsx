import {
  useEffect,
  useState,
} from "react";

import { Link } from "react-router-dom";

import {
  FiMinus,
  FiPlus,
  FiTrash2,
  FiShoppingBag,
} from "react-icons/fi";

import {
  formatPrice,
} from "../data/products";

import { useAuth } from "../context/AuthContext";

const Cart = () => {
  const { user } = useAuth();

  const [cart, setCart] =
    useState([]);

  const key =
    `nexaCart_${user.email}`;

  const saveCart = (updatedCart) => {
    setCart(updatedCart);

    localStorage.setItem(
      key,
      JSON.stringify(updatedCart)
    );

    window.dispatchEvent(
      new Event("cartUpdated")
    );
  };

  useEffect(() => {
    const savedCart = JSON.parse(
      localStorage.getItem(key) || "[]"
    );

    setCart(savedCart);
  }, [key]);

  const increase = (id) => {
    saveCart(
      cart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                item.quantity + 1,
            }
          : item
      )
    );
  };

  const decrease = (id) => {
    saveCart(
      cart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity:
                  item.quantity - 1,
              }
            : item
        )
        .filter(
          (item) =>
            item.quantity > 0
        )
    );
  };

  const remove = (id) => {
    saveCart(
      cart.filter(
        (item) =>
          item.id !== id
      )
    );
  };

  const subtotal = cart.reduce(
    (sum, item) =>
      sum +
      item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <section className="min-h-[70vh] bg-slate-950 px-6 py-20 text-white">

        <div className="mx-auto max-w-xl text-center">

          <FiShoppingBag
            size={70}
            className="mx-auto text-blue-400"
          />

          <h1 className="mt-6 text-4xl font-black">
            Your cart is empty
          </h1>

          <p className="mt-4 text-gray-400">
            Start exploring our products.
          </p>

          <Link
            to="/shop"
            className="mt-8 inline-block rounded-xl bg-blue-600 px-7 py-3 font-bold hover:bg-blue-500"
          >
            Continue Shopping
          </Link>

        </div>

      </section>
    );
  }

  return (
    <section className="min-h-screen bg-slate-950 px-6 py-14 text-white">

      <div className="mx-auto max-w-7xl">

        <h1 className="text-4xl font-black">
          Shopping Cart
        </h1>

        <p className="mt-2 text-gray-400">
          {user.name}, review your selected products.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_360px]">

          <div className="space-y-4">

            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-5 rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:flex-row sm:items-center"
              >

                <img
                  src={item.image}
                  alt={item.name}
                  className="h-28 w-28 rounded-xl object-cover"
                />

                <div className="flex-1">

                  <p className="text-sm text-blue-400">
                    {item.category}
                  </p>

                  <h2 className="mt-1 text-lg font-bold">
                    {item.name}
                  </h2>

                  <p className="mt-2 font-bold text-blue-400">
                    {formatPrice(item.price)}
                  </p>

                </div>

                <div className="flex items-center gap-3">

                  <button
                    onClick={() =>
                      decrease(item.id)
                    }
                    className="rounded-lg border border-slate-700 p-2"
                  >
                    <FiMinus />
                  </button>

                  <span className="w-7 text-center">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() =>
                      increase(item.id)
                    }
                    className="rounded-lg border border-slate-700 p-2"
                  >
                    <FiPlus />
                  </button>

                </div>

                <button
                  onClick={() =>
                    remove(item.id)
                  }
                  className="rounded-lg p-3 text-red-400 hover:bg-red-500/10"
                >
                  <FiTrash2 />
                </button>

              </div>
            ))}

          </div>

          <aside className="h-fit rounded-2xl border border-slate-800 bg-slate-900 p-6">

            <h2 className="text-xl font-bold">
              Order Summary
            </h2>

            <div className="mt-6 flex justify-between text-gray-400">
              <span>Subtotal</span>
              <span>
                {formatPrice(subtotal)}
              </span>
            </div>

            <div className="mt-4 flex justify-between text-gray-400">
              <span>Delivery</span>
              <span className="text-green-400">
                Free
              </span>
            </div>

            <div className="my-6 border-t border-slate-700" />

            <div className="flex justify-between text-xl font-black">
              <span>Total</span>

              <span className="text-blue-400">
                {formatPrice(subtotal)}
              </span>
            </div>

            <button
              type="button"
              onClick={() =>
                alert(
                  "Checkout will be added next."
                )
              }
              className="mt-7 w-full rounded-xl bg-blue-600 py-4 font-bold hover:bg-blue-500"
            >
              Proceed To Checkout
            </button>

          </aside>

        </div>

      </div>

    </section>
  );
};

export default Cart;