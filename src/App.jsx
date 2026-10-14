import { BrowserRouter, Routes, Route } from "react-router-dom";

// LAYOUTS
import HomeLayout from "./layout/Homelayout";
import ContentLayout from "./layout/Contentlayout";
import AuthLayout from "./layout/AuthLayout";

// MAIN WEBSITE
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";

// AUTH
import Login from "./pages/Login";
import Register from "./pages/Register";

// DASHBOARD
import Content from "./pages/Dashboard/Content";
import ContentDetails from "./pages/Dashboard/ContentDetails";
import Products from "./pages/Dashboard/Products";
import Orders from "./pages/Dashboard/Orders";
import Customers from "./pages/Dashboard/Customers";
import Analytics from "./pages/Dashboard/Analytics";
import Profile from "./pages/Dashboard/Profile";
import Settings from "./pages/Dashboard/Settings";

import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* MAIN WEBSITE LAYOUT */}

        <Route element={<HomeLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
        </Route>

        {/* AUTH LAYOUT */}

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* DASHBOARD LAYOUT */}

        <Route path="/content" element={<ContentLayout />}>

          <Route index element={<Content />} />

          <Route
            path="details"
            element={<ContentDetails />}
          />

          <Route
            path="products"
            element={<Products />}
          />

          <Route
            path="orders"
            element={<Orders />}
          />

          <Route
            path="customers"
            element={<Customers />}
          />

          <Route
            path="analytics"
            element={<Analytics />}
          />

          <Route
            path="profile"
            element={<Profile />}
          />

          <Route
            path="settings"
            element={<Settings />}
          />

        </Route>

        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;