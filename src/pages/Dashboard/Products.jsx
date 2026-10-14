import { useState } from "react";
import { FiSearch, FiPlus, FiEdit2, FiTrash2 } from "react-icons/fi";
import { products as initialProducts, formatPrice } from "../../data/products";

const Products = () => {
  const [items, setItems] = useState(initialProducts);
  const [search, setSearch] = useState("");

  const filtered = items.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const removeProduct = (id) => {
    setItems((prev) => prev.filter((product) => product.id !== id));
  };

  return (
    <div className="mx-auto max-w-7xl">

      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">

        <div>
          <p className="font-semibold text-blue-600">INVENTORY</p>

          <h1 className="mt-2 text-3xl font-black text-slate-900">
            Product Management
          </h1>

          <p className="mt-2 text-gray-500">
            Manage your store inventory and product listings.
          </p>
        </div>

        <button
          onClick={() => alert("Add Product form will be added next.")}
          className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
        >
          <FiPlus />
          Add Product
        </button>
      </div>

      <div className="mt-8 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">

        <div className="relative max-w-md">
          <FiSearch className="absolute left-4 top-4 text-gray-400" />

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
            className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 outline-none focus:border-blue-500"
          />
        </div>

        <div className="mt-7 overflow-x-auto">

          <table className="w-full text-left">
            <thead className="bg-gray-50 text-sm text-gray-500">
              <tr>
                <th className="p-4">Product</th>
                <th className="p-4">Category</th>
                <th className="p-4">Price</th>
                <th className="p-4">Stock</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((product) => (
                <tr
                  key={product.id}
                  className="border-t border-gray-100 hover:bg-gray-50"
                >
                  <td className="p-4">
                    <div className="flex items-center gap-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-14 w-14 rounded-xl object-cover"
                      />

                      <span className="font-semibold text-slate-800">
                        {product.name}
                      </span>
                    </div>
                  </td>

                  <td className="p-4 text-gray-500">
                    {product.category}
                  </td>

                  <td className="p-4 font-semibold">
                    {formatPrice(product.price)}
                  </td>

                  <td className="p-4">
                    <span className="rounded-full bg-green-50 px-3 py-1 text-sm text-green-600">
                      {product.stock} available
                    </span>
                  </td>

                  <td className="p-4">
                    <div className="flex gap-4">
                      <button
                        onClick={() => alert("Edit form coming soon.")}
                        className="text-blue-600"
                      >
                        <FiEdit2 />
                      </button>

                      <button
                        onClick={() => removeProduct(product.id)}
                        className="text-red-500"
                      >
                        <FiTrash2 />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {!filtered.length && (
            <p className="py-12 text-center text-gray-500">
              No products found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;