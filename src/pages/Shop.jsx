import { useMemo, useState } from "react";
import { FiSearch, FiFilter } from "react-icons/fi";

import ProductCard from "../Components/Common/ProductCard";
import { products } from "../data/products";

const Shop = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("default");

  const categories = [
    "All",
    "Footwear",
    "Accessories",
    "Bags",
    "Electronics",
  ];

  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || product.category === category;

      return matchesSearch && matchesCategory;
    });

    if (sort === "low") {
      result = [...result].sort((a, b) => a.price - b.price);
    }

    if (sort === "high") {
      result = [...result].sort((a, b) => b.price - a.price);
    }

    return result;
  }, [search, category, sort]);

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <section className="relative overflow-hidden border-b border-slate-800 bg-gradient-to-r from-slate-950 via-blue-950 to-slate-950 px-6 py-24 text-center">

        <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm text-blue-400">
          EXPLORE OUR COLLECTION
        </span>

        <h1 className="mt-7 text-5xl font-black md:text-6xl">
          Discover Your
          <span className="text-blue-400"> Style.</span>
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-400">
          Discover carefully selected fashion, accessories,
          electronics and everyday essentials.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">

        <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

          <div className="relative w-full lg:w-96">
            <FiSearch className="absolute left-4 top-4 text-gray-400" />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products..."
              className="w-full rounded-xl border border-slate-700 bg-slate-900 py-3 pl-11 pr-4 text-white outline-none focus:border-blue-500"
            />
          </div>

          <div className="flex items-center gap-3">
            <FiFilter className="text-blue-400" />

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 outline-none"
            >
              <option value="default">Featured</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="mb-10 flex flex-wrap gap-3">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`rounded-full px-5 py-2.5 font-medium transition ${
                category === item
                  ? "bg-blue-600 text-white"
                  : "border border-slate-700 bg-slate-900 text-gray-400 hover:border-blue-500"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="mb-7 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Our Products</h2>

          <p className="text-sm text-gray-400">
            {filteredProducts.length} products found
          </p>
        </div>

        {filteredProducts.length ? (
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-16 text-center text-gray-400">
            No products found. Try another search.
          </div>
        )}
      </section>
    </div>
  );
};

export default Shop;