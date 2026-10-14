import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiTrash2, FiShoppingBag } from "react-icons/fi";
import { formatPrice } from "../data/products";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("nexaCart") || "[]"));
  }, []);

  const updateCart = (updated) => {
    setCart(updated);
    localStorage.setItem("nexaCart", JSON.stringify(updated));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const removeItem = (id) => {
    updateCart(cart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, change) => {
    updateCart(
      cart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(1, item.quantity + change),
            }
          : item
      )
    );
  };

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-slate-950 px-6 py-20 text-white">

      <div className="mx-auto max-w-7xl">

        <h1 className="text-4xl font-black">
          Your <span className="text-blue-400">Shopping Cart</span>
        </h1>

        <p className="mt-4 text-gray-400">
          Review the products you've selected.
        </p>

        {!cart.length ? (
          <div className="mt-16 rounded-3xl border border-slate-800 bg-slate-900 p-16 text-center">

            <FiShoppingBag className="mx-auto text-6xl text-blue-400" />

            <h2 className="mt-6 text-2xl font-bold">
              Your Cart Is Empty
            </h2>

            <Link
              to="/shop"
              className="mt-7 inline-block rounded-xl bg-blue-600 px-7 py-3 font-semibold hover:bg-blue-500"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="mt-12 grid gap-8 lg:grid-cols-3">

            <div className="space-y-5 lg:col-span-2">

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
                    <h3 className="text-lg font-bold">{item.name}</h3>

                    <p className="mt-2 text-blue-400">
                      {formatPrice(item.price)}
                    </p>

                    <div className="mt-4 flex items-center gap-4">

                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="rounded-lg bg-slate-800 px-3 py-1"
                      >
                        -
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="rounded-lg bg-slate-800 px-3 py-1"
                      >
                        +
                      </button>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="ml-auto text-red-400"
                      >
                        <FiTrash2 />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="h-fit rounded-2xl border border-slate-800 bg-slate-900 p-7">

              <h2 className="text-2xl font-bold">Order Summary</h2>

              <div className="mt-7 flex justify-between text-gray-400">
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>

              <div className="mt-5 flex justify-between text-gray-400">
                <span>Shipping</span>
                <span>Free</span>
              </div>

              <div className="mt-7 flex justify-between border-t border-slate-700 pt-6 text-xl font-bold">
                <span>Total</span>
                <span className="text-blue-400">
                  {formatPrice(subtotal)}
                </span>
              </div>

              <button
                onClick={() =>
                  alert("Checkout will be connected to the backend later.")
                }
                className="mt-8 w-full rounded-xl bg-blue-600 py-4 font-semibold hover:bg-blue-500"
              >
                Proceed To Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;