import { useState } from "react";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiClock,
} from "react-icons/fi";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    e.currentTarget.reset();
  };

  const contactInfo = [
    {
      icon: FiMail,
      title: "Email Us",
      value: "support@nexacart.example",
      description: "For general inquiries",
    },
    {
      icon: FiPhone,
      title: "Call Us",
      value: "+91 XXXXX XXXXX",
      description: "Demo contact number",
    },
    {
      icon: FiMapPin,
      title: "Our Location",
      value: "India",
      description: "Online-first shopping experience",
    },
    {
      icon: FiClock,
      title: "Support Hours",
      value: "Mon - Sat",
      description: "9:00 AM - 6:00 PM",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* HEADER */}
      <section className="bg-gradient-to-r from-slate-950 via-blue-950 to-slate-950 px-6 py-24 text-center">

        <p className="font-semibold uppercase tracking-widest text-blue-400">
          GET IN TOUCH
        </p>

        <h1 className="mt-5 text-5xl font-black md:text-6xl">
          Let's Start A
          <span className="text-blue-400"> Conversation.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-gray-400">
          Have questions about our products or services?
          We'd love to hear from you.
        </p>
      </section>

      {/* CONTACT CARDS */}
      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">

        {contactInfo.map(({ icon: Icon, title, value, description }) => (
          <div
            key={title}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-7 transition hover:border-blue-500"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600/10 text-2xl text-blue-400">
              <Icon />
            </div>

            <h3 className="mt-5 text-lg font-bold">{title}</h3>

            <p className="mt-3 text-sm text-gray-300">{value}</p>

            <p className="mt-2 text-xs text-gray-500">
              {description}
            </p>
          </div>
        ))}
      </section>

      {/* FORM */}
      <section className="mx-auto grid max-w-7xl gap-12 px-6 pb-24 lg:grid-cols-2">

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 md:p-10">

          <h2 className="text-3xl font-bold">Send Us A Message</h2>

          <p className="mt-3 text-gray-400">
            Fill out the form and our team will get back to you.
          </p>

          {submitted && (
            <div className="mt-6 rounded-xl border border-green-500/30 bg-green-500/10 p-4 text-sm text-green-400">
              Demo form submitted successfully. No email was sent.
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">

            <div className="grid gap-5 md:grid-cols-2">
              <input
                required
                type="text"
                placeholder="Full Name"
                className="rounded-xl border border-slate-700 bg-slate-800 p-4 outline-none focus:border-blue-500"
              />

              <input
                required
                type="email"
                placeholder="Email Address"
                className="rounded-xl border border-slate-700 bg-slate-800 p-4 outline-none focus:border-blue-500"
              />
            </div>

            <input
              required
              type="text"
              placeholder="Subject"
              className="w-full rounded-xl border border-slate-700 bg-slate-800 p-4 outline-none focus:border-blue-500"
            />

            <textarea
              required
              rows="6"
              placeholder="Write your message..."
              className="w-full resize-none rounded-xl border border-slate-700 bg-slate-800 p-4 outline-none focus:border-blue-500"
            />

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 p-4 font-semibold transition hover:bg-blue-500"
            >
              <FiSend />
              Send Message
            </button>
          </form>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex flex-col justify-center">

          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1000&auto=format&fit=crop&q=85"
            alt="Customer support team"
            className="h-80 w-full rounded-3xl object-cover"
          />

          <h2 className="mt-8 text-3xl font-bold">
            We're Here To Help.
          </h2>

          <p className="mt-4 leading-8 text-gray-400">
            Our goal is to make your shopping experience as smooth
            and enjoyable as possible.
          </p>

          <div className="mt-8 space-y-4">
            {[
              "Product and order inquiries",
              "Shipping and delivery support",
              "Returns and exchanges",
              "General customer assistance",
            ].map((item) => (
              <p key={item} className="text-gray-300">
                <span className="mr-3 text-blue-400">✓</span>
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-slate-800 bg-slate-900/40 px-6 py-20">

        <div className="mx-auto max-w-4xl">
          <h2 className="mb-10 text-center text-3xl font-bold">
            Frequently Asked Questions
          </h2>

          {[
            {
              q: "How can I track my order?",
              a: "Order tracking will be available when the backend is connected.",
            },
            {
              q: "Can I return a product?",
              a: "Return management is planned for the full application.",
            },
            {
              q: "How do I contact customer support?",
              a: "Use the contact form above to preview the support experience.",
            },
          ].map((faq) => (
            <details
              key={faq.q}
              className="mb-4 rounded-xl border border-slate-700 bg-slate-900 p-5"
            >
              <summary className="cursor-pointer font-semibold">
                {faq.q}
              </summary>

              <p className="mt-4 text-gray-400">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Contact;