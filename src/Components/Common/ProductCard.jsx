import { Link } from "react-router-dom";
import { FiShoppingBag, FiHeart, FiStar } from "react-icons/fi";
import { formatPrice } from "../../data/products";

const ProductCard = ({ product }) => {
  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("nexaCart") || "[]");

    const existing = cart.find((item) => item.id === product.id);

    const updated = existing
      ? cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      : [...cart, { ...product, quantity: 1 }];

    localStorage.setItem("nexaCart", JSON.stringify(updated));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-950/30">

      <div className="relative h-64 overflow-hidden bg-slate-800">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <span className="absolute left-4 top-4 rounded-full bg-blue-600 px-3 py-1 text-xs font-bold text-white">
          SALE
        </span>

        <button
          type="button"
          aria-label={`Like ${product.name}`}
          className="absolute right-4 top-4 rounded-full bg-white p-3 text-slate-800 shadow-lg transition hover:text-red-500"
        >
          <FiHeart />
        </button>
      </div>

      <div className="p-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-blue-400">
          {product.category}
        </p>

        <h3 className="mt-2 text-lg font-bold text-white">
          {product.name}
        </h3>

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
            onClick={addToCart}
            aria-label={`Add ${product.name} to cart`}
            className="rounded-xl bg-blue-600 p-3 text-white transition hover:bg-blue-500"
          >
            <FiShoppingBag size={19} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;