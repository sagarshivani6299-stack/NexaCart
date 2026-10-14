import { useState } from "react";
import { Link } from "react-router-dom";

import {
  FiShoppingBag,
  FiInstagram,
  FiFacebook,
  FiTwitter,
  FiYoutube,
  FiMail,
  FiMapPin,
  FiPhone,
  FiArrowRight,
} from "react-icons/fi";


const HomeFooter = () => {

  const [subscribed, setSubscribed] =
    useState(false);


  const handleSubscribe = (e) => {
    e.preventDefault();

    setSubscribed(true);

    e.currentTarget.reset();
  };


  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-white">

      {/* =====================================
          NEWSLETTER
      ====================================== */}

      <section className="border-b border-slate-800 bg-gradient-to-r from-blue-950 via-slate-950 to-slate-950">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 py-14 lg:flex-row">

          <div>

            <p className="font-semibold uppercase tracking-[0.25em] text-blue-400">
              Stay Connected
            </p>

            <h2 className="mt-3 text-3xl font-black">
              Join The NexaCart Community
            </h2>

            <p className="mt-3 max-w-xl text-gray-400">
              Get updates about new collections,
              product launches and exclusive offers.
            </p>

          </div>


          <div className="w-full max-w-lg">

            <form
              onSubmit={handleSubscribe}
              className="flex overflow-hidden rounded-xl border border-slate-700 bg-slate-900"
            >

              <div className="relative flex-1">

                <FiMail className="absolute left-4 top-5 text-gray-500" />

                <input
                  required
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full bg-transparent py-4 pl-11 pr-3 text-white outline-none"
                />

              </div>


              <button
                type="submit"
                className="flex items-center gap-2 bg-blue-600 px-5 font-semibold transition hover:bg-blue-500 sm:px-7"
              >
                <span className="hidden sm:block">
                  Subscribe
                </span>

                <FiArrowRight />

              </button>

            </form>


            {subscribed && (
              <p className="mt-3 text-sm text-green-400">
                ✓ Demo subscription submitted successfully.
              </p>
            )}

          </div>

        </div>

      </section>


      {/* =====================================
          MAIN FOOTER
      ====================================== */}

      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">

        {/* BRAND */}

        <div>

          <Link
            to="/"
            className="flex items-center gap-3"
          >

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-400">

              <FiShoppingBag size={20} />

            </div>


            <h2 className="text-2xl font-black">

              <span className="text-blue-400">
                Nexa
              </span>

              Cart

            </h2>

          </Link>


          <p className="mt-6 max-w-sm leading-7 text-gray-400">
            Your modern destination for fashion,
            accessories and everyday essentials.
            Discover products designed for your
            lifestyle.
          </p>


          {/* SOCIAL */}

          <div className="mt-7 flex gap-3">

            {[
              FiFacebook,
              FiInstagram,
              FiTwitter,
              FiYoutube,
            ].map((Icon, index) => (

              <button
                key={index}
                type="button"
                aria-label="Social media"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 bg-slate-900 text-gray-400 transition duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-600 hover:text-white"
              >
                <Icon />
              </button>

            ))}

          </div>

        </div>


        {/* QUICK LINKS */}

        <div>

          <h3 className="text-lg font-bold">
            Quick Links
          </h3>


          <div className="mt-6 flex flex-col gap-4 text-gray-400">

            <FooterLink to="/">
              Home
            </FooterLink>

            <FooterLink to="/shop">
              Shop
            </FooterLink>

            <FooterLink to="/about">
              About Us
            </FooterLink>

            <FooterLink to="/contact">
              Contact
            </FooterLink>

            <FooterLink to="/content">
              Admin Dashboard
            </FooterLink>

          </div>

        </div>


        {/* CUSTOMER SERVICE */}

        <div>

          <h3 className="text-lg font-bold">
            Customer Service
          </h3>


          <div className="mt-6 flex flex-col gap-4 text-gray-400">

            <FooterLink to="/contact">
              Help Center
            </FooterLink>

            <FooterLink to="/contact">
              Shipping Information
            </FooterLink>

            <FooterLink to="/contact">
              Returns & Exchanges
            </FooterLink>

            <FooterLink to="/contact">
              FAQs
            </FooterLink>

            <FooterLink to="/cart">
              Shopping Cart
            </FooterLink>

          </div>

        </div>


        {/* CONTACT */}

        <div>

          <h3 className="text-lg font-bold">
            Get In Touch
          </h3>


          <div className="mt-6 space-y-5 text-gray-400">

            <div className="flex items-start gap-3">

              <FiMapPin className="mt-1 shrink-0 text-blue-400" />

              <div>
                <p className="text-white">
                  Location
                </p>

                <p className="mt-1 text-sm">
                  India
                </p>
              </div>

            </div>


            <div className="flex items-start gap-3">

              <FiMail className="mt-1 shrink-0 text-blue-400" />

              <div>
                <p className="text-white">
                  Email
                </p>

                <p className="mt-1 text-sm">
                  support@nexacart.example
                </p>
              </div>

            </div>


            <div className="flex items-start gap-3">

              <FiPhone className="mt-1 shrink-0 text-blue-400" />

              <div>
                <p className="text-white">
                  Customer Support
                </p>

                <p className="mt-1 text-sm">
                  +91 XXXXX XXXXX
                </p>
              </div>

            </div>

          </div>


          <div className="mt-7 rounded-xl border border-slate-800 bg-slate-900 p-5">

            <p className="font-semibold">
              Support Hours
            </p>

            <p className="mt-2 text-sm leading-6 text-gray-400">
              Monday – Saturday
              <br />
              9:00 AM – 6:00 PM
            </p>

          </div>

        </div>

      </div>


      {/* =====================================
          BOTTOM FOOTER
      ====================================== */}

      <div className="border-t border-slate-800">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-7 text-center text-sm text-gray-500 md:flex-row">

          <p>
            © 2026 NexaCart. All Rights Reserved.
          </p>

          <p>
            React • React Router • Tailwind CSS
          </p>

          <p className="text-blue-400">
            Modern Shopping Experience
          </p>

        </div>

      </div>

    </footer>
  );
};


const FooterLink = ({
  to,
  children,
}) => {

  return (
    <Link
      to={to}
      className="group flex w-fit items-center gap-2 transition hover:text-blue-400"
    >

      <span className="text-blue-500 opacity-0 transition group-hover:opacity-100">
        →
      </span>

      <span className="-ml-4 transition group-hover:ml-0">
        {children}
      </span>

    </Link>
  );
};


export default HomeFooter;