export const products = [
  {
    id: 1,
    name: "Air Motion Sneakers",
    category: "Footwear",
    price: 2499,
    oldPrice: 3499,
    rating: 4.8,
    stock: 42,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=700&auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    name: "Luxury Minimal Watch",
    category: "Accessories",
    price: 3999,
    oldPrice: 5499,
    rating: 4.9,
    stock: 25,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=700&auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    name: "Urban Travel Backpack",
    category: "Bags",
    price: 1899,
    oldPrice: 2599,
    rating: 4.7,
    stock: 38,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=700&auto=format&fit=crop&q=80",
  },
  {
    id: 4,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 2999,
    oldPrice: 4299,
    rating: 4.8,
    stock: 18,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=700&auto=format&fit=crop&q=80",
  },
  {
    id: 5,
    name: "Classic White Sneakers",
    category: "Footwear",
    price: 2199,
    oldPrice: 3199,
    rating: 4.6,
    stock: 54,
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=700&auto=format&fit=crop&q=80",
  },
  {
    id: 6,
    name: "Premium Sunglasses",
    category: "Accessories",
    price: 1299,
    oldPrice: 1999,
    rating: 4.7,
    stock: 63,
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=700&auto=format&fit=crop&q=80",
  },
];

export const formatPrice = (price) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);