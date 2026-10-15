import {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  FiSearch,
  FiChevronDown,
  FiLoader,
} from "react-icons/fi";

import {
  useInView,
} from "react-intersection-observer";

import ProductCard from "../Components/Common/ProductCard";

import {
  products,
} from "../data/products";

const PRODUCTS_PER_LOAD = 8;

const Shop = () => {
  const [search, setSearch] =
    useState("");

  const [category, setCategory] =
    useState("All");

  const [sort, setSort] =
    useState("default");

  // शुरुआत में सिर्फ 8
  const [visibleCount, setVisibleCount] =
    useState(PRODUCTS_PER_LOAD);

  /*
    यह element जब screen में आएगा
    तब inView = true होगा
  */
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  const categories = [
    "All",
    "Footwear",
    "Accessories",
    "Bags",
    "Electronics",
  ];

  // =================================
  // SEARCH + FILTER + SORT
  // =================================

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // SEARCH
    if (search.trim()) {
      result = result.filter((product) =>
        product.name
          .toLowerCase()
          .includes(
            search.toLowerCase()
          )
      );
    }

    // CATEGORY
    if (category !== "All") {
      result = result.filter(
        (product) =>
          product.category === category
      );
    }

    // SORT
    if (sort === "low-high") {
      result.sort(
        (a, b) =>
          a.price - b.price
      );
    }

    if (sort === "high-low") {
      result.sort(
        (a, b) =>
          b.price - a.price
      );
    }

    if (sort === "rating") {
      result.sort(
        (a, b) =>
          b.rating - a.rating
      );
    }

    return result;
  }, [
    search,
    category,
    sort,
  ]);

  // =================================
  // PRODUCTS CURRENTLY VISIBLE
  // =================================

  const visibleProducts =
    filteredProducts.slice(
      0,
      visibleCount
    );

  const hasMore =
    visibleCount <
    filteredProducts.length;

  // =================================
  // INFINITE SCROLL
  // =================================

  useEffect(() => {
    if (!inView || !hasMore) {
      return;
    }

    /*
      थोड़ा delay intentionally रखा है
      ताकि API loading जैसा experience मिले.
    */

    const timer = setTimeout(() => {
      setVisibleCount((previous) =>
        Math.min(
          previous +
            PRODUCTS_PER_LOAD,

          filteredProducts.length
        )
      );
    }, 700);

    return () =>
      clearTimeout(timer);

  }, [
    inView,
    hasMore,
    filteredProducts.length,
  ]);

  // =================================
  // SEARCH/FILTER CHANGE
  // वापस 8 products
  // =================================

  useEffect(() => {
    setVisibleCount(
      PRODUCTS_PER_LOAD
    );
  }, [
    search,
    category,
    sort,
  ]);

  return (
    <section className="min-h-screen bg-slate-950 px-6 py-16 text-white">

      <div className="mx-auto max-w-7xl">

        {/* =========================
            HEADING
        ========================== */}

        <div className="text-center">

          <p className="font-semibold uppercase tracking-[0.25em] text-blue-400">
            NexaCart Collection
          </p>

          <h1 className="mt-4 text-4xl font-black md:text-5xl">
            Explore Products
          </h1>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-400">
            Discover products designed
            for your everyday lifestyle.
          </p>

        </div>


        {/* =========================
            SEARCH
        ========================== */}

        <div className="mt-12">

          <div className="relative">

            <FiSearch
              className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500"
              size={20}
            />

            <input
              type="text"
              value={search}
              onChange={(e) =>
                setSearch(
                  e.target.value
                )
              }
              placeholder="Search products..."
              className="w-full rounded-2xl border border-slate-800 bg-slate-900 py-4 pl-14 pr-5 text-white outline-none transition placeholder:text-gray-600 focus:border-blue-500"
            />

          </div>

        </div>


        {/* =========================
            FILTER + SORT
        ========================== */}

        <div className="mt-6 flex flex-col justify-between gap-5 lg:flex-row lg:items-center">

          {/* CATEGORY */}

          <div className="flex flex-wrap gap-3">

            {categories.map(
              (item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() =>
                    setCategory(item)
                  }
                  className={`rounded-xl px-5 py-2.5 text-sm font-semibold transition ${
                    category === item
                      ? "bg-blue-600 text-white"
                      : "border border-slate-700 bg-slate-900 text-gray-400 hover:border-blue-500 hover:text-blue-400"
                  }`}
                >
                  {item}
                </button>
              )
            )}

          </div>


          {/* SORT */}

          <div className="relative">

            <select
              value={sort}
              onChange={(e) =>
                setSort(
                  e.target.value
                )
              }
              className="appearance-none rounded-xl border border-slate-700 bg-slate-900 py-3 pl-5 pr-12 text-sm text-gray-300 outline-none focus:border-blue-500"
            >
              <option value="default">
                Sort Products
              </option>

              <option value="low-high">
                Price: Low to High
              </option>

              <option value="high-low">
                Price: High to Low
              </option>

              <option value="rating">
                Highest Rated
              </option>

            </select>

            <FiChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" />

          </div>

        </div>


        {/* =========================
            RESULT INFO
        ========================== */}

        <div className="mt-8 flex items-center justify-between">

          <p className="text-sm text-gray-500">

            Showing{" "}

            <span className="font-semibold text-white">
              {visibleProducts.length}
            </span>

            {" "}of{" "}

            <span className="font-semibold text-white">
              {filteredProducts.length}
            </span>

            {" "}products

          </p>

        </div>


        {/* =========================
            PRODUCTS
        ========================== */}

        {visibleProducts.length > 0 ? (

          <div className="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            {visibleProducts.map(
              (product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              )
            )}

          </div>

        ) : (

          <div className="py-24 text-center">

            <FiSearch
              size={50}
              className="mx-auto text-gray-700"
            />

            <h2 className="mt-5 text-2xl font-bold">
              No products found
            </h2>

            <p className="mt-2 text-gray-500">
              Try another search or
              category.
            </p>

          </div>

        )}


        {/* =========================
            INFINITE SCROLL TRIGGER
        ========================== */}

        {hasMore && (

          <div
            ref={ref}
            className="flex items-center justify-center py-14"
          >

            <div className="flex items-center gap-3 text-blue-400">

              <FiLoader
                className="animate-spin"
                size={22}
              />

              <span className="font-semibold">
                Loading more products...
              </span>

            </div>

          </div>

        )}


        {/* =========================
            ALL PRODUCTS LOADED
        ========================== */}

        {!hasMore &&
          filteredProducts.length > 0 && (

            <div className="py-14 text-center">

              <p className="text-sm text-gray-500">
                You've reached the end.
                All{" "}
                {filteredProducts.length}{" "}
                products are loaded.
              </p>

            </div>

          )}

      </div>

    </section>
  );
};

export default Shop;