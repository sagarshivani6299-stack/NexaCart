import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";


// ============================
// LAYOUTS
// ============================

import HomeLayout from "./layout/Homelayout";
import ContentLayout from "./layout/Contentlayout";
import AuthLayout from "./layout/AuthLayout";


// ============================
// ROUTE GUARDS
// ============================

import ProtectedRoute from "./routes/ProtectedRoute";
import AdminRoute from "./routes/AdminRoute";


// ============================
// PUBLIC PAGES
// ============================

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProductDetails from "./pages/ProductDetails";


// ============================
// CUSTOMER AUTH
// ============================

import Login from "./pages/Login";
import Register from "./pages/Register";


// ============================
// CUSTOMER PRIVATE
// ============================

import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import CustomerProfile from "./pages/CustomerProfile";
import CustomerOrders from "./pages/CustomerOrders";


// ============================
// ADMIN
// ============================

import AdminLogin from "./pages/AdminLogin";

import Content from "./pages/Dashboard/Content";
import ContentDetails from "./pages/Dashboard/ContentDetails";
import Products from "./pages/Dashboard/Products";
import Orders from "./pages/Dashboard/Orders";
import Customers from "./pages/Dashboard/Customers";
import Analytics from "./pages/Dashboard/Analytics";
import Profile from "./pages/Dashboard/Profile";
import Settings from "./pages/Dashboard/Settings";


// ============================
// 404
// ============================

import NotFound from "./pages/NotFound";


function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* ==========================
            PUBLIC WEBSITE
        =========================== */}

        <Route element={<HomeLayout />}>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/shop"
            element={<Shop />}
          />

          <Route
            path="/product/:id"
            element={<ProductDetails />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />


          {/* ========================
              CUSTOMER PRIVATE
          ========================= */}

          <Route
            element={<ProtectedRoute />}
          >

            <Route
              path="/cart"
              element={<Cart />}
            />

            <Route
              path="/wishlist"
              element={<Wishlist />}
            />

            <Route
              path="/profile"
              element={<CustomerProfile />}
            />

            <Route
              path="/orders"
              element={<CustomerOrders />}
            />

          </Route>

        </Route>


        {/* ==========================
            CUSTOMER AUTH
        =========================== */}

        <Route element={<AuthLayout />}>

          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/register"
            element={<Register />}
          />

        </Route>


        {/* ==========================
            ADMIN LOGIN
        =========================== */}

        <Route
          path="/admin/login"
          element={<AdminLogin />}
        />


        {/* ==========================
            ADMIN PRIVATE ROUTES
        =========================== */}

        <Route
          element={<AdminRoute />}
        >

          <Route
            path="/admin"
            element={<ContentLayout />}
          >

            <Route
              index
              element={<Content />}
            />

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

        </Route>


        {/* ==========================
            NOT FOUND
        =========================== */}

        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;