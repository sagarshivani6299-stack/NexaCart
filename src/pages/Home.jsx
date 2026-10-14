import { Link } from "react-router-dom";

import {
  FiArrowRight,
  FiTruck,
  FiRefreshCw,
  FiShield,
  FiHeadphones,
  FiShoppingBag,
  FiStar,
} from "react-icons/fi";

import ProductCard from "../Components/Common/ProductCard";
import { products } from "../data/products";


const Home = () => {

  const categories = [
    {
      name: "Men's Collection",
      description: "Modern everyday essentials",
      image:
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=900&auto=format&fit=crop&q=85",
    },
    {
      name: "Women's Collection",
      description: "Elegant styles for every moment",
      image:
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=900&auto=format&fit=crop&q=85",
    },
    {
      name: "Accessories",
      description: "Complete your perfect look",
      image:
        "https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?w=900&auto=format&fit=crop&q=85",
    },
  ];


  const services = [
    {
      icon: FiTruck,
      title: "Free Delivery",
      description: "On orders above ₹999",
    },
    {
      icon: FiRefreshCw,
      title: "Easy Returns",
      description: "Simple 7-day return policy",
    },
    {
      icon: FiShield,
      title: "Secure Payments",
      description: "Protected checkout experience",
    },
    {
      icon: FiHeadphones,
      title: "Customer Support",
      description: "We're here when you need us",
    },
  ];


  return (
    <div className="overflow-hidden bg-slate-950 text-white">

      {/* =====================================
          HERO SECTION
      ====================================== */}

      <section className="relative">

        {/* BACKGROUND GLOW */}

        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-600/20 blur-[140px]" />

        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />


        <div className="relative mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-14 px-6 py-16 lg:grid-cols-2 lg:py-20">

          {/* LEFT */}

          <div>

            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300">

              <FiStar className="fill-blue-400" />

              New Collection 2026

            </div>


            <h1 className="mt-7 text-5xl font-black leading-[1.08] sm:text-6xl lg:text-7xl">

              Find Your

              <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Next Favorite.
              </span>

            </h1>


            <p className="mt-7 max-w-xl text-lg leading-8 text-gray-400">

              Discover premium fashion, modern accessories
              and everyday essentials selected for your
              lifestyle.

            </p>


            {/* BUTTONS */}

            <div className="mt-9 flex flex-wrap gap-4">

              <Link
                to="/shop"
                className="group flex items-center gap-3 rounded-xl bg-blue-600 px-7 py-4 font-bold text-white shadow-xl shadow-blue-600/20 transition duration-300 hover:-translate-y-1 hover:bg-blue-500"
              >
                Shop Collection

                <FiArrowRight className="transition group-hover:translate-x-1" />
              </Link>


              <Link
                to="/content"
                className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-900 px-7 py-4 font-semibold text-gray-200 transition duration-300 hover:border-blue-500 hover:text-blue-400"
              >
                <FiShoppingBag />

                View Dashboard
              </Link>

            </div>


            {/* STATS */}

            <div className="mt-12 flex flex-wrap gap-10 border-t border-slate-800 pt-8">

              <div>
                <h3 className="text-3xl font-black">
                  10K+
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  Customers
                </p>
              </div>


              <div>
                <h3 className="text-3xl font-black">
                  500+
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  Products
                </p>
              </div>


              <div>
                <h3 className="text-3xl font-black">
                  4.9
                  <span className="text-yellow-400">
                    ★
                  </span>
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  Rating
                </p>
              </div>

            </div>

          </div>


          {/* RIGHT HERO IMAGE */}

          <div className="relative">

            <div className="absolute -inset-5 rounded-[40px] bg-gradient-to-r from-blue-600/30 to-cyan-400/10 blur-2xl" />


            <div className="relative overflow-hidden rounded-[32px] border border-slate-700 bg-slate-900 shadow-2xl">

              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&auto=format&fit=crop&q=90"
                alt="NexaCart fashion store"
                className="h-[580px] w-full object-cover"
              />


              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />


              {/* IMAGE BOTTOM */}

              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/75 p-5 backdrop-blur-xl">

                <div>

                  <p className="text-xs uppercase tracking-widest text-blue-300">
                    Trending Now
                  </p>

                  <h3 className="mt-1 text-xl font-bold">
                    Autumn Collection
                  </h3>

                </div>


                <Link
                  to="/shop"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 transition hover:bg-blue-500"
                >
                  <FiArrowRight />
                </Link>

              </div>

            </div>


            {/* FLOATING CARD */}

            <div className="absolute -bottom-7 -left-5 hidden rounded-2xl border border-slate-700 bg-slate-900/95 p-5 shadow-2xl backdrop-blur md:block">

              <p className="text-sm text-gray-400">
                Happy Customers
              </p>

              <div className="mt-2 flex items-center gap-3">

                <span className="text-2xl font-black">
                  10K+
                </span>

                <span className="text-sm text-green-400">
                  ↑ 18.5%
                </span>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================
          SERVICES
      ====================================== */}

      <section className="border-y border-slate-800 bg-slate-900/50">

        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 sm:grid-cols-2 lg:grid-cols-4">

          {services.map(
            ({
              icon: Icon,
              title,
              description,
            }) => (

              <div
                key={title}
                className="flex items-center gap-4"
              >

                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-xl text-blue-400">

                  <Icon />

                </div>


                <div>

                  <h3 className="font-bold">
                    {title}
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    {description}
                  </p>

                </div>

              </div>

            )
          )}

        </div>

      </section>


      {/* =====================================
          CATEGORIES
      ====================================== */}

      <section className="py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">

            <p className="font-semibold uppercase tracking-[0.25em] text-blue-400">
              Shop Your Way
            </p>

            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              Shop By Category
            </h2>

            <p className="mx-auto mt-5 max-w-xl leading-7 text-gray-400">
              Find products selected to match your
              style and everyday needs.
            </p>

          </div>


          <div className="mt-14 grid gap-7 md:grid-cols-3">

            {categories.map((category) => (

              <Link
                to="/shop"
                key={category.name}
                className="group relative h-[430px] overflow-hidden rounded-3xl"
              >

                <img
                  src={category.image}
                  alt={category.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />


                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />


                <div className="absolute bottom-0 p-7">

                  <p className="text-sm text-blue-300">
                    Explore
                  </p>

                  <h3 className="mt-2 text-2xl font-black">
                    {category.name}
                  </h3>

                  <p className="mt-2 text-sm text-gray-300">
                    {category.description}
                  </p>


                  <div className="mt-5 flex items-center gap-2 font-semibold text-white">

                    Shop Now

                    <FiArrowRight className="transition group-hover:translate-x-2" />

                  </div>

                </div>

              </Link>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================
          POPULAR PRODUCTS
      ====================================== */}

      <section className="bg-slate-900/40 py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">

            <div>

              <p className="font-semibold uppercase tracking-[0.25em] text-blue-400">
                Customer Favorites
              </p>

              <h2 className="mt-3 text-4xl font-black md:text-5xl">
                Trending Products
              </h2>

            </div>


            <Link
              to="/shop"
              className="group flex items-center gap-2 font-semibold text-blue-400"
            >
              View All Products

              <FiArrowRight className="transition group-hover:translate-x-1" />
            </Link>

          </div>


          <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">

            {products
              .slice(0, 4)
              .map((product) => (

                <ProductCard
                  key={product.id}
                  product={product}
                />

              ))}

          </div>

        </div>

      </section>


      {/* =====================================
          PROMO SECTION
      ====================================== */}

      <section className="px-6 py-24">

        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px]">

          <img
            src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=1600&auto=format&fit=crop&q=85"
            alt="Fashion collection"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />


          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-slate-950/85 to-slate-950/40" />


          <div className="relative max-w-2xl px-8 py-20 md:px-14 md:py-24">

            <p className="font-semibold uppercase tracking-widest text-blue-300">
              Limited Collection
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
              Upgrade Your Style.
              <br />
              Make It Yours.
            </h2>

            <p className="mt-6 leading-8 text-gray-300">
              Explore our latest collection and
              discover products created for modern
              lifestyles.
            </p>

            <Link
              to="/shop"
              className="mt-8 inline-flex items-center gap-3 rounded-xl bg-white px-7 py-4 font-bold text-blue-700 transition hover:-translate-y-1"
            >
              Explore Collection

              <FiArrowRight />
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Home;