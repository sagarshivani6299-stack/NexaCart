import { Link } from "react-router-dom";
import {
  FiAward,
  FiHeart,
  FiShield,
  FiTruck,
  FiArrowRight,
} from "react-icons/fi";

const About = () => {
  const values = [
    {
      icon: FiAward,
      title: "Premium Quality",
      text: "Thoughtfully selected products designed to deliver exceptional value.",
    },
    {
      icon: FiHeart,
      title: "Customer First",
      text: "Every experience is built around customer satisfaction and trust.",
    },
    {
      icon: FiShield,
      title: "Trusted Experience",
      text: "We believe shopping should feel simple, transparent and reliable.",
    },
    {
      icon: FiTruck,
      title: "Fast Delivery",
      text: "A seamless shopping journey from discovery to doorstep.",
    },
  ];

  return (
    <div className="bg-slate-950 text-white">

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-r from-slate-950 via-blue-950 to-slate-950 px-6 py-24 text-center">

        <p className="font-semibold tracking-[0.3em] text-blue-400">
          OUR STORY
        </p>

        <h1 className="mt-5 text-5xl font-black md:text-6xl">
          More Than Just
          <span className="text-blue-400"> Shopping.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
          NexaCart is a modern shopping experience built around
          style, innovation and convenience.
        </p>
      </section>

      {/* STORY */}
      <section className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-2">

        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-blue-600/10 blur-2xl" />

          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1100&auto=format&fit=crop&q=85"
            alt="Modern fashion store"
            className="relative h-[480px] w-full rounded-3xl object-cover"
          />

          <div className="absolute -bottom-6 right-5 rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-xl">
            <p className="text-3xl font-black text-blue-400">2026</p>
            <p className="text-sm text-gray-400">Our Journey</p>
          </div>
        </div>

        <div>
          <p className="font-semibold uppercase tracking-widest text-blue-400">
            Who We Are
          </p>

          <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
            Bringing Style &
            <span className="text-blue-400"> Innovation Together.</span>
          </h2>

          <p className="mt-7 leading-8 text-gray-400">
            NexaCart started as a vision to create a modern
            digital shopping platform that combines elegant design
            with a seamless customer experience.
          </p>

          <p className="mt-5 leading-8 text-gray-400">
            Our mission is to make discovering products enjoyable,
            accessible and effortless through technology.
          </p>

          <Link
            to="/shop"
            className="mt-8 inline-flex items-center gap-3 rounded-xl bg-blue-600 px-7 py-3.5 font-semibold transition hover:bg-blue-500"
          >
            Explore Collection
            <FiArrowRight />
          </Link>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-slate-800 bg-slate-900/50 py-16">

        <div className="mx-auto grid max-w-7xl gap-10 px-6 text-center sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["10K+", "Happy Customers"],
            ["500+", "Products"],
            ["50+", "Brands"],
            ["4.9/5", "Customer Rating"],
          ].map(([value, label]) => (
            <div key={label}>
              <h3 className="text-4xl font-black text-blue-400">
                {value}
              </h3>

              <p className="mt-3 text-gray-400">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section className="mx-auto max-w-7xl px-6 py-24">

        <div className="mb-14 text-center">
          <p className="font-semibold text-blue-400">OUR VALUES</p>

          <h2 className="mt-3 text-4xl font-bold">
            What Makes Us Different
          </h2>
        </div>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4">
          {values.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-7 transition duration-300 hover:-translate-y-2 hover:border-blue-500"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-500/10 text-2xl text-blue-400">
                <Icon />
              </div>

              <h3 className="mt-6 text-xl font-bold">{title}</h3>

              <p className="mt-4 leading-7 text-gray-400">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;